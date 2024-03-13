import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
      break;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x},${y})` }}
    >
      <Link
        className="text-forground rounded-full flex items-center justify-center"
        aria-label={label}
        href={link}
        target={newTab ? "_blank" : "_self"}
      >
        <span className="relative w-14 h-14 p-4">{getIcon(icon)}</span>
      </Link>
    </div>
  );
};

export default NavButton;
