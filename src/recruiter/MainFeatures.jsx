import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { Views } from "../views";

const mainFeatures = {
  titleNormal: "Recevez des profils qualifiés",
  titleBold: "au-delà du CV",
  features: [
    "Matching de la culture d’entreprise souhaitée",
    "Matching des compétences & expériences",
    "Matching des ambitions de carrière",
  ],
  callToAction: "Essai 30 jours gratuits",
  link: "https://meetings.hubspot.com/yann35",
};

// TODO: change picture
export function MainFeatures({ ...props }) {
  const { recruitermockupmainfeatures } = useStaticQuery(graphql`
    query RecruiterMockupMainFeatures {
      recruitermockupmainfeatures: file(
        name: { eq: "mockup-dashboard-Entreprises" }
      ) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const source = recruitermockupmainfeatures.cloudinary.fluid;
  return (
    <Views.MainFeatures recruiter source={source} mainFeatures={mainFeatures}>
      <div className=" flex flex-col items-center justify-center z-20 space-y-6">
        <div className=" w-363 md:w-550 lg:w-xl relative">
          <Image fluid={source} className="z-30 mb-4 md:mb-8 lg:mb-2" />
        </div>
      </div>
    </Views.MainFeatures>
  );
}
