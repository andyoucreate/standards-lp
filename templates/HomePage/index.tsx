"use client";

import Layout from "@/components/Layout";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Community from "@/templates/PricingPage/Community";
import Services from "@/components/Services";
import Faq from "@/templates/PricingPage/Faq";
import Join from "@/components/Join";

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <Benefits />
            <Collaboration />
            <HowItWorks />
            <Services />
            <Pricing />
            <Community />
            <Faq />
            <Join />
        </Layout>
    );
};

export default HomePage;
