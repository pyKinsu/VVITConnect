"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { subjectOptions } from "@/lib/subjectOptions";

type Period = {
  time: string;
  subject: string;
};

type DayRoutine = {
  [day: string]: Period[];
};

type SectionData = {
  id: string;
  name: string;
  routine: DayRoutine;
};

export default function RoutineViewer() {
  const [sections, setSections] = useState<SectionData[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    fetchAllSections();
  }, []);

  const fetchAllSections = async () => {
    try {
      setLoading(true);
      const sectionsSnapshot = await getDocs(collection(db, "sections"));
      const sectionsData: SectionData[] = [];

      for (const sectionDoc of sectionsSnapshot.docs) {
        const sectionId = sectionDoc.id;
        const sectionName = sectionDoc.data().name;
        
        // Fetch routine for this section
        const routineSnapshot = await getDocs(collection(db, `sections/${sectionId}/routine`));
        const routine: DayRoutine = {};
        
        routineSnapshot.forEach((routineDoc) => {
          routine[routineDoc.id] = routineDoc.data().periods || [];
        });

        sectionsData.push({
          id: sectionId,
          name: sectionName,
          routine: routine
        });
      }

      setSections(sectionsData);
      if (sectionsData.length > 0 && !activeSection) {
        setActiveSection(sectionsData[0].id);
      }
    } catch (error) {
      console.error("Error fetching sections:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentSection = (): SectionData | undefined => {
    return sections.find(section => section.id === activeSection);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const isCurrentPeriod = (timeSlot: string) => {
    const currentTime = getCurrentTime();
    const currentDay = getCurrentDay();
    
    if (!daysOfWeek.includes(currentDay)) return false;
    
    const [startTime, endTime] = timeSlot.split('-');
    if (!startTime || !endTime) return false;
    
    return currentTime >= startTime.trim() && currentTime <= endTime.trim();
  };

  const getNextClass = (day: string, routine: Period[]) => {
    const currentTime = getCurrentTime();
    
    for (const period of routine) {
      const [startTime] = period.time.split('-');
      if (startTime && currentTime < startTime.trim()) {
        return period;
      }
    }
    return null;
  };

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      'Mathematics': 'bg-blue-100 text-blue-800 border-blue-200',
      'English': 'bg-green-100 text-green-800 border-green-200',
      'Computer Science': 'bg-purple-100 text-purple-800 border-purple-200',
      'Physics': 'bg-red-100 text-red-800 border-red-200',
      'Chemistry': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Biology': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'History': 'bg-orange-100 text-orange-800 border-orange-200',
      'Geography': 'bg-teal-100 text-teal-800 border-teal-200',
      'Break': 'bg-gray-100 text-gray-600 border-gray-200',
      'Lunch': 'bg-amber-100 text-amber-700 border-amber-200',
      'Free Period': 'bg-slate-100 text-slate-600 border-slate-200'
    };
    
    return colors[subject] || 'bg-indigo-100 text-indigo-800 border-indigo-200';
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading routines...</div>
        </div>
      </div>
    );
  }

  const currentSection = getCurrentSection();
  const currentDay = getCurrentDay();
  const todayRoutine = currentSection?.routine[currentDay] || [];
  const nextClass = getNextClass(currentDay, todayRoutine);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
            Class Routines
          </h1>
          <div className="text-sm text-gray-600">
            Today is {currentDay} • {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'grid'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'table'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Table View
          </button>
        </div>
      </div>

      {/* No Sections State */}
      {sections.length === 0 && (
        <div className="text-center py-12">
          <div className="text-xl text-gray-600 mb-4">No routines available</div>
          <div className="text-gray-500">Contact your administrator to set up class routines.</div>
        </div>
      )}

      {sections.length > 0 && (
        <>
          {/* Section Selector */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === section.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Class Info */}
          {daysOfWeek.includes(currentDay) && todayRoutine.length > 0 && (
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-1">
                    Today's Schedule - {currentSection?.name}
                  </h3>
                  <div className="text-sm text-purple-600">
                    Current time: {getCurrentTime()}
                  </div>
                </div>
                {nextClass && (
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                    <div className="text-sm text-gray-600">Next Class:</div>
                    <div className="font-semibold text-purple-700">
                      {nextClass.subject} at {nextClass.time.split('-')[0]}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Routine Display */}
          {currentSection && (
            <>
              {viewMode === 'grid' ? (
                /* Grid View */
                <div className="grid gap-6">
                  {daysOfWeek.map((day) => {
                    const dayRoutine = currentSection.routine[day] || [];
                    const isToday = day === currentDay;
                    
                    return (
                      <div
                        key={day}
                        className={`p-4 rounded-xl shadow-sm border-2 ${
                          isToday 
                            ? 'bg-purple-50 border-purple-200' 
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <h2 className={`text-xl font-semibold ${
                            isToday ? 'text-purple-800' : 'text-gray-800'
                          }`}>
                            {day}
                          </h2>
                          {isToday && (
                            <span className="px-2 py-1 text-xs bg-purple-600 text-white rounded-full">
                              Today
                            </span>
                          )}
                        </div>
                        
                        {dayRoutine.length === 0 ? (
                          <div className="text-center text-gray-500 py-8">
                            No classes scheduled
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {dayRoutine.map((period, idx) => {
                              const isCurrent = isToday && isCurrentPeriod(period.time);
                              
                              return (
                                <div
                                  key={idx}
                                  className={`p-3 rounded-lg border-2 transition-all ${
                                    isCurrent
                                      ? 'bg-yellow-50 border-yellow-300 shadow-md transform scale-105'
                                      : `bg-white border-gray-200 ${getSubjectColor(period.subject)}`
                                  }`}
                                >
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <div className="font-semibold text-lg">
                                        {period.subject}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        {period.time}
                                      </div>
                                    </div>
                                    {isCurrent && (
                                      <div className="px-2 py-1 bg-yellow-600 text-white text-xs rounded-full">
                                        NOW
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Table View */
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">
                            Time
                          </th>
                          {daysOfWeek.map(day => (
                            <th
                              key={day}
                              className={`px-4 py-3 text-left font-semibold min-w-32 ${
                                day === currentDay
                                  ? 'text-purple-700 bg-purple-50'
                                  : 'text-gray-700'
                              }`}
                            >
                              {day}
                              {day === currentDay && (
                                <span className="ml-2 px-2 py-1 text-xs bg-purple-600 text-white rounded-full">
                                  Today
                                </span>
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {/* Get all unique time slots */}
                        {Array.from(new Set(
                          daysOfWeek.flatMap(day => 
                            (currentSection.routine[day] || []).map(p => p.time)
                          )
                        )).sort().map(timeSlot => (
                          <tr key={timeSlot} className="border-t border-gray-200">
                            <td className="px-4 py-3 font-medium text-gray-700 bg-gray-50">
                              {timeSlot}
                            </td>
                            {daysOfWeek.map(day => {
                              const period = (currentSection.routine[day] || [])
                                .find(p => p.time === timeSlot);
                              const isToday = day === currentDay;
                              const isCurrent = isToday && isCurrentPeriod(timeSlot);
                              
                              return (
                                <td
                                  key={day}
                                  className={`px-4 py-3 ${
                                    isToday ? 'bg-purple-25' : ''
                                  }`}
                                >
                                  {period ? (
                                    <div className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                      isCurrent
                                        ? 'bg-yellow-200 text-yellow-800 border border-yellow-300'
                                        : getSubjectColor(period.subject)
                                    }`}>
                                      {period.subject}
                                      {isCurrent && (
                                        <span className="ml-2 text-xs bg-yellow-600 text-white px-1 py-0.5 rounded">
                                          NOW
                                        </span>
                                      )}
                                    </div>
                                  ) : (
                                    <div className="text-gray-400 text-sm">-</div>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
