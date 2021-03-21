import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Image from "gatsby-image";
import { Views } from "../views";
import { PricingOptions } from "../components/PricingOptions";

const perks = {
  titleNormal: "Distinguez vous.",
  titleBold: "Une meilleure expérience, avec moins de biais.",
  callToAction: "Obtenez votre accès gratuit",
  illustration1: "/perks_offers.png",
  illustration2: "/perks_iphone.png",
  items: [
    {
      content: (
        <>
          <span className="font-bold">
            Identifiez les candidats sur la base de critères objectifs{" "}
          </span>
          grâce à notre matching sans préjugés.
        </>
      ),
    },
    {
      content: (
        <>
          <span className="font-bold">
            Recrutez vos prochains employés pour leur talent{" "}
          </span>
          et uniquement leur talent.
        </>
      ),
    },
    {
      content: (
        <>
          Partagez vos valeurs et vos engagements pour{" "}
          <span className="font-bold">valoriser votre marque-employeur.</span>
        </>
      ),
    },
  ],
};

export function Perks() {
  const {
    recruiterCVIcon,
    recruiterAnonymousIcon,
    recruiterBiasFreeIcon,
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
    }
  `);
  const sources = [
    recruiterCVIcon.cloudinary.fluid,
    recruiterAnonymousIcon.cloudinary.fluid,
    recruiterBiasFreeIcon.cloudinary.fluid,
  ];
  return (
    <Views.Perks
      recruiter
      Bottom={<PricingOptions callToAction={perks.callToAction} />}
    >
      <h2 className="relative z-20 text-white font-bold text-center">
        {perks.titleNormal}
        <span className="text-white font-medium">{perks.titleBold}</span>
      </h2>
      <div className="flex flex-col items-center default-padding-x lg:items-start lg:flex-row space-y-12 lg:space-y-0 lg:space-x-24">
        {perks.items.map(({ title, content }, index) => {
          return (
            <div
              key={title}
              className="flex flex-col items-center space-y-2 md:space-y-3 lg:space-y-4 p-1 sm:w-1/2 lg:w-2/7"
            >
              <div className="w-10 md:w-12 lg:w-14 mb-w-12 mb-5 lg:mb-10">
                <Image fluid={sources[index]} />
              </div>
              <p className="text-center font-sans text-base text-white font-light">
                {content}
              </p>
            </div>
          );
        })}
      </div>
    </Views.Perks>
  );
}
