import React from "react";
import BackgroundImage from "gatsby-background-image-es5";
export function Privacy({ privacy, sources, Button, children }) {
  return (
    <section className="relative p-0 lg:h-screen flex flex-col lg:flex-row">
      <div className="opacity-20 pointer-events-none top-0 left-0 right-0 bottom-0 absolute bg-gradient-to-tl from-purple-600 to-white z-10"></div>
      <div className="relative z-30 flex flex-col pt-11 pb-21 md:pt-21 w-full lg:w-1/2 default-padding-x justify-center">
        <div className="mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-black">{privacy.titleNormal}</h2>
          <h2 className="text-black font-bold mb-5">{privacy.titleBold}</h2>
          {children}
        </div>
        {Button}
      </div>
      <BackgroundImage
        Tag="div"
        fluid={sources}
        className="bg-top relative w-full lg:w-1/2 min-h-sm md:min-h-lg"
      >
        <div className="relative z-20 w-20 md:w-32 lg:w-40"></div>
      </BackgroundImage>
    </section>
  );
}
