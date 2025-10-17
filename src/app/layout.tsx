import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";

import { Navbar, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import PageLoader from "@/components/PageLoader"; // Global loader
import { cn } from "@/lib/utils";
import "./globals.css";

// ✅ Load global font
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// ✅ Updated metadata for VVIT Connect
export const metadata: Metadata = {
  title: "Future-Lines by @pyKinsu",
  description:
    "Your all-in-one study platform for your childs",
};

// ✅ Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground font-sans antialiased transition-colors duration-300"
        )}
      >
        <ThemeProvider
          attribute="class"      // allows Tailwind dark mode via class
          defaultTheme="light"   // default light mode
          enableSystem={false}   // ignore system preference
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            {/* Navbar */}
            <Navbar />

            {/* Global Page Loader */}
            <PageLoader />

            {/* Main content */}
            <main className="flex-grow px-2 sm:px-4 py-8">{children}</main>

            {/* Footer */}
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
