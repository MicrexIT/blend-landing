import React from "react";

export function Perks({ Bottom, recruiter, children }) {
  return (
    <section
      className={`pb-16 bg-gradient-to-bl from-purple-900 to-purple-brilliant flex flex-col relative z-0 pt-14 md:pt-20 lg:pt-32 space-y-6 md:space-y-12 lg:space-y-20 xl:space-y-28 ${
        recruiter ? "md:space-y-0 lg:space-y-0 xl:space-y-0" : ""
      }`}
    >
      {children}
      <div className="flow-band skew-y-12 relative"></div>
      {Bottom}
    </section>
  );
}
