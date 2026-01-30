"use client";

import { useContactModal } from "@/hooks/useContactModal";
import { useWaitingListModal } from "@/hooks/useWaitingListModal";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import type React from "react";
import Button from "../Button";
import Logo from "../Logo";

const ContactModal = dynamic(() => import("../ContactModal"), {
  ssr: false,
});

type HeaderProps = object;

const Header = ({}: HeaderProps) => {
  const pathname = usePathname();
  const { isContactModalOpen, handleContactClick, closeModal } = useContactModal();
  const openWaitingList = useWaitingListModal((state) => state.open);
  const t = useTranslations("navigation");

  const navigation = [
    {
      id: "0",
      title: t("pricing"),
      url: "/#pricing",
    },
    {
      id: "1",
      title: t("contact"),
      url: "/contact",
    },
  ];

  return (
    <>
      <div className="fixed top-6 left-8 right-8 z-50 bg-n-8/80 backdrop-blur-md border border-n-6 rounded-2xl lg:left-1/2 lg:right-auto lg:-translate-x-1/2">
        <div className="flex items-center h-[5.25rem] px-6 xl:px-8">
          <Logo variant="header" className="pr-3 xl:mr-4" />
          <nav className="flex ml-auto lg:mx-auto">
            <div className="relative z-2 flex flex-row whitespace-nowrap">
              {navigation.map((item) => (
                <Link
                  className={`block relative font-code text-xs font-semibold uppercase text-n-1 transition-colors hover:text-color-1 px-6 ${
                    item.url === pathname ? "z-2 text-n-1" : "text-n-1/50"
                  } leading-5 hover:text-n-1 whitespace-nowrap`}
                  href={item.url}
                  onClick={(e) => handleContactClick(e, item.url)}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
          <Button onClick={openWaitingList} white>
            {t("join_waitlist")}
          </Button>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
