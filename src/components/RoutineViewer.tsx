"use client";

import React, { useEffect, useState } from "react";
import { FiAlertCircle, FiChevronLeft, FiChevronRight, FiMapPin, FiX } from "react-icons/fi";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Period = {
  time: string;
  subject: string;
  fullForm: string;
};

type Routine = {
  [day: string]: Period[];
};

interface RoutineViewerProps {
  section: "A" | "B";
}

export default function RoutineViewer({ section }: RoutineViewerProps) {
  const [routine, setRoutine] = useState<Routine>({});
  const [day, setDay] = useState<string>(() => getTodayWeekday());
  const [notificationText, setNotificationText] = useState<string | null>(null);
  const [nowMinutes, setNowMinutes] = useState<number>(() => {
    const n = new Date();
    return n.getHours() * 60 + n.getMinutes();
  });

  // Load routine from Firestore
  useEffect(() => {
    const loadRoutine = async () => {
      const ref = doc(db, "routines", `bca-${section}`);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setRoutine(snap.data() as Routine);
      }
    };
    loadRoutine();
  }, [section]);

  // Update clock
  useEffect(() => {
    const interval = setInterval(() => {
      const n = new Date();
      setNowMinutes(n.getHours() * 60 + n.getMinutes());
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  const daysList = Object.keys(routine || {});
  const periods = routine?.[day] ?? [];

  // Highlight logic
  let currentIndex = -1;
  let upcomingIndex = -1;
  for (let i = 0; i < periods.length; i++) {
    const [start, end] = parseRange(periods[i].time);
    if (nowMinutes >= start && nowMinutes <= end) currentIndex = i;
    if (upcomingIndex === -1 && nowMinutes < start) upcomingIndex = i;
  }
  const topHighlightIndex = currentIndex !== -1 ? currentIndex : upcomingIndex;
  const today = getTodayWeekday();

  return (
    <main className="min-h-screen px-4 py-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Section Chooser */}
        <div className="flex justify-center mb-4 gap-2">
          {["A", "B"].map((s) => (
            <button
              key={s}
              onClick={() => window.location.href = `/routine?section=${s}`}
              className={`px-4 py-2 font-medium rounded-lg border ${
                section === s ? "bg-purple-600 text-white" : "bg-transparent"
              }`}
            >
              BCA - {s}
            </button>
          ))}
        </div>

        {/* Day Selector */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={() =>
              setDay(daysList[(daysList.indexOf(day) - 1 + daysList.length) % daysList.length])
            }
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <FiChevronLeft size={18} />
          </button>
          <div className="px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-semibold">
            {day}
          </div>
          <button
            onClick={() => setDay(daysList[(daysList.indexOf(day) + 1) % daysList.length])}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Highlight */}
        {day === today && topHighlightIndex !== -1 && (
          <div className="rounded-xl shadow-md flex items-center justify-between py-4 px-6 mb-4 bg-purple-700 text-white">
            <FiMapPin className="text-yellow-400" size={16} />
            <div className="flex-1 flex flex-col items-center">
              <span className="font-semibold">{periods[topHighlightIndex].subject}</span>
              <span className="text-sm">{periods[topHighlightIndex].time}</span>
            </div>
            <button
              onClick={() => setNotificationText(periods[topHighlightIndex].fullForm)}
              aria-label="info"
            >
              <FiAlertCircle className="text-yellow-400" size={20} />
            </button>
          </div>
        )}

        {/* Period list */}
        <div className="space-y-3">
          {periods.map((p, idx) => (
            <div
              key={`${p.time}-${p.subject}`}
              className="relative flex flex-col justify-between p-4 border rounded-lg"
            >
              <button
                onClick={() => setNotificationText(p.fullForm)}
                className="absolute top-4 right-4 p-1"
                aria-label="info"
              >
                <FiAlertCircle className="text-yellow-500" size={20} />
              </button>
              <div className="text-lg font-semibold">{p.subject}</div>
              <div className="text-sm text-gray-500">{p.time}</div>
            </div>
          ))}
        </div>

        {/* Notification */}
        {notificationText && (
          <div className="fixed left-4 bottom-6 z-50 w-[min(420px,90vw)]">
            <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 p-4 rounded-xl shadow-xl flex gap-3 items-start">
              <FiAlertCircle className="mt-1" size={20} />
              <div className="text-sm">{notificationText}</div>
              <button
                onClick={() => setNotificationText(null)}
                className="ml-3 p-1 rounded hover:bg-yellow-100"
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

// -------------------- Helpers --------------------
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
