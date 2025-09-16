"use client";

import LessonNav from "@/components/LessonNav";

export default function Datatypes() {
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
      <h1 className="text-3xl font-bold mb-6 text-white">
       Data Types
      </h1>

      {/* Intro */}
      <p className="text-white/90 text-justify mb-6 leading-relaxed">
        Data types define the type of data a variable can hold. It helps the
        compiler understand how much memory to allocate and what kind of
        operations can be performed on the data.
      </p>

      <p className="text-white/90 text-justify mb-6 leading-relaxed">
        Suppose we have a mix of dry fruits. It is very difficult to separate
        individual dry fruits from the mix. So, it is better to arrange them in
        different containers to make the process easier. Data types work in a
        similar way—we define a data type according to the kind of data, just
        like choosing the right container based on the item.
      </p>

      {/* Images */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <div className="text-center">
          <img
            src="/course/dryfruits.png"
            alt="Mix Dry Fruits"
            className="rounded-xl shadow-md max-w-full h-auto"
          />
          <p className="mt-2 text-white/80 text-sm">Mix Dry Fruits</p>
        </div>
        <div className="text-center">
          <img
            src="/course/fruit.png"
            alt="Fruits in Container"
            className="rounded-xl shadow-md max-w-full h-auto"
          />
          <p className="mt-2 text-white/80 text-sm">Fruit in Container</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-white mb-3">
        Categories of Data Types
      </h2>

      <div className="text-center mb-6">
        <img
          src="/course/datatypes.png"
          alt="Data Type Categories"
          className="rounded-xl shadow-md mx-auto max-w-full h-auto"
        />
        <p className="mt-2 text-white/80 text-sm">
          C supports multiple data type categories
        </p>
      </div>

      {/* Primitive Data Types Table */}
      <div className="overflow-x-auto rounded-lg border border-white/30 mb-6">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Type</th>
              <th className="px-4 py-2 text-left font-semibold">Description</th>
              <th className="px-4 py-2 text-left font-semibold">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white/5">
              <td className="px-4 py-2 text-white/90">Primitive</td>
              <td className="px-4 py-2 text-white/90">Simple values</td>
              <td className="px-4 py-2 text-white/90">int, char, float, double, void</td>
            </tr>
            <tr className="bg-white/10">
              <td className="px-4 py-2 text-white/90">Derived</td>
              <td className="px-4 py-2 text-white/90">Derived from primitive types</td>
              <td className="px-4 py-2 text-white/90">array, pointer, function</td>
            </tr>
            <tr className="bg-white/5">
              <td className="px-4 py-2 text-white/90">User Defined</td>
              <td className="px-4 py-2 text-white/90">Defined by user</td>
              <td className="px-4 py-2 text-white/90">struct, union, enum, typedef</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Example int */}
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">Example: int</h3>
      <pre className="bg-blue-900 text-white p-4 rounded-lg text-sm font-mono mb-4">
{`int age = 25;
unsigned int salary = 50000;`}
      </pre>

      <p className="text-white/90 mb-6">
        Here, <strong>age</strong> and <strong>salary</strong> are variables of type int.
      </p>

      {/* Images for float, char, double */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <div className="text-center">
          <img
            src="/course/float.png"
            alt="Float Example"
            className="rounded-xl shadow-md max-w-full h-auto"
          />
          <p className="mt-2 text-white/80 text-sm">Float Example</p>
        </div>
        <div className="text-center">
          <img
            src="/course/antrakshi.png"
            alt="Char Example"
            className="rounded-xl shadow-md max-w-full h-auto"
          />
          <p className="mt-2 text-white/80 text-sm">Char Example</p>
        </div>
      </div>

      <div className="mt-10">
        <LessonNav
          quiz={{ href: "/quiz/datatypes" }}
          prev={{ href: "/notes/c/keywords", label: "Previous Lesson" }}
          next={{ href: "/notes/c/constant", label: "Next Lesson" }}
        />
      </div>
    </div>
  );
}
