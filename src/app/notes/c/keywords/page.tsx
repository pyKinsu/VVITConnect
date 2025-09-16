"use client";

import LessonNav from "@/components/LessonNav";

const keywordsList: string[][] = [
  ["auto", "break", "case", "char"],
  ["const", "continue", "default", "do"],
  ["double", "else", "enum", "extern"],
  ["float", "for", "goto", "if"],
  ["int", "long", "register", "return"],
  ["short", "signed", "sizeof", "static"],
  ["struct", "switch", "typedef", "union"],
  ["unsigned", "void", "volatile", "while"],
];

export default function Keywords() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white">
      {/* Back link */}
      <a
        href="/notes/c"
        className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors mb-6"
      >
        ← Back to C Notes
      </a>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-white">Keywords in C</h1>

      {/* Intro */}
      <p className="text-white/90 text-justify mb-6 leading-relaxed">
        <span className="font-medium">Keywords</span> are reserved words that
        have special meaning in the C language. You cannot use them as
        identifiers (variable names, function names, etc.). These keywords are
        part of the syntax and are used to perform specific operations.
      </p>

      {/* Keywords Table */}
      <h2 className="text-xl font-semibold text-white mb-3">
        List of Common C Keywords
      </h2>
      <div className="overflow-x-auto rounded-lg border border-white/30 mb-6">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Keywords</th>
              <th className="px-4 py-2 text-left font-semibold">Keywords</th>
              <th className="px-4 py-2 text-left font-semibold">Keywords</th>
              <th className="px-4 py-2 text-left font-semibold">Keywords</th>
            </tr>
          </thead>
          <tbody>
            {keywordsList.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white/5" : "bg-white/10"}
              >
                {row.map((keyword, i) => (
                  <td key={i} className="px-4 py-2 text-white/90">
                    {keyword}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Example */}
      <h3 className="text-lg font-semibold text-white mt-6 mb-2">Example:</h3>
      <pre className="bg-blue-900 text-white p-4 rounded-lg text-sm font-mono">
{`int register; // Invalid
int reg;      // Valid`}
      </pre>

      {/* Lesson Navigation */}
      <div className="mt-10">
        <LessonNav
          quiz={{ href: "/quiz/keywords" }}
          prev={{ href: "/notes/c/identifier", label: "Previous Lesson" }}
          next={{ href: "/notes/c/datatypes", label: "Next Lesson" }}
        />
      </div>
    </div>
  );
}
