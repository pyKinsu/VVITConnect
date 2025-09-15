"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiX,
} from "react-icons/fi";

type Period = { time: string; subject: string; fullForm: string };
type Routine = { [day: string]: Period[] };

// --- full routines (you can edit these) ---
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

// --- helpers ---
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function parseToMinutes(segment: string, fallbackAmpm?: string): number {
  // segment like "10:00 AM" or "10:00"
  const parts = segment.trim().split(" ");
  let timePart = parts[0];
  let ampm = parts[1] ?? fallbackAmpm;
  const [hStr, mStr] = timePart.split(":");
  let hour = parseInt(hStr, 10);
  const minute = parseInt(mStr ?? "0", 10);
  if (ampm) {
    ampm = ampm.toUpperCase();
    if (ampm === "PM" && hour !== 12) hour += 12;
    if (ampm === "AM" && hour === 12) hour = 0;
  }
  return hour * 60 + minute;
}

function rangeToMinutes(range: string): [number, number] {
  // handles "10:00 - 10:50 AM" or "10:00 AM - 10:50 AM"
  const parts = range.split("-");
  const left = parts[0].trim();
  const right = parts[1].trim();
  // If left has no AM/PM but right does, inherit right's AM/PM for left
  const rightAmpmMatch = right.match(/\b(AM|PM)\b/i)?.[0];
  const leftHasAmpm = /\b(AM|PM)\b/i.test(left);
  const leftSegment = leftHasAmpm ? left : `${left} ${rightAmpmMatch ?? ""}`;
  const start = parseToMinutes(leftSegment, rightAmpmMatch);
  const end = parseToMinutes(right);
  return [start, end];
}

// returns { current: Period | null, upcoming: Period | null, finished: boolean }
function analyzeDay(routine: Routine, day: string, nowMinutes: number) {
  const slots = routine[day] ?? [];
  let current: Period | null = null;
  let upcoming: Period | null = null;

  for (const p of slots) {
    const [s, e] = rangeToMinutes(p.time);
    if (nowMinutes >= s && nowMinutes <= e) {
      current = p;
      break;
    }
    if (nowMinutes < s && !upcoming) {
      upcoming = p;
    }
  }

  const finished = slots.length > 0 && upcoming === null && current === null;
  return { current, upcoming, finished, slots };
}

// --- component ---
export default function RoutinePage() {
  const [section, setSection] = useState<"A" | "B">("A");
  const [dayIndex, setDayIndex] = useState(() => {
    const d = new Date().getDay(); // 0 Sun -> 1 Mon ...
    return d === 0 ? 0 : Math.max(0, d - 1);
  });

  const [nowMinutes, setNowMinutes] = useState(() => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  });

  // single global notification state (only one at a time)
  const [activeNotificationId, setActiveNotificationId] = useState<string | null>(null);
  const [notificationText, setNotificationText] = useState<string | null>(null);

  // refs to pinned items to scroll into view
  const pinRefA = useRef<HTMLDivElement | null>(null);
  const pinRefB = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // update time every 30s
  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date();
      setNowMinutes(now.getHours() * 60 + now.getMinutes());
    }, 30_000);
    return () => clearInterval(t);
  }, []);

  // compute day string and routines for both sections
  const day = days[dayIndex];
  const rA = routineA;
  const rB = routineB;

  const analysisA = analyzeDay(rA, day, nowMinutes);
  const analysisB = analyzeDay(rB, day, nowMinutes);

  // when pinned (current) changes, auto-scroll it into view
  useEffect(() => {
    const ref = pinRefA.current;
    if (analysisA.current && ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [analysisA.current, day, section]);

  useEffect(() => {
    const ref = pinRefB.current;
    if (analysisB.current && ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [analysisB.current, day, section]);

  // handle info icon click — unique id prevents duplicates across A/B/days
  function openNotification(id: string, text: string) {
    if (activeNotificationId === id) {
      // toggle off
      setActiveNotificationId(null);
      setNotificationText(null);
      return;
    }
    setActiveNotificationId(id);
    setNotificationText(text);
    // do NOT auto-hide — user requested readable persistent notification; user can close.
  }

  // navigation
  function prevDay() {
    setDayIndex((i) => (i - 1 + days.length) % days.length);
  }
  function nextDay() {
    setDayIndex((i) => (i + 1) % days.length);
  }

  // small helper for rendering period list (one panel)
  function PeriodList({
    routine,
    analysis,
    pinRef,
    sectionKey,
  }: {
    routine: Routine;
    analysis: ReturnType<typeof analyzeDay>;
    pinRef: React.RefObject<HTMLDivElement | null>;
    sectionKey: "A" | "B";
  }) {
    const slots = analysis.slots;
    return (
      <div className="w-full">
        {/* pinned / current / upcoming / over card */}
        <div className="mb-4">
          {analysis.current ? (
            <div
              ref={pinRef}
              className="section-box w-full p-4 flex items-center justify-between gap-4 border-l-4 border-primary"
            >
              <div className="flex items-center gap-3">
                <FiMapPin className="text-primary animate-bounce" size={20} />
                <div>
                  <div className="font-semibold">{analysis.current.subject}</div>
                  <div className="text-sm text-muted-foreground">{analysis.current.time}</div>
                </div>
              </div>
              <div>
                <button
                  aria-label="info"
                  onClick={() =>
                    openNotification(
                      `${sectionKey}-${day}-${analysis.current!.time}-${analysis.current!.subject}`,
                      analysis.current!.fullForm
                    )
                  }
                  className="p-1 rounded hover:scale-105 transition-transform"
                >
                  <FiAlertCircle className="text-yellow-400" size={22} />
                </button>
              </div>
            </div>
          ) : analysis.upcoming ? (
            <div className="section-box w-full p-4 flex items-center justify-between gap-4 bg-card/60">
              <div className="flex items-center gap-3">
                <div className="font-semibold">Upcoming</div>
                <div className="text-sm text-muted-foreground">
                  {analysis.upcoming.subject} • {analysis.upcoming.time}
                </div>
              </div>
              <div>
                <button
                  onClick={() =>
                    openNotification(
                      `${sectionKey}-${day}-${analysis.upcoming!.time}-${analysis.upcoming!.subject}`,
                      analysis.upcoming!.fullForm
                    )
                  }
                >
                  <FiAlertCircle className="text-yellow-400" size={22} />
                </button>
              </div>
            </div>
          ) : (
            <div className="section-box w-full p-4 text-center text-muted-foreground">
              🎉 Classes over for today
            </div>
          )}
        </div>

        {/* list other periods (current is omitted because pinned already) */}
        <div className="space-y-3">
          {slots.map((p) => {
            const id = `${sectionKey}-${day}-${p.time}-${p.subject}`;
            const isCurrent = analysis.current && analysis.current.subject === p.subject && analysis.current.time === p.time;
            // do not repeat pinned item in list — keep it above; show all but visually mark current if you prefer
            return (
              <div
                key={id}
                className={`relative w-full section-box p-4 flex items-center justify-between ${
                  isCurrent ? "opacity-90" : ""
                }`}
              >
                <div>
                  <div className="font-medium">{p.subject}</div>
                  <div className="text-sm text-muted-foreground">{p.time}</div>
                </div>

                <div>
                  <button
                    aria-label="info"
                    onClick={() => openNotification(id, p.fullForm)}
                    className="p-1 rounded hover:scale-110 transition-transform"
                  >
                    <FiAlertCircle className="text-yellow-400" size={22} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-transparent text-foreground flex justify-center px-4 py-8"
    >
      <div className="w-full max-w-5xl">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            1st Semester — Routine
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose section and day. Current class is pinned top of each list.
          </p>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 justify-between mb-6">
          {/* section toggle */}
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

          {/* day navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDayIndex((i) => (i - 1 + days.length) % days.length)}
              className="p-2 rounded-full hover:bg-muted transition"
              aria-label="previous day"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold">
              {day}
            </div>

            <button
              onClick={() => setDayIndex((i) => (i + 1) % days.length)}
              className="p-2 rounded-full hover:bg-muted transition"
              aria-label="next day"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Panels: A and B (stack on mobile, columns on md+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-2 text-sm text-muted-foreground font-semibold">Section A</div>
            <PeriodList routine={rA} analysis={analysisA} pinRef={pinRefA} sectionKey="A" />
          </div>

          <div>
            <div className="mb-2 text-sm text-muted-foreground font-semibold">Section B</div>
            <PeriodList routine={rB} analysis={analysisB} pinRef={pinRefB} sectionKey="B" />
          </div>
        </div>
      </div>

      {/* Global notification (bottom center) - big, readable, not translucent */}
      {notificationText && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
          <div className="max-w-xl w-[min(90vw,720px)] bg-yellow-100 border border-yellow-300 text-yellow-900 p-4 rounded-xl shadow-lg flex items-start gap-3">
            <FiAlertCircle size={20} className="mt-1" />
            <div className="flex-1 text-sm leading-snug">{notificationText}</div>
            <button
              aria-label="close"
              onClick={() => {
                setNotificationText(null);
                setActiveNotificationId(null);
              }}
              className="p-2 rounded hover:bg-yellow-200"
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
