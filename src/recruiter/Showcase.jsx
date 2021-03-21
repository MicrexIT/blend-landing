import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const showcase = {
  titleNormal: "Passez moins de temps à recruter.",
  titleBold: "Blend déniche vos prochains talents.",
};

export function Showcase() {
  const {
    recruiterOfferSm,
    recruiterOfferMd,
    recruiterOfferLg,
  } = useStaticQuery(graphql`
    query RecruiterShowcaseIllustrations {
      recruiterOfferSm: file(name: { eq: "offres-entreprises-s" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      recruiterOfferMd: file(name: { eq: "offres-entreprises-m" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterOfferLg: file(name: { eq: "offres-entreprise-l" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const offerSources = [
    recruiterOfferSm.cloudinary.fluid,
    {
      media: `(min-width: 491px)`,
      ...recruiterOfferMd.cloudinary.fluid,
    },
    {
      media: `(min-width: 1021px)`,
      ...recruiterOfferLg.cloudinary.fluid,
    },
  ];

  return (
    <section className="showcase z-10">
      <div className="z-0 pointer-events-none absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-white to-gray-400 opacity-50" />
      <div className="relative z-10 flex flex-col items-center space-x-6 md:space-x-12 lg:space-x-16">
        <h2>
          {showcase.titleNormal} <br />
          <span>{showcase.titleBold}</span>
        </h2>
        <ShowcaseEmploymentOffer sources={offerSources} />
      </div>
    </section>
  );
}

function ShowcaseEmploymentOffer({ sources }) {
  return (
    <div className="w-full">
      <Image fluid={sources} />
    </div>
  );
}
