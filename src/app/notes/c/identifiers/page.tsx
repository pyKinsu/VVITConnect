"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import LessonNav from "@/components/LessonNav"; // adjust path

export default function Identifier() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link
        href="/notes/c"
        className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to C Notes
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-primary">Identifier in C</h1>

      {/* Intro */}
      <p className="text-foreground text-justify mb-6 leading-relaxed">
        An <span className="font-medium">identifier</span> is the name used to
        identify variables, functions, arrays, structures, etc. Suppose a
        contact list in a mobile phone contains names and phone numbers. Here,
        the name in the contact list acts as the identifier, and the phone
        number is the value.
      </p>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/identifier.png"
          alt="Identifier Example"
          className="rounded-xl shadow-md w-[300px]"
        />
      </div>

      {/* Rules */}
      <h2 className="text-2xl font-semibold text-primary mb-3">
        Rules for Identifiers
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground">
        <li>Can contain letters (A–Z, a–z), digits (0–9), and underscore (_)</li>
        <li>Must begin with a letter or underscore</li>
        <li>Cannot be the same as a C keyword</li>
        <li>
          Case-sensitive (<code>total</code>, <code>Total</code>, and{" "}
          <code>TOTAL</code> are different)
        </li>
        <li>No special characters allowed (like @, $, %, etc.)</li>
      </ul>

      {/* Example */}
      <h3 className="text-lg font-semibold text-primary mt-6 mb-2">Example:</h3>
      <pre className="bg-green-800 text-green-100 p-4 rounded-lg text-sm font-mono">
{`int age = 25;
float salary = 50000.50;`}
      </pre>
      <p className="text-foreground mt-2">
        Here, <strong>age</strong> and <strong>salary</strong> are identifiers
        used for variables.
      </p>

      {/* Navigation */}
      <LessonNav
        prev="/notes/c/introduction"
        quiz="/quiz/identifier"
        next="/notes/c/keywords"
      />
    </div>
  );
}
