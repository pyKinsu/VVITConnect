"use client";

import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

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
    <div className="max-w-4xl mx-auto px-4 py-12 text-foreground">
      {/* Back link */}
      <Link
        href="/notes/c"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to C Notes
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-white">Keywords in C</h1>

      {/* Intro */}
      <p className="text-muted-foreground text-justify mb-6 leading-relaxed text-white/90">
        <span className="font-medium">Keywords</span> are reserved words that
        have special meaning in the C language. You cannot use them as
        identifiers (variable names, function names, etc.). These keywords are
        part of the syntax and are used to perform specific operations.
      </p>

      {/* Keywords Table */}
      <h2 className="text-xl font-semibold text-white mb-3">
        List of Common C Keywords
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border mb-6">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-muted/50 text-white">
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
                className={rowIndex % 2 === 0 ? "bg-background" : "bg-muted/30"}
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
      <pre className="bg-green-900 text-green-100 p-4 rounded-lg text-sm font-mono">
{`int register; // Invalid
int reg;      // Valid`}
      </pre>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-10 pt-6 border-t border-border">
        {/* Quiz Button */}
        <Link
          href="/quiz/keywords"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium w-full sm:w-auto"
        >
          <HelpCircle className="w-4 h-4 mr-2" />
          Attempt Quiz
        </Link>

        {/* Previous + Next */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="/notes/c/identifier"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous Lesson
          </Link>

          <Link
            href="/notes/c/datatypes"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium w-full sm:w-auto"
          >
            Next Lesson
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
