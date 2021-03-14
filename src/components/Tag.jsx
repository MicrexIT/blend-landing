import * as React from "react";

export function Tag({ content, secondary }) {
  return (
    <div className="bg-white rounded-lg flex flex-row flex-shrink items-center justify-center py-1 px-2 md:px-6 md:py-2 gap-2 md:gap-2.5 ">
      <span
        className={`text-left font-semibold ${
          secondary ? "text-purple-800" : "text-orange-400"
        }`}
      >
        {content}
      </span>
    </div>
  );
}
