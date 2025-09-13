import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FrequentlyAsked() {
  return (
    <section id="faq" className="w-full scroll-mt-12 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
              Frequently Asked
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Common Questions We Get
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Here&rsquo;s what most Termux users ask us.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6">
            {/* General Section */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-left text-xl font-bold flex items-center">
                <div className="mr-3 rounded-full bg-primary/10 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                General Questions
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="general-1" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    Is the VVIT Connect free?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    Yes! This website is completely free and accessible to everyone.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="general-2" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    Why I Trust You?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    Not at all. But We always share every update and notes from trusted sources.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="general-3" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    Can I use this website offline?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    Yes, you can save pages for offline use. A downloadable PDF will also be available soon.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical Section */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-left text-xl font-bold flex items-center">
                <div className="mr-3 rounded-full bg-primary/10 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                Technical Questions
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="tech-1" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    Does this requires login signup?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    No, you don't need login or signup 
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="tech-2" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    How Can I contact admin
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    just email us kr visit our contact page
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="tech-3" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    How often are study materials updated?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    We regularly update the syllabus, notes, and PDFs to ensure you have the latest content for your courses.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
