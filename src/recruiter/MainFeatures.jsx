import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { Views } from "../views";

const mainFeatures = {
  titleNormal: "Recevez uniquement des ",
  titleBold: "candidatures qualifiées.",
  features: [
    "Matching du culture fit",
    "Matching des competences & experiences",
    "Matching des préfèrences de carrière",
  ],
  callToAction: "Obtenez votre accès gratuit",
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
    <Views.MainFeatures source={source} mainFeatures={mainFeatures}>
      <div className=" flex flex-col items-center justify-center z-20 gap-5">
        <div className="w-72 md:w-96 lg:w-400 xl:w-500 relative">
          <Image fluid={source} className="z-30 mb-4 md:mb-8 lg:mb-2" />
        </div>
      </div>
    </Views.MainFeatures>
  );
}
