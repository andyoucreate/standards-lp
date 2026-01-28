"use client";

import { useContactModal } from "@/hooks/useContactModal";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "../Image";
import Logo from "../Logo";
import Section from "../Section";

import { navigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";

const ContactModal = dynamic(() => import("../ContactModal"), {
  ssr: false,
});

type FooterProps = object;

const Footer = ({}: FooterProps) => {
  const { isContactModalOpen, handleContactClick, closeModal } = useContactModal();

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
            {navigation
              .filter((item) => !item.onlyMobile)
              .map((item) => (
                <Link
                  className="px-6 py-8 font-code text-xs font-semibold leading-5 uppercase text-n-1/50 transition-colors hover:text-n-1"
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
            © {new Date().getFullYear()} emailoverflow
          </div>
          <div className="hidden caption text-n-4 lg:block">
            Standardisé par{" "}
            <a
              href="https://www.andyoucreate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-color-1 hover:text-n-1 transition-colors"
            >
              &YC
            </a>
          </div>
        </div>
      </Section>
      <ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
    </>
  );
};

export default Footer;
