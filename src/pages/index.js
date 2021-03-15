import React from "react";
import { Layout } from "../components/Layout";
import Talent from "../talent";
// TODO SEo

// import SEO from "../components/seo"
// TODO: add Head
// TODO: add app layout (ex _app.js)
// TODO: maybe add _document.js

const IndexPage = () => {
  return (
    <Layout>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Talent.Home />
      <Talent.Showcase />
      <Talent.MainFeatures />
      <Talent.Tags />
      <Talent.Privacy />
      {/* <Talent.Perks /> */}
      <Talent.Faqs />
    </Layout>
  );
};

export default IndexPage;
