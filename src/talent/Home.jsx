import React from "react";
import { TalentHomeIphone } from "../components/TalentHomeIphone";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";

const bannerText = {
  title: "Trouvez le job",
  titleBold: "Qui vous correspond",
  messages: [
    "Vous êtes plus que juste un CV. Vous méritez mieux q’une jungle.",
    "Notre mission est de trouver pour vous les meilleures opportunités.",
  ],
  callToAction: "2mn pour s'inscrire",
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
  return <Views.Home sources={sources} bannerText={bannerText} ><TalentHomeIphone/></Views.Home> ;
}
