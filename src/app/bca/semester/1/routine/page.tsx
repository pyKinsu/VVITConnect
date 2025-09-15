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
  time: string; // e.g. "10:00 - 10:50 AM"
  subject: string;
  fullForm: string;
};

type Routine = {
  [day: string]: Period[];
};

/* -----------------------
   --- Your routines -----
   ----------------------- */
const routineA: Routine = {
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

const routineB: Routine = {
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

/* -----------------------
   --- helpers ----------
   ----------------------- */

// Parse a time like "10:00 AM" to minutes since midnight
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

// Parse "10:00 - 10:50 AM" or "10:00 AM - 10:50 AM"
function parseRange(range: string): [number, number] {
  const parts = range.split("-");
  const left = parts[0].trim();
  const right = parts[1].trim();
  const rightAmp = (right.match(/\b(AM|PM)\b/i) || [])[0];
  const leftWithAmp = /\b(AM|PM)\b/i.test(left) ? left : `${left} ${rightAmp ?? ""}`;
  return [toMinutes(leftWithAmp), toMinutes(right)];
}

function getTodayWeekday(): string {
  const d = new Date().getDay(); // 0 Sun, 1 Mon
  return d === 0 ? "Monday" : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d];
}

/* -----------------------
   --- Component ---------
   ----------------------- */

export default function RoutinePage(): JSX.Element {
  // UI state
  const [section, setSection] = useState<"A" | "B">("A");
  const [day, setDay] = useState<string>(() => {
    const t = new Date().getDay();
    return t === 0 ? "Monday" : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];
  });

  // notification state (global bottom-left)
  const [activeNotificationId, setActiveNotificationId] = useState<string | null>(null);
  const [notificationText, setNotificationText] = useState<string | null>(null);

  // now (minutes) -> updates every 30s so highlight remains accurate
  const [nowMinutes, setNowMinutes] = useState<number>(() => {
    const n = new Date();
    return n.getHours() * 60 + n.getMinutes();
  });
  useEffect(() => {
    const t = setInterval(() => {
      const n = new Date();
      setNowMinutes(n.getHours() * 60 + n.getMinutes());
    }, 30_000);
    return () => clearInterval(t);
  }, []);

  const routines = section === "A" ? routineA : routineB;
  const daysList = Object.keys(routines);

  // ensure day is valid (fallback)
  useEffect(() => {
    if (!daysList.includes(day)) setDay(daysList[0] ?? "Monday");
  }, [routines, day, daysList]);

  // find current / upcoming indices for the selected day & section
  const periods = routines[day] ?? [];
  let currentIndex = -1;
  let upcomingIndex = -1;
  for (let i = 0; i < periods.length; i++) {
    const [s, e] = parseRange(periods[i].time);
    if (nowMinutes >= s && nowMinutes <= e) {
      currentIndex = i;
      break;
    }
    if (upcomingIndex === -1 && nowMinutes < s) {
      upcomingIndex = i;
    }
  }

  function openNotification(id: string, text: string) {
    if (activeNotificationId === id) {
      // toggle off
      setActiveNotificationId(null);
      setNotificationText(null);
      return;
    }
    setActiveNotificationId(id);
    setNotificationText(text);
  }

  // navigation
  function prevDay() {
    const idx = daysList.indexOf(day);
    setDay(daysList[(idx - 1 + daysList.length) % daysList.length]);
  }
  function nextDay() {
    const idx = daysList.indexOf(day);
    setDay(daysList[(idx + 1) % daysList.length]);
  }

  // styles for current highlight using your CSS vars for consistency
  const currentStyle: React.CSSProperties = {
    backgroundColor: "hsl(var(--primary) / 0.06)", // gentle wash using --primary
    borderLeft: "4px solid hsl(var(--primary))",
  };

  const upcomingStyle: React.CSSProperties = {
    backgroundColor: "hsl(var(--accent) / 0.04)",
    borderLeft: "4px solid hsl(var(--accent))",
  };

  return (
    <main className="min-h-screen bg-transparent text-foreground px-4 py-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            1st Semester — Routine
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Section: <strong>BCA - {section}</strong> · Day: <strong>{day}</strong>
          </p>
        </header>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="inline-flex rounded-lg overflow-hidden border border-border">
            <button
              onClick={() => setSection("A")}
              className={`px-4 py-2 font-medium ${section === "A" ? "bg-primary text-primary-foreground" : "bg-transparent"}`}
            >
              BCA - A
            </button>
            <button
              onClick={() => setSection("B")}
              className={`px-4 py-2 font-medium ${section === "B" ? "bg-primary text-primary-foreground" : "bg-transparent"}`}
            >
              BCA - B
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevDay}
              className="p-2 rounded-full hover:bg-muted transition"
              aria-label="previous day"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold">
              {day}
            </div>

            <button
              onClick={nextDay}
              className="p-2 rounded-full hover:bg-muted transition"
              aria-label="next day"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Pinned / Upcoming area */}
        <div className="mb-4">
          {currentIndex !== -1 ? (
            <div className="section-box p-4 flex items-center justify-between" style={currentStyle}>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-primary animate-bounce" size={18} />
                <div>
                  <div className="font-semibold">{periods[currentIndex].subject}</div>
                  <div className="text-sm text-muted-foreground">{periods[currentIndex].time}</div>
                </div>
              </div>
              <button
                onClick={() =>
                  openNotification(
                    `${section}-${day}-${periods[currentIndex].time}-${periods[currentIndex].subject}`,
                    periods[currentIndex].fullForm
                  )
                }
                className="p-1 rounded hover:scale-105 transition-transform"
                aria-label="info"
              >
                <FiAlertCircle className="text-yellow-400" size={20} />
              </button>
            </div>
          ) : upcomingIndex !== -1 ? (
            <div className="section-box p-3 flex items-center justify-between" style={upcomingStyle}>
              <div>
                <div className="font-semibold">Upcoming</div>
                <div className="text-sm text-muted-foreground">
                  {periods[upcomingIndex].subject} • {periods[upcomingIndex].time}
                </div>
              </div>
              <button
                onClick={() =>
                  openNotification(
                    `${section}-${day}-${periods[upcomingIndex].time}-${periods[upcomingIndex].subject}`,
                    periods[upcomingIndex].fullForm
                  )
                }
                className="p-1 rounded hover:scale-105 transition-transform"
              >
                <FiAlertCircle className="text-yellow-400" size={20} />
              </button>
            </div>
          ) : (
            <div className="section-box p-3 text-center text-muted-foreground">
              🎉 All classes over for today
            </div>
          )}
        </div>

        {/* List of periods */}
        <div className="space-y-3">
          {periods.length === 0 ? (
            <div className="text-center text-muted-foreground">No classes scheduled for this day.</div>
          ) : (
            periods.map((p, idx) => {
              const isCurrent = idx === currentIndex;
              // Skip pinned display? We still show it in the list but visually marked.
              return (
                <div
                  key={`${p.time}-${p.subject}`}
                  className={`section-box flex items-center justify-between py-4 px-6`}
                  style={isCurrent ? currentStyle : undefined}
                >
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      {p.subject}
                      {isCurrent && <FiMapPin className="text-primary" />}
                    </div>
                    <div className="text-sm text-muted-foreground">{p.time}</div>
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        openNotification(`${section}-${day}-${p.time}-${p.subject}`, p.fullForm)
                      }
                      className="p-1 rounded hover:scale-110 transition-transform"
                      aria-label="info"
                    >
                      <FiAlertCircle className="text-yellow-400" size={20} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* GLOBAL notification — bottom-left, large, readable, not clipped */}
      {notificationText && (
        <div
          className="fixed left-4 bottom-6 z-50"
          style={{ width: "min(420px, 90vw)" }}
        >
          <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 p-4 rounded-xl shadow-2xl flex gap-3 items-start">
            <FiAlertCircle className="mt-1" size={20} />
            <div className="text-sm break-words">{notificationText}</div>
            <button
              onClick={() => {
                setNotificationText(null);
                setActiveNotificationId(null);
              }}
              className="ml-3 p-1 rounded hover:bg-yellow-100"
              aria-label="close notification"
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
