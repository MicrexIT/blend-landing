import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Views } from "../views";
import { Button } from "../components/Button";

export const privacy = {
  titleNormal: "On protège votre identité",
  titleBold: "On limite les biais",
  description1: "Nous prenons en compte et montrons dans la base de talents",
  description2: "uniquement les données utile à votre recherche d’emploi",
  description3:
    "Votre nom, sexe, religion, coupe de cheveux n’en font pas parti",
  callToAction: "2mn pour s'inscrire",
};

export function Privacy() {
  const {
    privacyTalentSm,
    privacyTalentMd,
    privacyTalentLg,
  } = useStaticQuery(graphql`
    query PrivacyTalent {
      privacyTalentSm: file(name: { eq: "man-tattoos-talents-s" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      privacyTalentMd: file(name: { eq: "man-tattoos-talents-m" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      privacyTalentLg: file(name: { eq: "man-tattoos-talents-l" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const sources = [
    privacyTalentSm.cloudinary.fluid,
    {
      ...privacyTalentMd.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...privacyTalentLg.cloudinary.fluid,
      media: `(min-width: 1021px)`,
    },
  ];

  return (
    <Views.Privacy
      sources={sources}
      privacy={privacy}
      Button={<Button label={privacy.callToAction} secondary />}
    >
      <p> {privacy.description1} </p>
      <p className="font-bold"> {privacy.description2} </p>
      <p> {privacy.description3} </p>
    </Views.Privacy>
  );
}
