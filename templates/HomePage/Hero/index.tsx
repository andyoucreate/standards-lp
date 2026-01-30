"use client";

import Button from "@/components/Button";
import Image from "@/components/Image";
import Logos from "@/components/Logos";
import Notification from "@/components/Notification";
import { NumberTicker } from "@/components/NumberTicker";
import Section from "@/components/Section";
import { useWaitingListModal } from "@/hooks/useWaitingListModal";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { ScrollParallax } from "react-just-parallax";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  const [activeTab, setActiveTab] = useState<string>("data");
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("hero");
  const openWaitingList = useWaitingListModal((state) => state.open);

  // Calculate emails count: 5000 emails per day
  // 1 day = 86,400 seconds / 5000 emails = 17.28 seconds per email
  const calculateEmailsCount = () => {
    const startDate = new Date("2026-01-28T00:00:00");
    const now = new Date();

    // Calculate total seconds elapsed
    const secondsElapsed = (now.getTime() - startDate.getTime()) / 1000;

    // One email every 17.28 seconds (86400 seconds / 5000 emails)
    const secondsPerEmail = 86400 / 5000;
    const emailsToAdd = Math.floor(secondsElapsed / secondsPerEmail);

    return 2119931 + emailsToAdd;
  };

  const targetEmailsCount = calculateEmailsCount();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollTop += 0.5;

        // Reset at half since we only have 2 copies now
        const singleSetHeight = scrollContainer.scrollHeight / 2;

        if (scrollContainer.scrollTop >= singleSetHeight) {
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
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">{t("title")}</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">{t("description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button onClick={openWaitingList} white>
              {t("cta_waitlist")}
            </Button>
            {/* TODO: Uncomment when ready for launch
            <Button href="https://cal.com/your-calendar-link" lightGray>
              {t("cta_demo")}
            </Button>
            */}
          </div>
          <div className="mt-12 flex flex-nowrap justify-center items-center gap-4 md:gap-6 lg:gap-10">
            <div className="text-center shrink-0">
              <div className="text-xs text-n-3 mb-1.5">{t("stats.emails")}</div>
              <NumberTicker value={targetEmailsCount} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-n-1" />
            </div>
            <div className="text-center shrink-0">
              <div className="text-xs text-n-3 mb-1.5">{t("stats.brands")}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-n-1">
                <NumberTicker value={10850} delay={0.2} />+
              </div>
            </div>
            <div className="text-center shrink-0">
              <div className="text-xs text-n-3 mb-1.5">{t("stats.industries_analysed")}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-n-1">
                <NumberTicker value={145} delay={0.3} />+
              </div>
            </div>
            <div className="text-center shrink-0">
              <div className="text-xs text-n-3 mb-1.5">{t("stats.sequences_analysed")}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-n-1">
                <NumberTicker value={118270} delay={0.4} />+
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation - Attio Style - Full Width */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="flex items-center gap-1 p-1 bg-n-7/30 backdrop-blur-sm rounded-xl border border-n-6/50 w-full max-w-2xl">
            {[
              { id: "data", label: "Data" },
              { id: "workflows", label: "Workflows" },
              { id: "reporting", label: "Reporting" },
              { id: "pipeline", label: "Pipeline" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.id ? "bg-n-8 text-n-1 shadow-lg" : "text-n-3 hover:text-n-1"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative max-w-[23.25rem] mx-auto md:max-w-5xl lg:max-w-7xl xl:max-w-[90rem] xl:mb-24">
          <div className="relative z-1 border border-n-6 rounded-2xl">
            <div className="relative bg-n-8 rounded-[0.875rem]">
              {/* Explorer UI Screenshot - Fixed at top - Only for Data tab */}
              {activeTab === "data" && (
                <div className="sticky top-0 z-0 bg-n-8 rounded-[0.875rem] overflow-hidden">
                  <Image
                    className="w-full h-auto"
                    src="/images/explorer-ui.png"
                    width={1440}
                    height={240}
                    alt="Explorer Interface"
                  />
                </div>
              )}

              {/* Workflows Tab Content */}
              {activeTab === "workflows" && (
                <div className="p-8 md:p-12 lg:p-16 h-[730px]">
                  <div className="h-full rounded-xl bg-gradient-to-br from-n-7/50 to-n-7/20 border border-n-6/30 p-8 md:p-12">
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-color-1/10 backdrop-blur-sm border border-color-1/20">
                        <svg
                          className="w-8 h-8 text-color-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="h4 mb-3 text-n-1">Automated Workflows</h3>
                      <p className="body-2 text-n-3 max-w-lg mb-10">
                        Create powerful automation sequences that trigger when competitors launch
                        campaigns, update pricing, or make strategic moves.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                        {[
                          {
                            title: "Auto-tracking",
                            desc: "Monitor competitors 24/7",
                            icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                          },
                          {
                            title: "Smart alerts",
                            desc: "Get notified instantly",
                            icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                          },
                          {
                            title: "Sequential actions",
                            desc: "Chain multiple steps",
                            icon: "M4 6h16M4 12h16M4 18h16",
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="p-5 bg-n-8/50 backdrop-blur-sm rounded-xl border border-n-6/30 hover:border-n-6/50 transition-all"
                          >
                            <div className="w-10 h-10 mb-4 rounded-lg bg-color-1/10 flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-color-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d={item.icon}
                                />
                              </svg>
                            </div>
                            <div className="text-sm font-semibold text-n-1 mb-2">{item.title}</div>
                            <div className="text-xs text-n-4">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reporting Tab Content */}
              {activeTab === "reporting" && (
                <div className="p-8 md:p-12 lg:p-16 h-[730px]">
                  <div className="h-full rounded-xl bg-gradient-to-br from-n-7/50 to-n-7/20 border border-n-6/30 p-8 md:p-12">
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-color-1/10 backdrop-blur-sm border border-color-1/20">
                        <svg
                          className="w-8 h-8 text-color-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="h4 mb-3 text-n-1">Advanced Analytics</h3>
                      <p className="body-2 text-n-3 max-w-lg mb-10">
                        Generate detailed reports on competitor strategies, campaign performance,
                        and industry trends with real-time data visualization.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                        {[
                          {
                            title: "Trend analysis",
                            desc: "Spot patterns in campaigns",
                            icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
                          },
                          {
                            title: "Performance metrics",
                            desc: "Track important KPIs",
                            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                          },
                          {
                            title: "Custom dashboards",
                            desc: "Build your own reports",
                            icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="p-5 bg-n-8/50 backdrop-blur-sm rounded-xl border border-n-6/30 hover:border-n-6/50 transition-all"
                          >
                            <div className="w-10 h-10 mb-4 rounded-lg bg-color-1/10 flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-color-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d={item.icon}
                                />
                              </svg>
                            </div>
                            <div className="text-sm font-semibold text-n-1 mb-2">{item.title}</div>
                            <div className="text-xs text-n-4">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Pipeline Tab Content */}
              {activeTab === "pipeline" && (
                <div className="p-8 md:p-12 lg:p-16 h-[730px]">
                  <div className="h-full rounded-xl bg-gradient-to-br from-n-7/50 to-n-7/20 border border-n-6/30 p-8 md:p-12">
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-color-1/10 backdrop-blur-sm border border-color-1/20">
                        <svg
                          className="w-8 h-8 text-color-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <h3 className="h4 mb-3 text-n-1">Campaign Pipeline</h3>
                      <p className="body-2 text-n-3 max-w-lg mb-10">
                        Organize and track your marketing campaigns from ideation to execution with
                        a visual pipeline inspired by competitor insights.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                        {[
                          {
                            title: "Visual stages",
                            desc: "Track campaign progress",
                            icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
                          },
                          {
                            title: "Team collaboration",
                            desc: "Work together seamlessly",
                            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                          },
                          {
                            title: "Inspiration board",
                            desc: "Save competitor examples",
                            icon: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="p-5 bg-n-8/50 backdrop-blur-sm rounded-xl border border-n-6/30 hover:border-n-6/50 transition-all"
                          >
                            <div className="w-10 h-10 mb-4 rounded-lg bg-color-1/10 flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-color-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d={item.icon}
                                />
                              </svg>
                            </div>
                            <div className="text-sm font-semibold text-n-1 mb-2">{item.title}</div>
                            <div className="text-xs text-n-4">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden absolute -left-[5.5rem] bottom-[7.625rem] px-1 py-1 bg-n-1/60 backdrop-blur border border-n-1/10 rounded-2xl xl:flex shadow-xl">
                  {[
                    "/images/icons/home-smile.svg",
                    "/images/icons/file-02.svg",
                    "/images/icons/search-md.svg",
                    "/images/icons/plus-square.svg",
                  ].map((icon, index) => (
                    <li className="p-5" key={index}>
                      <Image src={icon} width={24} height={25} alt={icon} />
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
        <Logos className="hidden" />
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
