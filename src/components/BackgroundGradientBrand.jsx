import React from "react";
export function BackgroundGrandientBand() {
  return (
    <div
      style={{
        position: "absolute",
        background:
          "linear-gradient(99.35deg, #701DDA -6.12%, #E98000 171.94%)",
        mixBlendMode: "multiply",
      }}
      className="absolute z-10 top-0 bottom-0 left-0 right-0"
    ></div>
  );
}
