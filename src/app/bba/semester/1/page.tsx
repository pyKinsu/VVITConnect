"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaBook, FaCode, FaCalendarAlt, FaFileAlt, FaHome, FaUniversity } from "react-icons/fa";

const features = [
  {
    name: "Routine",
    icon: <FaCalendarAlt className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />,
    path: "/routine",
  },
  {
    name: "Syllabus",
    icon: <FaFileAlt className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />,
    path: "/syllabus",
  },
  {
    name: "Books",
    icon: <FaBook className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />,
    path: "/books",
  },
  {
    name: "C Programming Notes",
    icon: <FaCode className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />,
    path: "/notes/c-programming",
  },
];

export default function FeaturesPage() {
  const router = useRouter();

  const handleSelect = (path: string) => {
    router.push(path);
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-[80vh] px-4 py-6">
      <header className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Explore Resources
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Access your routine, syllabus, books, and notes easily.
        </p>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center w-full space-y-6">
        {/* Library button (wide) */}
        <button
          onClick={() => handleSelect("/library")}
          className="section-box w-full max-w-4xl flex items-center justify-center gap-3 py-4 text-lg font-semibold hover:scale-105 active:scale-95 transition-transform duration-150"
        >
          <FaUniversity className="w-6 h-6" />
          Library
        </button>

        {/* Grid of 4 feature buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          {features.map((feature) => (
            <button
              key={feature.name}
              onClick={() => handleSelect(feature.path)}
              className="section-box py-6 text-base font-semibold hover:scale-105 active:scale-95 transition-transform duration-150 flex flex-col items-center"
            >
              {feature.icon}
              {feature.name}
            </button>
          ))}
        </div>

        {/* Back to Home button (wide) */}
        <button
          onClick={() => handleSelect("/")}
          className="section-box w-full max-w-4xl flex items-center justify-center gap-3 py-4 text-lg font-semibold hover:scale-105 active:scale-95 transition-transform duration-150"
        >
          <FaHome className="w-6 h-6" />
          Back to Home
        </button>
      </section>
    </main>
  );
}
