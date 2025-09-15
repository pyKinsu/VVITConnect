
"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <nav
        className={cn(
          "flex h-[3.5rem] w-full items-center border-b border-border",
          "bg-accent/20 px-4"
        )}
      >
        {/* Desktop Logo */}
        <Link href="/" className="hidden md:block select-none" prefetch={false}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={32}
            priority
            className="h-8 w-auto object-contain transition-opacity hover:opacity-80"
          />
        </Link>

        {/* Mobile Nav Toggle */}
        <MobileNav className="md:hidden" />

        {/* Mobile Logo */}
        <Link href="/" className="block md:hidden ml-4" prefetch={false}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={32}
            priority
            className="h-7 w-auto object-contain"
          />
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <div className="hidden items-center gap-4 text-lg sm:gap-8 sm:pr-8 md:flex">
            <Link href="/" className="hover:underline transition-colors duration-200">
              Home
            </Link>
            <Link
              target="_blank"
              href="https://github.com/pykinsu/insta-api"
              className="hover:underline transition-colors duration-200"
            >
            GitHub
            </Link>
            <Link
              target="_blank"
              href="https://github.com/pykinsu"
              className="hover:underline transition-colors duration-200"
            >
              Contribute
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left Section */}
        <div className="space-y-2 text-center sm:text-left">
          <p className="text-sm font-semibold text-yellow-500 animate-pulse">
            ⚠️ Not affiliated with VVIT
          </p>
          <nav className="flex flex-wrap justify-center gap-4 text-xs font-medium sm:justify-start sm:text-sm">
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">
              Disclaimer
            </Link>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-3 sm:items-end">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://twitter.com/pykinsu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="rounded-full p-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/pykinsu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 hover:bg-muted transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Credit Line */}
          <p className="text-xs text-muted-foreground">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/pykinsu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              @pyKinsu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
