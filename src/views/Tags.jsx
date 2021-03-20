import React from "react";
import BackgroundImage from "gatsby-background-image-es5";
import { TagGrid } from "../components/TagGrid";
import { Tag } from "../components/Tag";
import { BackgroundGrandientPurple } from "../components/BackgroundGradientBrand";

export function Tags({ tags, sources }) {
  return (
    <BackgroundImage
      fluid={sources}
      Tag="section"
      className="relative py-12 md:py-20 lg:py-28 default-padding-x flex flex-col items-center text-center "
    >
      <BackgroundGrandientPurple />
      <div className="relative z-20 mb-10 md:mb-20  flex flex-col items-center gap-5">
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
