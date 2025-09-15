"use client";

import { FiCircle, FiCheckCircle, FiLoader, FiBookOpen, FiMinus } from "react-icons/fi";

// ================== SYLLABUS DATA ==================
const syllabusDataBCA105 = [
  {
    title: "Overview",
    topics: [
      { name: "Environment, Basic Syntax, Variable Types, Basic Operators", status: 0 },
      { name: "Installing Python", status: 0 },
      { name: "Very Simple Programs, Scripts, Loops, Conditionals, Functions", status: 0 },
      { name: "Tuples, Lists, Dictionaries, for Loop, Classes, Importing Modules, File I/O, Error Handling", status: 0 },
    ],
  },
  {
    title: "Structures",
    topics: [
      { name: "if...else, while Loop, for Loop, Loop Control", status: 0 },
      { name: "Numbers, Strings, Lists, Tuples, Dictionary, Date & Time", status: 0 },
      { name: "Functions, Modules, Files I/O, Exceptions", status: 0 },
      { name: "Classes / Objects, Reg Expressions, GUI Programming", status: 0 },
    ],
  },
  {
    title: "Text Books and References",
    topics: [
      { name: "Programming Python: Powerful Object Oriented Programming; Mark Lutz, Shroff O'Reilly; 2010" },
      { name: "Beginning Python: Using Python 2.6 & Python 3.1; James Payne; Wiley India; 2011" },
      { name: "Head First Programming: A Learner's Guide to Programming using Python Language; Barry & Griffiths; Shroff/O'Reilly; 2009" },
    ],
  },
];

// ================== RENDER ICON FUNCTION ==================
const renderIcon = (topic: any, sectionTitle: string) => {
  if (sectionTitle === "Text Books and References") {
    return <FiMinus className="text-gray-400 w-6 h-6" />;
  }

  switch (topic.status) {
    case 1:
      return <FiLoader className="text-yellow-400 w-6 h-6 animate-spin-slow" />;
    case 2:
      return <FiCheckCircle className="text-green-400 w-6 h-6" />;
    default:
      return <FiCircle className="text-gray-400 w-6 h-6" />;
  }
};

// ================== SYLLABUS COMPONENT ==================
export default function SyllabusBCA105() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        🐍 BCA-105 — Python Programming (Elective 1)
      </h1>

      <div className="space-y-6">
        {syllabusDataBCA105.map((section) => (
          <div key={section.title} className="section-box text-left">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-3 text-purple-300">
              <FiBookOpen className="text-purple-400 w-6 h-6" /> {section.title}
            </h2>
            <ul className="space-y-3">
              {section.topics.map((topic) => (
                <li
                  key={topic.name}
                  className="flex items-center justify-between bg-muted/30 rounded-lg px-4 py-3 cursor-default text-sm sm:text-base"
                >
                  <span>{topic.name}</span>
                  {renderIcon(topic, section.title)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}
      </style>
    </main>
  );
}
