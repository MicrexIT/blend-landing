import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";

const tags = {
  titleBold: "Vous etes tous les bienvenues",
  description:
    "Sur Blend, tous les talents de tous les niveaux peuvent trouver leur job idéal",
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
    talentTagsBgLg,
    talentTagsBgMd,
    talentTagsBgSm,
  } = useStaticQuery(graphql`
    query TalentTagsBg {
      talentTagsBgLg: file(name: { eq: "bg-tags-talents-l" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentTagsBgMd: file(name: { eq: "bg-tags-talents-m" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentTagsBgSm: file(name: { eq: "bg-tags-talents-s" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const sources = [
    talentTagsBgSm.cloudinary.fluid,
    {
      ...talentTagsBgMd.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...talentTagsBgLg.cloudinary.fluid,
      media: `(min-width: 1101px)`,
    },
  ];
  return <Views.Tags sources={sources} tags={tags} />;
}
