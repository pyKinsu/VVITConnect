"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  FaBookOpen,
  FaGraduationCap,
  FaClipboardList,
  FaStar,
  FaBookmark,
  FaLayerGroup,
} from "react-icons/fa";

export default function BbaSemestersPage() {
  const router = useRouter();

  const semesters = [
    { id: 1, title: "Semester 1", icon: <FaBookOpen />, route: "/bba/semester-1" },
    { id: 2, title: "Semester 2", icon: <FaGraduationCap />, route: "/bba/semester-2" },
    { id: 3, title: "Semester 3", icon: <FaClipboardList />, route: "/bba/semester-3" },
    { id: 4, title: "Semester 4", icon: <FaStar />, route: "/bba/semester-4" },
    { id: 5, title: "Semester 5", icon: <FaBookmark />, route: "/bba/semester-5" },
    { id: 6, title: "Semester 6", icon: <FaLayerGroup />, route: "/bba/semester-6" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-transparent px-4 py-10">
      {/* Heading */}
      <h1 className="mb-10 text-3xl font-extrabold text-center tracking-tight md:text-4xl">
        🎓 Choose Your Semester
      </h1>

      {/* Responsive Buttons Grid */}
      <div className="grid w-full max-w-3xl grid-cols-2 gap-5 md:grid-cols-3">
        {semesters.map((s) => (
          <Button
            key={s.id}
            variant="default"
            size="lg"
            className="flex flex-col items-center justify-center gap-2 py-6 shadow-lg hover:scale-105 transition-transform text-base sm:text-lg"
            onClick={() => router.push(s.route)}
          >
            <span className="text-2xl">{s.icon}</span>
            {s.title}
          </Button>
        ))}
      </div>
    </main>
  );
}
