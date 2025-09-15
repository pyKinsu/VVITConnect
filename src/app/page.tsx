import { Home } from "@/vvitcon/Home";
import { Branches } from "@/components/Branches";
import HomePopup from "@/components/HomePopup"; // default export now

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-4 text-center text-4xl font-extrabold">
        Choose Your Branch Below
      </h1>

      <Branches />

      <section>
        <Home />
      </section>

      {/* Popup */}
      <HomePopup hoursUntilNext={16} /> {/* popup will show again after 12 hours */}
    </div>
  );
}
