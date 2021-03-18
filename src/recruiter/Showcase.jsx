import React from "react";
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
      <div className="relative z-10">
        <h2>
          {showcase.titleNormal} <br />
          <span>{showcase.titleBold}</span>
        </h2>
      </div>
    </section>
  );
}
