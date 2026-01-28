import Button from "@/components/Button";
import Image from "@/components/Image";
import Section from "@/components/Section";
import { memo } from "react";

import { apps, content, text } from "@/mocks/collaboration";

type CollaborationProps = object;

const ROTATIONS = [0, 45, 90, 135, 180, 225, 270, 315];

const Collaboration = memo(function Collaboration({}: CollaborationProps) {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">Track top brands automatically</h2>
          <ul className="max-w-[22.5rem] mb-10 md:mb-14">
            {content.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image src="/images/check.svg" width={24} height={24} alt="Check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="mt-15 lg:mt-0 lg:mx-auto xl:w-[37.5rem]">
          <div className="relative lg:w-[22.5rem] lg:mx-auto">
            <div className="relative left-1/2 flex w-[22.5rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[5.75rem] aspect-square m-auto flex items-center justify-center">
                  <Image src="/images/logo.svg" width={48} height={48} alt="emailoverflow" />
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
