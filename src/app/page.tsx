"use client";

import { useState, useEffect } from "react";
import { Home } from "@/vvitcon/Home";
import { Branches } from "@/components/Branches";
import HomePopup from "@/components/HomePopup";
import Spinner from "@/components/Spinner";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  // Simulate page load (or you can tie this to actual data fetch)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // show spinner 0.8s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-4 text-center text-4xl font-extrabold">
        Choose Your Branch Below
      </h1>

      <Branches />

      <section>
        <Home />
      </section>

      {/* Popup */}
      <HomePopup hoursUntilNext={16} /> {/* popup will show again after 16 hours */}
    </div>
  );
}
