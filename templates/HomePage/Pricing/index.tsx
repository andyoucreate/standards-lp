"use client";

import Heading from "@/components/Heading";
import Image from "@/components/Image";
import PricingList from "@/components/PricingList";
import Section from "@/components/Section";
import Tooltip from "@/components/Tooltip";
import { useComparison } from "@/hooks/useTranslatedContent";
import { useTranslations } from "next-intl";
import { memo, useCallback, useState } from "react";

type PricingProps = object;

const Pricing = memo(function Pricing({}: PricingProps) {
  const [showComparison, setShowComparison] = useState(false);
  const comparison = useComparison();
  const t = useTranslations("pricing");

  const check = useCallback(
    (value: boolean | string | null, enterprise?: boolean) =>
      typeof value === "boolean" ? (
        value === true ? (
          <Image
            src={enterprise ? "/images/check-yellow.svg" : "/images/check.svg"}
            width={24}
            height={24}
            alt=""
          />
        ) : null
      ) : (
        value
      ),
    []
  );

  return (
    <Section className="overflow-visible" id="pricing">
      <div className="container relative z-2 overflow-visible">
        <Heading tag={t("tag")} title={t("title")} />
        <div className="relative">
          <PricingList />
          <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
            <Image
              className="w-full"
              src="/images/pricing/lines.svg"
              width={1480}
              height={177}
              alt="Lines"
            />
          </div>
          <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
            <Image
              className="w-full"
              src="/images/pricing/lines.svg"
              width={1480}
              height={177}
              alt="Lines"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-15 xl:mt-20">
          <button
            className="text-xs font-code font-bold tracking-wider uppercase border-b border-n-1 transition-colors hover:border-n-1/0"
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? t("hide_details") : t("show_details")}
          </button>
        </div>

        {showComparison && (
          <div className="mt-16 md:mt-20 lg:mt-24">
            <Heading className="md:text-center mb-12" title={t("comparison_title")} />
            <div className="-mx-5 px-5 overflow-auto">
              <table className="table-fixed w-full min-w-[32rem]">
                <tbody>
                  <tr className="h6">
                    <td className="w-[35%] py-4 pr-10">{t("table_features")}</td>
                    <td className="p-4 text-center text-color-2">{t("table_basic")}</td>
                    <td className="p-4 text-center text-color-1">{t("table_premium")}</td>
                    <td className="p-4 text-center text-color-3">{t("table_enterprise")}</td>
                  </tr>
                  {comparison.map((item) => (
                    <tr className="body-2" key={item.id}>
                      <td className="w-[35%] h-[4.75rem] py-2.5 pr-2.5 border-t border-n-1/5">
                        <div className="flex items-center">
                          {item.title}
                          <Tooltip
                            className="flex-shrink-0 ml-3 opacity-30 transition-opacity hover:opacity-100"
                            content="Provide dedicated servers for enterprises to ensure maximum security, performance, and uptime."
                            placement="right"
                            animation="shift-toward"
                          >
                            <Image
                              src="/images/icons/help-circle.svg"
                              width={24}
                              height={24}
                              alt="Help"
                            />
                          </Tooltip>
                        </div>
                      </td>
                      <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                        {check(item.pricing[0], item.enterprise)}
                      </td>
                      <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                        {check(item.pricing[1], item.enterprise)}
                      </td>
                      <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                        {check(item.pricing[2], item.enterprise)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
});

export default Pricing;
