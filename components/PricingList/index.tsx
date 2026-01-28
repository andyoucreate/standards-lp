"use client";

import PricingCard from "@/components/PricingCard";
import { usePricing } from "@/hooks/useTranslatedContent";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { memo, useCallback, useRef, useState } from "react";

type PricingListProps = {
  monthly?: boolean;
};

const PricingList = memo(function PricingList({ monthly = true }: PricingListProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const pricing = usePricing();

  // Splide doesn't export a proper ref type
  // biome-ignore lint/suspicious/noExplicitAny: Splide ref type not available
  const ref = useRef<any>(null);

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
    ref.current?.go(index);
  }, []);

  return (
    <>
      <Splide
        className="splide-pricing splide-visible lg:hidden"
        options={{
          autoWidth: true,
          pagination: false,
          arrows: false,
          gap: "1rem",
        }}
        onMoved={(_, newIndex) => setActiveIndex(newIndex)}
        hasTrack={false}
        ref={ref}
      >
        <SplideTrack>
          {pricing.map((item, index) => (
            <SplideSlide className={`${index === 1 ? "" : "py-3"}`} key={item.id}>
              <div className="w-[19rem] lg:w-full">
                <PricingCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  features={item.features}
                  featured={index === 1}
                  monthly={monthly}
                />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:max-w-5xl lg:mx-auto">
        {pricing.map((item, index) => (
          <PricingCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            features={item.features}
            featured={index === 1}
            monthly={monthly}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8 -mx-2 md:mt-15 lg:hidden">
        {pricing.map((item, index) => (
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
    </>
  );
});

export default PricingList;
