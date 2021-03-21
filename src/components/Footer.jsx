import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

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

      linkedinIcon: file(name: { eq: "Linked-In" }) {
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
    <footer className="footer flex flex-col p-4 pt-12 md:p-6 justify-between gap-12 md:gap-16">
      <div className="flex flex-col md:flex-row md:justify-between ">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-11 lg:gap-26">
          <div className="link w-28 h-6 relative">
            <Image fluid={logoFooter} />
          </div>
          <div className="text-left flex flex-col items-start lg:flex-row lg:items-center gap-3 md:gap-6 lg:gap-12 ">
            <Link to="/">
              <p>Talents</p>
            </Link>

            <Link to="/entreprises">
              <p>Entreprises</p>
            </Link>

            <Link to="/contact">
              <p>Nous Contacter</p>
            </Link>
          </div>
        </div>
        <div className="w-10 mt-4 md:mt-0 cursor-pointer hover:opacity-70">
          <Image fluid={linkedinIcon} />
        </div>
      </div>

      <div className="flex items-center flex-row justify-between">
        <p className="text-gray-500 text-3xs md:text-2xs lg:text-xs">
          30/32 Boulevard de Sébastopol, 75004, Paris,{" "}
          <span className="underline">Mentions legales</span>
        </p>
        <p className="text-gray-500 text-3xs md:text-2xs lg:text-xs text-right">
          Made with{" "}
          <span role="img" aria-label="heart">
            💜{" "}
          </span>
          by ©Blend 2021
        </p>
      </div>
    </footer>
  );
}
