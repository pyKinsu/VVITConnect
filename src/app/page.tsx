import { Home } from "@/landing/Home";
import { Classes } from "@/components/Classes";
import HomePopup from "@/components/HomePopup"; // default export now

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-4 text-center text-4xl font-extrabold">
        Choose Your Class Below Or For Contacting Us
      </h1>

      <Classes />

      <section>
        <Home />
      </section>

      {/* Popup */}
      <HomePopup hoursUntilNext={16} /> {/* popup will show again after 12 hours */}
    </div>
  );
}
