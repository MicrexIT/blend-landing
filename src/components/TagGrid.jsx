import * as React from "react";

export function TagGrid({ title, optionalStyle, children }) {
  return (
    <div className="relative z-20 w-full flex flex-col items-center space-y-2 md:space-y-2.5 lg:space-y-3 mb-12">
      <span className="font-serif text-white text-sm font-bold">{title}</span>
      <div
        className={`space-x-2.5 mx-auto sm:mx-10 md:mx-28 lg:mx-40 xl:mx-60 flex flex-row justify-center items-center flex-wrap align-middle ${optionalStyle}`}
      >
        {children}
      </div>
    </div>
  );
}
