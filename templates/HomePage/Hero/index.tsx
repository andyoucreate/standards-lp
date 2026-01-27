import { useEffect, useRef, useState } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Generating from "@/components/Generating";
import Notification from "@/components/Notification";
import Logos from "@/components/Logos";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const parallaxRef = useRef<any>(null);

    return (
        <Section
            className="-mt-[6.25rem] pt-[8.25rem] pb-4 overflow-hidden md:pt-[9.75rem] md:pb-[4.8rem] lg:-mt-[6.75rem] lg:-mb-40 lg:pt-[12.25rem] lg:pb-[13.8rem]"
            crosses
            crossesOffset="lg:translate-y-[6.75rem]"
            customPaddings
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] text-center md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Discover real-world
                        <br />
                        <span className="inline-block relative">
                            email inspiration
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Track your competitors' emails, ads, and landing pages automatically. 
                        Save 20+ hours per month with unlimited marketing inspiration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button href="/pricing" white>
                            Get started
                        </Button>
                        <Button href="https://cal.com/your-calendar-link" secondary>
                            Schedule a demo
                        </Button>
                    </div>
                    <div className="mt-12 flex justify-center gap-16 flex-wrap lg:gap-24">
                        <div className="text-center">
                            <div className="text-sm text-n-3 mb-3">Emails indexés</div>
                            <div className="text-5xl font-bold text-n-1">4.8M+</div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-n-3 mb-3">Marques suivies</div>
                            <div className="text-5xl font-bold text-n-1">850+</div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-n-3 mb-3">Veille automatique</div>
                            <div className="text-5xl font-bold text-n-1">24/7</div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-n-3 mb-3">Industries</div>
                            <div className="text-5xl font-bold text-n-1">50+</div>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-[23.25rem] mx-auto md:max-w-5xl lg:max-w-7xl xl:max-w-[90rem] xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[0.875rem]">
                            <div className="h-[1.375rem] bg-[#43435C] rounded-t-[0.875rem]"></div>
                            <div className="aspect-[33/40] rounded-b-[0.875rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <Image
                                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10.5%] lg:-translate-y-[23.5%]"
                                    src="/images/hero/robot.jpg"
                                    width={1024}
                                    height={490}
                                    alt="AI"
                                />
                            </div>
                            <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[30.5rem] md:-translate-x-1/2" />
                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className="hidden absolute -left-[5.5rem] bottom-[7.625rem] px-1 py-1 bg-[#474060]/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                    {[
                                        "/images/icons/home-smile.svg",
                                        "/images/icons/file-02.svg",
                                        "/images/icons/search-md.svg",
                                        "/images/icons/plus-square.svg",
                                    ].map((icon, index) => (
                                        <li className="p-5" key={index}>
                                            <Image
                                                src={icon}
                                                width={24}
                                                height={25}
                                                alt={icon}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </ScrollParallax>
                            <ScrollParallax isAbsolutelyPositioned>
                                <Notification
                                    className="hidden absolute -right-[5.5rem] bottom-[11.25rem] w-[18.375rem] xl:flex"
                                    title="Code generation"
                                />
                            </ScrollParallax>
                        </div>
                    </div>
                    <div className="relative z-1 h-6 mx-2.5 bg-black/5 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8"></div>
                    <div className="relative z-1 h-6 mx-6 bg-black/[0.025] shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20"></div>
                </div>
                <Logos className="hidden relative z-10 mt-20 lg:block" />
            </div>
            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block"></div>
            <svg
                className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block"
                width="11"
                height="11"
                fill="none"
            >
                <path
                    d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
                    fill="#ada8c4"
                />
            </svg>
            <svg
                className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block"
                width="11"
                height="11"
                fill="none"
            >
                <path
                    d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
                    fill="#ada8c4"
                />
            </svg>
        </Section>
    );
};

export default Hero;
