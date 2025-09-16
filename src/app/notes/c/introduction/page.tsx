"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Introduction() {
  const versionData = [
    { name: "K&R C", standard: "(Before ANSI)", year: "1978", features: "First version in the book by Kernighan & Ritchie" },
    { name: "ANSI C / C89", standard: "ANSI X3.159-1989", year: "1989", features: "First standardized version by ANSI" },
    { name: "C90", standard: "ISO/IEC 9899:1990", year: "1990", features: "International standard version of ANSI C" },
    { name: "C95", standard: "ISO/IEC 9899:1990/AMD1", year: "1995", features: "Minor revision, added wchar_t" },
    { name: "C99", standard: "ISO/IEC 9899:1999", year: "1999", features: "inline, // comments, long long int, stdint.h" },
    { name: "C11", standard: "ISO/IEC 9899:2011", year: "2011", features: "Multithreading, _Atomic, safer functions" },
    { name: "C17", standard: "ISO/IEC 9899:2018", year: "2018", features: "Bug fixes and clarifications" },
    { name: "C23 (latest)", standard: "ISO/IEC 9899:2024", year: "2024", features: "Improved Unicode, new attributes, type inference" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back button */}
      <Link
        href="/notes/c"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to C Notes
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-primary">
        C Programming Introduction
      </h1>

      {/* Overview */}
      <p className="text-muted-foreground text-justify mb-6 leading-relaxed">
        C is a general-purpose, procedural programming language developed by
        Dennis Ritchie in 1972 at Bell Laboratories. C is known for its{" "}
        <span className="font-medium">speed, efficiency, and closeness to hardware</span>, 
        which makes it widely used in system-level programming like operating 
        systems, embedded systems, and compilers.
      </p>

      {/* History */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        History of C Programming
      </h2>
      <p className="text-muted-foreground text-justify leading-relaxed mb-6">
        The root of all modern languages is <span className="font-medium">ALGOL</span> (Algorithmic Language), 
        introduced in 1960 with block structure. In 1967, Martin Richards created{" "}
        <span className="font-medium">BCPL</span>, derived from ALGOL. Later, in 1970,{" "}
        Ken Thompson created <span className="font-medium">B</span> language using BCPL, 
        which was type-less. Finally, Dennis Ritchie developed{" "}
        <span className="font-medium">C in 1972</span> at Bell Labs, combining features 
        from both BCPL and B.
      </p>

      {/* Versions Table */}
      <h3 className="text-xl font-semibold mt-8 mb-3">C Language Versions</h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 font-medium">Version Name</th>
              <th className="px-4 py-2 font-medium">Official Standard</th>
              <th className="px-4 py-2 font-medium">Year</th>
              <th className="px-4 py-2 font-medium">Key Features</th>
            </tr>
          </thead>
          <tbody>
            {versionData.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-border hover:bg-accent/30 transition-colors"
              >
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.standard}</td>
                <td className="px-4 py-2">{row.year}</td>
                <td className="px-4 py-2">{row.features}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-10 pt-6 border-t border-border">
        <Link
          href="/notes/c"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-muted hover:bg-accent transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Notes
        </Link>

        <Link
          href="/notes/c/identifiers"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          Next Lesson
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
