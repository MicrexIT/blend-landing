import React from "react";
import { TalentHomeIphone } from "../components/TalentHomeIphone";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";

const bannerText = {
  title: "Trouvez le job",
  titleBold: "qui vous correspond",
  messages: [
    "Blend trouve pour vous les",
    "meilleures opportunités de carrière.",
  ],
  callToAction: "Lancez-vous!",
};

export function Home() {
  const {
    talentHomeBgSm,
    talentHomeBgMd,
    talentHomeBgLg,
  } = useStaticQuery(graphql`
    query TalentHomeBg {
      talentHomeBgSm: file(name: { eq: "bg-home-talents-sm" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentHomeBgMd: file(name: { eq: "bg-home-talents-md" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      talentHomeBgLg: file(name: { eq: "bg-home-talents-lg" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const sources = [
    talentHomeBgSm.cloudinary.fluid,
    {
      ...talentHomeBgMd.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...talentHomeBgLg.cloudinary.fluid,
      media: `(min-width: 921px)`,
    },
  ];
  return (
    <Views.Home
      sources={sources}
      bannerText={bannerText}
      messages={
        <div>
          <p className="text-white sm:text-sm md:text-base lg:text-lg w-367 md:w-500 lg:w-550">
            {bannerText.messages[0]}{" "}
            <span className="font-bold">{bannerText.messages[1]} </span>
          </p>
        </div>
      }
    >
      <TalentHomeIphone />
    </Views.Home>
  );
}
