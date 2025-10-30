"use client";

import { Github, Twitter, Send, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto my-12 px-4 text-foreground">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        About VVIT-Connect
      </h1>

      {/* Description */}
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
        <strong>VVITCONNECT</strong> is a webapp, ad-free tool for knowing syllabus, Notes, Books & Routines.
        No login, no ads — just clean interface in a fast and private UI.
      </p>

      {/* Author */}
      <div className="text-center mt-8">
        <p className="text-lg font-semibold">
          👨‍💻 Made by <span className="text-primary">Kinsu (@pykinsu)</span>
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Next.js lover, and indie web builder.
        </p>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <Link
            href="https://github.com/pykinsu"
            target="_blank"
            className="bg-card border border-border px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-muted transition"
          >
            <Github className="h-5 w-5" /> GitHub
          </Link>
          <Link
            href="https://t.me/pykinsu"
            target="_blank"
            className="bg-card border border-border px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-muted transition"
          >
            <Send className="h-5 w-5" /> Telegram
          </Link>
          <Link
            href="https://twitter.com/pykinsu"
            target="_blank"
            className="bg-card border border-border px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-muted transition"
          >
            <Twitter className="h-5 w-5" /> Twitter / X
          </Link>
        </div>
      </div>

      {/* GitHub Stars */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <Star className="h-6 w-6 text-yellow-500" />
          Show Some Love
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Like this project? Shate it with your Friends to help others find it and show your support 💖
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="https://github.com/pykinsu"
            target="_blank"
            className="bg-card border border-border px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-muted transition"
          >
            <Github className="h-5 w-5" /> Follow Me
          </Link>
          <Link
            href="https://github.com/pyKinsu/VVITConnect/stargazers"
            target="_blank"
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition"
          >
            <Star className="h-5 w-5" /> Star the Repo
          </Link>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="mt-16 border-t pt-8 border-border space-y-4 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-green-500" />
          Privacy Notice
        </h2>
        <p>This project does not collect, track, or store any user data. No analytics. No ads. No nonsense.</p>
        <p>All operations run client-side using public APIs.</p>
        <p className="italic">Questions? DM me on Telegram.</p>
      </div>
    </div>
  );
}
