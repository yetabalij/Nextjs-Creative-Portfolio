import Link from "next/link";
import React from "react";

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <Link
      href={demoLink}
      className="flex items-center justify-between w-full relative rounded-lg 
      overflow-hidden p-6 custom-bg text-white cursor-pointer"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="">{name}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p>{new Date(date).toDateString()}</p>
    </Link>
  );
};

export default ProjectLayout;
