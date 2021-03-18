import React from "react";
import { Layout } from "../components/Layout";
import Recruiter from "../recruiter";
const Recruiters = () => {
  return (
    <Layout>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Recruiter.Home />
      <Recruiter.Showcase />
      <Recruiter.MainFeatures />
      <Recruiter.Tags />
      <Recruiter.Privacy />
      <Recruiter.Perks />
      <Recruiter.Faqs />
    </Layout>
  );
};

export default Recruiters;
