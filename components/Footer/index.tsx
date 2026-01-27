"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "../Section";
import Logo from "../Logo";
import Image from "../Image";
import ContactModal from "../ContactModal";

import { navigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleContactClick = (e: React.MouseEvent, url: string) => {
        if (url === "/contact") {
            e.preventDefault();
            setIsContactModalOpen(true);
        } else if (url === "/login" || url === "/login?new=true") {
            e.preventDefault();
            // Login/Sign up functionality to be implemented
        }
    };

    return (
        <>
            <Section
                className="pt-11 pb-6 px-5 lg:pt-[6.5rem] lg:px-7.5 lg:pb-12 xl:px-10"
                crosses
                customPaddings
            >
                <div className="flex items-center justify-center h-[6.5rem] mb-6 border-b border-n-6 lg:justify-start px-8">
                    <Logo />
                    <nav className="hidden lg:flex items-center justify-center ml-auto">
                        {navigation.filter(item => !item.onlyMobile).map((item) => (
                            <Link
                                className={`px-6 py-8 font-code text-xs font-semibold leading-5 uppercase text-n-1/50 transition-colors hover:text-n-1`}
                                href={item.url}
                                onClick={(e) => handleContactClick(e, item.url)}
                                key={item.id}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="lg:flex lg:items-center lg:justify-between px-8">
                    <div className="hidden caption text-n-4 lg:block">
                        © {new Date().getFullYear()} Emailoverflow
                    </div>
                </div>
            </Section>
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

export default Footer;
