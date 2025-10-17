type NavLink = {
  name: string;
  href: string;
};

export const siteLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Classes",
    href: "/classes",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const externalLinks: NavLink[] = [
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Disclaimer",
    href: "/disclaimer",
  },
];
