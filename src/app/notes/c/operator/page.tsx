"use client";

import LessonNav from "@/components/LessonNav";

export default function Operators() {
  const practiceProblems = [
    {
      title: "Problem 1: Sum, Difference, Product, Quotient, Remainder",
      code: `#include <stdio.h>
int main() 
{
  int a, b;
  printf("Enter two numbers: ");
  scanf("%d %d", &a, &b);
  printf("Sum = %d\\n", a + b);
  printf("Difference = %d\\n", a - b);
  printf("Product = %d\\n", a * b);
  printf("Quotient = %d\\n", a / b);
  printf("Remainder = %d\\n", a % b);
  return 0;
}`
    },
    {
      title: "Problem 2: Average of Three Numbers",
      code: `#include <stdio.h>
int main() {
  float a, b, c;
  printf("Enter three numbers: ");
  scanf("%f %f %f", &a, &b, &c);
  float avg = (a + b + c) / 3;
  printf("Average = %.2f", avg);
  return 0;
}`
    },
    {
      title: "Problem 3: Convert Days into Years, Weeks, Days",
      code: `#include <stdio.h>
int main() {
  int days, years, weeks, remaining_days;
  printf("Enter total number of days: ");
  scanf("%d", &days);
  years = days / 365;
  weeks = (days % 365) / 7;
  remaining_days = (days % 365) % 7;
  printf("Years: %d, Weeks: %d, Days: %d", years, weeks, remaining_days);
  return 0;
}`
    },
    {
      title: "Problem 4: Check Even or Odd",
      code: `#include <stdio.h>
int main() {
  int num;
  printf("Enter a number: ");
  scanf("%d", &num);
  if(num % 2 == 0)
    printf("Even");
  else
    printf("Odd");
  return 0;
}`
    },
    {
      title: "Problem 5: Simple Interest Calculator",
      code: `#include <stdio.h>
int main() {
  float p, r, t, si;
  printf("Enter Principal, Rate, Time: ");
  scanf("%f %f %f", &p, &r, &t);
  si = (p * r * t) / 100;
  printf("Simple Interest = %.2f", si);
  return 0;
}`
    }
  ];

  const operatorTable = [
    ['+', 'Addition', 'Adds two operands', 'a + b', '13'],
    ['-', 'Subtraction', 'Subtracts second operand from first', 'a - b', '7'],
    ['*', 'Multiplication', 'Multiplies two operands', 'a * b', '30'],
    ['/', 'Division', 'Divides first operand by second', 'a / b', '3 (int)'],
    ['%', 'Modulus', 'Returns remainder after division', 'a % b', '1']
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white">
      {/* Back link */}
      <a
        href="/notes/c"
        className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors mb-6"
      >
        ← Back to C Notes
      </a>

      <h1 className="text-3xl font-bold text-white text-center mb-6">Operators in C</h1>

      <p className="text-white/90 mb-2 text-justify">
        An <strong>operator</strong> is a symbol that tells the compiler to perform a specific operation on one or more operands (variables or values).
      </p>

      <p className="text-white/90 mb-4 text-justify">
        <strong>Example:</strong> <code>int sum = a + b;</code> <br />
        '+' is an operator; <code>a</code> and <code>b</code> are operands.
      </p>

      {/* Operator Table */}
      <h2 className="text-2xl font-semibold text-white mb-3 mt-6">Types of Operators in C</h2>

      <h3 className="text-xl font-semibold text-white mt-4 mb-2">Arithmetic Operators</h3>
      <p className="text-white/90 mb-2">
        Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, division, and modulus on numeric values.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-3 py-2 text-left border border-white/20">Operator</th>
              <th className="px-3 py-2 text-left border border-white/20">Name</th>
              <th className="px-3 py-2 text-left border border-white/20">Description</th>
              <th className="px-3 py-2 text-left border border-white/20">Example</th>
              <th className="px-3 py-2 text-left border border-white/20">Result</th>
            </tr>
          </thead>
          <tbody>
            {operatorTable.map(([op, name, desc, example, result], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white/5" : "bg-white/10"}>
                <td className="px-3 py-2">{op}</td>
                <td className="px-3 py-2">{name}</td>
                <td className="px-3 py-2">{desc}</td>
                <td className="px-3 py-2 font-mono">{example}</td>
                <td className="px-3 py-2">{result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Practice Problems */}
      <h2 className="text-2xl font-semibold text-white mb-3 mt-6">Practice Problems with Solutions</h2>

      {practiceProblems.map((item, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
          <pre className="bg-blue-900 text-white p-4 rounded-lg overflow-x-auto font-mono text-sm">
            {item.code}
          </pre>
        </div>
      ))}

      {/* Lesson Navigation */}
      <div className="mt-10">
        <LessonNav
          quiz={{ href: "/quiz/expression-and-statement" }}
          prev={{ href: "/notes/c/expression-and-statement", label: "Previous Lesson" }}
          next={{ href: "/notes/c/decision-making", label: "Next Lesson" }}
        />
      </div>
    </div>
  );
}
