"use client";

import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

export default function HomePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("seenHomePopup");
    if (!hasSeen) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("seenHomePopup", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/40">
      <div className="bg-card text-card-foreground rounded-xl shadow-2xl max-w-md w-[90%] p-6 relative animate-slide-down">
        {/* Close icon */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition"
          onClick={handleClose}
          aria-label="Close popup"
        >
          <FiX size={22} />
        </button>

        {/* Popup content */}
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Welcome!
        </h2>
        <p className="text-sm mb-6">
          This website is under development. I am improving it day by day. 
          If you find any mistakes or want to contribute, please contact me.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-end flex-wrap">
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            Contact Me
          </a>
          <button
            onClick={handleClose}
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
