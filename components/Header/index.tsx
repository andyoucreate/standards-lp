"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "../Button";
import Logo from "../Logo";
import Image from "../Image";

import { navigation } from "@/constants/navigation";

function LoginLink() {
  const searchParams = useSearchParams();
  return (
    <Link
      className={`button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block whitespace-nowrap ${
        !searchParams.has("new") ? "lg:text-n-1" : ""
      }`}
      href="/login"
    >
      Login
    </Link>
  );
}

type HeaderProps = object;

const Header = ({}: HeaderProps) => {
    const [openNavigation, setOpenNavigation] = useState<boolean>(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const pathname = usePathname();

    const handleClick = () => {
        enablePageScroll();
        setOpenNavigation(false);
    };

    useEffect(() => {
        enablePageScroll();
        setOpenNavigation(false);
    }, []);

    return (
        <div
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${
                openNavigation ? "bg-n-8" : "bg-n-8/80 backdrop-blur-md"
            } border border-n-6 rounded-2xl lg:bg-n-8/80 lg:backdrop-blur-md`}
        >
            <div className="flex items-center h-[4.75rem] px-4 lg:h-[5.25rem] lg:px-6 xl:px-8">
                <Logo className="xl:mr-8" />
                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[6.25rem] left-6 right-6 bottom-6 bg-n-8/95 backdrop-blur-md rounded-2xl lg:static lg:flex lg:mx-auto lg:bg-transparent lg:backdrop-blur-none lg:rounded-none`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:whitespace-nowrap">
                        {navigation.map((item) => (
                            <Link
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                                    item.onlyMobile ? "lg:hidden" : ""
                                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                } lg:leading-5 lg:hover:text-n-1 lg:px-4 xl:px-5 whitespace-nowrap`}
                                href={item.url}
                                onClick={() =>
                                    item.url.startsWith(pathname) &&
                                    handleClick()
                                }
                                key={item.id}
                            >
                                {item.title}
                                <div
                                    className={`hidden absolute left-0 bottom-0 w-0.25 h-1.5 bg-n-6 lg:block ${
                                        pathname === item.url
                                            ? "lg:h-3 lg:bg-n-1"
                                            : ""
                                    }`}
                                ></div>
                                <div
                                    className={`hidden absolute right-0 bottom-0 w-0.25 h-1.5 bg-n-6 lg:block ${
                                        pathname === item.url
                                            ? "lg:h-3 lg:bg-n-1"
                                            : ""
                                    }`}
                                ></div>
                            </Link>
                        ))}
                    </div>
                </nav>
                <Suspense fallback={
                    <Link
                        className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block whitespace-nowrap"
                        href="/login"
                    >
                        Login
                    </Link>
                }>
                    <LoginLink />
                </Suspense>
                <Button className="hidden lg:flex" href="/login?new=true">
                    Sign up
                </Button>
                <Button
                    className="ml-auto lg:hidden"
                    onClick={toggleNavigation}
                    px="px-3"
                >
                    <svg
                        className="overflow-visible"
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                    >
                        <rect
                            className="transition-all origin-center"
                            y={openNavigation ? "5" : "0"}
                            width="20"
                            height="2"
                            rx="1"
                            fill="white"
                            transform={`rotate(${openNavigation ? "45" : "0"})`}
                        />
                        <rect
                            className="transition-all origin-center"
                            y={openNavigation ? "5" : "10"}
                            width="20"
                            height="2"
                            rx="1"
                            fill="white"
                            transform={`rotate(${
                                openNavigation ? "-45" : "0"
                            })`}
                        />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default Header;
