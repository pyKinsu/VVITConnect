"use client";

import ComingSoon from "@/app/ComingSoon/page";

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
