import React from "react";
import Image from "gatsby-image";

import { Dot } from "../components/Dot";
import { Button } from "../components/Button";

export function MainFeatures({ mainFeatures, recruiter = false, children }) {
  return (
    <section className="main-features flex-shrink-0 pb-12 pt-12 lg:pt-26 flex flex-col lg:flex-row lg:justify-between space-y-8 md:space-y-12 lg:space-y-0 lg:space-x-0 xl:space-x-5">
      <GradientBand />
      <div className="relative z-20 flex flex-col space-y-5 lg:space-y-7 xl:space-y-8">
        <div className="flex flex-col">
          <h2 className="text-black">{mainFeatures.titleNormal}</h2>
          <h2 className="text-black font-bold">{mainFeatures.titleBold}</h2>
        </div>
        <div className="flex flex-col space-y-2.5">
          {mainFeatures.features.map((f) => (
            <FeatureSentence key={f} feature={f} />
          ))}
        </div>
        <div className=" mt-12 md:mt-14 lg:mt-16">
          <Button
            secondary
            label={mainFeatures.callToAction}
            link={mainFeatures.link}
            large={recruiter}
          />
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
    <div className="flex flex-row space-x-3 items-center lg:w-550 xl:w-auto">
      <Dot />
      <div>{feature}</div>
    </div>
  );
}
