"use client";

import { FiCircle, FiCheckCircle, FiLoader, FiBookOpen, FiMinus } from "react-icons/fi";

// ================== EDITABLE SYLLABUS DATA ==================
const syllabusDataBCA103 = [
  {
    title: "Introduction To Computers",
    topics: [
      { name: "Introduction, Characteristics of computers", status: 1 },
      { name: "Evolution of computers, Generation of Computers", status: 0 },
      { name: "Classification of Computers, The Computer System", status: 0 },
      { name: "Applications of Computers", status: 0 },
    ],
  },
  {
    title: "Input/Output Devices and Memory",
    topics: [
      { name: "Keyboard, Pointing Devices, Speech Recognition", status: 0 },
      { name: "Digital Camera, Scanners, Optical Scanners", status: 0 },
      { name: "Classification of Output, Printers, Plotters, Computer Output Microfilm (COM)", status: 0 },
      { name: "Monitors, Audio Output, Projectors", status: 0 },
      { name: "RAM, ROM, Types of ROM", status: 0 },
      { name: "Classification of Secondary Storage Devices, Magnetic Tape, Magnetic Disk, Optical Disk, Magneto Optical Disk", status: 0 },
    ],
  },
  {
    title: "Software Concepts",
    topics: [
      { name: "Introduction to Software, Relationship between Software and Hardware", status: 0 },
      { name: "System Software, Application Software", status: 0 },
      { name: "Algorithm, Flowchart, Program, Pseudocode (P-Code)", status: 0 },
      { name: "Features of a Good Programming Language", status: 0 },
      { name: "Operating Systems: History & Evolution, Functions of an OS", status: 0 },
      { name: "A Brief History of MS-DOS, Linux, Windows System", status: 0 },
      { name: "Database Management System", status: 0 },
    ],
  },
  {
    title: "Data Communication And Computer Network",
    topics: [
      { name: "Introduction, Data Communication, Transmission Media", status: 0 },
      { name: "Multiplexing, Switching, Computer Network, Network Topologies", status: 0 },
      { name: "Communication Protocols, Network devices", status: 0 },
      { name: "World Wide Web, Hypertext, Uniform Resource Locator, Web Browsers", status: 0 },
      { name: "IP Address, Domain Name, Internet Service Providers, Internet Security, Internet Requirements", status: 0 },
      { name: "Web Search Engine, Net Surfing, Internet Services, Case Study, Intranet", status: 0 },
      { name: "MS-Office: MS-Word, MS-Excel, MS-PowerPoint", status: 0 },
    ],
  },
  {
    title: "Text Books",
    topics: [
      { name: "V. Rajaraman, Fundamentals Of Computers, 3rd Edition, PHI Publications" },
      { name: "Nasib S. Gill, Essentials of Computer & Network Technology, Khanna Publications" },
      { name: "Deepak Bharihoke, Fundamentals of Information Technology, Excel Books" },
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
export default function SyllabusBCA103() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        📘 BCA-103 — Information Technology and Applications
      </h1>

      <div className="space-y-6">
        {syllabusDataBCA103.map((section) => (
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
