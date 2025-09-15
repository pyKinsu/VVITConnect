"use client";

import React from "react";

export default function SyllabusPage(): JSX.Element {
  const subjects = [
    "Communicative English",
    "Business Mathematics",
    "Principles of Management & Organisation",
    "Problem Solving with Programming Concepts",
    "Information Technology Applications",
  ];

  return (
    <main className="min-h-screen bg-transparent text-foreground px-4 py-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            1st Semester — Syllabus
          </h1>
        </header>

        {/* Subject List */}
        <div className="space-y-4">
          {subjects.map((subj) => (
            <div
              key={subj}
              style={{
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                backgroundColor: "#4B0082", // dark purple
                color: "#FFD700", // gold text
                padding: "16px 20px",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              {subj}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
