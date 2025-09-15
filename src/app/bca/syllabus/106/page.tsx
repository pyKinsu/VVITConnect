"use client";

import { FiCircle, FiCheckCircle, FiLoader, FiBookOpen, FiMinus } from "react-icons/fi";

// ================== SYLLABUS DATA ==================
const syllabusDataBCA106 = [
  {
    title: "Introduction to Problem Solving and Programming",
    topics: [
      { name: "Problem Solving Concepts - everyday life problems, types of problems", status: 0 },
      { name: "Problem solving concepts for computers", status: 0 },
      { name: "Algorithms and Flow charts", status: 0 },
      { name: "Programming Concepts", status: 0 },
    ],
  },
  {
    title: "Logic Structures",
    topics: [
      { name: "Programming structure-Modules and their functions", status: 0 },
      { name: "Local and Global Variables", status: 0 },
      { name: "Four Logic structures Problems solving with Sequential and Decision Logic", status: 0 },
    ],
  },
  {
    title: "Loop & Case Logic Structure",
    topics: [
      { name: "While/While Wend Structure, Repeat /Until Structure, Automatic Counter loop", status: 0 },
      { name: "Nested Loops and Recursion", status: 0 },
    ],
  },
  {
    title: "Array Data Structure & File Concepts",
    topics: [
      { name: "Processing Arrays - 1D, 2D, Multidimensional arrays", status: 0 },
      { name: "Searching and Sorting Techniques", status: 0 },
      { name: "Definition Record, File - Primary and Secondary Keys - Sequential Access File Applications", status: 0 },
    ],
  },
  {
    title: "Application Domains",
    topics: [
      { name: "Bio-informatics and medical Applications", status: 0 },
      { name: "Business Applications", status: 0 },
      { name: "Law Enforcement and political Process", status: 0 },
      { name: "Ecommerce, Manufacturing, Education, Entertainment, Agriculture", status: 0 },
    ],
  },
  {
    title: "Text Books and References",
    topics: [
      { name: "Maureen Sprankle, Problem solving and Programming Concepts, Pearson Education, New Delhi" },
      { name: "Compilation Notes, Department of Information Technology, SRM University" },
      { name: "Elizabeth A. Dickson, Computer Program Design, Tata McGraw Hill" },
      { name: "Kenneth C. Louden, Programming Languages-Principles and Practice, Thomson Asia Pvt. Ltd." },
      { name: "Yuskel Uckan, Problem Solving Using C, McGraw Hill" },
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
export default function SyllabusBCA106() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        📘 BCA-106 — Problem Solving and Programming Concepts (Elective 2)
      </h1>

      <div className="space-y-6">
        {syllabusDataBCA106.map((section) => (
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
