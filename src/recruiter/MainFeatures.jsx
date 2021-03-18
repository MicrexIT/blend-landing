import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
      recruitermockupmainfeatures: file(name: { eq: "phones-mockup-talents" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const source = recruitermockupmainfeatures.cloudinary.fluid;
  return <Views.MainFeatures source={source} mainFeatures={mainFeatures} />;
}
