import React from "react";
import HomeButton from "../components/HomeButton";

const SubPageLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
      <button className="z-50">
        <HomeButton />
      </button>
      {children}
    </main>
  );
};

export default SubPageLayout;
