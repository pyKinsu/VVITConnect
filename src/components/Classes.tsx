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
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 hover:border-teal-400/50 transition-colors duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="mt-3 text-white text-base sm:text-lg font-semibold">{title}</span>
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
    <div className="flex flex-wrap justify-center items-center gap-8 py-12">
      {classes.map((cls) => (
        <ClassCard
          key={cls.title}
          image={cls.image}
          title={cls.title}
          link={cls.link}
        />
      ))}
    </div>
  );
}
