"use client";

import { useState } from "react";
import { FiCircle, FiCheckCircle, FiLoader, FiBookOpen } from "react-icons/fi";

export default function EnglishSyllabusPage() {
  const syllabus = [
    {
      title: "Business Correspondence",
      topics: [
        "Structure of a Letter",
        "Inquiry Letter",
        "Sales Letter",
        "Order Letter",
        "Complaints",
        "Complaint Handling",
        "Routine letter",
      ],
    },
    {
      title: "Government Correspondence",
      topics: ["Memo", "Agenda", "Minutes", "Proposals"],
    },
    {
      title: "Writing Skills",
      topics: [
        "Report Writing",
        "Composition (argumentative, explanatory, descriptive and narrative)",
        "Paragraph writing",
      ],
    },
    {
      title: "Grammar",
      topics: [
        "Sentence Structure",
        "Idiomatic Usage of Language",
        "Tenses",
        "Direct & Indirect Speech",
        "Active & Passive Voice",
        "Vocabulary",
      ],
    },
    {
      title: "Selected Short Stories",
      topics: [
        "Rahul Bajaj — Bajaj Group (Page No. 20)",
        "Subhash Chandra — Essel Group/Zee TV (Page No. 40)",
        "N. R. Narayana Murthy — Infosys (Page No. 148)",
      ],
    },
    {
      title: "Preparation for Job",
      topics: [
        "Writing Applications for Jobs",
        "Preparing Curriculum Vitae",
        "Preparing for Interviews",
        "Preparing for Group Discussions",
      ],
    },
  ];

  const textBooks = [
    "Added Value: The Life Stories of Indian Business Leaders; Peter Church; Roli Books.",
    "Organisations - Structures, Processes and Outcomes; Richard H Hall; Prentice Hall India.",
    "English for the Secretary; Yvonne Hoban; Tata McGraw Hill.",
    "Technical Communication; M. Raman & S. Sharma; Oxford University Press.",
    "Business Communication Process and Product; M.E. Guffey; Thomson Learning.",
  ];

  const referenceBooks = [
    "Human Behavior at Work; John W Newstorm & Keith Davis; Tata McGraw Hill.",
    "The Most Common Mistakes in English Usage; Thomas Elliot Berry; Tata McGraw Hill.",
    "Business Communication; R.K. Madhukar; Vikas Publication.",
  ];

  // 0 = Not started, 1 = In progress, 2 = Done
  const [status, setStatus] = useState<{ [key: string]: number }>({});

  const toggleStatus = (topic: string) => {
    setStatus((prev) => ({
      ...prev,
      [topic]: ((prev[topic] ?? 0) + 1) % 3, // cycles between 0,1,2
    }));
  };

  const renderIcon = (topic: string) => {
    const state = status[topic] ?? 0;
    switch (state) {
      case 1:
        return <FiLoader className="text-yellow-400 w-5 h-5 animate-spin-slow" />;
      case 2:
        return <FiCheckCircle className="text-green-400 w-5 h-5" />;
      default:
        return <FiCircle className="text-gray-400 w-5 h-5" />;
    }
  };

  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        📘 BCA-101 — Communicative English
      </h1>

      {/* Syllabus Sections */}
      <div className="space-y-6">
        {syllabus.map((section) => (
          <div key={section.title} className="section-box text-left">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-3 text-purple-300">
              <FiBookOpen className="text-purple-400" />
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center justify-between bg-muted/30 rounded-lg px-3 py-2 cursor-pointer"
                  onClick={() => toggleStatus(topic)}
                >
                  <span className="text-sm">{topic}</span>
                  {renderIcon(topic)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Text Books */}
      <div className="section-box text-left mt-8">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-3 text-blue-300">
          <FiBookOpen className="text-blue-400" />
          Text Books
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          {textBooks.map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
      </div>

      {/* Reference Books */}
      <div className="section-box text-left mt-6 mb-10">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-3 text-green-300">
          <FiBookOpen className="text-green-400" />
          Reference Books
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          {referenceBooks.map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// Custom slow spin for loader
const styles = `
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
`;
              
