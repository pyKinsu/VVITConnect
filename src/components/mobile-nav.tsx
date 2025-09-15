"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { externalLinks, siteLinks } from "@/lib/constants";
import { Separator } from "./ui/separator";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const handleCloseSheet = () => setOpen(false);

  const socials = [
    { name: "GitHub", href: "https://github.com/pykinsu" },
    { name: "Community", href: "https://t.me/VVITConnect" },
    { name: "Twitter", href: "https://twitter.com/pykinsu" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className={className}>
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        {/* Scrollable content wrapper */}
        <div className="h-full overflow-y-auto p-6">
          <h2 className="mb-4 text-center text-lg font-semibold">
            Legal Links
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

          <Separator className="my-4" />

          <h2 className="mb-4 text-center text-lg font-semibold">
            Reach Admin
          </h2>
          <ul className="space-y-3">
            {externalLinks.map((link) => (
              <li key={link.href}>
                <Button variant="outline" asChild>
                  <Link
                    href={link.href}
                    className="w-full"
                    target="_blank"
                    onClick={handleCloseSheet}
                  >
                    {link.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>

          <Separator className="my-4" />

          <h2 className="mb-4 text-center text-lg font-semibold">Socials</h2>
          <ul className="space-y-3">
            {socials.map((link) => (
              <li key={link.href}>
                <Button variant="outline" asChild>
                  <Link
                    href={link.href}
                    className="w-full"
                    target="_blank"
                    onClick={handleCloseSheet}
                  >
                    {link.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
