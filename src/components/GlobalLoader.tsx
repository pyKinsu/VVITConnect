"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Spinner from "@/components/Spinner";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);

    // Hide loader after short delay or when page content renders
    const timer = setTimeout(() => setLoading(false), 500); // 0.5s minimum spinner
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <Spinner />
    </div>
  );
}
