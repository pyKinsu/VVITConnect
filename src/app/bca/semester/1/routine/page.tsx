"use client";
import { useState, useEffect } from "react";
import { FiAlertCircle, FiChevronLeft, FiChevronRight, FiMapPin } from "react-icons/fi";

type Period = {
  time: string;
  subject: string;
  fullForm: string;
};

type DayRoutine = {
  day: string;
  periods: Period[];
};

// Routine data (example)
const routineA: DayRoutine[]  = {
  Monday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA PMO", fullForm: "Principles of Management" },
    { time: "11:00 - 11:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "1BCA ITA Lab", fullForm: "Accounting Lab" },
    { time: "1:00 - 1:50 PM", subject: "1BCA PMO", fullForm: "Principles of Management" },
  ],
  Tuesday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA CE", fullForm: "Computer Essentials" },
    { time: "11:00 - 11:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "1BCA PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "1BCA CE", fullForm: "Computer Essentials" },
    { time: "2:00 - 2:50 PM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Wednesday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA PMO", fullForm: "Principles of Management" },
    { time: "11:00 - 11:50 AM", subject: "1BCA CE", fullForm: "Computer Essentials" },
    { time: "12:00 - 12:50 PM", subject: "1BCA BM", fullForm: "Business Mathematics" },
    { time: "1:00 - 1:50 PM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "2:00 - 2:50 PM", subject: "1BCA PMO", fullForm: "Principles of Management" },
  ],
  Thursday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "11:00 - 11:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "1:00 - 1:50 PM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
  ],
  Friday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "1BCA BM", fullForm: "Business Mathematics" },
    { time: "12:00 - 12:50 PM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "1:00 - 1:50 PM", subject: "1BCA PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "2:00 - 2:50 PM", subject: "Spt & Cul", fullForm: "Sports & Cultural Activities" },
  ],
  Saturday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA BM", fullForm: "Business Mathematics" },
    { time: "11:00 - 11:50 AM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "12:00 - 12:50 PM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
  ],
};

const routineB: DayRoutine[] = {
  Monday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "12:00 - 12:50 PM", subject: "1BCA CE", fullForm: "Computer Essentials" },
    { time: "1:00 - 1:50 PM", subject: "1BCA PMO", fullForm: "Principles of Management" },
  ],
  Tuesday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "11:00 - 11:50 AM", subject: "1BCA PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "12:00 - 12:50 PM", subject: "1BCA PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
  ],
  Wednesday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA CE", fullForm: "Computer Essentials" },
    { time: "11:00 - 11:50 AM", subject: "1BCA BM", fullForm: "Business Mathematics" },
    { time: "12:00 - 12:50 PM", subject: "1BCA PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "2:00 - 2:50 PM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
  ],
  Thursday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA BM", fullForm: "Business Mathematics" },
    { time: "11:00 - 11:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "1BCA PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "1BCA CE", fullForm: "Computer Essentials" },
    { time: "2:00 - 2:50 PM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Friday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "1BCA CE", fullForm: "Computer Essentials" },
    { time: "1:00 - 1:50 PM", subject: "1BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Saturday: [
    { time: "10:00 - 10:50 AM", subject: "1BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "1BCA ITA Lab", fullForm: "Accounting Lab" },
    { time: "12:00 - 12:50 PM", subject: "1BCA BM", fullForm: "Business Mathematics" },
    { time: "1:00 - 1:50 PM", subject: "Spt & Cul", fullForm: "Sports & Cultural Activities" },
  ],
};

export default function RoutinePage() {
  const [dayIndex, setDayIndex] = useState(new Date().getDay() - 1); // Mon=0
  const [infoText, setInfoText] = useState<string | null>(null);
  const [currentPeriod, setCurrentPeriod] = useState<string | null>(null);
  const [nextInfo, setNextInfo] = useState<string>("");

  const routine = routineA[dayIndex >= 0 && dayIndex < routineA.length ? dayIndex : 0];

  // track time and set current/next
  useEffect(() => {
    const updateClassStatus = () => {
      const now = new Date();
      const nowMinutes = now.getHours() * 60 + now.getMinutes();

      let active = null;
      let upcoming = null;

      for (let i = 0; i < routine.periods.length; i++) {
        const [sh, sm] = routine.periods[i].time.split(" - ")[0].split(":").map(Number);
        const [eh, em] = routine.periods[i].time.split(" - ")[1].split(":").map(Number);

        const startM = sh * 60 + sm;
        const endM = eh * 60 + em;

        if (nowMinutes >= startM && nowMinutes <= endM) {
          active = routine.periods[i].subject;
          break;
        } else if (nowMinutes < startM && !upcoming) {
          upcoming = `Upcoming: ${routine.periods[i].subject} at ${routine.periods[i].time}`;
        }
      }

      if (active) setCurrentPeriod(active);
      else if (upcoming) setNextInfo(upcoming);
      else setNextInfo("All classes over");
    };

    updateClassStatus();
    const timer = setInterval(updateClassStatus, 60000);
    return () => clearInterval(timer);
  }, [routine]);

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {/* Day navigation */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setDayIndex((dayIndex - 1 + routineA.length) % routineA.length)}>
          <FiChevronLeft size={28} />
        </button>
        <h1 className="text-2xl font-bold">{routine.day}</h1>
        <button onClick={() => setDayIndex((dayIndex + 1) % routineA.length)}>
          <FiChevronRight size={28} />
        </button>
      </div>

      {/* Class periods */}
      <div className="w-full max-w-3xl space-y-3">
        {routine.periods.map((period) => (
          <div
            key={period.time + period.subject}
            className={`flex items-center justify-between py-4 px-6 rounded-xl shadow-md
                        ${currentPeriod === period.subject ? "bg-yellow-100 border-l-4 border-yellow-500" : "bg-white/80"}`}
          >
            <div>
              <div className="font-semibold text-lg flex items-center gap-2">
                {period.subject}
                {currentPeriod === period.subject && <FiMapPin className="text-yellow-500" />}
              </div>
              <div className="text-sm text-gray-600">{period.time}</div>
            </div>
            <FiAlertCircle
              className="text-yellow-500 cursor-pointer hover:scale-110 transition"
              size={22}
              onClick={() => setInfoText(period.fullForm)}
            />
          </div>
        ))}
      </div>

      {/* Upcoming / Over message */}
      <div className="text-center text-gray-700 font-medium mt-4">
        {nextInfo && <p>{nextInfo}</p>}
      </div>

      {/* Global Info Notification */}
      {infoText && (
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2
                     bg-yellow-200 text-yellow-900 px-6 py-3 rounded-xl shadow-xl
                     font-medium animate-fadeIn z-[9999]"
        >
          {infoText}
          <button
            onClick={() => setInfoText(null)}
            className="ml-4 text-sm underline text-yellow-900"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
