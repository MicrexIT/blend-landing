import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image-es5";
import { TagGrid } from "../components/TagGrid";
import { Tag } from "../components/Tag";

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
  const { talentTagsBg } = useStaticQuery(graphql`
    query TalentTagsBg {
      talentTagsBg: file(name: { eq: "bg-talents-tags" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const source = talentTagsBg.cloudinary.fluid;
  return (
    <BackgroundImage
      fluid={source}
      Tag="section"
      className="py-12 md:py-24 lg:py-36 default-padding-x flex flex-col items-center text-center "
    >
      <div className="mb-10 md:mb-20  flex flex-col items-center gap-5">
        <h2 className="text-white font-bold">{tags.titleBold}</h2>
        <p className="text-white font-sans text-xs md:text-lg mx-auto">
          {tags.description}
        </p>
      </div>
      {tags.grids.map(({ title, items }, index) => {
        const isSecond = index % 2 === 1;
        return (
          <TagGrid
            optionalStyle={
              isSecond
                ? "md:mx-32 lg:mx-54 xl:mx-60 mb-10 md:mb-15"
                : "mb-10 md:mb-15"
            }
            title={title}
            key={index}
          >
            {items.map((content) => (
              <Tag
                key={content + index}
                content={content}
                secondary={isSecond}
              />
            ))}
          </TagGrid>
        );
      })}
    </BackgroundImage>
  );
}
