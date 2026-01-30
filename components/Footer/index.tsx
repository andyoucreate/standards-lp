"use client";

import type React from "react";
import { useContactModal } from "@/hooks/useContactModal";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import LanguageSwitcher from "../LanguageSwitcher";
import Logo from "../Logo";
import Section from "../Section";

const ContactModal = dynamic(() => import("../ContactModal"), {
  ssr: false,
});

type FooterProps = object;

const Footer = ({}: FooterProps) => {
  const { isContactModalOpen, handleContactClick, closeModal } = useContactModal();
  const t = useTranslations("navigation");

  function handleLinkClick(e: React.MouseEvent, url: string) {
    handleContactClick(e, url);
  }

  const navigation = [
    {
      id: "0",
      title: t("pricing"),
      url: "/#pricing",
    },
    {
      id: "1",
      title: t("contact"),
      url: "mailto:marvin@emailoverflow.ai",
    },
    {
      id: "5",
      title: t("terms"),
      url: "/terms",
    },
    {
      id: "6",
      title: t("dmca"),
      url: "/dmca",
    },
  ];

  return (
    <>
      <Section
        className="pt-11 pb-6 px-5 lg:pt-[6.5rem] lg:px-7.5 lg:pb-12 xl:px-10"
        crosses
        customPaddings
      >
        <div className="flex items-center justify-center h-[6.5rem] mb-6 border-b border-n-6 lg:justify-start px-8">
          <Logo variant="header" />
          <nav className="hidden lg:flex items-center justify-center ml-auto">
            {navigation.map((item) => (
              <Link
                className="px-6 py-8 font-code text-xs font-semibold leading-5 uppercase text-n-1/50 transition-colors hover:text-n-1"
                href={item.url}
                onClick={(e) => handleLinkClick(e, item.url)}
                key={item.id}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-4 border-b border-n-6 lg:hidden px-8">
          {navigation.map((item) => (
            <Link
              className="font-code text-xs font-semibold leading-5 uppercase text-n-1/50 transition-colors hover:text-n-1"
              href={item.url}
              onClick={(e) => handleLinkClick(e, item.url)}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:py-0 px-8">
          <div className="caption text-n-4 order-2 lg:order-1">
            © {new Date().getFullYear()} emailoverflow
          </div>
          <div className="caption text-n-4 flex items-center gap-4 order-1 lg:order-2">
            <span>
              Standardisé par{" "}
              <a
                href="https://www.andyoucreate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-n-1 hover:text-n-1/80 transition-colors"
              >
                &YC
              </a>
            </span>
            <span className="text-n-1/30 hidden lg:inline">·</span>
            <LanguageSwitcher />
          </div>
        </div>
      </Section>
      <ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
    </>
  );
};

export default Footer;
