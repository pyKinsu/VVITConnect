"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FiBookOpen,
  FiPercent,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiChevronRight,
} from "react-icons/fi";

export default function SyllabusPage(): JSX.Element {
  const subjects = [
    { name: "Communicative English", slug: "communicative-english", icon: <FiBookOpen size={20} /> },
    { name: "Business Mathematics", slug: "business-mathematics", icon: <FiPercent size={20} /> },
    { name: "Principles of Management & Organisation", slug: "pmo", icon: <FiBriefcase size={20} /> },
    { name: "Problem Solving with Programming Concepts", slug: "pspc", icon: <FiCode size={20} /> },
    { name: "Information Technology Applications", slug: "ita", icon: <FiCpu size={20} /> },
  ];

  return (
    <main className="min-h-screen bg-transparent text-foreground px-4 py-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            1st Semester — Syllabus
          </h1>
        </header>

        {/* Subject Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((subj) => (
            <Link key={subj.slug} href={`/bca/semester/1/syllabus/${subj.slug}`} className="w-full">
              <Button
                variant="secondary"
                size="lg"
                className="w-full flex items-center justify-between px-5 py-4 text-base sm:text-lg bg-purple-700 text-yellow-300 hover:bg-purple-800"
              >
                {/* Left side: icon + text */}
                <div className="flex items-center gap-3">
                  {subj.icon}
                  <span className="text-left">{subj.name}</span>
                </div>

                {/* Right arrow */}
                <FiChevronRight size={20} />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
