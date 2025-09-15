"use client";

import React from "react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-600 via-indigo-700 to-black text-white px-6 text-center">
      {/* Title */}
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
        🚧 Coming Soon
      </h1>

      {/* Quote */}
      <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
        “Knowledge grows best when it’s shared — help us build something
        meaningful for every student at VVIT.”
      </p>

      {/* Contribution Button */}
      <Link
        href="https://github.com/pykinsu"
        target="_blank"
        className="px-6 py-3 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition duration-300 shadow-lg hover:shadow-xl"
      >
        🌟 Follow on GitHub
      </Link>

      {/* Footer Note */}
      <p className="mt-10 text-sm text-gray-400">
        This page is under development. Stay tuned!
      </p>
    </div>
  );
}
