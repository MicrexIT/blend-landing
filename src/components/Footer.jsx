import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

// TODO add image
export function Footer({ ...props }) {
  const data = useStaticQuery(graphql`
    query LogoFooter {
      logoFooter: file(name: { eq: "Logo-footer" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      linkedinIcon: file(name: { eq: "linkedin-footer-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const logoFooter = data.logoFooter.cloudinary.fluid;
  const linkedinIcon = data.linkedinIcon.cloudinary.fluid;

  return (
    <footer className="footer flex flex-col p-4 pt-12 pb-24 md:p-6 justify-between gap-12 md:gap-20">
      <div className="flex flex-col md:flex-row md:justify-between ">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-11 lg:gap-26">
          <div className="link w-28 h-6 relative">
            <Image fluid={logoFooter} />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 md:gap-6 lg:gap-12 ">
            <span>Talents</span>
            <span>Entreprises</span>
            <span>Nous Contacter</span>
          </div>
        </div>
        <div className="w-10 mt-4 md:mt-0 cursor-pointer hover:opacity-70">
          <Image fluid={linkedinIcon} />
        </div>
      </div>

      <div className="flex items-center flex-row justify-between text-gray-500 text-3xs md:text-2xs lg:text-xs">
        <span className="">30/32 Boulevard de Sébastopol, 75004, Paris</span>
        <span>
          Made with{" "}
          <span role="img" aria-label="heart">
            💜{" "}
          </span>
          by ©Blend 2021
        </span>
      </div>
    </footer>
  );
}