import * as React from "react";

export function TagGrid({ title, optionalStyle, children }) {
  return (
    <div className="w-full flex flex-col items-center gap-2 md:gap-2.5 lg:gap-3">
      <span className="font-serif text-white text-sm font-bold">{title}</span>
      <div
        className={`gap-2.5 mx-auto sm:mx-10 md:mx-28 lg:mx-40 xl:mx-60 flex flex-row justify-center items-center flex-wrap align-middle ${optionalStyle}`}
      >
        {children}
      </div>
    </div>
  );
}
