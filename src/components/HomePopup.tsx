"use client";

import React, { useEffect, useState } from "react";
import { FiX, FiMail } from "react-icons/fi";
import Image from "next/image";

interface HomePopupProps {
  hoursUntilNext?: number; // after how many hours it should show again
}

const HomePopup: React.FC<HomePopupProps> = ({ hoursUntilNext = 24 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("homePopupLastShown");
    const now = new Date().getTime();

    if (!lastShown || now - parseInt(lastShown) > hoursUntilNext * 60 * 60 * 1000) {
      setVisible(true);
      localStorage.setItem("homePopupLastShown", now.toString());
    }
  }, [hoursUntilNext]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white text-black rounded-xl shadow-lg z-50 overflow-hidden animate-slideUp"
    >
      {/* Top Image */}
      <div className="w-full">
        <Image
          src="/admit.png"
          alt="Admissions Open"
          width={500} // set width to maintain aspect ratio
          height={200} // set height as needed
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Top Close */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-black p-1 hover:text-red-500"
        aria-label="close"
      >
        <FiX size={20} />
      </button>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <FiMail /> Announcement
        </h2>
        <p className="text-sm">
          Admissions Are Open At us. If You Are Interested, You Can Contact Me.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-2">
          <a
            href="mailto:info@futurelines.in"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-medium transition"
          >
            Contact Me
          </a>
          <button
            onClick={() => setVisible(false)}
            className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg font-medium transition"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%) translateX(-50%);
            opacity: 0;
          }
          100% {
            transform: translateY(0) translateX(-50%);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePopup;
