"use client";

import { FiCircle, FiCheckCircle, FiLoader, FiBookOpen, FiMinus } from "react-icons/fi";

// ================== EDITABLE SYLLABUS DATA ==================
// Status: 0 = Not Started, 1 = In Progress, 2 = Completed
const syllabusData = [
  {
    title: "MODULE I: SYMBOLIC LOGIC & SET THEORY",
    topics: [
      { name: "Proposition", status: 2 },
      { name: "Logical operators: conjunction, disjunction, negation, conditional and bi-conditional", status: 1 },
      { name: "Converse, Inverse, Contra Positive, logically equivalent", status: 0 },
      { name: "Tautology and contradiction", status: 0 },
      { name: "Arguments and validity of arguments", status: 0 },
      { name: "Set operations, Venn diagram, Properties of sets", status: 1 },
      { name: "Number of elements in a set, Cartesian product", status: 0 },
      { name: "Relations & functions", status: 0 },
      { name: "Equivalence relation & Equivalence class", status: 0 },
      { name: "Partially and Totally Ordered sets", status: 0 },
      { name: "Types of Functions & Composition of Functions", status: 1 },
    ],
  },
  {
    title: "MODULE II: DIFFERENTIAL CALCULUS",
    topics: [
      { name: "Differentiation & successive differentiation", status: 1 },
      { name: "Leibnitz theorem", status: 0 },
      { name: "Partial differentiation", status: 0 },
      { name: "Applications of differentiation", status: 0 },
      { name: "Tangent and normal, angle between two curves", status: 0 },
      { name: "Maximum and Minimum values (Second derivative test)", status: 0 },
      { name: "Curvature and radius of Curvature (Cartesian coordinates)", status: 0 },
      { name: "Envelopes", status: 0 },
    ],
  },
  {
    title: "MODULE III: INTEGRAL CALCULUS",
    topics: [
      { name: "Definite Integral and its application for area, length and volume", status: 0 },
      { name: "Multiple Integrals", status: 0 },
      { name: "Change of order of Integration", status: 0 },
      { name: "Transformation of integral from Cartesian to polar", status: 0 },
      { name: "Applications in Areas, volume and surfaces", status: 0 },
    ],
  },
  {
    title: "MODULE IV: TWO DIMENSIONAL ANALYTICAL GEOMETRY",
    topics: [
      { name: "Straight Lines", status: 0 },
      { name: "Pair of Straight Lines", status: 0 },
      { name: "Circles", status: 0 },
    ],
  },
  {
    title: "Text Books",
    topics: [
      { name: "Das BC and Mukherjee, Differential Calculus, Calcutta, U.N. Dhar Publishers" },
      { name: "Das BC and Mukherjee, Integral Calculus, Calcutta, U.N. Dhar Publishers" },
      { name: "Grewal B.S., Higher Engineering Mathematics, Delhi Khanna Publishers" },
    ],
  },
];

// ================== RENDER ICON FUNCTION ==================
const renderIcon = (topic: any, sectionTitle: string) => {
  if (sectionTitle === "Text Books") {
    return <FiMinus className="text-gray-400 w-5 h-5" />;
  }

  switch (topic.status) {
    case 1:
      return <FiLoader className="text-yellow-400 w-5 h-5 animate-spin-slow" />;
    case 2:
      return <FiCheckCircle className="text-green-400 w-5 h-5" />;
    default:
      return <FiCircle className="text-gray-400 w-5 h-5" />;
  }
};

// ================== SYLLABUS VIEWER COMPONENT ==================
export default function SyllabusViewer() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        📘 BCA-102 — Basic Mathematics
      </h1>

      <div className="space-y-6">
        {syllabusData.map((section) => (
          <div key={section.title} className="section-box text-left">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-3 text-purple-300">
              <FiBookOpen className="text-purple-400" /> {section.title}
            </h2>
            <ul className="space-y-2">
              {section.topics.map((topic) => (
                <li
                  key={topic.name}
                  className="flex items-center justify-between bg-muted/30 rounded-lg px-3 py-2 cursor-default"
                >
                  <span className="text-sm">{topic.name}</span>
                  {renderIcon(topic, section.title)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Spin Animation */}
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
