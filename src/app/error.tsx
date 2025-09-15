"use client";

import ComingSoon from "@/components/ComingSoon";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("Caught error:", error);

  return <ComingSoon />;
}
