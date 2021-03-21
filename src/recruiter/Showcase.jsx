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
    }
  `);
  const sources = [
    recruiterCard1.cloudinary.fluid,
    recruiterCard2.cloudinary.fluid,
    recruiterCard3.cloudinary.fluid,
  ];

  return (
    <section className="showcase z-10">
      <div className="z-0 pointer-events-none absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-white to-gray-400 opacity-50" />
      <div className="relative z-10 h-screen flex flex-col items-center gap-6 md:gap-12 lg:gap-16">
        <h2>
          {showcase.titleNormal} <br />
          <span>{showcase.titleBold}</span>
        </h2>
        <div className="relative p-8 flex items-center justify-center">
          <div className="absolute z-10 left-0 top-0 w-44">
            <Image fluid={sheresLeft} />
          </div>
          <div className="absolute z-10 right-0 bottom-0 w-44">
            <Image fluid={sheresRight} />
          </div>
          <ShowcaseEmploymentOffer sources={sources} />
        </div>
      </div>
    </section>
  );
}

function ShowcaseEmploymentOffer({ sources }) {
  return (
    <div className="flex flex-col gap-1">
      <h3></h3>

    <div className="flex flex-col md:flex-row items-center justify-items-center">
      <div className="w-44 md:w-43 lg:w-60">
        <Image fluid={sources[0]} />
      </div>

      <div className="w-44 md:w-43 lg:w-60">
        <Image fluid={sources[1]} />
      </div>

      <div className="w-44 md:w-43 lg:w-60">
        <Image fluid={sources[2]} />
      </div>
    </div>
    </div>
  );
}
