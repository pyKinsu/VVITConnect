"use client";

import React from "react";
import { useRouter } from "next/navigation";

const semesters = [
  { id: 1, title: "Semester 1", route: "/bca/semester1" },
  { id: 2, title: "Semester 2", route: "/bca/semester2" },
  { id: 3, title: "Semester 3", route: "/bca/semester3" },
  { id: 4, title: "Semester 4", route: "/bca/semester4" },
  { id: 5, title: "Semester 5", route: "/bca/semester5" },
  { id: 6, title: "Semester 6", route: "/bca/semester6" },
];

export default function BcaSemestersPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient">
        Choose Semester
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {semesters.map((s) => (
          <button
            key={s.id}
            onClick={() => router.push(s.route)}
            className="btn-primary py-4 rounded-xl text-lg font-semibold shadow-md transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4"
          >
            {s.title}
          </button>
        ))}
      </div>
    </main>
  );
}
