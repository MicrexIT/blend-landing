import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";

const tags = {
  titleBold: "Vous êtes tou.te.s les bienvenu.es",
  description:
    "Sur Blend, les talents de tous niveaux peuvent trouver leur job de rêve.",
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
    talentTagsBgLg,
    talentTagsBgMd,
    talentTagsBgSm,
  } = useStaticQuery(graphql`
    query TalentTagsBg {
      talentTagsBgLg: file(name: { eq: "bg-tags-talents-lg" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentTagsBgMd: file(name: { eq: "bg-tags-talents-md" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentTagsBgSm: file(name: { eq: "bg-tags-talents-sm" }) {
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
