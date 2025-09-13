import React from "react";

const BCA = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-transparent">
      {/* Title */}
      <h2 className="text-2xl font-bold flex items-center gap-2 text-white mb-6">
        🎓 Choose Your Semester
      </h2>

      {/* Semester Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md w-full">
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl shadow-md transition">
          Semester 1
        </button>
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl shadow-md transition">
          Semester 2
        </button>
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl shadow-md transition">
          Semester 3
        </button>
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl shadow-md transition">
          Semester 4
        </button>
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl shadow-md transition">
          Semester 5
        </button>
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl shadow-md transition">
          Semester 6
        </button>
      </div>
    </div>
  );
};

export default BCA;
