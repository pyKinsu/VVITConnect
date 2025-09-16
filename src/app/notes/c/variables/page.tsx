"use client";

import LessonNav from "@/components/LessonNav";

export default function Variable() {
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
      <h1 className="text-3xl font-bold mb-6 text-white">Variables in C</h1>

      {/* Intro */}
      <p className="text-white/90 text-justify mb-4 leading-relaxed">
        A <strong>variable</strong> in C is like a container that stores data. It can be:
      </p>
      <ul className="list-disc list-inside mb-4 text-white/90">
        <li>Empty</li>
        <li>Hold a single item</li>
        <li>Contain multiple items of same or different types</li>
      </ul>

      <p className="text-white/90 mb-4 font-medium">You can see these containers in our daily life:</p>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="border border-white/30 rounded-lg overflow-hidden">
          <img src="/empty.png" alt="Empty Container" className="w-full h-auto" />
        </div>
        <div className="border border-white/30 rounded-lg overflow-hidden">
          <img src="/con1.png" alt="Single Item Container" className="w-full h-auto" />
        </div>
        <div className="border border-white/30 rounded-lg overflow-hidden">
          <img src="/con2.png" alt="Multiple Item Container" className="w-full h-auto" />
        </div>
      </div>

      <p className="text-white/90 text-justify mb-6">
        So, a variable is a container that occupies a memory location to store a value, and this value can be changed during program execution.
      </p>

      {/* Declaration */}
      <h2 className="text-xl font-semibold text-white mb-2">Declaration</h2>
      <pre className="bg-blue-900 text-white p-4 rounded-lg text-sm font-mono mb-4 overflow-x-auto">
{`Variable_Type Variable_Name;
int number;`}
      </pre>

      {/* Initialization */}
      <h2 className="text-xl font-semibold text-white mb-2">Initialization</h2>
      <pre className="bg-blue-900 text-white p-4 rounded-lg text-sm font-mono mb-4 overflow-x-auto">
{`Variable_Type Variable_Name = value;
int number = 10;`}
      </pre>

      {/* Naming Conventions */}
      <h2 className="text-xl font-semibold text-white mb-2">Naming Conventions</h2>
      <ul className="list-disc list-inside mb-4 text-white/90">
        <li><strong>Pascal Case:</strong> <code>UserName</code></li>
        <li><strong>Camel Case:</strong> <code>userName</code></li>
        <li><strong>Snake Case:</strong> <code>user_name</code></li>
        <li><strong>Kebab Case:</strong> <code>user-name</code> (not used in C)</li>
      </ul>

      {/* Variable Classification Based on Size */}
      <h2 className="text-xl font-semibold text-white mb-2">Variable Classification Based on Size</h2>
      <div className="overflow-x-auto rounded-lg border border-white/30 mb-6">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Data Type</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Keyword</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Size</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Range</th>
            </tr>
          </thead>
          <tbody className="text-white/90">
            {[
              ["char", "char", "1 byte", "-128 to 127 / 0 to 255 (unsigned)"],
              ["Integer", "int", "2 or 4 bytes", "-32,768 to 32,767 / ~±2 billion"],
              ["Short Int", "short", "2 bytes", "-32,768 to 32,767"],
              ["Long Int", "long", "4 or 8 bytes", "Large ranges (platform-dependent)"],
              ["Float", "float", "4 bytes", "±3.4 × 10³⁸ (6-7 digit precision)"],
              ["Double", "double", "8 bytes", "±1.7 × 10³⁰⁸ (15-16 digit precision)"],
              ["Long Double", "long double", "10-16 bytes", "Even higher precision"]
            ].map(([type, keyword, size, range], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white/5" : "bg-white/10"}>
                <td className="px-4 py-2 border border-white/20">{type}</td>
                <td className="px-4 py-2 border border-white/20">{keyword}</td>
                <td className="px-4 py-2 border border-white/20">{size}</td>
                <td className="px-4 py-2 border border-white/20">{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Variable Classification Based on Scope */}
      <h2 className="text-xl font-semibold text-white mb-2">Variable Classification Based on Scope</h2>
      <div className="overflow-x-auto rounded-lg border border-white/30 mb-6">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Type</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Declared In</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Scope / Visibility</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Lifetime</th>
            </tr>
          </thead>
          <tbody className="text-white/90">
            {[
              ["Local", "Inside function/block", "Only within that block", "Until block ends"],
              ["Global", "Outside all functions", "Entire file", "Entire program run"],
              ["Static", "With static keyword", "Limited, retains value", "Until program ends"],
              ["Extern", "In another file", "Used globally", "Depends on origin"],
              ["Register", "With register keyword", "CPU register (if possible)", "Until block ends"]
            ].map(([type, declared, scope, life], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white/5" : "bg-white/10"}>
                <td className="px-4 py-2 border border-white/20">{type}</td>
                <td className="px-4 py-2 border border-white/20">{declared}</td>
                <td className="px-4 py-2 border border-white/20">{scope}</td>
                <td className="px-4 py-2 border border-white/20">{life}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Format Specifiers */}
      <h2 className="text-xl font-semibold text-white mb-2">Format Specifiers</h2>
      <div className="overflow-x-auto rounded-lg border border-white/30 mb-6">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Specifier</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Data Type</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Example Usage</th>
              <th className="px-4 py-2 text-left font-semibold border border-white/20">Output Example</th>
            </tr>
          </thead>
          <tbody className="text-white/90">
            {[
              ["%d", "int", 'printf("%d", 25);', "25"],
              ["%f", "float / double", 'printf("%.2f", 5.6789);', "5.68"],
              ["%lf", "double", 'printf("%.15lf", 3.1415926535);', "3.141592653500000"],
              ["%c", "char", 'printf("%c", \'A\');', "A"],
              ["%s", "string", 'printf("%s", "Hello");', "Hello"]
            ].map(([specifier, dtype, example, output], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white/5" : "bg-white/10"}>
                <td className="px-4 py-2 border border-white/20">{specifier}</td>
                <td className="px-4 py-2 border border-white/20">{dtype}</td>
                <td className="px-4 py-2 border border-white/20"><code>{example}</code></td>
                <td className="px-4 py-2 border border-white/20">{output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Lesson Navigation */}
      <div className="mt-10">
        <LessonNav
          quiz={{ href: "/quiz/variable" }}
          prev={{ href: "/notes/c/constants", label: "Previous Lesson" }}
          next={{ href: "/notes/c/operators", label: "Next Lesson" }}
        />
      </div>
    </div>
  );
}
