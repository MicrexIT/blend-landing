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
  const { recruiterTagsBg } = useStaticQuery(graphql`
    query RecruiterTagsBg {
      recruiterTagsBg: file(name: { eq: "bg-tags-entreprises" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const sources = [recruiterTagsBg.cloudinary.fluid];
  return <Views.Tags sources={sources} tags={tags} />;
}
