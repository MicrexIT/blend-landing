import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Views } from "../views";

const perks = {
  titleNormal: "Distinguez vous.",
  titleBold: "Une meilleure expérience, avec moins de biais.",
  callToAction: "2mn pour s'inscrire",
  illustration1: "/perks_offers.png",
  illustration2: "/perks_iphone.png",
  items: [
    {
      title: "Notre matching est",
      content: "100% bias free",
    },
    {
      title: "Réduisez les biais grâce au ",
      content: "blend hiring",
    },
    {
      title: "Analyse approfondie qui",
      content: "va au-delà du CV",
    },
  ],
};

export function Perks() {
  const {
    recruiterCVIcon,
    recruiterBiasFreeIcon,
    recruiterAnonymousIcon,
    recruiterBoostIcon,
  } = useStaticQuery(graphql`
    query RecruiterPerksIcons {
      recruiterCVIcon: file(name: { eq: "Icon-CV" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterBiasFreeIcon: file(name: { eq: "Icon_Matching-bias-free" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterAnonymousIcon: file(name: { eq: "anonymous-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterCreditsIcon: file(name: { eq: "Icon_Credits" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterCheckBusinessIcon: file(name: { eq: "Check_Business" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterBoostIcon: file(name: { eq: "Icon_Boost" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const sources = [];
  const icon = recruiterBoostIcon.cloudinary.fluid;
  return <Views.Perks sources={sources} perks={perks} picture={icon} />;
}
