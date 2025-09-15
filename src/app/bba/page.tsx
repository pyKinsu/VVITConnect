"use client";

import React from "react";
import { useRouter } from "next/navigation";

const semesters: string[] = Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`);

export default function SemesterSelect(): JSX.Element {
  const router = useRouter();

  const handleSelect = (semester: string) => {
    const semNumber = semester.match(/\d+/)?.[0] ?? "1";
    router.push(`/semester/${semNumber}`);
  };

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Choose Your Semester
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Select a semester to view syllabus, notes & class periods.
        </p>
      </header>

      {/* Buttons grid */}
      <section aria-label="Semester selection">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => handleSelect(sem)}
              aria-label={`Open ${sem}`}
              className="section-box py-4 px-3 text-sm font-medium hover:scale-105 active:scale-95 transition-transform duration-150"
            >
              {sem}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
