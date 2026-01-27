"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../Button";
import Logo from "../Logo";
import ContactModal from "../ContactModal";

import { navigation } from "@/constants/navigation";

type HeaderProps = object;

const Header = ({}: HeaderProps) => {
    const pathname = usePathname();
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
            <div className="fixed top-6 left-8 right-8 z-50 bg-n-8/80 backdrop-blur-md border border-n-6 rounded-2xl lg:left-1/2 lg:right-auto lg:-translate-x-1/2">
                <div className="flex items-center h-[5.25rem] px-6 xl:px-8">
                    <Logo className="pr-6 xl:mr-8" />
                    <nav className="flex ml-auto lg:mx-auto">
                        <div className="relative z-2 flex flex-row whitespace-nowrap">
                            {navigation.map((item, index) => (
                                !item.onlyMobile && !item.footerOnly && item.url !== "/login?new=true" && (
                                    <Link
                                        className={`block relative font-code text-xs font-semibold uppercase text-n-1 transition-colors hover:text-color-1 ${
                                            index === 0 ? "pl-6 pr-3" : index === navigation.filter(nav => !nav.onlyMobile).length - 1 ? "pl-3 pr-6" : "px-6"
                                        } ${
                                            item.url === pathname || (item.url === "/login" && pathname.startsWith("/login"))
                                                ? "z-2 text-n-1"
                                                : "text-n-1/50"
                                        } leading-5 hover:text-n-1 whitespace-nowrap`}
                                        href={item.url}
                                        onClick={(e) => handleContactClick(e, item.url)}
                                        key={item.id}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            ))}
                        </div>
                    </nav>
                    <Button href="/login?new=true" onClick={(e: React.MouseEvent) => e.preventDefault()}>
                        Sign up
                    </Button>
                </div>
            </div>
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

export default Header;
