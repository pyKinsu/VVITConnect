"use client";

import React, { useEffect, useState } from "react";
import {
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiX,
} from "react-icons/fi";

type Period = {
  time: string;
  subject: string;
  fullForm: string;
};

type Routine = {
  [day: string]: Period[];
};

// -------------------- ROUTINE DATA --------------------
const routineA: Routine = {
  Monday: [
    { time: "9:50 - 10:35 AM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
    { time: "10:35 - 11:20 AM", subject: "CE", fullForm: "Communicative English" },
    { time: "11:25 - 12:10 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:00 - 1:45 PM", subject: "ITA Lab", fullForm: "Iformation Technology Application Lab" },
    { time: "1:45 - 2:35 PM", subject: "ITA Lab", fullForm: "Iformation Technology Application Lab" },
  ],
  Tuesday: [
    { time: "9:50 - 10:35 AM", subject: "CE", fullForm: "Communicative English" },
    { time: "10:35 - 11:20 AM", subject: "ITA", fullForm: " Information Technology Application" },
    { time: "11:25 - 12:10 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:00 - 1:45 PM", subject: "CE", fullForm: "Communicative English" },
    { time: "1:45 - 2:35 PM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
  ],
  Wednesday: [
    { time: "9:50 - 10:35 AM", subject: "BM", fullForm: " Buisness Mathematics" },
    { time: "10:35 - 11:20 AM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
    { time: "11:25 - 12:10 PM", subject: "CE", fullForm: "Communicative English" },
    { time: "1:00 - 1:45 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:45 - 2:35 PM", subject: "BM", fullForm: " Buisness Mathematics" },
  ],
  Thursday: [
    { time: "9:50 - 10:35 AM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
    { time: "10:35 - 11:20 AM", subject: "CE", fullForm: "Communicative English" },
    { time: "11:25 - 12:10 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:00 - 1:45 PM", subject: "ITA Lab", fullForm: "Iformation Technology Application Lab" },
    { time: "1:45 - 2:35 PM", subject: "ITA Lab", fullForm: "Iformation Technology Application Lab" },
  ],
  Friday: [
    { time: "9:50 - 10:35 AM", subject: "CE", fullForm: "Communicative English" },
    { time: "10:35 - 11:20 AM", subject: "ITA", fullForm: " Information Technology Application" },
    { time: "11:25 - 12:10 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:00 - 1:45 PM", subject: "PSPC Lab", fullForm: "Problem Solving Programming Concept Lab" },
    { time: "1:45 - 2:35 PM", subject: "PSPC Lab", fullForm: "Problem Solving Programming Concept Lab" },
  ],
  Saturday: [
    { time: "9:50 - 10:35 AM", subject: "BM", fullForm: " Buisness Mathematics" },
    { time: "10:35 - 11:20 AM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
    { time: "11:25 - 12:10 PM", subject: "ITA", fullForm: " Information Technology Application" },
    { time: "1:00 - 1:45 PM", subject: "Spt & Cul", fullForm: "Sports And Cultural Activities" },
    { time: "1:45 - 2:35 PM", subject: "Spt & Cul ", fullForm: "Sports And Cultural Activities" },
  ],
};

const routineB: Routine = {
  Monday: [
    { time: "9:50 - 10:35 AM", subject: "ITA", fullForm: " Information Technology Application" },
    { time: "10:35 - 11:20 AM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
    { time: "11:25 - 12:10 PM", subject: "CE", fullForm: "Communicative English" },
    { time: "1:00 - 1:45 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:45 - 2:35 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
  ],
  Tuesday: [
    { time: "9:50 - 10:35 AM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
    { time: "10:35 - 11:20 AM", subject: "PSPC Lab", fullForm: "Problem Solving Programming Concept Lab" },
    { time: "11:25 - 12:10 PM", subject: "PSPC Lab", fullForm: "Problem Solving Programming Concept Lab" },
    { time: "1:00 - 1:45 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:45 - 2:35 PM", subject: "ITA", fullForm: "Iformation Technology Application" },
  ],
  Wednesday: [
    { time: "9:50 - 10:35 AM", subject: "CE", fullForm: "Communicative English" },
    { time: "10:35 - 11:20 AM", subject: "BM", fullForm: " Buisness Mathematics" },
    { time: "11:25 - 12:10 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:00 - 1:45 PM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
    { time: "1:45 - 2:35 PM", subject: "ITA", fullForm: "Iformation Technology Application" },
  ],
  Thursday: [
    { time: "9:50 - 10:35 AM", subject: "BM", fullForm: " Buisness Mathematics" },
    { time: "10:35 - 11:20 AM", subject: "ITA", fullForm: " Information Technology Application" },
    { time: "11:25 - 12:10 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:00 - 1:45 PM", subject: "CE", fullForm: "Communicative English" },
    { time: "1:45 - 2:35 PM", subject: "PSPC", fullForm: "Problem Solving Programming Concept" },
  ],
  Friday: [
    { time: "9:50 - 10:35 AM", subject: "ITA", fullForm: " Information Technology Application" },
    { time: "10:35 - 11:20 AM", subject: "BM", fullForm: " Buisness Mathematics" },
    { time: "11:25 - 12:10 PM", subject: "CE", fullForm: "Communicative English" },
    { time: "1:00 - 1:45 PM", subject: "CE", fullForm: "Communicative English" },
    { time: "1:45 - 2:35 PM", subject: "ITA", fullForm: "Iformation Technology Application" },
  ],
  Saturday: [
    { time: "9:50 - 10:35 AM", subject: "ITA Lab", fullForm: " Information Technology Application Lab" },
    { time: "10:35 - 11:20 AM", subject: "ITA Lab", fullForm: " Information Technology Application Lab" },
    { time: "11:25 - 12:10 PM", subject: "PMO", fullForm: "Principles of Management & Organisation" },
    { time: "1:00 - 1:45 PM", subject: "Spt & Cul", fullForm: "Iformation Technology Application Lab" },
    { time: "1:45 - 2:35 PM", subject: "Spt & Cul", fullForm: "Iformation Technology Application Lab" },
  ],
};

// -------------------- TIME UTILITIES --------------------
function toMinutes(t: string): number {
  const m = t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!m) return 0;
  let hour = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const ampm = (m[3] || "").toUpperCase();
  if (ampm === "PM" && hour !== 12) hour += 12;
  if (ampm === "AM" && hour === 12) hour = 0;
  return hour * 60 + min;
}

function parseRange(range: string): [number, number] {
  const [start, end] = range.split("-").map((x) => x.trim());
  const endAmp = (end.match(/\b(AM|PM)\b/i) || [])[0];
  const startWithAmp = /\b(AM|PM)\b/i.test(start) ? start : `${start} ${endAmp ?? ""}`;
  return [toMinutes(startWithAmp), toMinutes(end)];
}

function getTodayWeekday(): string {
  const d = new Date().getDay();
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d];
}

// -------------------- MAIN COMPONENT --------------------
export default function RoutinePage(): JSX.Element {
  const [section, setSection] = useState<"A" | "B">("A");
  const [day, setDay] = useState<string>(() => getTodayWeekday());
  const [notificationText, setNotificationText] = useState<string | null>(null);
  const [nowMinutes, setNowMinutes] = useState<number>(() => {
    const n = new Date();
    return n.getHours() * 60 + n.getMinutes();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const n = new Date();
      setNowMinutes(n.getHours() * 60 + n.getMinutes());
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  const routines = section === "A" ? routineA : routineB;
  const daysList = Object.keys(routines);

  useEffect(() => {
    if (!daysList.includes(day)) setDay(daysList[0] ?? "Monday");
  }, [routines, day, daysList]);

  const periods = routines[day] ?? [];
  let currentIndex = -1;
  let upcomingIndex = -1;
  for (let i = 0; i < periods.length; i++) {
    const [start, end] = parseRange(periods[i].time);
    if (nowMinutes >= start && nowMinutes <= end) currentIndex = i;
    if (upcomingIndex === -1 && nowMinutes < start) upcomingIndex = i;
  }

  const topHighlightIndex = currentIndex !== -1 ? currentIndex : upcomingIndex;
  const today = getTodayWeekday();

  const currentStyle: React.CSSProperties = {
    backgroundColor: "hsl(var(--primary) / 0.06)",
    borderLeft: "4px solid hsl(var(--primary))",
  };

  const openNotification = (text: string) => setNotificationText(text);

  return (
    <main className="min-h-screen bg-transparent text-foreground px-4 py-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            1st Semester — Routine
          </h1>
        </header>

        {/* Section Chooser */}
        <div className="flex justify-center mb-4 gap-2 flex-wrap">
          {["A", "B"].map((s) => (
            <button
              key={s}
              onClick={() => setSection(s as "A" | "B")}
              className={`px-4 py-2 font-medium rounded-lg border ${
                section === s ? "bg-primary text-primary-foreground" : "bg-transparent"
              }`}
            >
              BCA - {s}
            </button>
          ))}
        </div>

        {/* Day Selector */}
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          <button
            onClick={() =>
              setDay(daysList[(daysList.indexOf(day) - 1 + daysList.length) % daysList.length])
            }
            className="p-2 rounded-full hover:bg-muted transition"
          >
            <FiChevronLeft size={18} />
          </button>
          <div className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold">
            {day}
          </div>
          <button
            onClick={() => setDay(daysList[(daysList.indexOf(day) + 1) % daysList.length])}
            className="p-2 rounded-full hover:bg-muted transition"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Top Highlight (today only) */}
{day === today && topHighlightIndex !== -1 ? (
  <>
    {/* Highlight box */}
    <div className="section-box flex items-center justify-between py-4 px-6 border-l-4 border-blue-500 bg-blue-100 mb-1">
      {/* Pin on left */}
      <FiMapPin className="text-blue-500 flex-shrink-0" size={16} />

      {/* Subject and time in middle */}
      <div className="flex-1 text-center flex flex-col items-center justify-center">
        <span className="font-semibold text-blue-800">{periods[topHighlightIndex].subject}</span>
        <span className="text-sm text-muted-foreground">{periods[topHighlightIndex].time}</span>
      </div>

      {/* Info icon on right */}
      <div className="flex-shrink-0">
        <button
          onClick={() => openNotification(periods[topHighlightIndex].fullForm)}
          className="p-1 rounded hover:scale-110 transition-transform"
          aria-label="info"
        >
          <FiAlertCircle className="text-yellow-400" size={20} />
        </button>
      </div>
    </div>

    {/* Upcoming label below */}
    <div className="text-center bg-yellow-100 text-yellow-900 font-semibold rounded-md py-1 text-sm mb-3">
      Upcoming
    </div>
  </>
) : day === today && topHighlightIndex === -1 ? (
  <div className="section-box p-3 text-center text-muted-foreground mb-4">
    🎉 All classes over for today
  </div>
) : null}



        {/* Main Period List */}
        <div className="space-y-3">
          {periods.map((p, idx) => {
            if (day === today && idx === topHighlightIndex) return null;
            return (
              <div
                key={`${p.time}-${p.subject}`}
                className="section-box relative flex flex-col justify-between py-4 px-4"
              >
                <button
                  onClick={() => openNotification(p.fullForm)}
                  className="absolute top-4 right-4 p-1 rounded hover:scale-110 transition-transform"
                  aria-label="info"
                >
                  <FiAlertCircle className="text-yellow-400" size={20} />
                </button>
                <div className="flex flex-col gap-1">
                  <div className="text-lg font-semibold">{p.subject}</div>
                  <div className="text-sm text-muted-foreground">{p.time}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notification */}
        {notificationText && (
          <div className="fixed left-4 bottom-6 z-50 w-[min(420px,90vw)]">
            <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 p-4 rounded-xl shadow-2xl flex gap-3 items-start">
              <FiAlertCircle className="mt-1" size={20} />
              <div className="text-sm break-words">{notificationText}</div>
              <button
                onClick={() => setNotificationText(null)}
                className="ml-3 p-1 rounded hover:bg-yellow-100"
                aria-label="close notification"
              >
                <FiX />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
