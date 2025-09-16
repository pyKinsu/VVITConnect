"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const notes = [
  {
    title: "C-Programming",
    href: "/notes/c",
  },
  {
    title: "C++ Programming",
    href: "/notes/cpp",
  },
  {
    title: "Java Programming",
    href: "/notes/java",
  },
  {
    title: "Python Programming",
    href: "/notes/python",
  },
];

export default function NotesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        📘 Notes Library
      </h1>

      <div className="space-y-4">
        {notes.map((note) => (
          <Link
            key={note.href}
            href={note.href}
            className="flex items-center justify-between w-full rounded-xl border border-border bg-card px-4 py-3 shadow-sm hover:shadow-md transition-all hover:bg-primary hover:text-primary-foreground group"
          >
            <span className="text-base font-medium">{note.title}</span>
            <ArrowRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </div>
  );
}
