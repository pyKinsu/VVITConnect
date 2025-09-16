"use client";

import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Identifier() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link
        href="/notes/c"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to C Notes
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Identifier in C
      </h1>

      {/* Intro */}
      <p className="text-muted-foreground text-justify mb-6 leading-relaxed">
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
      <h2 className="text-xl font-semibold text-secondary mb-3">
        Rules for Identifiers
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Can contain letters (A–Z, a–z), digits (0–9), and underscore (_)</li>
        <li>Must begin with a letter or underscore</li>
        <li>Cannot be the same as a C keyword</li>
        <li>Case-sensitive (<code>total</code>, <code>Total</code>, and <code>TOTAL</code> are different)</li>
        <li>No special characters allowed (like @, $, %, etc.)</li>
      </ul>

      {/* Example */}
      <h3 className="text-lg font-semibold text-secondary mt-6 mb-2">Example:</h3>
      <pre className="bg-green-100 text-green-900 p-4 rounded-lg text-sm font-mono">
{`int age = 25;
float salary = 50000.50;`}
      </pre>
      <p className="text-muted-foreground mt-2">
        Here, <strong>age</strong> and <strong>salary</strong> are identifiers used for variables.
      </p>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-10 pt-6 border-t border-border">
        {/* Previous Lesson */}
        <Link
          href="/notes/c/introduction"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-muted hover:bg-accent transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous Lesson
        </Link>

        {/* Quiz */}
        <Link
          href="/quiz/identifier"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors text-sm font-medium"
        >
          <HelpCircle className="w-4 h-4 mr-2" />
          Attempt Quiz
        </Link>

        {/* Next Lesson */}
        <Link
          href="/notes/c/keywords"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          Next Lesson
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
