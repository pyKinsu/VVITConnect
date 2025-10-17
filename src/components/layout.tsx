
"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <nav
        className={cn(
          "flex h-[3.5rem] w-full items-center border-b border-border",
          "bg-background/80 px-4 shadow-sm"
        )}
      >
        {/* Desktop Logo */}
        <Link href="/" className="hidden md:block select-none" prefetch={false}>
          <Image
            src="/logo.png"
            alt="Bright Minds Logo"
            width={130}
            height={36}
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
            alt="Bright Minds Logo"
            width={110}
            height={30}
            priority
            className="h-7 w-auto object-contain"
          />
        </Link>

        {/* Nav Links */}
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-[15px] font-medium sm:gap-8 sm:pr-8">
            <Link
              href="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="hover:text-primary transition-colors duration-200"
            >
              Courses
            </Link>
            <Link
              href="/gallery"
              className="hover:text-primary transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Theme Toggle (Dark/Light Mode) */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}


export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        {/* Left Section: School Info */}
        <div className="space-y-3 text-center sm:text-left">
          <h3 className="text-lg font-bold text-foreground">
            Bright Minds Tuition Center
          </h3>
          <p className="text-sm max-w-sm">
            Providing quality education and personal guidance for Classes 1 to 6.  
            Building strong foundations for lifelong learning.
          </p>
          <div className="flex flex-col items-center sm:items-start text-sm mt-3 space-y-1">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> <span>info@brightminds.edu.in</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="flex flex-col sm:items-start items-center space-y-2">
          <h4 className="text-sm font-semibold text-foreground uppercase">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-1 text-sm">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About Us
            </Link>
            <Link href="/courses" className="hover:text-foreground transition-colors">
              Courses
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right Section: Policies + Social */}
        <div className="flex flex-col items-center sm:items-end space-y-3">
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full p-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-xs font-medium text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Future Lines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
