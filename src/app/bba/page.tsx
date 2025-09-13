"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // import your button
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
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-transparent">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {semesters.map((s) => (
          <Button
            key={s.id}
            variant="default"
            size="lg"
            className="flex items-center gap-3 shadow-lg hover:scale-105 transition-transform"
            onClick={() => router.push(s.route)}
          >
            <span className="text-xl">{s.icon}</span>
            {s.title}
          </Button>
        ))}
      </div>
    </main>
  );
}
