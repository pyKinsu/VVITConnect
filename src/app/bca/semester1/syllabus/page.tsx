"use client";

import { Button } from "@/components/ui/button";
import { FiBookOpen, FiCode, FiLayers, FiMessageCircle, FiDivideCircle, FiCpu } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SyllabusPage() {
  const router = useRouter();

  const subjects = [
    {
      name: "Communicative English",
      icon: <FiMessageCircle className="mr-2 h-5 w-5" />,
      route: "/syllabus/english",
    },
    {
      name: "Business Mathematics",
      icon: <FiDivideCircle className="mr-2 h-5 w-5" />,
      route: "/syllabus/maths",
    },
    {
      name: "Principles of Management & Organisation",
      icon: <FiLayers className="mr-2 h-5 w-5" />,
      route: "/syllabus/management",
    },
    {
      name: "Problem Solving with Programming Concepts",
      icon: <FiCode className="mr-2 h-5 w-5" />,
      route: "/syllabus/programming",
    },
    {
      name: "Information Technology Applications",
      icon: <FiCpu className="mr-2 h-5 w-5" />,
      route: "/syllabus/ita",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          📘 Subjects — Syllabus
        </h1>

        <div className="grid gap-4 sm:grid-cols-2">
          {subjects.map((subj) => (
            <Button
              key={subj.name}
              size="lg"
              className="w-full justify-start text-left text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
              onClick={() => router.push(subj.route)}
            >
              {subj.icon}
              {subj.name}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
