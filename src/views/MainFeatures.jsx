import React from "react";
import Image from "gatsby-image";

import { Dot } from "../components/Dot";
import { Button } from "../components/Button";

export function MainFeatures({ mainFeatures, children }) {
  return (
    <section className="main-features pb-12 pt-16 flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12 lg:gap-5">
      <GradientBand />
      <div className="relative z-20 flex flex-col gap-5 mt-7">
        <div className="flex flex-col">
          <h2 className="text-black">{mainFeatures.titleNormal}</h2>
          <h2 className="text-black font-bold">{mainFeatures.titleBold}</h2>
        </div>
        <div className="flex flex-col gap-2.5">
          {mainFeatures.features.map((f) => (
            <FeatureSentence key={f} feature={f} />
          ))}
        </div>
        <div className=" mt-12 md:mt-14 lg:mt-16">
          <Button secondary label={mainFeatures.callToAction} />
        </div>
      </div>
      {children}
    </section>
  );
}

function GradientBand() {
  return (
    <div className="flow-band band1 z-20 absolute top-0 left-0 right-0"></div>
  );
}

function FeatureSentence({ feature }) {
  return (
    <div className="flex flex-row gap-2.5 items-center lg:w-443 xl:w-auto">
      <Dot />
      {feature}
    </div>
  );
}
