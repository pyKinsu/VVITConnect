import React from "react";

const BCA = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 pt-10 bg-transparent">
      {/* Title */}
      <h2 className="text-2xl font-bold flex items-center gap-2 text-white mb-4">
        🎓 Choose Your Semester
      </h2>

      {/* Semester Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md w-full">
        {Array.from({ length: 6 }, (_, i) => (
          <button
            key={i + 1}
            className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl shadow-md transition"
          >
            Semester {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BCA;
