"use client";

import { useEffect, useRef } from "react";
import Masonry from "react-responsive-masonry";
import Section from "@/components/Section";
import Generating from "@/components/Generating";
import Image from "@/components/Image";
import Heading from "@/components/Heading";

type ServicesProps = {
    containerClassName?: string;
};

const Services = ({ containerClassName }: ServicesProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

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

    return (
    <Section>
        <div className={`container ${containerClassName || ""}`}>
            <Heading
                title="Couverture complète de votre industrie"
                text="Nous suivons les leaders de plus de 50 industries différentes"
            />
            <div className="relative">
                <div className="relative z-1 h-[38.75rem] mb-5 overflow-hidden lg:h-[38.75rem] xl:h-[45.75rem]">
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
                <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
                    <Image
                        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
                        src="/images/gradient.png"
                        width={1417}
                        height={1417}
                        alt="Gradient"
                    />
                </div>
            </div>
        </div>
        </Section>
    );
};

export default Services;
