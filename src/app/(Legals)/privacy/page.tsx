"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Privacy Policy</h1>
      <div className="space-y-4 text-lg leading-relaxed text-foreground">
        <p>
          At <strong>VVIT Connect</strong>, your privacy is very important to us.
          This page explains how we handle information:
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p>
          We do not require user accounts to access content. If you use our
          contact form, we collect only the details you provide (such as name,
          email, and your message).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
        <p>
          Information submitted through the contact form or email is used only to
          respond to your query or suggestion. We do not sell, trade, or share
          your personal information with third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies & Analytics</h2>
        <p>
          This website may use cookies or analytics tools to improve performance
          and understand usage. These tools do not collect personally
          identifiable information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Links</h2>
        <p>
          Our notes and references may link to external websites. We are not
          responsible for the privacy practices or content of external sites.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time. Any changes will
          be posted on this page.
        </p>

        <p>
          📬 If you have privacy concerns, please reach us at{" "}
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
