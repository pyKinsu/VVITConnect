"use client";

import React, { useState, useEffect } from "react";
import { FiAlertCircle, FiChevronLeft, FiChevronRight, FiMapPin } from "react-icons/fi";

type Period = {
  time: string;
  subject: string;
  fullForm: string;
};

type Routine = {
  [day: string]: Period[];
};

// Routine data (example)
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
  const todayIndex = new Date().getDay() - 1;
  const defaultDay = todayIndex >= 0 && todayIndex <= 5 ? days[todayIndex] : "Monday";

  const [selectedDay, setSelectedDay] = useState<string>(defaultDay);
  const [currentPeriod, setCurrentPeriod] = useState<Period | null>(null);
  const [showFullForm, setShowFullForm] = useState<{ [key: string]: boolean }>({});

  // Determine current ongoing period
  useEffect(() => {
    const checkCurrentPeriod = () => {
      const now = new Date();
      const totalMinutes = now.getHours() * 60 + now.getMinutes();
      const allPeriods = [...routineA[selectedDay] || [], ...routineB[selectedDay] || []];
      let current: Period | null = null;

      allPeriods.forEach((period) => {
        const [start, end] = period.time.split(" - ").map((t) => {
          const [h, mPart] = t.split(":");
          const [m, ampm] = mPart.split(" ");
          let hour = parseInt(h);
          if (ampm === "PM" && hour !== 12) hour += 12;
          if (ampm === "AM" && hour === 12) hour = 0;
          return hour * 60 + parseInt(m);
        });
        if (totalMinutes >= start && totalMinutes <= end) current = period;
      });
      setCurrentPeriod(current);
    };

    checkCurrentPeriod();
    const interval = setInterval(checkCurrentPeriod, 30000); // update every 30 sec
    return () => clearInterval(interval);
  }, [selectedDay]);

  const handleShowFullForm = (subject: string) => {
    setShowFullForm((prev) => ({ ...prev, [subject]: true }));
    setTimeout(() => setShowFullForm((prev) => ({ ...prev, [subject]: false })), 3000);
  };

  const prevDay = () => {
    const idx = days.indexOf(selectedDay);
    setSelectedDay(days[idx === 0 ? days.length - 1 : idx - 1]);
  };

  const nextDay = () => {
    const idx = days.indexOf(selectedDay);
    setSelectedDay(days[idx === days.length - 1 ? 0 : idx + 1]);
  };

  const renderRoutine = (routine: Routine) => {
    // Separate current period and others
    const allPeriods = routine[selectedDay] || [];
    const otherPeriods = allPeriods.filter((p) => p !== currentPeriod);

    return (
      <>
        {currentPeriod && (
          <div className="section-box relative flex items-center justify-between py-4 px-6 mb-4 w-full max-w-3xl border-2 border-primary shadow-lg bg-card">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-primary" size={20} />
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{currentPeriod.subject}</span>
                <span className="text-sm text-muted-foreground">{currentPeriod.time}</span>
              </div>
            </div>
            <FiAlertCircle
              size={24}
              className="text-accent cursor-pointer"
              onClick={() => handleShowFullForm(currentPeriod.subject)}
            />
            {showFullForm[currentPeriod.subject] && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card text-card-foreground p-3 rounded shadow-lg text-sm z-50 max-w-xs">
                {currentPeriod.fullForm}
              </div>
            )}
          </div>
        )}
        {otherPeriods.map((period) => (
          <div
            key={period.time + period.subject}
            className="section-box relative flex items-center justify-between py-4 px-6 mb-3 w-full max-w-3xl"
          >
            <div className="flex flex-col">
              <span className="font-semibold text-lg">{period.subject}</span>
              <span className="text-sm text-muted-foreground">{period.time}</span>
            </div>
            <FiAlertCircle
              size={24}
              className="text-accent cursor-pointer"
              onClick={() => handleShowFullForm(period.subject)}
            />
            {showFullForm[period.subject] && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card text-card-foreground p-3 rounded shadow-lg text-sm z-50 max-w-xs">
                {period.fullForm}
              </div>
            )}
          </div>
        ))}
      </>
    );
  };

  return (
    <main className="flex flex-col items-center px-4 py-6 min-h-screen bg-transparent text-foreground">
      <header className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          1st Semester BCA Routine
        </h1>
      </header>

      {/* Day Selector with arrows */}
      <div className="flex items-center gap-2 mb-6">
        <button onClick={prevDay} className="text-2xl p-2 rounded-full hover:bg-muted transition">
          <FiChevronLeft />
        </button>
        <span className="px-6 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-lg">
          {selectedDay}
        </span>
        <button onClick={nextDay} className="text-2xl p-2 rounded-full hover:bg-muted transition">
          <FiChevronRight />
        </button>
      </div>

      {/* Section A */}
      <section className="mb-8 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          BCA - A
        </h2>
        {renderRoutine(routineA)}
      </section>

      {/* Section B */}
      <section className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          BCA - B
        </h2>
        {renderRoutine(routineB)}
      </section>
    </main>
  );
}
