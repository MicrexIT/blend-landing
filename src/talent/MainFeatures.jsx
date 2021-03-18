import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Views } from "../views";

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
  return <Views.MainFeatures source={source} mainFeatures={mainFeatures} />;
}
