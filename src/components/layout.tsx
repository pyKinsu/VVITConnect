"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";

/* ------------------ NAVBAR ------------------ */
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
            alt="Future Lines Logo"
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
            alt="Future Lines Logo"
            width={110}
            height={30}
            priority
            className="h-7 w-auto object-contain"
          />
        </Link>

        {/* Nav Links */}
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-[15px] font-medium sm:gap-8 sm:pr-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

/* ------------------ FOOTER ------------------ */
export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-start gap-10 px-6 py-12">
        
        {/* Left: Quick Links */}
        <div className="flex flex-col space-y-3 order-2 sm:order-1 w-full sm:w-auto">
          <h4 className="text-sm font-semibold uppercase">Quick Links</h4>
          <nav className="flex flex-col gap-1 text-sm">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link>
            <Link href="/courses" className="hover:text-teal-400 transition-colors">Courses</Link>
            <Link href="/gallery" className="hover:text-teal-400 transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col space-y-3 order-3 sm:order-3 w-full sm:w-auto text-sm">
          <h4 className="text-sm font-semibold uppercase">Contact Us</h4>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal-400" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-teal-400" />
              <span>info@futurelines.in</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full p-2 hover:bg-white/10 transition-colors"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 hover:bg-white/10 transition-colors"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        {/* Center: School Info */}
        <div className="flex flex-col text-center sm:text-left space-y-2 order-1 sm:order-2 w-full sm:w-auto">
          <h3 className="text-lg font-bold text-white">Future Lines</h3>
          <p className="text-sm text-gray-300 max-w-xs">
            Providing quality education and personal guidance for Classes 1–6.  
            Building strong foundations for lifelong learning.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Future Lines. All rights reserved.
      </div>
    </footer>
  );
}
