import { Home } from "@/vvitcon/Home";
import { Branches } from "@/components/Branches";

export default function HomePage() {
  return (
    <div className="flex flex-col py-12 px-4 sm:px-8 lg:px-16 space-y-12 bg-background text-foreground transition-colors duration-300">
      
      {/* Page Title */}
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
        Choose Your Branch
      </h1>

      {/* Branches Selection */}
      <div className="mx-auto w-full max-w-5xl">
        <Branches />
      </div>

      {/* Main Home Section */}
      <section className="mx-auto w-full max-w-7xl">
        <Home />
      </section>
    </div>
  );
}
