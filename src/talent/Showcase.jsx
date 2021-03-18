import React from "react";
import { Illustration } from "../components/Illustration";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";

const showcase = {
  titleNormal: "que des jobs verifies dans la",
  titleBold: "tech francaise et internationale",
  illustrations: [
    {
      caption: "DES STARTUPS QUI DECOLLENT",
    },
    {
      caption: "DES SCALES UPS",
    },
    {
      caption: "DES GEANTS DE LA TECH",
    },
  ],
};

export function Showcase() {
  const {
    talentGeantIllustration,
    talentScaleupIllustration,
    talentStartupsIllustration,
  } = useStaticQuery(graphql`
    query TalentShowcaseIllustrations {
      talentGeantIllustration: file(name: { eq: "talent-geant-illustration" }) {
        cloudinary: childCloudinaryAsset {
          fixed {
            ...CloudinaryAssetFixed
          }
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      talentScaleupIllustration: file(
        name: { eq: "talent-scaleup-illustration" }
      ) {
        cloudinary: childCloudinaryAsset {
          fixed {
            ...CloudinaryAssetFixed
          }
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentStartupsIllustration: file(
        name: { eq: "talent-startups-illustration" }
      ) {
        cloudinary: childCloudinaryAsset {
          fixed {
            ...CloudinaryAssetFixed
          }
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const sources = [
    talentStartupsIllustration.cloudinary.fluid,
    talentScaleupIllustration.cloudinary.fluid,
    talentGeantIllustration.cloudinary.fluid,
  ];

  return <Views.Showcase sources={sources} showcase={showcase} />;
}
