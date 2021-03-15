import React, { useState } from "react";
import { Button } from "../components/Button";
import BackgroundImage from "gatsby-background-image-es5";
import { useStaticQuery, graphql } from "gatsby";

export const privacy = {
  titleNormal: "On protège votre identité",
  titleBold: "On limite les biais",
  description1: "Nous prenons en compte et montrons dans la base de talents",
  description2: "uniquement les données utile à votre recherche d’emploi",
  description3:
    "Votre nom, sexe, religion, coupe de cheveux n’en font pas parti",
  callToAction: "2mn pour s'inscrire",
};

export function Privacy({ props }) {
  const data = useStaticQuery(graphql`
    query PrivacyTalent {
      privacyTalent: file(name: { eq: "tattoo-man-blur-centered_talents" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      privacyTalentVisible: file(name: { eq: "tattoo-man-centered_talents" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const privacyImg = data.privacyTalent.cloudinary.fluid;
  const privacyImgVisible = data.privacyTalentVisible.cloudinary.fluid;
  const [visible, setVisible] = useState(false);

  return (
    <section className="relative p-0 lg:h-screen flex flex-col lg:flex-row">
      <div className="opacity-20 pointer-events-none top-0 left-0 right-0 bottom-0 absolute bg-gradient-to-tl from-purple-600 to-white z-10"></div>
      <div className="relative z-30 flex flex-col pt-11 pb-21 md:pt-21 w-full lg:w-1/2 default-padding-x justify-center">
        <div className="mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-black">{privacy.titleNormal}</h2>
          <h2 className="text-black font-bold mb-5">{privacy.titleBold}</h2>
          <p> {privacy.description1} </p>
          <p className="font-bold"> {privacy.description2} </p>
          <p> {privacy.description3} </p>
        </div>
        <Button label={privacy.callToAction} secondary />
      </div>
      {visible ? (
        <BackgroundImage
          Tag="div"
          fluid={privacyImgVisible}
          className="bg-top relative grid grid-cols-5 grid-rows-7 md:grid-rows-8 md:grid-cols-8 lg:grid-rows-5 lg:grid-cols-12 xl:grid-rows-9 content-center lg:items-center w-full lg:w-1/2"
          style={{ minHeight: "450px" }}
          onClick={() => setVisible(!visible)}
        >
          <div className="row-start-2 col-start-2 md:row-start-4 md:col-start-3 lg:row-start-3 lg:col-start-2 xl:row-start-3 relative z-20 w-20 md:w-32 lg:w-40"></div>
        </BackgroundImage>
      ) : (
        <BackgroundImage
          Tag="div"
          fluid={privacyImg}
          className="bg-top relative grid grid-cols-5 grid-rows-7 md:grid-rows-8 md:grid-cols-8 lg:grid-rows-5 lg:grid-cols-12 xl:grid-rows-9 content-center lg:items-center w-full lg:w-1/2"
          style={{ minHeight: "450px" }}
          onClick={() => setVisible(!visible)}
        >
          <div className="row-start-2 col-start-2 md:row-start-4 md:col-start-3 lg:row-start-3 lg:col-start-2 xl:row-start-3 relative z-20 w-20 md:w-32 lg:w-40"></div>
        </BackgroundImage>
      )}
    </section>
  );
}
