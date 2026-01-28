"use client";

import Join from "@/components/Join";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import Community from "@/templates/PricingPage/Community";
import Faq from "@/templates/PricingPage/Faq";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Collaboration />
      <HowItWorks />
      <Pricing />
      <Community />
      <Faq />
      <Join />
    </Layout>
  );
};

export default HomePage;
