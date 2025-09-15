"use client";

import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

interface HomePopup {
  contactUrl?: string; // URL for "Contact Me" button
  reappearHours?: number; // After closing, show again after these hours
}

const STORAGE_KEY = "home_popup_closed_at";

export const HomePopup: React.FC<HomePopup> = ({
  contactUrl = "https://kinsu.onrender.com/pages/Contact/",
  reappearHours = 24,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check localStorage for last closed timestamp
    const lastClosed = localStorage.getItem(STORAGE_KEY);
    if (lastClosed) {
      const diffHours =
        (new Date().getTime() - parseInt(lastClosed, 10)) / 1000 / 60 / 60;
      if (diffHours >= reappearHours) setShow(true);
    } else {
      setShow(true);
    }
  }, [reappearHours]);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-md animate-slideUp rounded-xl shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white p-5">
      {/* Close Icon */}
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-white hover:text-gray-200 transition"
        aria-label="Close"
      >
        <FiX size={24} />
      </button>

      <h2 className="text-lg font-bold mb-2">Website Under Development 🚀</h2>
      <p className="text-sm mb-4">
        I am making it better day by day. If you find any mistake or want to
        contribute, feel free to contact me!
      </p>

      <div className="flex justify-end gap-3">
        <a
          href={contactUrl}
          className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-900 transition"
        >
          Close
        </button>
      </div>

      {/* Slide-up animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%) translateX(-50%);
            opacity: 0;
          }
          to {
            transform: translateY(0) translateX(-50%);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
