"use client";

import React, { useState, useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";

type Period = {
  time: string;
  subject: string;
  fullForm: string;
};

type Routine = {
  [day: string]: Period[];
};

// Example routine for BCA-A (all days included)
const routineA: Routine = {
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

// Example routine for BCA-B (all days included)
const routineB: Routine = {
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

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function RoutinePage() {
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [showFullForm, setShowFullForm] = useState<{ [key: string]: boolean }>({});
  const [currentPeriod, setCurrentPeriod] = useState<string | null>(null);

  // Function to check current period based on system time
  useEffect(() => {
    const checkCurrentPeriod = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const allPeriods = [...routineA[selectedDay] || [], ...routineB[selectedDay] || []];
      let current: string | null = null;

      allPeriods.forEach((period) => {
        const [start, end] = period.time.split(" - ").map((t) => {
          const [h, mPart] = t.split(":");
          const [m, ampm] = mPart.split(" ");
          let hour = parseInt(h);
          if (ampm === "PM" && hour !== 12) hour += 12;
          if (ampm === "AM" && hour === 12) hour = 0;
          return hour * 60 + parseInt(m);
        });
        if (totalMinutes >= start && totalMinutes <= end) {
          current = period.subject;
        }
      });
      setCurrentPeriod(current);
    };

    checkCurrentPeriod();
    const interval = setInterval(checkCurrentPeriod, 60000); // update every 1 min
    return () => clearInterval(interval);
  }, [selectedDay]);

  const handleShowFullForm = (subject: string) => {
    setShowFullForm((prev) => ({ ...prev, [subject]: true }));
    setTimeout(() => {
      setShowFullForm((prev) => ({ ...prev, [subject]: false }));
    }, 3000);
  };

  const renderRoutine = (routine: Routine) =>
    routine[selectedDay]?.map((period) => (
      <div
        key={period.time + period.subject}
        className={`section-box relative flex items-center justify-between py-3 px-4 mb-2 w-full max-w-3xl ${
          currentPeriod === period.subject ? "border-2 border-primary" : ""
        }`}
      >
        <div className="flex flex-col">
          <span className="font-semibold">{period.subject}</span>
          <span className="text-sm text-muted-foreground">{period.time}</span>
        </div>
        <button
          onClick={() => handleShowFullForm(period.subject)}
          className="text-accent hover:text-primary transition-colors"
        >
          <FiAlertCircle size={24} />
        </button>
        {showFullForm[period.subject] && (
          <div className="absolute bg-card text-card-foreground p-3 rounded shadow-lg mt-16 text-sm max-w-xs z-50">
            {period.fullForm}
          </div>
        )}
      </div>
    ));

  return (
    <main className="flex flex-col items-center px-4 py-6 min-h-[80vh]">
      <header className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          1st Semester BCA Routine
        </h1>
        {currentPeriod && (
          <p className="mt-2 text-sm text-primary font-semibold">
            Current Period: {currentPeriod}
          </p>
        )}
      </header>

      {/* Day Selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`py-2 px-4 rounded-lg font-medium ${
              selectedDay === day
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Section A */}
      <section className="mb-8 w-full flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">BCA - A</h2>
        {renderRoutine(routineA)}
      </section>

      {/* Section B */}
      <section className="w-full flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">BCA - B</h2>
        {renderRoutine(routineB)}
      </section>
    </main>
  );
}
