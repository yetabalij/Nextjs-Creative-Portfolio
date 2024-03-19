import {
  Github,
  Home,
  Linkedin,
  Notebook,
  Palette,
  Phone,
  Youtube,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "youtube":
      return <Youtube className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <Notebook className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer"
      style={{ transform: `translate(${x},${y})` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-white rounded-full flex items-center justify-center custom-bg"
        aria-label={label}
        name={label}
      >
        <span className="relative  w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-center">
          {getIcon(icon)}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <spane
            className="absolute hidden peer-hover:block px2 py1 left-full mx-2 top-1/2 
        -translate-y-1/2 text-white text-sm rounded-md shadow-lg 
        whitespace-nowrap"
          >
            {label}
          </spane>
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
