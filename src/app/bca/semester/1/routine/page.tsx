"use client";

import React, { useEffect, useState } from "react";
import { FiAlertCircle, FiMapPin } from "react-icons/fi";

type Period = {
  time: string;
  subject: string;
  fullForm: string;
};

type Routine = {
  [day: string]: Period[];
};

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
  const parts = range.split("-");
  const left = parts[0].trim();
  const right = parts[1].trim();
  const rightAmp = (right.match(/\b(AM|PM)\b/i) || [])[0];
  const leftWithAmp = /\b(AM|PM)\b/i.test(left) ? left : `${left} ${rightAmp ?? ""}`;
  return [toMinutes(leftWithAmp), toMinutes(right)];
}
function getTodayWeekday(): string {
  const d = new Date().getDay();
  return d === 0 ? "Monday" : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d];
}

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
export default function RoutinePage() {
  const [section, setSection] = useState<"A" | "B">("A");
  const today = getTodayWeekday();
  const routines = section === "A" ? routineA : routineB;
  const [day, setDay] = useState<string>(today);

  const [nowMinutes, setNowMinutes] = useState(() => {
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

  const periods = routines[day] ?? [];

  let currentIndex = -1;
  let upcomingIndex = -1;
  if (day === today) {
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
  }

  return (
    <main className="min-h-screen bg-transparent text-foreground px-4 py-6 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            1st Semester Routine
          </h1>
          <p className="text-sm text-muted-foreground">
            Section: <strong>BCA - {section}</strong> · Day: <strong>{day}</strong>
          </p>
        </header>

        {/* Section switch (keep as before) */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg overflow-hidden border border-border">
            <button
              onClick={() => setSection("A")}
              className={`px-4 py-2 text-sm font-medium ${section === "A" ? "bg-primary text-primary-foreground" : "bg-transparent"}`}
            >
              BCA - A
            </button>
            <button
              onClick={() => setSection("B")}
              className={`px-4 py-2 text-sm font-medium ${section === "B" ? "bg-primary text-primary-foreground" : "bg-transparent"}`}
            >
              BCA - B
            </button>
          </div>
        </div>

        {/* Routine list */}
        <div className="space-y-3">
          {periods.length === 0 ? (
            <div className="text-center text-muted-foreground">No classes scheduled.</div>
          ) : (
            periods.map((p, idx) => {
              const isCurrent = idx === currentIndex;
              const isUpcoming = idx === upcomingIndex;

              return (
                <div
                  key={`${p.time}-${p.subject}`}
                  className={`section-box px-4 py-3 flex items-center justify-between rounded-lg border transition ${
                    isCurrent
                      ? "border-primary bg-primary/5"
                      : isUpcoming
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-border"
                  }`}
                >
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      {p.subject}
                      {isCurrent && <FiMapPin className="text-primary" />}
                      {isUpcoming && (
                        <span className="text-xs text-yellow-600 font-medium">Upcoming</span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{p.time}</div>
                  </div>

                  <FiAlertCircle className="text-yellow-500 shrink-0" size={18} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
