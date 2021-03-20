import React from "react";
import Image from "gatsby-image";

import { Button } from "../components/Button";

// TODO: remove Bottom as it doesnt make any sense... we are not gonna show a pic but a custom <component className=""></component>
// instead, pass a children prop and return the bottom
export function Perks({
  perks,
  sources,
  pictureLeft,
  pictureRight,
  picture,
  children,
}) {
  return (
    <section className="pb-16 bg-gradient-to-bl from-purple-900 to-purple-brilliant flex flex-col relative z-0 pt-14 md:pt-20 lg:pt-32 gap-6 md:gap-12 lg:gap-20 xl:gap-28">
      {children}
      <div className="flow-band skew-y-12 relative"></div>
      <Bottom
        pictureRight={pictureRight}
        pictureLeft={pictureLeft}
        perks={perks}
      />
    </section>
  );
}

function Bottom({ picture, pictureLeft, pictureRight, perks }) {
  if (picture) {
    return (
      <div
        // style={{ minHeight: "535px" }}
        // className="relative z-10 flex flex-row flex-wrap w-screen items-center justify-center pr-8"
        className="relative z-10 w-screen flex flex-col items-center justify-center p-4 gap-20"
        // style={{ minHeight: "700px" }}
      >
        {/* <div className="row-start-1 col-span-2 w-full lg:w-1/4 lg:order-2 flex flex-col items-center"> */}
        <div className=" self-center  gap-4">
          <h2 className="text-white font-medium">
            {perks.titleNormal}
            <span className="text-white font-bold">{perks.titleBold}</span>
          </h2>
          {/* <h2 className="text-white font-bold mb-10 md:mb-12 lg:mb-16 xl:mb-20"> */}
          {/* </h2> */}
        </div>
        {/* <div className="col-span-1 row-start-2 w-1/3 lg:w-1/4 lg:order-1 self-start"> */}
        <div className="col-span-1 row-start-2 lg:row-start-1 col-start-1 self-stretch lg:self-center max-w-xs lg:max-w-sm">
          <Image fluid={picture} />
        </div>
        <Button />
      </div>
    );
  }
  return (
    <div
      // style={{ minHeight: "535px" }}
      // className="relative z-10 flex flex-row flex-wrap w-screen items-center justify-center pr-8"
      className="relative z-10 w-screen grid grid-cols-3 grid-rows-title-with-split lg:grid-rows-1 items-center md:gap-16 "
      // style={{ minHeight: "700px" }}
    >
      {/* <div className="row-start-1 col-span-2 w-full lg:w-1/4 lg:order-2 flex flex-col items-center"> */}
      <div className=" self-center row-start-1 col-span-3 lg:row-span-1 lg:col-span-1 w-full flex flex-col items-center justify-center gap-4">
        <h2 className="text-white font-medium">{perks.titleNormal}</h2>
        <h2 className="text-white font-bold mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          {perks.titleBold}
        </h2>
        <Button />
      </div>
      {/* <div className="col-span-1 row-start-2 w-1/3 lg:w-1/4 lg:order-1 self-start"> */}
      <div className="col-span-1 row-start-2 lg:row-start-1 col-start-1 self-stretch lg:self-center max-w-xs lg:max-w-sm">
        <Image fluid={pictureLeft} />
      </div>
      {/* <div className="col-span-1 row-start-2 col-start-2 w-1/3 md:w-1/4 lg:w-1/5 lg:order-3 self-end"> */}
      <div className="col-span-1 row-start-2 lg:row-start-1 col-start-3 self-stretch lg:self-center  max-w-xs lg:max-w-sm">
        <Image fluid={pictureRight} />
      </div>
    </div>
  );
}
