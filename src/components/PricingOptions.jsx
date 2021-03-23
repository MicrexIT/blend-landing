import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Image from "gatsby-image";
import { Button } from "./Button";

export function PricingOptions({ callToAction, link }) {
  const {
    recruiterCreditsIcon,
    recruiterCheckBusinessIcon,
    recruiterBoostIcon,
    recruiterX,
  } = useStaticQuery(graphql`
    query PricingOptions {
      recruiterCreditsIcon: file(name: { eq: "Icon_Credits" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterCheckBusinessIcon: file(name: { eq: "Check_Business" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterBoostIcon: file(name: { eq: "Icon_Boost" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterX: file(name: { eq: "X" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const boostIcon = recruiterBoostIcon.cloudinary.fluid;
  const creditsIcon = recruiterCreditsIcon.cloudinary.fluid;
  const businessIcon = recruiterCheckBusinessIcon.cloudinary.fluid;
  const xIcon = recruiterX.cloudinary.fluid;
  return (
    <div
      // style={{ minHeight: "535px" }}
      // className="relative z-10 flex flex-row flex-wrap w-screen items-center justify-center pr-8"
      className="relative z-10 flex flex-col items-center justify-center p-2 md:px-9 lg:px-28 xl:px-32 space-y-20"
      // style={{ minHeight: "700px" }}
    >
      <h2 className="relative z-20 text-white font-medium text-center">
        Recrutement performant.{" "}
        <span className="text-white font-bold">Pricing transparent.</span>
      </h2>
      <div className="relative z-20 grid grid-cols-table grid-rows-table items-center w-full bg-white rounded-lg p-3 py-6 md:p-6 lg:p-8 gap-6 md:gap-8">
        <SpecialOfferBox />
        <PricingTableHeader />

        <PricingTableCell>
          <PricingTitleCell content={"Page entreprise"} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>

        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>

        <PricingTableCell>
          <PricingTitleCell content={"Jobs en ligne illimités"} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>

        <PricingTableCell>
          <PricingTitleCell content={"Accès à la base de talents"} />
        </PricingTableCell>

        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingIcon source={businessIcon} />
        </PricingTableCell>
        <PricingTableCell>
          <PricingTitleIconCell
            content={"Boost pour visibilité"}
            subContent={"30 jours de promotion du job"}
            icon={boostIcon}
          />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingIcon source={xIcon} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingTextCell content={"1"} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingTextCell content={"3"} />
        </PricingTableCell>

        <PricingTableCell>
          <PricingTitleIconCell
            content={"Crédits de sourcing"}
            subContent={"Pour reveler l’identité ou contacter"}
            icon={creditsIcon}
          />
        </PricingTableCell>

        <PricingTableCell centered>
          <PricingTextCell content={"10"} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingTextCell content={"50"} />
        </PricingTableCell>
        <PricingTableCell centered>
          <PricingTextCell content={"150"} />
        </PricingTableCell>
      </div>
      <Button label={callToAction} large link={link} />
    </div>
  );
}

function PricingTextCell({ content }) {
  return (
    <p className="text-purple-800 font-sans font-bold leading-4 text-xs md:text-lg md:leading-18">
      {content}
    </p>
  );
}

function PricingTitleCell({ content }) {
  return (
    <p className="text-purple-800 font-sans font-bold leading-4 text-xs md:text-lg md:leading-18">
      {content}
    </p>
  );
}

function PricingTitleIconCell({ content, subContent, icon }) {
  return (
    <div className="flex flex-shrink-0 flex-row items-start space-x-1 md:space-x-2 lg:space-x-3">
      <div className="w-6 md:w-6 lg:w-7">
        <Image fluid={icon} />
      </div>
      <div className="flex flex-col space-y-2 md:space-y-3">
        <p className="text-purple-800 font-sans font-bold leading-4 text-xs md:text-lg md:leading-18">
          {content}
        </p>
        <p className=" text-purple-800 font-sans font-light leading-4 tracking-1 text-3xs md:text-lg md:font-normal md:tracking-normal">
          {subContent}
        </p>
      </div>
    </div>
  );
}

function PricingIcon({ source }) {
  return (
    <div className="w-5 md:w-6 lg:w-7">
      <Image fluid={source} />
    </div>
  );
}

function PricingTableHeader({}) {
  const first = { title: "SEED PLAN", subTitle: "50€/mois" };
  const second = { title: "SCALE PLAN", subTitle: "140€/mois" };
  const third = { title: "GROWTH PLAN", subTitle: "240€/mois" };
  return (
    <>
      <div className="col-start-1 col-span-1 row-span-1"></div>
      <div className="col-start-2 col-span-1 row-span-1">
        <PricingTitleHeader title={first.title} subTitle={first.subTitle} />
      </div>
      <div className="col-start-3 col-span-1 row-span-1">
        <PricingTitleHeader title={second.title} subTitle={second.subTitle} />
      </div>
      <div className="col-start-4 col-span-1 row-span-1">
        <PricingTitleHeader title={third.title} subTitle={third.subTitle} />
      </div>
    </>
  );
}

function PricingTitleHeader({ title, subTitle }) {
  return (
    <p className=" text-center text-purple-800 font-serif font-semibold md:font-bold leading-4 text-sm md:text-2xl md:leading-8 ">
      {title}
      <br />
      <span className=" font-sans font-light leading-4 tracking-1 text-3xs md:text-lg md:font-normal md:tracking-normal  ">
        {subTitle}
      </span>
    </p>
  );
}

function PricingTableCell({ centered, children }) {
  if (centered) {
    return <div className="flex items-center justify-center">{children}</div>;
  }
  return <div>{children}</div>;
}

function SpecialOfferBox() {
  return (
    <div className="absolute p-4 md:p-6 shadow-lg rounded-9 -top-2 -left-1 md:-top-3 md:-left-4 w-24 md:w-48  bg-gray-500">
      <p className="text-center font-sans font-bold text-xs leading-4 md:text-sm md:leading-18 text-gradient bg-gradient-to-l from-orange-400 to-purple-400">
        12 mois -30% off
      </p>
    </div>
  );
}
