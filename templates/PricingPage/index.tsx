"use client";

import Join from "@/components/Join";
import Layout from "@/components/Layout";
import Community from "./Community";
import Comparison from "./Comparison";
import Pricing from "./Pricing";

const PricingPage = () => {
  return (
    <Layout>
      <Pricing />
      <Comparison />
      <Community />
      <Join />
    </Layout>
  );
};

export default PricingPage;
