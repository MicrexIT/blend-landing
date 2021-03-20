import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Image from "gatsby-image";
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
    recruiterAnonymousIcon,
    recruiterBiasFreeIcon,
    recruiterCreditsIcon,
    recruiterCheckBusinessIcon,
    recruiterBoostIcon,
  } = useStaticQuery(graphql`
    query RecruiterPerksIcons {
      recruiterCVIcon: file(name: { eq: "Icon_CV" }) {
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
  const sources = [
    recruiterCVIcon.cloudinary.fluid,
    recruiterAnonymousIcon.cloudinary.fluid,
    recruiterBiasFreeIcon.cloudinary.fluid,
  ];
  const icon = recruiterBoostIcon.cloudinary.fluid;
  return (
    <Views.Perks sources={sources} perks={perks} picture={icon}>
      <div className="flex flex-col items-center default-padding-x lg:items-start lg:flex-row gap-12 lg:gap-24">
        {perks.items.map(({ title, content }, index) => {
          return (
            <div
              key={title}
              className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 p-1 sm:w-1/2 lg:w-2/7"
            >
              <div className="w-10 md:w-12 lg:w-14 mb-w-12 mb-5 lg:mb-10">
                <Image fluid={sources[index]} />
              </div>
              <p className="text-center font-sans text-base leading-4 text-white font-light">
                {title}
              </p>
              <h3 className="text-center font-bold leading-5 md:leading-6 lg:leading-7">
                {content}
              </h3>
            </div>
          );
        })}
      </div>
    </Views.Perks>
  );
}
