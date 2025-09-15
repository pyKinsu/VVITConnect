"use client";

import { FiCircle, FiCheckCircle, FiLoader, FiBookOpen, FiMinus } from "react-icons/fi";

// ================== EDITABLE SYLLABUS DATA ==================
// Status: 0 = Not Started, 1 = In Progress, 2 = Completed
const syllabusData = [
  {
    title: "Business Correspondence",
    topics: [
      { name: "Structure of a Letter", status: 2 },
      { name: "Inquiry Letter", status: 2 },
      { name: "Sales Letter", status: 1 },
      { name: "Order Letter", status: 0 },
      { name: "Complaints", status: 0 },
      { name: "Complaint Handling", status: 0 },
      { name: "Routine letter", status: 0 },
    ],
  },
  {
    title: "Government Correspondence",
    topics: [
      { name: "Memo", status: 1 },
      { name: "Agenda", status: 0 },
      { name: "Minutes", status: 0 },
      { name: "Proposals", status: 0 },
    ],
  },
  {
    title: "Writing Skills",
    topics: [
      { name: "Report Writing", status: 1 },
      { name: "Composition (argumentative, explanatory, descriptive, narrative)", status: 0 },
      { name: "Paragraph Writing", status: 0 },
    ],
  },
  {
    title: "Grammar",
    topics: [
      { name: "Sentence Structure", status: 2 },
      { name: "Idiomatic Usage of Language", status: 1 },
      { name: "Tenses", status: 1 },
      { name: "Direct & Indirect Speech", status: 0 },
      { name: "Active & Passive Voice", status: 0 },
      { name: "Vocabulary", status: 0 },
    ],
  },
  {
    title: "Selected Short Stories",
    topics: [
      { name: "Rahul Bajaj Bajaj Group (Page No. 20)", status: 2 },
      { name: "Subhash Chandra/Essel Group/Zee TV (Page No. 40)", status: 1 },
      { name: "NR Narayana Murthy/Infosys (Page No. 148)", status: 0 },
    ],
  },
  {
    title: "Preparation for Job",
    topics: [
      { name: "Writing Applications for Jobs", status: 0 },
      { name: "Preparing Curriculum Vitae", status: 0 },
      { name: "Preparing for Interviews", status: 0 },
      { name: "Preparing for Group Discussions", status: 0 },
    ],
  },
  {
    title: "Text Books",
    topics: [
      { name: "Added Value: The Life Stories of Indian Business Leaders; Peter Church; Roli Books." },
      { name: "Organisations - Structures, Processes and Outcomes; Richard H. Hall; Prentice Hall India." },
      { name: "English for the Secretary; Yvonne Hoban; Tata McGraw Hill." },
      { name: "Technical Communication: M. Raman & S. Sharma; Oxford University Press." },
      { name: "Business Communication Process and Product: M.E. Guffey; Thomson Learning." },
    ],
  },
  {
    title: "Reference Books",
    topics: [
      { name: "Human Behavior at Work; John W Newstorm & Keith Davis; Tata McGraw Hill." },
      { name: "The Most Common Mistakes in English Usage; Thomas Elliot Berry; Tata McGraw Hill." },
      { name: "Business Communication: R.K. Madhukar; Vikas Publication." },
    ],
  },
];

// ================== RENDER ICON FUNCTION ==================
const renderIcon = (topic: any, sectionTitle: string) => {
  // For Text Books / Reference Books, show neutral icon
  if (sectionTitle === "Text Books" || sectionTitle === "Reference Books") {
    return <FiMinus className="text-gray-400 w-5 h-5" />;
  }

  // Otherwise show progress icons
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
        📘 BCA-101 — Communicative English
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
