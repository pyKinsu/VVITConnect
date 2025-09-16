"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";

interface LessonNavProps {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  quiz?: { href: string; label?: string };
}

export default function LessonNav({ prev, next, quiz }: LessonNavProps) {
  return (
    <div className="mt-10 pt-6 border-t border-border space-y-4">
      {/* Quiz Button */}
      {quiz && (
        <div className="flex justify-center">
          <Link
            href={quiz.href}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium w-full sm:w-auto"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            {quiz.label || "Attempt Quiz"}
          </Link>
        </div>
      )}

      {/* Prev + Next */}
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        {prev && (
          <Link
            href={prev.href}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {prev.label}
          </Link>
        )}

        {next && (
          <Link
            href={next.href}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium w-full sm:w-auto"
          >
            {next.label}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
}
