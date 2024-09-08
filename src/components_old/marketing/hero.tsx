import AvatarStack from "./avatar-stack";
import Ratings from "./ratings";
import Image from "next/image";
import PromoCTA from "../common/promo-cta";
import CTAButton from "../common/cta-button";
import SafeContainer from "../ui/safe-container";

export default function Hero() {
  return (
    <SafeContainer className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 justify-center gap-10">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-4xl max-w-sm sm:max-w-fit sm:text-5xl font-extrabold md:text-6xl">
            Ship your startup in days, not weeks
          </h1>
          <p className="text-muted-foreground md:text-lg mt-4">
            The NextJS boilerplate with all everything configured to help you
            sprint launch your SaaS, AI tool, or any other idea.
          </p>
        </div>
        <div className="flex flex-col">
          <CTAButton />
          <PromoCTA />
        </div>

        <div className="flex gap-2 items-center md:flex-row flex-col">
          <AvatarStack />
          <div className="flex flex-col gap-1 items-center md:items-start">
            <Ratings />
            <p>
              <span className="font-bold text-sm">489</span> hackers sprint
              launched
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center lg:w-1/2 lg:mt-0 mt-6">
        <Image
          src="/svgs/placeholder-1-1.svg"
          alt="Sprint Launch Features Overview"
          className="object-cover rounded-2xl"
          width={500}
          height={500}
        />
      </div>
    </SafeContainer>
  );
}
