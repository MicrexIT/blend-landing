import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery, Link } from "gatsby";

export function MenuMobile({ closeMenu }) {
  const data = useStaticQuery(graphql`
    query XCloseIcon {
      xCloseIcon: file(name: { eq: "x-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const xIcon = data.xCloseIcon.cloudinary.fluid;
  return (
    <div
      className="
  fixed z-20 top-0 bottom-0 right-0 left-0
  flex flex-col justify-between gap-4 p-4 pb-8
  bg-white overscroll-none overflow-hidden
  "
      style={{
        zIndex: "1000",
      }}
    >
      <div className="cursor-pointer w-3" onClick={closeMenu}>
        <Image fluid={xIcon} />
      </div>
      <div className="text-left items-start flex flex-col gap-8">
        <Link to="/">
          <p className="cursor-pointer sans font-bold text-lg">Talents</p>
        </Link>

        <Link to="/entreprises">
          <p className="cursor-pointer sans font-bold text-lg">Entreprises</p>
        </Link>

        <Link to="/contact">
          <p className="cursor-pointer sans font-bold text-lg">
            Nous Contacter
          </p>
        </Link>
      </div>
      <div className="flex flex-row justify-self-end items-center justify-between">
        <p className="serif font-bold cursor-pointer hover:text-purple-400 text-gray-500">
          Log in
        </p>
        <div></div>
      </div>
    </div>
  );
}
