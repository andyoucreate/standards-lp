"use client";

import { useEffect, useRef, useState } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Masonry from "react-responsive-masonry";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Generating from "@/components/Generating";
import Notification from "@/components/Notification";
import Logos from "@/components/Logos";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
    const [mounted, setMounted] = useState<boolean>(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;

        const scroll = () => {
            if (scrollContainer) {
                scrollContainer.scrollTop += 0.5;
                
                const maxScroll = scrollContainer.scrollHeight / 2;
                
                if (scrollContainer.scrollTop >= maxScroll) {
                    scrollContainer.scrollTop = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const parallaxRef = useRef<any>(null);

    const emailImages = [
        "/images/services/email-1.png",
        "/images/services/email-2.png",
        "/images/services/email-3.png",
        "/images/services/email-4.png",
        "/images/services/email-5.png",
        "/images/services/email-6.png",
        "/images/services/email-7.png",
        "/images/services/email-8.png",
        "/images/services/extra-low-abv-valpolicella-closes-tonight.webp",
        "/images/services/make-this-your-yearsave-20-on-carecom.webp",
        "/images/services/new-cookies-cream.webp",
        "/images/services/new-release-colombia-juan-and-rogelio.webp",
        "/images/services/travel-rewards-that-fit-right-into-your-pocket.webp",
        "/images/services/we-caught-you-peeping.webp",
        "/images/services/you-could-be-winning-more-customers-right-now.webp",
    ];

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
                        Découvrez l'inspiration
                        <br />
                        <span className="inline-block relative">
                            email réelle
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Suivez automatiquement les emails, publicités et landing pages de vos concurrents. 
                        Économisez plus de 20 heures par mois avec une inspiration marketing illimitée.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button href="/pricing" white>
                            Commencer
                        </Button>
                        <Button href="https://cal.com/your-calendar-link" secondary>
                            Planifier une démo
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
                    <div className="relative z-1 border border-n-6 rounded-2xl">
                        <div className="relative bg-n-8 rounded-[0.875rem]">
                            {/* Explorer UI Screenshot - Fixed at top */}
                            <div className="sticky top-0 z-20 bg-n-8 rounded-t-[0.875rem] overflow-hidden">
                                <Image
                                    className="w-full h-auto"
                                    src="/images/explorer-ui.png"
                                    width={1440}
                                    height={240}
                                    alt="Explorer Interface"
                                />
                            </div>
                            
                            <div className="overflow-hidden h-[490px]">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-n-8 to-transparent z-10 pointer-events-none"></div>
                                    <div 
                                        ref={scrollRef}
                                        className="h-full overflow-hidden"
                                    >
                                        <Masonry columnsCount={4} gutter="24px">{[
                                                { name: "B2B", color: "bg-color-1 text-white" },
                                                { name: "B2C", color: "bg-blue-500 text-white" },
                                                { name: "Discount / Sale", color: "bg-green-500 text-white" },
                                                { name: "Apology / error", color: "bg-pink-500 text-white" },
                                                { name: "Newsletter", color: "bg-purple-500 text-white" },
                                                { name: "Event Invitation", color: "bg-cyan-500 text-white" },
                                                { name: "Password Reset", color: "bg-color-1 text-white" },
                                                { name: "Transactional", color: "bg-orange-500 text-white" },
                                                { name: "Referral", color: "bg-red-500 text-white" },
                                            ].concat([
                                                { name: "B2B", color: "bg-color-1 text-white" },
                                                { name: "B2C", color: "bg-blue-500 text-white" },
                                                { name: "Discount / Sale", color: "bg-green-500 text-white" },
                                                { name: "Apology / error", color: "bg-pink-500 text-white" },
                                                { name: "Newsletter", color: "bg-purple-500 text-white" },
                                                { name: "Event Invitation", color: "bg-cyan-500 text-white" },
                                                { name: "Password Reset", color: "bg-color-1 text-white" },
                                                { name: "Transactional", color: "bg-orange-500 text-white" },
                                                { name: "Referral", color: "bg-red-500 text-white" },
                                            ]).map((item, index) => (
                                                <div key={index} className="relative w-full" style={{ marginBottom: '12px' }}>
                                                    <div
                                                        className={`px-4 py-3 ${item.color} text-sm font-code font-bold text-center`}
                                                    >
                                                        {item.name}
                                                    </div>
                                                    <div className="overflow-hidden border border-n-1/10">
                                                        <Image
                                                            className="w-full h-auto object-cover block"
                                                            src={emailImages[index % emailImages.length]}
                                                            width={800}
                                                            height={1600}
                                                            alt={item.name}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </Masonry>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-n-8 to-transparent z-10 pointer-events-none"></div>
                                </div>
                            </div>
                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className="hidden absolute -left-[5.5rem] bottom-[7.625rem] px-1 py-1 bg-n-1/60 backdrop-blur border border-n-1/10 rounded-2xl xl:flex shadow-xl">
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
                                    title="3 new workflows"
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
