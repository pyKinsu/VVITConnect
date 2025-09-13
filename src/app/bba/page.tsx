"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function BbaSemestersPage() {
  const router = useRouter();

  const semesters = [
    { id: 1, title: "Semester 1", route: "/bba/semester-1" },
    { id: 2, title: "Semester 2", route: "/bba/semester-2" },
    { id: 3, title: "Semester 3", route: "/bba/semester-3" },
    { id: 4, title: "Semester 4", route: "/bba/semester-4" },
    { id: 5, title: "Semester 5", route: "/bba/semester-5" },
    { id: 6, title: "Semester 6", route: "/bba/semester-6" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-transparent px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-7 w-7 text-primary" />
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">
          Choose Your Semester
        </h1>
      </div>

      {/* Buttons Grid */}
      <div className="grid w-full max-w-xl grid-cols-2 gap-3 md:grid-cols-3">
        {semesters.map((s) => (
          <Button
            key={s.id}
            variant="secondary"
            size="sm"
            className="h-11 text-sm font-medium rounded-md shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
            onClick={() => router.push(s.route)}
          >
            {s.title}
          </Button>
        ))}
      </div>
    </main>
  );
}
