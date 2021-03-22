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
  flex flex-col justify-between space-y-4 p-4 pb-8
  bg-white overscroll-none overflow-hidden
  "
      style={{
        zIndex: "1000",
      }}
    >
      <div className="cursor-pointer w-3 hover:opacity-50" onClick={closeMenu}>
        <Image fluid={xIcon} />
      </div>
      <div className="text-left items-start flex flex-col space-y-8">
        <Link to="/" activeClassName="font-bold">
          <span className="cursor-pointer sans text-lg">Talents</span>
        </Link>

        <Link to="/entreprises" activeClassName="font-bold">
          <span className="cursor-pointer sans text-lg">Entreprises</span>
        </Link>

        <a href="mailto:hello@blend.careers?subject=Get In Touch">
          <span className="cursor-pointer sans text-lg">Nous Contacter</span>
        </a>
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
