"use client";

import { useContactModal } from "@/hooks/useContactModal";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button";
import Logo from "../Logo";

import { navigation } from "@/constants/navigation";

const ContactModal = dynamic(() => import("../ContactModal"), {
  ssr: false,
});

type HeaderProps = object;

const Header = ({}: HeaderProps) => {
  const pathname = usePathname();
  const { isContactModalOpen, handleContactClick, closeModal } = useContactModal();

  return (
    <>
      <div className="fixed top-6 left-8 right-8 z-50 bg-n-8/80 backdrop-blur-md border border-n-6 rounded-2xl lg:left-1/2 lg:right-auto lg:-translate-x-1/2">
        <div className="flex items-center h-[5.25rem] px-6 xl:px-8">
          <Logo className="pr-3 xl:mr-4" />
          <nav className="flex ml-auto lg:mx-auto">
            <div className="relative z-2 flex flex-row whitespace-nowrap">
              {navigation.map(
                (item, index) =>
                  !item.onlyMobile &&
                  !item.footerOnly &&
                  item.url !== "/login?new=true" && (
                    <Link
                      className={`block relative font-code text-xs font-semibold uppercase text-n-1 transition-colors hover:text-color-1 px-6 ${
                        item.url === pathname ||
                        (item.url === "/login" && pathname.startsWith("/login"))
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
              )}
            </div>
          </nav>
          <Button href="/login?new=true" onClick={(e) => e?.preventDefault()}>
            S'inscrire
          </Button>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
