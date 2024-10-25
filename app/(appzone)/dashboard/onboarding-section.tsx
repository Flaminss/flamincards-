import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { ArrowRightCircleIcon, ChevronDown, ScrollIcon } from "lucide-react";

const tasks = [
  {
    title: "Verify Your Identity",
    description: "Go to the accounts page to verify your email",
    href: "/account",
  },
  {
    title: "Complete Your Profile Setup",
    description: "Add your personal details for a more personalized experience",
    href: "/account/profile",
  },
  {
    title: "Set Up Payment Information",
    description: "Add or link a payment method for seamless transactions.",
    href: "/account/banks",
  },
  {
    title: "Make Your First Transaction",
    description:
      "Trade a gift card or buy airtime to explore the app's core features.",
    href: "/giftcards",
  },
  {
    title: "Invite and Earn",
    description:
      "Earn rewards or enjoy social features by inviting others to use the app.",
    href: "/invite",
  },
];

export default function OnboardingSection() {
  return (
    <section className="pb-6 px-4 mx-auto">
      <Accordion className="!p-0">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="User Guide to Getting Started"
          subtitle="Learn the basics and setup your experience with teh steps and Instructions"
          className="shadow border slick-dark-bg rounded-lg ps-3.5 pe-2.5 lg:ps-4"
          classNames={{
            title: "sm:text-lg font-medium mb-1",
            subtitle: "text-xs text-zinc-400",
            content: "pb-3 lg:pb-4",
          }}
          indicator={({ isDisabled }) => {
            return (
              <Chip
                size="sm"
                radius="md"
                color="primary"
                variant="flat"
                className="!size-8 ms-auto"
                isDisabled={isDisabled}
              >
                <ChevronDown size={16} />
              </Chip>
            );
          }}
        >
          <section className="lg:flex gap-6 items-end">
            <div data-dev-about="ui-block flex-grow">
              <button
                className="cursor-pointer mb-4 text-sm text-primary underline hover:text-primary-900"
                onClick={() => {
                  alert("wassup");
                }}
              >
                Skip all
              </button>

              <Listbox
                aria-label="onboarding task and activities"
                // onAction={(key) => alert(key)}
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
                itemClasses={{
                  base: "bg-content1 px-2.5 py-2 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 data-[hover=true]:bg-default-100/80 items-start",
                }}
                disabledKeys={["issues"]}
              >
                {tasks.map(({ href, title, description }, index) => {
                  return (
                    <ListboxItem
                      key={index}
                      className="!px-3"
                      href={href}
                      startContent={
                        <div className="grid place-content-center font-medium size-7 rounded-md bg-danger text-sm text-center leading-none mt-1">
                          {index + 1}
                        </div>
                      }
                      endContent={
                        <ArrowRightCircleIcon className="mx-2 size-4 text-zinc-400 self-center" />
                      }
                    >
                      <h5 className="flex items-center gap-x-2 lg:text-base">
                        {title}
                      </h5>
                      <p className="text-gray-400 text-xs lg:text-sm mt-.5 text-wrap">
                        {description}
                      </p>
                    </ListboxItem>
                  );
                })}
              </Listbox>
            </div>

            <figure
              data-dev-about="block-for-advert"
              className="mx-auto hidden lg:block w-full lg:max-w-[282px] h-[312px] border justify-stretch rounded-lg bg-content1 shadow"
            ></figure>
          </section>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
