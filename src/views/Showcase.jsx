
import React from "react";
import { Illustration } from "../components/Illustration";
import { useStaticQuery, graphql } from "gatsby";


export function Showcase({showcase, sources}) {
  return (
    <section className="showcase z-10">
      <div className="z-0 pointer-events-none absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-white to-gray-400 opacity-50" />
      <div className="relative z-10">
        <h2>
          {showcase.titleNormal} <br />
          <span>{showcase.titleBold}</span>
        </h2>
      </div>
      <div className="illustrations relative z-10">
        {showcase.illustrations.map(({ caption }, index) => (
          <Illustration source={sources[index]} caption={caption} key={index} />
        ))}
      </div>
    </section>
  );
}
