import React from "react";

const semesters = [1, 2, 3, 4, 5, 6];

const BCA = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      {/* Title */}
      <h2 className="text-3xl font-extrabold flex items-center gap-2 text-white mb-8">
        🎓 Choose Your Semester
      </h2>

      {/* Semester Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-lg w-full">
        {semesters.map((num) => (
          <button
            key={num}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 
                       text-white py-3 rounded-2xl shadow-lg 
                       transition-all duration-200 font-medium"
            aria-label={`Semester ${num}`}
          >
            Semester {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BCA;
