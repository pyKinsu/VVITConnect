"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiAlertCircle, FiChevronLeft, FiChevronRight, FiMapPin } from "react-icons/fi";

type Period = {
  time: string;
  subject: string;
  fullForm: string;
};

type DayRoutine = {
  [day: string]: Period[];
};

// Routine for BCA A
const routineA: DayRoutine = {
  Monday: [
    { time: "10:00 - 10:50 AM", subject: "BCA PMO", fullForm: "Principles of Management" },
    { time: "11:00 - 11:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "BCA ITA Lab", fullForm: "Accounting Lab" },
    { time: "1:00 - 1:50 PM", subject: "BCA PMO", fullForm: "Principles of Management" },
  ],
  Tuesday: [
    { time: "10:00 - 10:50 AM", subject: "BCA CE", fullForm: "Computer Essentials" },
    { time: "11:00 - 11:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "BCA PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "BCA CE", fullForm: "Computer Essentials" },
    { time: "2:00 - 2:50 PM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Wednesday: [
    { time: "10:00 - 10:50 AM", subject: "BCA PMO", fullForm: "Principles of Management" },
    { time: "11:00 - 11:50 AM", subject: "BCA CE", fullForm: "Computer Essentials" },
    { time: "12:00 - 12:50 PM", subject: "BCA BM", fullForm: "Business Mathematics" },
    { time: "1:00 - 1:50 PM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "2:00 - 2:50 PM", subject: "BCA PMO", fullForm: "Principles of Management" },
  ],
  Thursday: [
    { time: "10:00 - 10:50 AM", subject: "BCA PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "11:00 - 11:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "1:00 - 1:50 PM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
  ],
  Friday: [
    { time: "10:00 - 10:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "BCA BM", fullForm: "Business Mathematics" },
    { time: "12:00 - 12:50 PM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "1:00 - 1:50 PM", subject: "BCA PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "2:00 - 2:50 PM", subject: "Spt & Cul", fullForm: "Sports & Cultural Activities" },
  ],
  Saturday: [
    { time: "10:00 - 10:50 AM", subject: "BCA BM", fullForm: "Business Mathematics" },
    { time: "11:00 - 11:50 AM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "12:00 - 12:50 PM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
  ],
};

// Routine for BCA B
const routineB: DayRoutine = {
  Monday: [
    { time: "10:00 - 10:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "12:00 - 12:50 PM", subject: "BCA CE", fullForm: "Computer Essentials" },
    { time: "1:00 - 1:50 PM", subject: "BCA PMO", fullForm: "Principles of Management" },
  ],
  Tuesday: [
    { time: "10:00 - 10:50 AM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "11:00 - 11:50 AM", subject: "BCA PSPC Lab", fullForm: "Problem Solving Lab" },
    { time: "12:00 - 12:50 PM", subject: "BCA PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
  ],
  Wednesday: [
    { time: "10:00 - 10:50 AM", subject: "BCA CE", fullForm: "Computer Essentials" },
    { time: "11:00 - 11:50 AM", subject: "BCA BM", fullForm: "Business Mathematics" },
    { time: "12:00 - 12:50 PM", subject: "BCA PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
    { time: "2:00 - 2:50 PM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
  ],
  Thursday: [
    { time: "10:00 - 10:50 AM", subject: "BCA BM", fullForm: "Business Mathematics" },
    { time: "11:00 - 11:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "BCA PMO", fullForm: "Principles of Management" },
    { time: "1:00 - 1:50 PM", subject: "BCA CE", fullForm: "Computer Essentials" },
    { time: "2:00 - 2:50 PM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Friday: [
    { time: "10:00 - 10:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "12:00 - 12:50 PM", subject: "BCA CE", fullForm: "Computer Essentials" },
    { time: "1:00 - 1:50 PM", subject: "BCA PSPC", fullForm: "Problem Solving & Programming Concepts" },
  ],
  Saturday: [
    { time: "10:00 - 10:50 AM", subject: "BCA ITA", fullForm: "Introduction to Accounting" },
    { time: "11:00 - 11:50 AM", subject: "BCA ITA Lab", fullForm: "Accounting Lab" },
    { time: "12:00 - 12:50 PM", subject: "BCA BM", fullForm: "Business Mathematics" },
    { time: "1:00 - 1:50 PM", subject: "Spt & Cul", fullForm: "Sports & Cultural Activities" },
  ],
};


// Convert "12:00 - 12:50 PM" → [startMinutes, endMinutes]
function parseTimeRange(range: string): [number, number] {
  const [start, end] = range.split(" - ");
  return [toMinutes(start), toMinutes(end)];
}

function toMinutes(time: string): number {
  const match = time.match(/(\d+):(\d+)\s?(AM|PM)/i);
  if (!match) return 0;
  let [_, h, m, period] = match;
  let hour = parseInt(h, 10);
  const min = parseInt(m, 10);
  if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
  return hour * 60 + min;
}

function getNowMinutes(): number {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

const getToday = (): string => {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return days[new Date().getDay()];
};

export default function RoutinePage() {
  const [section, setSection] = useState<"A" | "B">("A");
  const [day, setDay] = useState<string>(getToday());
  const [infoVisible, setInfoVisible] = useState<string | null>(null);

  const routine = section === "A" ? routineA : routineB;
  const days = Object.keys(routine);

  const goPrevDay = () => {
    const idx = days.indexOf(day);
    setDay(days[(idx - 1 + days.length) % days.length]);
  };

  const goNextDay = () => {
    const idx = days.indexOf(day);
    setDay(days[(idx + 1) % days.length]);
  };

  // figure out current / upcoming
  const nowMin = getNowMinutes();
  const todayPeriods = routine[day] || [];

  let currentIndex = -1;
  let upcomingIndex = -1;
  todayPeriods.forEach((p, i) => {
    const [start, end] = parseTimeRange(p.time);
    if (nowMin >= start && nowMin <= end) currentIndex = i;
    if (upcomingIndex === -1 && nowMin < start) upcomingIndex = i;
  });

  return (
    <main className="flex flex-col items-center justify-start min-h-[80vh] px-4 py-6">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Routine - BCA {section}
        </h1>
        <p className="text-sm text-muted-foreground">
          Choose your section and check classes by day.
        </p>
      </header>

      {/* Section Toggle */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setSection("A")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            section === "A" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          Section A
        </button>
        <button
          onClick={() => setSection("B")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            section === "B" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          Section B
        </button>
      </div>

      {/* Day Navigation */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={goPrevDay} className="p-2 rounded-full bg-muted hover:bg-accent transition">
          <FiChevronLeft />
        </button>
        <h2 className="text-xl font-bold">{day}</h2>
        <button onClick={goNextDay} className="p-2 rounded-full bg-muted hover:bg-accent transition">
          <FiChevronRight />
        </button>
      </div>

      {/* Periods */}
      <div className="flex flex-col gap-4 w-full max-w-3xl">
        {todayPeriods.length > 0 ? (
          todayPeriods.map((period, i) => {
            const isCurrent = i === currentIndex;
            return (
              <div
                key={period.time + period.subject}
                className={`relative w-full max-w-3xl mb-1 rounded-xl shadow-md transition ${
                  isCurrent ? "bg-purple-100 border-l-4 border-purple-500" : "bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg flex items-center gap-2">
                      {period.subject}
                      {isCurrent && <FiMapPin className="text-purple-600" />}
                    </span>
                    <span className="text-sm text-muted-foreground">{period.time}</span>
                  </div>

                  {/* Info Icon */}
                  <div className="relative">
                    <FiAlertCircle
                      size={22}
                      className="text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
                      onClick={() =>
                        setInfoVisible(
                          infoVisible === period.subject + period.time
                            ? null
                            : period.subject + period.time
                        )
                      }
                    />
                    {infoVisible === period.subject + period.time && (
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2
                        bg-yellow-100 text-yellow-900 font-medium
                        px-4 py-2 rounded-lg shadow-xl z-[9999] whitespace-nowrap">
                        {period.fullForm}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No classes today 🎉</p>
        )}

        {/* Upcoming / Done */}
        {currentIndex === -1 && (
          <div className="mt-4 text-center font-medium text-sm text-muted-foreground">
            {upcomingIndex !== -1 ? (
              <p>
                Upcoming class:{" "}
                <span className="font-semibold">{todayPeriods[upcomingIndex].subject}</span>{" "}
                at {todayPeriods[upcomingIndex].time}
              </p>
            ) : (
              <p>All classes over for today 🎉</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
