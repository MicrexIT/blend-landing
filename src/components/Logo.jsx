import * as React from "react";
import Image from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";

export function Logo() {
  const data = useStaticQuery(graphql`
    query LogoImage {
      logoImage: file(name: { eq: "Logo" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const logoImg = data.logoImage.cloudinary.fluid;
  return (
    <div className="relative z-50 w-21 md:w-24 lg:w-32">
      <Image fluid={logoImg} />
    </div>
  );
}
