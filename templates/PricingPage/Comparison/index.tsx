"use client";

import Heading from "@/components/Heading";
import Image from "@/components/Image";
import Section from "@/components/Section";
import Tooltip from "@/components/Tooltip";
import { useComparison } from "@/hooks/useTranslatedContent";
import { useTranslations } from "next-intl";

type ComparisonProps = object;

const Comparison = ({}: ComparisonProps) => {
  const comparison = useComparison();
  const t = useTranslations("comparison");
  const tPricing = useTranslations("pricing");

  const check = (value: any) =>
    typeof value === "boolean" ? (
      value === true ? (
        <Image src="/images/check.svg" width={24} height={24} alt="Check" />
      ) : null
    ) : (
      value
    );

  return (
    <Section>
      <div className="container">
        <Heading className="md:text-center" title={tPricing("comparison_title")} />
        <div className="-mx-5 px-5 overflow-auto">
          <table className="table-fixed w-full min-w-[32rem]">
            <tbody>
              <tr className="h6">
                <td className="w-[40%] py-4 pr-10">{tPricing("table_features")}</td>
                <td className="p-4 text-center text-color-2">{tPricing("table_basic")}</td>
                <td className="p-4 text-center text-color-1">{tPricing("table_premium")}</td>
              </tr>
              {comparison.map((item) => (
                <tr className="body-2" key={item.id}>
                  <td className="w-[40%] h-[4.75rem] py-2.5 pr-2.5 border-t border-n-1/5">
                    <div className="flex items-center">
                      {item.title}
                      <Tooltip
                        className="flex-shrink-0 ml-3 opacity-30 transition-opacity hover:opacity-100"
                        content="Detailed information about this feature"
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
                    {check(item.pricing[0])}
                  </td>
                  <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                    {check(item.pricing[1])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Comparison;
