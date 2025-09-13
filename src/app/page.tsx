import { Home } from "@/vvitcon/Home";
import { Branches } from "@/components/Branches";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-4 text-center text-4xl font-extrabold">
        Choose Your Branche
      </h1>

      <Branches />
      
      <section>
        <Home />
      </section>
    </div>
  );
}
