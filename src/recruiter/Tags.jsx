import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";

const tags = {
  titleBold: "Tout les talents dont vous avez besoin",
  description: "pour booster votre croissance.",
  grids: [
    {
      title: "Secteurs",
      items: [
        "Ingénierie",
        "Opérations",
        "Data",
        "Sales",
        "Marketing",
        "Product",
        "Design",
        "Support IT",
        "Juridique et conformité",
        "RH & People",
      ],
    },
    {
      title: "Expérience",
      items: [
        "Senior",
        "Junior",
        "Jeune diplômé",
        "Stage",
        "Manager",
        "Directeur",
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
