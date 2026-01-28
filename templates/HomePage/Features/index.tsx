"use client";

import Button from "@/components/Button";
import Image from "@/components/Image";
import Notification from "@/components/Notification";
import Section from "@/components/Section";
import { useFeatures } from "@/hooks/useTranslatedContent";
import { useTranslations } from "next-intl";
import { useState } from "react";

type FeaturesProps = {};

const Features = ({}: FeaturesProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const features = useFeatures();
  const t = useTranslations("features");

  const tabs = [
    { id: 0, label: t("tabs.data") },
    { id: 1, label: t("tabs.workflows") },
    { id: 2, label: t("tabs.reporting") },
    { id: 3, label: t("tabs.pipeline") },
  ];

  const currentFeature = features[activeTab];

  return (
    <Section className="py-10 md:pb-20 lg:pt-16 lg:pb-32 xl:pb-40 overflow-visible" customPaddings>
      <div className="container relative z-2 overflow-visible">
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12 md:mb-16 lg:mb-20 border-b border-n-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 body-2 font-semibold transition-colors relative ${
                activeTab === tab.id
                  ? "text-n-1"
                  : "text-n-4 hover:text-n-2"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-n-1" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:flex">
          <div className="lg:flex lg:flex-col lg:items-start lg:max-w-[18.75rem] lg:mr-auto">
            <h2 className="h2 mb-6">{currentFeature.title}</h2>
            <p className="body-2 mb-10 text-n-3">{currentFeature.text}</p>
            <Button>{t("cta")}</Button>
          </div>
          <div className="relative h-[27.5rem] border border-n-1/20 rounded-3xl md:rounded-[2.5rem] lg:flex-1 lg:max-w-[34.625rem] lg:h-[34.5rem] lg:ml-24 xl:h-[36rem] mt-10 lg:mt-0">
            <div className="absolute top-[8.5rem] -left-[2rem] w-[21rem] md:w-[25.25rem] md:top-[6.4rem] md:-left-[4.5rem] lg:top-[12rem] lg:-left-[3rem] xl:top-[7.625rem] xl:-left-[4.5rem] xl:w-[32.75rem]">
              <Image
                className="w-full"
                src={currentFeature.imageUrl}
                width={512}
                height={512}
                alt="Figure"
              />
            </div>
            <Notification
              className="absolute left-4 right-4 bottom-4 bg-n-8/95 md:left-8 md:right-8 md:bottom-8"
              title={currentFeature.notification}
            />
            <div className="absolute top-6 right-6 flex items-center justify-center w-15 h-15 bg-n-7 rounded-full xl:top-8 xl:right-8">
              <Image src={currentFeature.iconUrl} width={24} height={24} alt="Icon" />
            </div>
            <div className="hidden absolute top-0 left-full ml-5 w-full h-full bg-n-8/50 border border-n-1/10 rounded-[2.5rem] md:block"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
