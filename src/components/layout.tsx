
"use client";

import React from "react";
import Link from "next/link";

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
            src="/images/logo.png"
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
            src="/images/logo.png"
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
    <footer className="w-full bg-background text-muted-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Info + Links */}
        <div className="text-center sm:text-left space-y-2">
          <p className="text-sm font-semibold text-yellow-500 animate-pulse">
            ⚠️ Not affiliated with VVIT
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs sm:text-sm font-medium">
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end gap-4">
          {/* Telegram */}
          <a
            href="https://t.me/pykinsu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            aria-label="Telegram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 240 240">
              <path d="M120,0C53.7,0,0,53.7,0,120s53.7,120,120,120s120-53.7,120-120S186.3,0,120,0z M173.4,80.2l-19.3,91.2
                c-1.5,6.8-5.6,8.4-11.4,5.3l-31.4-23.1l-15.1,14.5c-1.7,1.7-3.1,3.1-6.3,3.1l2.3-32.7l59.7-53.8c2.6-2.3-0.6-3.6-4.1-1.3
                l-73.8,46.4l-31.8-9.9c-6.9-2.1-7-6.9,1.4-10.2l124.3-47.9C170.2,65.7,175.1,69.1,173.4,80.2z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/pykinsu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 
                0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 
                1.205.084 1.838 1.236 1.838 1.236 
                1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605 
                -2.665-.3-5.466-1.335-5.466-5.93 
                0-1.31.468-2.38 1.236-3.22 
                -.123-.303-.535-1.523.117-3.176 
                0 0 1.008-.322 3.3 1.23 
                .957-.266 1.983-.399 3.003-.404 
                1.02.005 2.047.138 3.006.404 
                2.28-1.552 3.285-1.23 3.285-1.23 
                .653 1.653.242 2.873.12 3.176 
                .77.84 1.233 1.91 1.233 3.22 
                0 4.61-2.807 5.625-5.48 5.92 
                .43.372.823 1.102.823 2.222 
                0 1.606-.015 2.896-.015 3.293 
                0 .32.216.694.825.576 
                C20.565 22.092 24 17.592 24 12.297 
                c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
