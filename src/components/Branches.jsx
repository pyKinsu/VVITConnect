import { useRouter } from "next/router";

interface BranchCardProps {
  image: string;
  title: string;
  link: string;
}

const BranchCard = ({ image, title, link }: BranchCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
      className="cursor-pointer flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300"
    >
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/20 hover:border-teal-400/50 transition-colors duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="mt-4 text-white text-lg font-semibold">{title}</span>
    </div>
  );
};

export function Branches() {
  const branches = [
    { title: "BCA", image: "/BCA.png", link: "/bca" },
    { title: "BBA", image: "/BBA.png", link: "/bba" },
    { title: "BTech", image: "/BTech.png", link: "/btech" },
  ];

  return (
    <div className="flex justify-center gap-12 flex-wrap py-8">
      {branches.map((branch) => (
        <BranchCard
          key={branch.title}
          image={branch.image}
          title={branch.title}
          link={branch.link}
        />
      ))}
    </div>
  );
}
