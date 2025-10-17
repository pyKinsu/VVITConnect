import { Home } from "@/landing/Home";
import { Classes } from "@/components/Classes";
import HomePopup from "@/components/HomePopup"; // default export now

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <div className="flex gap-4 mb-4">
        <Image
          src="/kids.png"
          alt="Decorative 1"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src="/admit.png"
          alt="Decorative 2"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
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
