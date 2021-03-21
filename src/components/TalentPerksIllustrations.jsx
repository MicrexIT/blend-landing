import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import { Button } from "../components/Button";
export function TalentPerksIllustrations({ perks }) {
  const {
    talentJobOffersPhonePerk,
    talentJobOffersCut,
  } = useStaticQuery(graphql`
    query TalentPerksIllustrations {
      talentJobOffersPhonePerk: file(name: { eq: "phone-mockup-offer" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentJobOffersCut: file(
        name: { eq: "talent-job-offers-cut-illustrated" }
      ) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const jobOfferLeftSource = talentJobOffersCut.cloudinary.fluid;
  const jobOfferRightSource = talentJobOffersPhonePerk.cloudinary.fluid;
  return (
    <div className="relative z-10 w-screen grid grid-cols-3 grid-rows-title-with-split lg:grid-rows-1 items-center md:gap-16 ">
      <div className=" self-center row-start-1 col-span-3 lg:row-span-1 lg:col-span-1 w-full flex flex-col items-center justify-center space-y-4">
        <h2 className="text-white font-medium">{perks.titleNormal}</h2>
        <h2 className="text-white font-bold mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          {perks.titleBold}
        </h2>
        <Button />
      </div>
      {/* <div className="col-span-1 row-start-2 w-1/3 lg:w-1/4 lg:order-1 self-start"> */}
      <div className="col-span-1 row-start-2 lg:row-start-1 col-start-1 self-stretch lg:self-center max-w-xs lg:max-w-sm">
        <Image fluid={jobOfferLeftSource} />
      </div>
      {/* <div className="col-span-1 row-start-2 col-start-2 w-1/3 md:w-1/4 lg:w-1/5 lg:order-3 self-end"> */}
      <div className="col-span-1 row-start-2 lg:row-start-1 col-start-3 self-stretch lg:self-center  max-w-xs lg:max-w-sm">
        <Image fluid={jobOfferRightSource} />
      </div>
    </div>
  );
}
