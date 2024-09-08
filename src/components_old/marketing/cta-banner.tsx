import React from "react";

import SafeContainer from "../ui/safe-container";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "../common/cta-button";
import { Button } from "../ui/button";

type Props = {};

export default function CTABanner({}: Props) {
  return (
    <SafeContainer className="">
      <div className="w-full bg-primary rounded-xl overflow-clip">
        <div className="flex flex-col md:flex-row px-4 lg:px-8 md:justify-between py-7 md:py-4 md:items-center">
          <div className="text-center md:text-left">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tighter text-4xl/tight md:text-3xl/tight xl:text-5xl/tight text-background">
                Made just for you.
              </h3>
              <p className="max-w-[600px] text-background/80 md:text-base/tight lg:text-lg/relaxed dark:text-gray-400">
                Support for the platforms you love and enough customization to
                make your page truly yours.
              </p>
            </div>
            <Button
              size="lg"
              className="font-semibold mt-5 bg-background text-primary hover:bg-background/80">
              Get Started
            </Button>
          </div>
          <div>
            <Image
              src="/svgs/placeholder-12-5.svg"
              alt="Sprint Launch Features Overview"
              className="object-cover rounded-lg relative top-8 md:top-14 left-0 md:left-14"
              width={1000}
              height={420}
            />
          </div>
        </div>
      </div>
    </SafeContainer>
  );
}
