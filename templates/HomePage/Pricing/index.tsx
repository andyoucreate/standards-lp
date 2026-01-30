"use client";

import Heading from "@/components/Heading";
import Image from "@/components/Image";
import PricingList from "@/components/PricingList";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";
import { memo } from "react";

type PricingProps = object;

const Pricing = memo(function Pricing({}: PricingProps) {
  const t = useTranslations("pricing");

  return (
    <Section className="overflow-visible" id="pricing">
      <div className="container relative z-2 overflow-visible">
        <Heading tag={t("tag")} title={t("title")} />
        <div className="relative">
          <PricingList />
          <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
            <Image
              className="w-full"
              src="/images/pricing/lines.svg"
              width={1480}
              height={177}
              alt="Lines"
            />
          </div>
          <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
            <Image
              className="w-full"
              src="/images/pricing/lines.svg"
              width={1480}
              height={177}
              alt="Lines"
            />
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Pricing;
