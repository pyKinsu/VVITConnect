"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FrequentlyAsked() {
  return (
    <section id="faq" className="w-full scroll-mt-12 py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Common Questions from Parents & Students
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Here are some of the most common questions about our tuition classes and programs.
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
                    Which classes do you teach?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    We currently provide tuition for Classes 1 to 6, covering all major subjects like English, Math, and Science.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-2" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    What is the batch size?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    We keep our batches small (8–10 students) to ensure each student gets personal attention and guidance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-3" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    Do you provide home tuition or only at the center?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    We currently offer tuition at our center, and online classes are also available for select subjects.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Admission Section */}
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
                Admission & Classes
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="admission-1" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    How can I enroll my child?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    You can register directly through our Contact Page or visit our center. Our team will guide you through the simple admission process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="admission-2" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    What are your class timings?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    We offer both morning and evening batches. Timings vary depending on the class and subject schedule.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="admission-3" className="border-b">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-primary hover:no-underline">
                    Do you offer trial classes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-start">
                    Yes, we offer one free demo class so you can experience our teaching style before enrolling.
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
