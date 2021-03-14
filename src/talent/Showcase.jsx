import React from "react";
import { Illustration } from "../components/Illustration";
import { useStaticQuery, graphql } from "gatsby";

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

  return (
    <section className="showcase z-10">
      <div className="z-0 pointer-events-none absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-white to-gray-400 opacity-50" />
      <div className="relative z-10">
        <h2>{showcase.titleNormal}</h2>
        <h2>{showcase.titleBold}</h2>
      </div>
      <div className="illustrations relative z-10">
        {showcase.illustrations.map(({ caption }, index) => (
          <Illustration source={sources[index]} caption={caption} key={index} />
        ))}
      </div>
    </section>
  );
}
