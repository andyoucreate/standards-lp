"use client";

import Layout from "@/components/Layout";
import Pricing from "./Pricing";
import Comparison from "./Comparison";
import Community from "./Community";
import Join from "@/components/Join";

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
