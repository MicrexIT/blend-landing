import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Views } from "../views";
import { Button } from "../components/Button";

export const privacy = {
  titleNormal: "Matching affinitaire, oui.",
  titleBold: "Discrimination à l’embauche, non.",
  description1:
    "Blend transmet aux entreprises uniquement les informations utiles au recrutement.",
  description2:
    "Votre âge, votre sexe ou votre couleur de peau n’en font pas parti.",
  callToAction: "Lancez-vous!",
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
    </Views.Privacy>
  );
}
