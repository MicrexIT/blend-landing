import React from "react";

export function Perks({ Bottom, recruiter, children }) {
  return (
    <section
      className={`pb-16 bg-gradient-to-bl from-purple-900 to-purple-brilliant flex flex-col relative z-0 pt-14 md:pt-20 lg:pt-32 gap-6 md:gap-12 lg:gap-20 xl:gap-28 ${
        recruiter ? "md:gap-0 lg:gap-0 xl:gap-0" : ""
      }`}
    >
      {children}
      <div className="flow-band skew-y-12 relative"></div>
      {Bottom}
    </section>
  );
}
