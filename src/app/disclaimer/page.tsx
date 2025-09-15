"use client";

import React from "react";

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Disclaimer</h1>
      <div className="space-y-4 text-lg leading-relaxed text-foreground">
        <p>
          <strong>VVIT Connect</strong> is an independent platform created for
          the benefit of students of VVIT. We provide syllabus, notes, quizzes,
          and study materials for educational purposes only.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            The content belongs to <strong>VVIT (college)</strong>, and we make
            every effort to ensure it is accurate and up to date.
          </li>
          <li>
            Some information may contain errors, outdated details, or differences
            compared to official sources.
          </li>
          <li>
            We always provide materials from <strong>trusted references</strong>,
            and if you find any mistakes, please contact us with proper
            evidence. We are committed to correcting errors quickly.
          </li>
          <li>
            This website is <strong>not an official VVIT website</strong>. It is
            a student initiative to make learning resources more accessible.
          </li>
          <li>
            Use of this website and its materials is at your own discretion. We
            are not responsible for any loss, academic issue, or misunderstanding
            arising from use of the content.
          </li>
        </ul>

        <p>
          📬 For corrections or concerns, please contact us via the{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact Form
          </a>{" "}
          or by email at{" "}
          <a
            href="mailto:pykinsu@outlook.com"
            className="text-blue-600 hover:underline"
          >
            pykinsu@outlook.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
