"use client";

import Button from "@/components/Button";
import Image from "@/components/Image";
import Section from "@/components/Section";
import { useWaitingListModal } from "@/hooks/useWaitingListModal";
import { useTranslations } from "next-intl";
import { memo } from "react";

import { apps } from "@/mocks/collaboration";

type CollaborationProps = object;

const ROTATIONS = [0, 45, 90, 135, 180, 225, 270, 315];

const Collaboration = memo(function Collaboration({}: CollaborationProps) {
  const openWaitingList = useWaitingListModal((state) => state.open);
  const t = useTranslations("navigation");
  const tCollaboration = useTranslations("collaboration");
  return (
    <Section>
      <div className="container lg:flex lg:items-center">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">{tCollaboration("title")}</h2>
          <Button onClick={openWaitingList} white className="mt-6">
            {t("join_waitlist")}
          </Button>
        </div>
        <div className="mt-15 lg:mt-0 lg:mx-auto xl:w-[37.5rem] hidden lg:block">
          <div className="relative lg:w-[22.5rem] lg:mx-auto">
            <div className="relative left-1/2 flex w-[22.5rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[5.75rem] aspect-square m-auto flex items-center justify-center">
                  <Image src="/images/logomark.svg" width={48} height={48} alt="emailoverflow" />
                </div>
              </div>
              <ul>
                {apps.map((app, index) => {
                  const rotation = ROTATIONS[index];
                  return (
                    <li
                      className="absolute top-0 left-1/2 h-1/2 -ml-[1.625rem] origin-bottom"
                      style={{ transform: `rotate(${rotation}deg)` }}
                      key={app.id}
                    >
                      <div
                        className="relative -top-[1.625rem] flex w-[3.25rem] h-[3.25rem] bg-n-7 border border-n-1/15 rounded-xl"
                        style={{ transform: `rotate(-${rotation}deg)` }}
                      >
                        <Image
                          className="m-auto"
                          src={app.icon}
                          width={app.width}
                          height={app.height}
                          alt={app.title}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Collaboration;
