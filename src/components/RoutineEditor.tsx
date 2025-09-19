"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
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

export default function RoutineManager() {
  const [sections, setSections] = useState<SectionData[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [editingPeriods, setEditingPeriods] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");
  const [showAddSection, setShowAddSection] = useState(false);

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
      alert("Error loading sections. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  };

  const getCurrentSection = (): SectionData | undefined => {
    return sections.find(section => section.id === activeSection);
  };

  const addNewSection = async () => {
    if (!newSectionName.trim()) {
      alert("Please enter a section name");
      return;
    }

    try {
      const sectionId = newSectionName.toLowerCase().replace(/\s+/g, '_');
      
      // Check if section already exists
      if (sections.some(s => s.id === sectionId)) {
        alert("Section already exists!");
        return;
      }

      // Create section document
      await setDoc(doc(db, "sections", sectionId), {
        name: newSectionName,
        createdAt: new Date()
      });

      // Initialize with default routine structure
      const defaultPeriods: Period[] = [
        { time: "09:00-10:00", subject: Object.keys(subjectOptions)[0] },
        { time: "10:00-11:00", subject: Object.keys(subjectOptions)[0] },
        { time: "11:15-12:15", subject: Object.keys(subjectOptions)[0] },
        { time: "12:15-13:15", subject: Object.keys(subjectOptions)[0] },
        { time: "14:00-15:00", subject: Object.keys(subjectOptions)[0] }
      ];

      for (const day of daysOfWeek) {
        await setDoc(doc(db, `sections/${sectionId}/routine`, day), {
          periods: defaultPeriods
        });
      }

      setNewSectionName("");
      setShowAddSection(false);
      await fetchAllSections();
      setActiveSection(sectionId);
      
      alert("Section created successfully!");
    } catch (error) {
      console.error("Error creating section:", error);
      alert("Error creating section. Please try again.");
    }
  };

  const deleteSection = async (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    if (!confirm(`Are you sure you want to delete section "${section.name}"? This will remove all routine data for this section.`)) {
      return;
    }

    try {
      setLoading(true);
      
      // Delete all routine documents
      for (const day of Object.keys(section.routine)) {
        await deleteDoc(doc(db, `sections/${sectionId}/routine`, day));
      }
      
      // Delete section document
      await deleteDoc(doc(db, "sections", sectionId));
      
      await fetchAllSections();
      
      // Switch to another section if current was deleted
      if (activeSection === sectionId) {
        const remainingSections = sections.filter(s => s.id !== sectionId);
        setActiveSection(remainingSections.length > 0 ? remainingSections[0].id : "");
      }
      
      alert("Section deleted successfully!");
    } catch (error) {
      console.error("Error deleting section:", error);
      alert("Error deleting section. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectChange = (day: string, index: number, subject: string) => {
    setSections(prev => 
      prev.map(section => {
        if (section.id === activeSection) {
          const newRoutine = { ...section.routine };
          const newDay = [...(newRoutine[day] || [])];
          if (newDay[index]) {
            newDay[index].subject = subject;
            newRoutine[day] = newDay;
          }
          return { ...section, routine: newRoutine };
        }
        return section;
      })
    );
  };

  const handleTimeChange = (day: string, index: number, time: string) => {
    setSections(prev => 
      prev.map(section => {
        if (section.id === activeSection) {
          const newRoutine = { ...section.routine };
          const newDay = [...(newRoutine[day] || [])];
          if (newDay[index]) {
            newDay[index].time = time;
            newRoutine[day] = newDay;
          }
          return { ...section, routine: newRoutine };
        }
        return section;
      })
    );
  };

  const addPeriod = (day: string) => {
    setSections(prev => 
      prev.map(section => {
        if (section.id === activeSection) {
          const newRoutine = { ...section.routine };
          const newDay = [...(newRoutine[day] || [])];
          newDay.push({ time: "", subject: Object.keys(subjectOptions)[0] });
          newRoutine[day] = newDay;
          return { ...section, routine: newRoutine };
        }
        return section;
      })
    );
  };

  const removePeriod = (day: string, index: number) => {
    setSections(prev => 
      prev.map(section => {
        if (section.id === activeSection) {
          const newRoutine = { ...section.routine };
          const newDay = [...(newRoutine[day] || [])];
          newDay.splice(index, 1);
          newRoutine[day] = newDay;
          return { ...section, routine: newRoutine };
        }
        return section;
      })
    );
  };

  const movePeriod = (day: string, index: number, direction: 'up' | 'down') => {
    setSections(prev => 
      prev.map(section => {
        if (section.id === activeSection) {
          const newRoutine = { ...section.routine };
          const newDay = [...(newRoutine[day] || [])];
          const newIndex = direction === 'up' ? index - 1 : index + 1;
          
          if (newIndex < 0 || newIndex >= newDay.length) return section;
          
          [newDay[index], newDay[newIndex]] = [newDay[newIndex], newDay[index]];
          newRoutine[day] = newDay;
          return { ...section, routine: newRoutine };
        }
        return section;
      })
    );
  };

  const copyDayRoutine = (fromDay: string, toDay: string) => {
    const currentSection = getCurrentSection();
    if (!currentSection || !currentSection.routine[fromDay]) return;

    if (!confirm(`Copy routine from ${fromDay} to ${toDay}? This will overwrite ${toDay}'s current routine.`)) {
      return;
    }

    setSections(prev => 
      prev.map(section => {
        if (section.id === activeSection) {
          const newRoutine = { ...section.routine };
          newRoutine[toDay] = [...newRoutine[fromDay]];
          return { ...section, routine: newRoutine };
        }
        return section;
      })
    );
  };

  const handleSave = async () => {
    const currentSection = getCurrentSection();
    if (!currentSection) return;

    try {
      setLoading(true);
      
      for (const day in currentSection.routine) {
        await setDoc(doc(db, `sections/${activeSection}/routine`, day), {
          periods: currentSection.routine[day],
        });
      }
      
      alert("Routine saved successfully!");
    } catch (error) {
      console.error("Error saving routine:", error);
      alert("Error saving routine. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && sections.length === 0) {
    return (
      <div className="p-6 flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading routine data...</div>
      </div>
    );
  }

  const currentSection = getCurrentSection();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-purple-600">
          Routine Management System
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAddSection(!showAddSection)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors"
          >
            Add Section
          </button>
          <button
            onClick={() => setEditingPeriods(!editingPeriods)}
            className={`px-4 py-2 rounded-lg shadow transition-colors ${
              editingPeriods 
                ? 'bg-orange-600 text-white hover:bg-orange-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {editingPeriods ? 'Exit Period Edit' : 'Edit Periods'}
          </button>
        </div>
      </div>

      {/* Add Section Form */}
      {showAddSection && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <h3 className="text-lg font-semibold mb-3 text-green-800">Add New Section</h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={newSectionName}
              onChange={(e) => setNewSectionName(e.target.value)}
              placeholder="Enter section name (e.g., BCA Section A)"
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={addNewSection}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Create
            </button>
            <button
              onClick={() => {setShowAddSection(false); setNewSectionName("");}}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Section Tabs */}
      {sections.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
          
          {/* Section Actions */}
          {currentSection && (
            <div className="flex gap-2 mb-4">
              <span className="text-sm text-gray-600">Section Actions:</span>
              <button
                onClick={() => deleteSection(currentSection.id)}
                className="text-sm px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
              >
                Delete Section
              </button>
            </div>
          )}
        </div>
      )}

      {/* No Sections State */}
      {sections.length === 0 && (
        <div className="text-center py-12">
          <div className="text-xl text-gray-600 mb-4">No sections found</div>
          <button
            onClick={() => setShowAddSection(true)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
          >
            Create Your First Section
          </button>
        </div>
      )}

      {/* Routine Editing Interface */}
      {currentSection && (
        <div className="grid gap-6">
          {daysOfWeek.map((day) => {
            const dayRoutine = currentSection.routine[day] || [];
            return (
              <div key={day} className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{day}</h2>
                  {editingPeriods && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => addPeriod(day)}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded shadow hover:bg-blue-700"
                      >
                        Add Period
                      </button>
                      <select
                        onChange={(e) => {
                          if (e.target.value && e.target.value !== day) {
                            copyDayRoutine(e.target.value, day);
                          }
                        }}
                        className="px-2 py-1 text-sm border rounded"
                        defaultValue=""
                      >
                        <option value="">Copy from...</option>
                        {daysOfWeek.filter(d => d !== day).map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  {dayRoutine.map((period, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg border-2 border-white bg-white shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        {/* Time input/display */}
                        <div className="w-40">
                          {editingPeriods ? (
                            <input
                              type="text"
                              value={period.time}
                              onChange={(e) => handleTimeChange(day, idx, e.target.value)}
                              placeholder="e.g., 09:00-10:00"
                              className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          ) : (
                            <span className="font-medium text-gray-700">{period.time}</span>
                          )}
                        </div>

                        {/* Subject selector */}
                        <div className="flex-1">
                          <select
                            value={period.subject}
                            onChange={(e) => handleSubjectChange(day, idx, e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            {Object.keys(subjectOptions).map((subj) => (
                              <option key={subj} value={subj}>
                                {subj}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Period editing controls */}
                        {editingPeriods && (
                          <div className="flex gap-1">
                            <button
                              onClick={() => movePeriod(day, idx, 'up')}
                              disabled={idx === 0}
                              className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm hover:bg-gray-300 disabled:opacity-50"
                            >
                              ↑
                            </button>
                            <button
                              onClick={() => movePeriod(day, idx, 'down')}
                              disabled={idx === dayRoutine.length - 1}
                              className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-sm hover:bg-gray-300 disabled:opacity-50"
                            >
                              ↓
                            </button>
                            <button
                              onClick={() => removePeriod(day, idx)}
                              className="px-2 py-1 bg-red-200 text-red-600 rounded text-sm hover:bg-red-300"
                            >
                              ✕
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {dayRoutine.length === 0 && (
                    <div className="text-center text-gray-500 py-4">
                      No periods for this day
                      {editingPeriods && (
                        <button
                          onClick={() => addPeriod(day)}
                          className="block mx-auto mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Add First Period
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Save Button */}
      {currentSection && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-8 py-3 bg-purple-600 text-white text-lg rounded-lg shadow-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Saving...' : 'Save All Changes'}
          </button>
        </div>
      )}
    </div>
  );
}
