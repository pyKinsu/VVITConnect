"use client";

import React from "react";
import { useRouter } from "next/navigation";

const semesters = [
  { id: 1, title: "Semester 1", route: "/bba/semester-1" },
  { id: 2, title: "Semester 2", route: "/bba/semester-2" },
  { id: 3, title: "Semester 3", route: "/bba/semester-3" },
  { id: 4, title: "Semester 4", route: "/bba/semester-4" },
  { id: 5, title: "Semester 5", route: "/bba/semester-5" },
  { id: 6, title: "Semester 6", route: "/bba/semester-6" },
];

export default function BbaSemestersPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500 drop-shadow-lg">
        BBA Semesters
      </h1>

      {/* Semester Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full max-w-4xl">
        {semesters.map((s) => (
          <button
            key={s.id}
            onClick={() => router.push(s.route)}
            className="relative py-6 rounded-2xl text-lg font-semibold shadow-lg 
              bg-gradient-to-br from-teal-500 to-emerald-500 text-white
              transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
              focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
          >
            {s.title}
          </button>
        ))}
      </div>
    </main>
  );
}
