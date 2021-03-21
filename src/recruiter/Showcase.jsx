import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const showcase = {
  titleNormal: "Passez moins de temps à recruter.",
  titleBold: "Blend déniche vos prochains talents.",
};

export function Showcase() {
  const {
    recruiterCard1,
    recruiterCard2,
    recruiterCard3,
    sheresLeft,
    sheresRight,
    recruiterOfferSm,
    recruiterOfferMd,
    recruiterOfferLg,
  } = useStaticQuery(graphql`
    query RecruiterShowcaseIllustrations {
      recruiterCard1: file(name: { eq: "recruiters-candidatures-card-1" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterCard2: file(name: { eq: "recruiters-candidatures-card-2" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterCard3: file(name: { eq: "recruiters-candidatures-card-3" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      spheresLeft: file(name: { eq: "Spheres_left" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      spheresRight: file(name: { eq: "Spheres_right" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

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
  const sources = [
    recruiterCard1.cloudinary.fluid,
    recruiterCard2.cloudinary.fluid,
    recruiterCard3.cloudinary.fluid,
  ];

  const offerSources = [
    recruiterOfferSm.cloudinary.fluid,
    {
      ...recruiterOfferMd.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...recruiterOfferLg.cloudinary.fluid,
      media: `(min-width: 1021px)`,
    },
  ];

  return (
    <section className="showcase z-10">
      <div className="z-0 pointer-events-none absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-white to-gray-400 opacity-50" />
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-12 lg:gap-16">
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
    <div className="relative z-30 w-full">
      <Image fluid={sources} />
    </div>
  );
}
