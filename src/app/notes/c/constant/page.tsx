"use client";

import LessonNav from "@/components/LessonNav";

export default function Constant() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white">
      {/* Back link */}
      <a
        href="/notes/c"
        className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors mb-6"
      >
        ← Back to C Notes
      </a>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-white">Constants in C</h1>

      {/* Intro */}
      <p className="text-white/90 text-justify mb-6 leading-relaxed">
        A <strong>constant</strong> is a fixed value that does not change
        during the execution of a program. It is also called a{" "}
        <strong>read-only</strong> value. Constants can be of types like
        integer, floating-point, string, or character. They must be initialized
        when declared; otherwise, they may hold garbage values.
      </p>

      {/* Syntax */}
      <p className="text-white/90 mb-6 leading-relaxed">
        <strong>Syntax:</strong>
        <br />
        <code className="bg-white/10 px-1 rounded">const data_type var_name = value;</code>
        <br />
        Example: <code className="bg-white/10 px-1 rounded">const float pi = 3.14;</code>
        <br />
        Or using preprocessor: <code className="bg-white/10 px-1 rounded">#define CONSTANT_NAME value</code>
        <br />
        Example: <code className="bg-white/10 px-1 rounded">#define PI 3.14</code>
      </p>

      {/* Example 1: const */}
      <h2 className="text-xl font-semibold text-white mt-6 mb-2">Example 1: Using <code>const</code></h2>
      <pre className="bg-blue-900 text-white p-4 rounded-lg text-sm font-mono mb-4 overflow-x-auto">
{`#include <stdio.h>
int main() {
    const float PI = 3.14; 
    printf("Value of PI: %.2f\\n", PI);
    return 0;
}`}
      </pre>

      {/* Example 2: #define */}
      <h2 className="text-xl font-semibold text-white mt-6 mb-2">Example 2: Using <code>#define</code></h2>
      <pre className="bg-blue-900 text-white p-4 rounded-lg text-sm font-mono mb-4 overflow-x-auto">
{`#include <stdio.h>
#define PI 3.14
int main() {
    printf("Value of PI: %.2f\\n", PI);
    return 0;
}`}
      </pre>

      {/* Difference Table */}
      <h2 className="text-xl font-semibold text-white mt-6 mb-3">
        Difference Between <code>const</code> and <code>#define</code>
      </h2>
      <div className="overflow-x-auto rounded-lg border border-white/30 mb-6">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Feature</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">const</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">#define</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white/5">
              <td className="px-4 py-2 border border-white/20 text-white/90">Handled by</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">Compiler</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">Preprocessor</td>
            </tr>
            <tr className="bg-white/10">
              <td className="px-4 py-2 border border-white/20 text-white/90">Memory Allocated</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">Yes</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">No</td>
            </tr>
            <tr className="bg-white/5">
              <td className="px-4 py-2 border border-white/20 text-white/90">Type Safety</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">Enforced</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">Not Enforced</td>
            </tr>
            <tr className="bg-white/10">
              <td className="px-4 py-2 border border-white/20 text-white/90">Scope Rules</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">Block/Function/Global</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">Global only</td>
            </tr>
            <tr className="bg-white/5">
              <td className="px-4 py-2 border border-white/20 text-white/90">Error Checking</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">At compile-time</td>
              <td className="px-4 py-2 border border-white/20 text-white/90">None</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lesson Navigation */}
      <div className="mt-10">
        <LessonNav
          quiz={{ href: "/quiz/constant" }}
          prev={{ href: "/notes/c/datatypes", label: "Previous Lesson" }}
          next={{ href: "/notes/c/variables", label: "Next Lesson" }}
        />
      </div>
    </div>
  );
}
