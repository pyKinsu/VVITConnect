"use client";

import { ShieldCheck, BookOpen, Users, Award } from "lucide-react";
import { FrequentlyAsked } from "@/components/FrequentlyAsked";

export function Home() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section id="features" className="w-full scroll-mt-12 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="section-badge">Why Choose Us?</span>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Quality Education with Personal Attention
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                We provide a nurturing environment where every student receives
                individual attention, strong guidance, and effective learning methods.
              </p>
            </div>

            {/* Features Section */}
            <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                {
                  icon: <BookOpen className="h-8 w-8 text-teal-500" />,
                  title: "Experienced Teachers",
                  description:
                    "Our qualified teachers focus on concept clarity and real understanding.",
                },
                {
                  icon: <Users className="h-8 w-8 text-teal-500" />,
                  title: "Small Batch Size",
                  description:
                    "We limit class size to ensure every child gets personal attention.",
                },
                {
                  icon: <Award className="h-8 w-8 text-teal-500" />,
                  title: "Regular Tests & Feedback",
                  description:
                    "Weekly assessments and parent updates to track student progress.",
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-teal-500" />,
                  title: "Safe & Friendly Environment",
                  description:
                    "We maintain a comfortable, supportive space for young learners to thrive.",
                },
              ].map(({ icon, title, description }, index) => (
                <div
                  key={index}
                  className="section-box flex flex-col items-center justify-center space-y-3 p-6 text-center border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {icon}
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FrequentlyAsked />
    </>
  );
}
