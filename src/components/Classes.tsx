"use client";
import { useRouter } from "next/navigation";

interface ClassCardProps {
  image: string;
  title: string;
  link: string;
}

const ClassCard = ({ image, title, link }: ClassCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
      className="cursor-pointer flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-black/20 dark:border-white/20 hover:border-teal-400/50 transition-colors duration-300 shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Text adapts to theme */}
      <span className="mt-3 text-black dark:text-white text-base sm:text-lg font-semibold">
        {title}
      </span>
    </div>
  );
};

export function Classes() {
  const classes = [
    { title: "Class 1", image: "/BCA.png", link: "/apply" },
    { title: "Class 2", image: "/BBA.png", link: "/apply" },
    { title: "Class 3", image: "/BTECH.png", link: "/apply" },
    { title: "Class 4", image: "/BCA.png", link: "/apply" },
    { title: "Class 5", image: "/BBA.png", link: "/apply" },
    { title: "Class 6", image: "/BTECH.png", link: "/apply" },
  ];

  return (
    <section className="py-16 flex flex-col items-center gap-10">
      {/* Row 1 */}
      <div className="flex justify-center w-full">
        <ClassCard {...classes[0]} />
      </div>

      {/* Row 2 */}
      <div className="flex justify-center gap-12 w-full">
        <ClassCard {...classes[1]} />
        <ClassCard {...classes[2]} />
      </div>

      {/* Row 3 */}
      <div className="flex justify-center gap-12 flex-wrap w-full">
        <ClassCard {...classes[3]} />
        <ClassCard {...classes[4]} />
        <ClassCard {...classes[5]} />
      </div>
    </section>
  );
}
