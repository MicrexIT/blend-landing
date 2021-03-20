import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";

const tags = {
  titleBold: "Tout les talents dont vous avez besoin.",
  description: "Pour booster votre croissance.",
  grids: [
    {
      title: "Les rôles",
      items: [
        "Engineering",
        "Operations",
        "Data",
        "Sales",
        "Marketing",
        "Product",
        "Design",
        "IT Support",
        "Compliance",
        "Human Resources",
      ],
    },
    {
      title: "Les niveaux",
      items: [
        "Senior",
        "Junior",
        "Graduate",
        "Intern",
        "Head of",
        "Director",
        "VP",
      ],
    },
  ],
};
export function Tags({ ...props }) {
  const {
    recruiterTagsBgSm,
    recruiterTagsBgMd,
    recruiterTagsBgLg,
  } = useStaticQuery(graphql`
    query RecruiterTagsBg {
      recruiterTagsBgSm: file(name: { eq: "bg-tags-entreprises" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterTagsBgMd: file(name: { eq: "bg-tags-entreprises" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterTagsBgLg: file(name: { eq: "bg-tags-entreprises" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const sources = [
    recruiterTagsBgSm.cloudinary.fluid,
    {
      ...recruiterTagsBgMd.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...recruiterTagsBgLg.cloudinary.fluid,
      media: `(min-width: 1101px)`,
    },
  ];
  return <Views.Tags sources={sources} tags={tags} />;
}
