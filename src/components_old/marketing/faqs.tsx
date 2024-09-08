import Link from "next/link";
import SectionStart from "./section-start";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components_old/ui/accordion";
import SafeContainer from "../ui/safe-container";

export default function FAQs() {
  return (
    <SafeContainer id="faqs" className="flex flex-row flex-wrap">
      <SectionStart
        title="Frequently Asked Questions"
        className="lg:text-left lg:items-start lg:mb-auto w-full lg:w-1/2 lg:mt-3"
        subtitle={
          <p>
            Have another question? Contact me on&nbsp;
            <Link
              href="/"
              className="underline underline-offset-2 hover:text-primary"
            >
              Twitter
            </Link>
            &nbsp; or by&nbsp;
            <Link
              href="/"
              className="underline underline-offset-2 hover:text-primary"
            >
              email
            </Link>
            .
          </p>
        }
      />
      <Accordion
        type="multiple"
        className="max-w-lg w-full lg:w-1/2 mx-auto text-left"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base sm:text-lg text-left">
            Exactly what do I get?
          </AccordionTrigger>
          <AccordionContent className="sm:text-base">
            1/ The NextJS starter with all the boilerplate code you need to run
            an online business: a payment system, a database, login, a blog, UI
            components, and much more.
            <br />
            The repo is available in: - Javascript and Typescript - /app router
            and /pages router. <br />
            <br />
            2/ The documentation to help you set up from scratch and sprint
            through your launch. <br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base sm:text-lg text-left">
            JavaScript or TypeScript?
          </AccordionTrigger>
          <AccordionContent className="sm:text-base">
            Both! You can choose once you get access
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base sm:text-lg text-left">
            /app router or /pages router?
          </AccordionTrigger>
          <AccordionContent className="sm:text-base">
            Both! You can choose once you get access
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base sm:text-lg text-left">
            My tech stack is different, can I still use it?
          </AccordionTrigger>
          <AccordionContent className="sm:text-base">
            Yes, as long as you&apos;re comfortable with React & NextJS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-base sm:text-lg text-left">
            How is SprintLaunch better than other boilerplates?
          </AccordionTrigger>
          <AccordionContent className="sm:text-base">
            Not only does SprintLaunch help you ship & validate your idea fast,
            we use tools and technologies you can build on top of.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-base sm:text-lg text-left">
            Can I update the theme?
          </AccordionTrigger>
          <AccordionContent className="sm:text-base">
            Yes, SprintLaunch is built entrirely using&nbsp;
            <Link
              target="_blank"
              href="https://ui.shadcn.com"
              className="underline underline-offset-2 hover:text-primary"
            >
              shadcn-ui
            </Link>
            &nbsp;so you have complete control over your code. <br />
            <br />
            You can also explore 1000s of supported themes&nbsp;
            <Link
              href="https://ui.jln.dev/"
              target="_blank"
              className="underline underline-offset-2 hover:text-primary"
            >
              here
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SafeContainer>
  );
}
