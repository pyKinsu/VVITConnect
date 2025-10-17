"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { siteLinks, externalLinks } from "@/lib/constants";

// Social Icons
import { FaWhatsapp, FaPhone, FaTwitter } from "react-icons/fa";
import { MdHome, MdLink } from "react-icons/md";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const handleCloseSheet = () => setOpen(false);

  // Socials with proper links
  const socials = [
    { name: "Call Us", href: "tel:+919876543210", icon: <FaPhone /> },
    { name: "WhatsApp", href: "https://wa.me/919876543210", icon: <FaWhatsapp /> },
    { name: "Twitter", href: "https://twitter.com/pykinsu", icon: <FaTwitter /> },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className={className}>
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        <div className="h-full overflow-y-auto p-6 space-y-6">
          {/* Site Navigation */}
          <div>
            <h2 className="mb-4 text-center text-lg font-semibold flex items-center justify-center gap-2">
              <MdHome className="text-xl" /> Site Navigation
            </h2>
            <ul className="mb-8 space-y-3">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Button
                    variant={pathname === link.href ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href={link.href}
                      className="w-full"
                      onClick={handleCloseSheet}
                    >
                      {link.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* External Links */}
          <div>
            <h2 className="mb-4 text-center text-lg font-semibold flex items-center justify-center gap-2">
              <MdLink className="text-xl" /> Legal Pages
            </h2>
            <ul className="space-y-3">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <Button
                    variant={pathname === link.href ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href={link.href}
                      className="w-full"
                      onClick={handleCloseSheet}
                    >
                      {link.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Socials / Contact */}
          <div>
            <h2 className="mb-4 text-center text-lg font-semibold">Contact</h2>
            <ul className="space-y-3">
              {socials.map((link) => (
                <li key={link.href}>
                  <Button
                    variant="outline"
                    asChild
                    className="flex items-center gap-2 w-full"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full"
                      onClick={handleCloseSheet}
                    >
                      {link.icon} {link.name}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
