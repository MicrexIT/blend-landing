import React from "react";

export function Perks({ Bottom, recruiter, children }) {
  return (
    <section
      className={`pb-16 bg-gradient-to-bl from-purple-900 to-purple-brilliant flex flex-col relative z-0 pt-14 md:pt-20 lg:pt-32 space-x-6 md:space-x-12 lg:space-x-20 xl:space-x-28 ${
        recruiter ? "md:space-x-0 lg:space-x-0 xl:space-x-0" : ""
      }`}
    >
      {children}
      <div className="flow-band skew-y-12 relative"></div>
      {Bottom}
    </section>
  );
}
