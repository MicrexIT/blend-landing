import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { Dot } from "../components/Dot";
import { Button } from "../components/Button";
import { CheckTag } from "../components/CheckTag";
import { CheckTagFixed } from "../components/CheckTagFixed";

export function MainFeatures({ mainFeatures, source }) {
  return (
    <section className="main-features pb-12 pt-16 flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12 lg:gap-5">
      <GradientBand />
      <div className="relative z-20 flex flex-col gap-5">
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

      <div className=" flex flex-col items-center justify-end z-20 lg:w-2/3 gap-5">
        <div className="w-72 md:w-96 lg:w-400 xl:w-500 relative">
          <Image fluid={source} className="z-30 mb-4 md:mb-8 lg:mb-2" />
          <CheckTagFixed
            content={
              <>
                Analyze du <span className="font-bold">culture fit</span>,
                matching affinataire
              </>
            }
          />
          <CheckTagFixed
            right
            content={
              <>
                Estimation du <span className="font-bold">salaire</span>,
                candidature simplifiée
              </>
            }
          />
        </div>
        <div className="w-full flex flex-col items-center lg:hidden gap-2.5">
          <CheckTag
            className="lg:hidden "
            content={
              <>
                Analyze du <span className="font-bold">culture fit</span>,
                matching affinataire
              </>
            }
          />
          <CheckTag
            className="lg:hidden"
            content={
              <>
                Estimation du <span className="font-bold">salaire</span>,
                candidature simplifiée
              </>
            }
          />
        </div>
      </div>
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
