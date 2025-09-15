"use client";

import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { BsPinAngleFill } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type RoutineEntry = {
  time: string;
  subject: string;
  fullForm: string;
};

type DayRoutine = {
  [day: string]: RoutineEntry[];
};

// ---------- ROUTINE A ----------
const routineA: DayRoutine = {
  Monday: [
    { time: "10:00 - 10:50 AM", subject: "PMO", fullForm: "Principles of Management" },
    { time: "11:00 - 11:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "ITA Lab", fullForm: "Accounting Lab" },
    { time: "1:00 - 1:50 PM", subject: "PMO", fullForm: "Principles of Management" },
  ],
  Tuesday: [
    { time: "10:00 - 10:50 AM", subject: "CE", fullForm: "Computer Essentials" },
    { time: "11:00 - 11:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "CE", fullForm: "Computer Essentials" },
    { time: "2:00 - 2:50 PM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Wednesday: [
    { time: "10:00 - 10:50 AM", subject: "PMO", fullForm: "Principles of Management" },
    { time: "11:00 - 11:50 AM", subject: "CE", fullForm: "Computer Essentials" },
    { time: "12:00 - 12:50 PM", subject: "BM", fullForm: "Business Mathematics" },
    { time: "1:00 - 1:50 PM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "2:00 - 2:50 PM", subject: "PMO", fullForm: "Principles of Management" },
  ],
  Thursday: [
    { time: "10:00 - 10:50 AM", subject: "PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "11:00 - 11:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "1:00 - 1:50 PM", subject: "ITA", fullForm: "Introduction to Accounting" },
  ],
  Friday: [
    { time: "10:00 - 10:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "BM", fullForm: "Business Mathematics" },
    { time: "12:00 - 12:50 PM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "1:00 - 1:50 PM", subject: "PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "2:00 - 2:50 PM", subject: "Spt & Cul", fullForm: "Sports & Cultural Activities" },
  ],
  Saturday: [
    { time: "10:00 - 10:50 AM", subject: "BM", fullForm: "Business Mathematics" },
    { time: "11:00 - 11:50 AM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "12:00 - 12:50 PM", subject: "ITA", fullForm: "Introduction to Accounting" },
  ],
};

// ---------- ROUTINE B ----------
const routineB: DayRoutine = {
  Monday: [
    { time: "10:00 - 10:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "12:00 - 12:50 PM", subject: "CE", fullForm: "Computer Essentials" },
    { time: "1:00 - 1:50 PM", subject: "PMO", fullForm: "Principles of Management" },
  ],
  Tuesday: [
    { time: "10:00 - 10:50 AM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "11:00 - 11:50 AM", subject: "PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "12:00 - 12:50 PM", subject: "PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "ITA", fullForm: "Introduction to Accounting" },
  ],
  Wednesday: [
    { time: "10:00 - 10:50 AM", subject: "CE", fullForm: "Computer Essentials" },
    { time: "11:00 - 11:50 AM", subject: "BM", fullForm: "Business Mathematics" },
    { time: "12:00 - 12:50 PM", subject: "PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "2:00 - 2:50 PM", subject: "ITA", fullForm: "Introduction to Accounting" },
  ],
  Thursday: [
    { time: "10:00 - 10:50 AM", subject: "BM", fullForm: "Business Mathematics" },
    { time: "11:00 - 11:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "CE", fullForm: "Computer Essentials" },
    { time: "2:00 - 2:50 PM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Friday: [
    { time: "10:00 - 10:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "CE", fullForm: "Computer Essentials" },
    { time: "1:00 - 1:50 PM", subject: "PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Saturday: [
    { time: "10:00 - 10:50 AM", subject: "ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "ITA Lab", fullForm: "Accounting Lab" },
    { time: "12:00 - 12:50 PM", subject: "BM", fullForm: "Business Mathematics" },
    { time: "1:00 - 1:50 PM", subject: "Spt & Cul", fullForm: "Sports & Cultural Activities" },
  ],
};

// ---------- MAIN COMPONENT ----------
export default function RoutinePage() {
  const [section, setSection] = useState<"A" | "B">("A");
  const [dayIndex, setDayIndex] = useState(new Date().getDay() - 1); // 0=Monday
  const [notification, setNotification] = useState<string | null>(null);
  const [currentClass, setCurrentClass] = useState<string | null>(null);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const routines = section === "A" ? routineA : routineB;

  // --- highlight current class ---
  useEffect(() => {
    const checkCurrent = () => {
      const now = new Date();
      const today = days[dayIndex] || "Monday";
      const todayRoutine = routines[today] || [];
      const current = todayRoutine.find((entry) => {
        const [start, end] = entry.time.split(" - ");
        const startTime = new Date(`${now.toDateString()} ${start}`);
        const endTime = new Date(`${now.toDateString()} ${end}`);
        return now >= startTime && now <= endTime;
      });

      if (current) {
        setCurrentClass(current.subject);
      } else {
        const upcoming = todayRoutine.find((entry) => {
          const [start] = entry.time.split(" - ");
          const startTime = new Date(`${now.toDateString()} ${start}`);
          return now < startTime;
        });
        setCurrentClass(upcoming ? `Upcoming: ${upcoming.subject}` : "Classes Over");
      }
    };

    checkCurrent();
    const interval = setInterval(checkCurrent, 60000);
    return () => clearInterval(interval);
  }, [dayIndex, section]);

  const today = days[dayIndex] || "Monday";
  const todayRoutine = routines[today] || [];

  return (
    <main className="flex flex-col items-center px-4 py-6 min-h-[85vh]">
      {/* Section Toggle */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSection("A")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            section === "A" ? "bg-purple-500 text-white" : "bg-gray-200"
          }`}
        >
          BCA - A
        </button>
        <button
          onClick={() => setSection("B")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            section === "B" ? "bg-purple-500 text-white" : "bg-gray-200"
          }`}
        >
          BCA - B
        </button>
      </div>

      {/* Day Navigation */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setDayIndex((dayIndex - 1 + days.length) % days.length)}
        >
          <MdChevronLeft size={28} />
        </button>
        <h2 className="text-xl font-bold">{today}</h2>
        <button onClick={() => setDayIndex((dayIndex + 1) % days.length)}>
          <MdChevronRight size={28} />
        </button>
      </div>

      {/* Current Class Info */}
      <div className="text-lg font-semibold text-purple-600 mb-4 flex items-center gap-2">
        <BsPinAngleFill /> {currentClass}
      </div>

      {/* Routine List */}
      <ul className="w-full max-w-xl space-y-3">
        {todayRoutine.map((entry, idx) => (
          <li
            key={idx}
            className={`flex justify-between items-center p-3 rounded-lg ${
              currentClass?.includes(entry.subject)
                ? "bg-yellow-100 border border-yellow-400"
                : "bg-transparent"
            }`}
          >
            <div>
              <p className="font-semibold">{entry.subject}</p>
              <p className="text-sm text-gray-500">{entry.time}</p>
            </div>
            <button
              onClick={() => setNotification(entry.fullForm)}
              className="text-yellow-500"
            >
              <FaInfoCircle size={20} />
            </button>
          </li>
        ))}
      </ul>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-20 bg-yellow-200 text-yellow-900 px-4 py-2 rounded-lg shadow-md">
          {notification}
          <button
            onClick={() => setNotification(null)}
            className="ml-3 text-red-600 font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}
