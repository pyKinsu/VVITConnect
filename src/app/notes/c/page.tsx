"use client";

import { ArrowLeft, Eye, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function CNotesPage() {
  const chapters = [
    {
      title: "Fundamentals",
      topics: [
        { name: "Introduction", slug: "introduction" },
        { name: "Identifier", slug: "identifier" },
        { name: "Keywords", slug: "keywords" },
        { name: "Datatypes", slug: "datatypes" },
        { name: "Constant", slug: "constant" },
        { name: "Variables", slug: "variables" },
        { name: "Expressions & Statements", slug: "expressions-statements" },
        { name: "Operators", slug: "operators" },
      ],
    },
    {
      title: "Functions",
      topics: [
        { name: "User Defined Functions", slug: "user-defined" },
        { name: "Predefined Functions", slug: "predefined" },
        { name: "Recursive Functions", slug: "recursive" },
      ],
    },
    {
      title: "Arrays",
      topics: [
        { name: "Array", slug: "array" },
        { name: "Array and its Types", slug: "types" },
        { name: "Array in Functions", slug: "in-functions" },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back button */}
      <Link
        href="/notes"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Notes
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">C Programming Notes</h1>

      {/* Chapters */}
      <div className="space-y-10">
        {chapters.map((chapter) => (
          <div key={chapter.title}>
            <h2 className="text-xl font-semibold mb-4">{chapter.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter.topics.map((topic) => (
                <div
                  key={topic.slug}
                  className="flex justify-between items-center px-4 py-3 rounded-lg border bg-card shadow-sm"
                >
                  <span className="text-sm font-medium">{topic.name}</span>
                  <div className="flex gap-2">
                    {/* View Notes */}
                    <Link
                      href={`/notes/c/${topic.slug}`} // Can Be replace with this href={`/notes/c/${chapter.title.toLowerCase()}/${topic.slug}`} //
                      className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={`View notes for ${topic.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </Link>

                    {/* Take Quiz */}
                    <Link
                      href={`/quiz/c/${chapter.title.toLowerCase()}/${topic.slug}`}
                      className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={`Take quiz for ${topic.name}`}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
