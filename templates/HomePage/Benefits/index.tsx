"use client";

import Heading from "@/components/Heading";
import Image from "@/components/Image";
import Section from "@/components/Section";
import { useBenefits } from "@/hooks/useTranslatedContent";
import { useTranslations } from "next-intl";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { memo } from "react";

type BenefitsProps = object;

const Benefits = memo(function Benefits({}: BenefitsProps) {
  const benefits = useBenefits();
  const t = useTranslations("benefits");

  return (
    <Section>
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title={t("section_title")} />
        <div className="mt-10 lg:mt-15">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
            <Masonry gutter="1.5rem">
              {benefits.map((item) => (
                <div key={item.id} className="block relative p-0.5 border border-n-6 rounded-[2rem]">
                  <div className="relative z-2 flex flex-col h-[22.625rem] p-[2.375rem]">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <Image src={item.iconUrl} width={48} height={48} alt={item.title} />
                    </div>
                  </div>
                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{
                      clipPath: "url(#benefits)",
                    }}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <svg className="block" width={0} height={0}>
          <clipPath id="benefits" clipPathUnits="objectBoundingBox">
            <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
          </clipPath>
        </svg>
      </div>
    </Section>
  );
});

export default Benefits;
