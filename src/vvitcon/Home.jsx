"use client";

import { Shield, CheckCircle, Zap, MonitorPlay, ArrowDown } from "lucide-react";
import { FrequentlyAsked } from "@/components/FrequentlyAsked";

export function Home() {
  return (
    <>
      <section id="features" className="w-full scroll-mt-12 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="section-badge">Why Choose Us ?</span>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Easy, Free and Trusted
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                Built for learners, who are seeking syllabus and study
                materials here everything is at one place 🙌🏻.
              </p>
            </div>

            {/* Hero Section 
            <section id="hero">
              {/* Arrow & How it works
              <div className="mt-10 group cursor-pointer">
                <a href="#howitworks">
                  <div className="text-muted-foreground mb-2 text-sm sm:text-base group-hover:underline transition duration-200">
                    Learn how it works
                  </div>
                  <ArrowDown className="mx-auto h-6 w-6 animate-bounce text-teal-500 group-hover:text-teal-400 transition duration-300" />
                </a>
              </div>
            </section> */}

            {/* CARD SECTION MATCHING INSTAGRAM STYLE */}
            <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-teal-400" />,
                  title: "Free Forever",
                  description:
                    "No paywalls, ads, or logins. Just pure command-line knowledge.",
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-teal-400" />,
                  title: "No Login/Signup",
                  description:
                    "You Dont Need to login or signup to jse this.",
                },
                {
                  icon: <Zap className="h-8 w-8 text-teal-400" />,
                  title: "Super Fast UI",
                  description:
                    "Loads instantly, even inside Termux's built-in browser.",
                },
                {
                  icon: <MonitorPlay className="h-8 w-8 text-teal-400" />,
                  title: "Trusted",
                  description:
                    "Every Resource Belong To Trusted Sources",
                },
              ].map(({ icon, title, description }, index) => (
                <div
                  key={index}
                  className="section-box flex flex-col items-center justify-center space-y-3 p-6 text-center"
                >
                  {icon}
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {description}
                  </p>
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
