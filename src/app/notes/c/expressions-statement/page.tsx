"use client";

import LessonNav from "@/components/LessonNav";

export default function ExpressionAndStatement() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white">

      {/* Back link */}
      <a
        href="/notes/c"
        className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors mb-6"
      >
        ← Back to C Notes
      </a>

      {/* Expression Section */}
      <div className="bg-white/5 p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-white mb-4">Expression</h1>
        <p className="text-white/90 mb-2 text-justify">
          A combination of operands and operators is called an <strong>expression</strong> in C.
        </p>
        <p className="text-white/90 mb-2"><strong>Example:</strong> c = a + b;</p>
        <p className="text-white/90 text-sm leading-relaxed">
          a and b are operands<br/>
          + is an arithmetic operator<br/>
          = is an assignment operator<br/>
          The whole part a + b is an expression.
        </p>
      </div>

      {/* Statement Section */}
      <div className="bg-white/5 p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-white mb-4">Statement</h1>
        <p className="text-white/90 mb-4 text-justify">
          A <strong>statement</strong> is a complete instruction in C that performs an action. Every C statement usually ends with a semicolon (<code>;</code>).
        </p>

        <h2 className="text-xl font-semibold text-white mb-2">Types of Statements in C</h2>
        <div className="border-t border-white/20 my-2"></div>

        {/* Individual Statements */}
        <div className="mb-3">
          <h3 className="font-semibold text-white">Declaration Statement</h3>
          <p className="text-white/90 font-mono bg-blue-900 p-2 rounded my-1">int x;</p>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-white">Assignment Statement</h3>
          <p className="text-white/90 font-mono bg-blue-900 p-2 rounded my-1">x = 10;</p>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-white">Expression Statement</h3>
          <p className="text-white/90 font-mono bg-blue-900 p-2 rounded my-1">a + b; <br />x++;</p>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-white">Function Call Statement</h3>
          <p className="text-white/90 font-mono bg-blue-900 p-2 rounded my-1">printf("Hello");</p>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-white">Control Flow Statement</h3>
          <p className="text-white/90 font-mono bg-blue-900 p-2 rounded my-1">if, while, for, switch</p>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-white">Compound Statement (Block)</h3>
          <p className="text-white/90 mb-2">
            A compound statement is a group of one or more statements enclosed within curly braces {'{}'}. It is also called a block.
          </p>
          <pre className="bg-blue-900 text-white p-4 rounded-lg font-mono overflow-x-auto">
{`{
  int a;
  int b;
  int c = a + b;
}`}
          </pre>
        </div>
      </div>

      {/* Lesson Navigation */}
      <div className="mt-10">
        <LessonNav
          quiz={{ href: "/quiz/expression-and-statement" }}
          prev={{ href: "/notes/c/variable", label: "Previous Lesson" }}
          next={{ href: "/notes/c/operators", label: "Next Lesson" }}
        />
      </div>
    </div>
  );
}
