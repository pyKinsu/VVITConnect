"use client";

import {
  FiBookOpen,
  FiCode,
  FiLayers,
  FiMessageCircle,
  FiDivideCircle,
  FiCpu,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SyllabusPage() {
  const router = useRouter();

  const subjects = [
    {
      name: "Communicative English",
      icon: <FiMessageCircle className="w-7 h-7 text-primary mb-3" />,
      route: "/bca/syllabus/101",
    },
    {
      name: "Business Mathematics",
      icon: <FiDivideCircle className="w-7 h-7 text-primary mb-3" />,
      route: "/bca/syllabus/102",
    },
    {
      name: "Principles of Management & Organisation",
      icon: <FiLayers className="w-7 h-7 text-primary mb-3" />,
      route: "/bca/syllabus/105",
    },
    {
      name: "Problem Solving with Programming Concepts",
      icon: <FiCode className="w-7 h-7 text-primary mb-3" />,
      route: "/bca/syllabus/106",
    },
    {
      name: "Information Technology & Applications",
      icon: <FiCpu className="w-7 h-7 text-primary mb-3" />,
      route: "/bca/syllabus/103",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Subjects — Syllabus
      </h1>

      {/* Mobile-first card list */}
      <div className="grid gap-5 w-full max-w-md sm:max-w-2xl sm:grid-cols-2 md:grid-cols-3">
        {subjects.map((subj) => (
          <div
            key={subj.name}
            onClick={() => router.push(subj.route)}
            className="section-box cursor-pointer flex flex-col items-center justify-center p-5 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            {subj.icon}
            <span className="text-sm sm:text-base font-medium text-center leading-snug">
              {subj.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
