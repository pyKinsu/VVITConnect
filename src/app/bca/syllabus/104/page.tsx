"use client";

import { FiCircle, FiCheckCircle, FiLoader, FiBookOpen, FiMinus } from "react-icons/fi";

// ================== EDITABLE SYLLABUS DATA ==================
const syllabusDataBCA104 = [
  {
    title: "Concept of Management",
    topics: [
      { name: "Definition, Nature, Scope, and overall view of Management", status: 0 },
      { name: "Relation with other social sciences and industry", status: 0 },
    ],
  },
  {
    title: "Evolution of Management Thought",
    topics: [
      { name: "Classical Theory of Management", status: 0 },
      { name: "Bureaucracy - Max Weber", status: 0 },
      { name: "Scientific Management - F.W. Taylor", status: 0 },
      { name: "Process Management - H. Fayol", status: 0 },
      { name: "Neoclassical Theory of Management", status: 0 },
      { name: "Human Relations - B.E. Mayo and Roethlisberger", status: 0 },
      { name: "Behavioral Science Approach - D. McGregor, A. Maslow & others", status: 0 },
      { name: "Modern Management Theories - Peter Drucker", status: 0 },
    ],
  },
  {
    title: "Management Functions",
    topics: [
      { name: "Planning, Organizing, Staffing, Directing, Controlling", status: 0 },
      { name: "Executive Functions: Production, Marketing, Finance, Personnel", status: 0 },
    ],
  },
  {
    title: "Planning & Organization",
    topics: [
      { name: "Planning: Concept, Nature, Importance, Objectives, Policies, Procedures, Strategies", status: 0 },
      { name: "Organization: Definition, Theories, Forms, Formal & Informal, Departmentation, Line & Staff Relationship, Span, Authority, Responsibility, Delegation, Centralization, Decentralization, Committees", status: 0 },
    ],
  },
  {
    title: "Staffing, Directing & Controlling",
    topics: [
      { name: "Staffing: Selection, Recruitment, Training, Development, Welfare", status: 0 },
      { name: "Directing: Leadership, Supervision, Motivation, Communication", status: 0 },
      { name: "Controlling: Elements, Process, Style, Techniques of Control, Social Responsibility", status: 0 },
    ],
  },
  {
    title: "Text Books",
    topics: [
      { name: "Koontz and O'Donnel - Principles of Management, Essentials of Management" },
      { name: "Theo Haiman - Management Theory and Practice" },
    ],
  },
  {
    title: "Reference Books",
    topics: [
      { name: "P.F. Drucker - Management - Task and Responsibility" },
      { name: "P.F. Drucker - The Practice of Management" },
      { name: "Newman and Warren - Process of Management" },
      { name: "E.F.L. Beach - Principles and Practical Management" },
      { name: "H.F. Merril - Classics in Management" },
      { name: "Mee J.E. - Management Thought in a Dynamic Economy" },
      { name: "Daniel A. Wren - The Evolution of Management Thought" },
      { name: "S.N. Banerjee - Principles of Management" },
    ],
  },
];

// ================== RENDER ICON FUNCTION ==================
const renderIcon = (topic: any, sectionTitle: string) => {
  if (sectionTitle === "Text Books" || sectionTitle === "Reference Books") {
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
export default function SyllabusBCA104() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        📘 BCA-104 — Principles of Management & Organization
      </h1>

      <div className="space-y-6">
        {syllabusDataBCA104.map((section) => (
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
