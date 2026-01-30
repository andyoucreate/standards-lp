"use client";

import Button from "@/components/Button";
import Image from "@/components/Image";
import Section from "@/components/Section";
import Tagline from "@/components/Tagline";
import { useHowItWorks } from "@/hooks/useTranslatedContent";
import { useWaitingListModal } from "@/hooks/useWaitingListModal";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type HowItWorksProps = {};

const HowItWorks = ({}: HowItWorksProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const howItWorks = useHowItWorks();
  const t = useTranslations("how_it_works");
  const tNav = useTranslations("navigation");
  const openWaitingList = useWaitingListModal((state) => state.open);

  const ref = useRef<any>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    ref.current?.go(index);
  };

  return (
    <Section className="lg:-mb-16" crosses>
      <div className="container">
        <Splide
          className="splide-custom"
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
            arrows: false,
          }}
          hasTrack={false}
          onMoved={(e, newIndex) => setActiveIndex(newIndex)}
          ref={ref}
        >
          <div className="hidden grid-cols-4 gap-6 mb-20 lg:grid lg:mb-24">
            {howItWorks.map((item, index) => (
              <div
                className="group cursor-pointer"
                onClick={() => handleClick(index)}
                key={item.id}
              >
                <div
                  className={`h-[0.125rem] mb-10 transition-colors ${
                    index === activeIndex
                      ? "bg-color-1"
                      : "bg-[#D9D9D9]/10 group-hover:bg-[#D9D9D9]/50"
                  }`}
                ></div>
                <div className="tagline mb-1 text-n-3">0{index + 1}.</div>
                <h2 className="mb-[0.625rem] text-xl leading-7">{item.title}</h2>
              </div>
            ))}
          </div>
          <SplideTrack style={{ overflow: "visible" }}>
            {howItWorks.map((item, index) => (
              <SplideSlide key={item.id}>
                <div className="lg:flex lg:flex-row-reverse lg:items-center pb-6 lg:pb-0">
                  <div className="">
                    <Tagline className="mb-4 lg:mb-6">
                      {t("label")}: 0{index + 1}.
                    </Tagline>
                    <h2 className="h2 mb-4 lg:mb-6">{item.title}</h2>
                    <p className="body-2 mb-10 text-n-3">{item.text}</p>
                    <Button onClick={openWaitingList} white>
                      {tNav("join_waitlist")}
                    </Button>
                  </div>
                  <div className="relative lg:w-[29.375rem] lg:flex-shrink-0 lg:mr-[7.125rem] xl:w-[34.375rem] xl:mr-40">
                    <div className="pt-0.25 pl-0.25 overflow-hidden bg-gradient-to-tl from-n-1/0 via-n-1/0 to-n-1/15 rounded-3xl">
                      <div className="h-[30.5rem] bg-n-7 rounded-[1.4375rem] xl:h-[35.625rem]">
                        <Image
                          className="w-full h-full object-contain"
                          src={item.image}
                          width={550}
                          height={570}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="absolute -right-6 top-8 bottom-8 w-6 bg-n-1/5 rounded-r-3xl"></div>
                    <div className="absolute -right-12 top-16 bottom-16 w-6 bg-n-1/[0.025] rounded-r-3xl"></div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="absolute top-0 -left-[10rem] w-[29.5rem] h-[29.5rem] mix-blend-color-dodge opacity-20 pointer-events-none">
            <Image
              className="absolute top-1/2 left-1/2 w-[55.5rem] max-w-[55.5rem] h-[61.5rem] -translate-x-1/2 -translate-y-1/2"
              src="/images/how-it-works/gradient.png"
              width={984}
              height={984}
              alt="Gradient"
            />
          </div>
        </Splide>
        <div className="flex justify-center mt-12 -mx-2 lg:hidden">
          {howItWorks.map((item, index) => (
            <button
              className="relative w-6 h-6 mx-2"
              onClick={() => handleClick(index)}
              key={item.id}
            >
              <span
                className={`absolute inset-0 bg-conic-gradient rounded-full transition-opacity ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              ></span>
              <span className="absolute inset-0.25 bg-n-8 rounded-full">
                <span className="absolute inset-2 bg-n-1 rounded-full"></span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
