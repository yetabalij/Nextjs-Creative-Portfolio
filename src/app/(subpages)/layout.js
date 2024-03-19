import React from "react";

const SubPageLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
      <button className="text-white">Home</button>
      {children}
    </main>
  );
};

export default SubPageLayout;
