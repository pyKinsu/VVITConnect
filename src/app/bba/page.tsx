import React from "react";
import { useNavigate } from "react-router-dom";

const semesters = [
  "Semester 1",
  "Semester 2",
  "Semester 3",
  "Semester 4",
  "Semester 5",
  "Semester 6",
  "Semester 7",
  "Semester 8",
];

export default function SemesterSelect() {
  const navigate = useNavigate();

  const handleSelect = (semester: string) => {
    // Example: navigate to /semester/1, /semester/2 etc.
    const semNumber = semester.split(" ")[1];
    navigate(`/semester/${semNumber}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full text-center space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Choose Your Semester
        </h1>
        <p className="text-muted-foreground text-sm">
          Select your current semester to view syllabus, notes, and classes.
        </p>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => handleSelect(sem)}
              className="section-box py-4 px-6 text-sm font-medium hover:scale-105 active:scale-95 transition-all"
            >
              {sem}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
