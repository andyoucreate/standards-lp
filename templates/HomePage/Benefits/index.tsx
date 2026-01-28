import Heading from "@/components/Heading";
import Image from "@/components/Image";
import Section from "@/components/Section";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { memo, useCallback, useRef, useState } from "react";

import { benefits } from "@/mocks/benefits";

type BenefitsProps = object;

const Benefits = memo(function Benefits({}: BenefitsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Splide doesn't export a proper ref type
  // biome-ignore lint/suspicious/noExplicitAny: Splide ref type not available
  const ref = useRef<any>(null);

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
    ref.current?.go(index);
  }, []);

  return (
    <Section>
      <div className="container relative z-2" style={{ overflow: "visible" }}>
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Trouvez l'inspiration marketing instantanément avec emailoverflow"
        />
        <Splide
          className="splide-visible max-w-[24rem] md:max-w-none overflow-visible"
          options={{
            mediaQuery: "min",
            pagination: false,
            arrows: false,
            gap: "1.5rem",
            breakpoints: {
              768: {
                autoWidth: "true",
              },
            },
          }}
          onMoved={(_, newIndex) => setActiveIndex(newIndex)}
          hasTrack={false}
          ref={ref}
        >
          <SplideTrack style={{ overflow: "visible" }}>
            {benefits.map((item) => (
              <SplideSlide key={item.id}>
                <div className="block relative p-0.5 md:max-w-[24rem] border border-n-6 rounded-[2rem]">
                  <div className="relative z-2 flex flex-col h-[22.625rem] p-[2.375rem] pointer-events-none">
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
                  ></div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
        <div className="flex justify-center mt-12 -mx-2 md:mt-15 xl:mt-20">
          {benefits.map((item, index) => (
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
