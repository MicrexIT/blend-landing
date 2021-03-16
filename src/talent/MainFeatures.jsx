import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { Dot } from "../components/Dot";
import { Button } from "../components/Button";
import { CheckTag } from "../components/CheckTag";
import { CheckTagFixed } from "../components/CheckTagFixed";

const mainFeatures = {
  titleNormal: "Plus besoin de",
  titleBold: "scroller des heures",
  features: [
    "Donnez vos critères",
    "On vous fait un séléction de jobs vérifiés",
    "Recevez des invitations de recruteurs",
  ],
  callToAction: "2mn pour s'inscrire",
};

export function MainFeatures({ ...props }) {
  const { talentPhoneMockupFeatures } = useStaticQuery(graphql`
    query TalentPhoneMockupFeature {
      talentPhoneMockupFeatures: file(name: { eq: "phones-mockup-talents" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const source = talentPhoneMockupFeatures.cloudinary.fluid;
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
        <div className="w-72 md:w-96 lg:w-443 xl:w-500 relative">
          <Image fluid={source} className="z-30" />
          <CheckTagFixed
            content={"Analyze du culture fit, matching affinataire"}
          />
          <CheckTagFixed
            right
            content={"Estimation du salaire, candidature simplifiée"}
          />
        </div>
        <div className="w-full flex flex-col items-center lg:hidden gap-2.5">
          <CheckTag
            className="lg:hidden "
            content={"Analyze du culture fit, matching affinataire"}
          />
          <CheckTag
            className="lg:hidden"
            content={"Estimation du salaire, candidature simplifiée"}
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
    <div className="flex flex-row gap-2.5 items-center">
      <Dot />
      {feature}
    </div>
  );
}
