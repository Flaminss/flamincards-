"use client";

import { title } from "@app/lib/primitives";
import { Button, Chip, Listbox, ListboxItem, Switch } from "@nextui-org/react";
import {
  BugIcon,
  CakeIcon,
  CalendarDaysIcon,
  ChevronRightCircleIcon,
  ChevronRightIcon,
  CircleDollarSign,
  ClapperboardIcon,
  CreditCardIcon,
  HeadsetIcon,
  KeyRoundIcon,
  LineChartIcon,
  Mail,
  MailWarningIcon,
  MessageCircleQuestionIcon,
  MoonIcon,
  PhoneIcon,
  ShieldPlusIcon,
  TrophyIcon,
  UserCircleIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import PWAPageTitle from "../page-title";

export default function BlogPage() {
  return (
    <div className="max-w-xl mx-auto lg:mx-0">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        {/* <h1 className="text-2xl lg:text-3xl">Your Account Settings</h1> */}
        <PWAPageTitle title="Your Account Settings" />
      </header>

      <section className="pt-4 px-4 space-y-10">
        <MenuBlock
          title="Profile"
          list={[
            {
              title: "Full Name",
              description: "Sunday Awanu",
              Icon: UserCircleIcon,
            },
            {
              title: "Date of Birth",
              description: "11/05/2024 (18 yrs)",
              Icon: CalendarDaysIcon,
            },
            { title: "Bank Details", Icon: WalletIcon },
            { title: "Investment Plans", Icon: CircleDollarSign },
          ]}
        />
        <MenuBlock
          title="Security & Preference"
          list={[
            {
              title: "Phone",
              description: "080XX24124X",
              Icon: PhoneIcon,
            },
            {
              title: "Email",
              description: "softwaredev@email.com",
              Icon: Mail,
            },
            { title: "Change Transaction PIN", Icon: ShieldPlusIcon },
            { title: "Change Password", Icon: KeyRoundIcon },
            {
              title: "Dark Mode",
              Icon: MoonIcon,
              renderEndContent: () => {
                return (
                  <Switch
                    size="sm"
                    defaultSelected
                    isDisabled
                    aria-label="Set Dark Mode"
                  />
                );
              },
            },
          ]}
        />
        <MenuBlock
          title="Help & Support"
          list={[
            { title: "FAQ", Icon: MessageCircleQuestionIcon },
            { title: "Customer Support", Icon: HeadsetIcon },
            { title: "Report a Bug", Icon: BugIcon },
          ]}
        />

        <Button fullWidth radius="sm" variant="solid" size="lg" color="danger">
          Logout
        </Button>
      </section>

      <footer className="mt-10 px-4 py-4 text-center">
        <Link
          href="t.me/everurstruly"
          className="text-sm text-zinc-200 font-mono"
        >
          Developed by <span className="text-primary-400">YoursTruly</span>
        </Link>
      </footer>
    </div>
  );
}

function MenuBlock({
  title,
  list,
}: {
  title: string;
  list: {
    title: string;
    description?: string;
    Icon: any;
    renderEndContent?: () => any;
  }[];
}) {
  return (
    <article className="space-y-4">
      <h3 className="text-zinc-400 text-sm ps-1">{title}</h3>

      <Listbox
        variant="flat"
        color="default"
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-primary-50",
        }}
      >
        {list.map(({ title, description, Icon, renderEndContent }, id) => {
          return (
            <ListboxItem
              key={id}
              endContent={
                renderEndContent !== undefined ? (
                  renderEndContent()
                ) : (
                  <ChevronRightIcon className="text-zinc-400 shrink-0 size-4" />
                )
              }
              startContent={
                <div className="p-1 rounded-md text-zinc-400">
                  <Icon className="size-6 lg:size-6" />
                </div>
              }
              classNames={{
                base: "py-2.5 px-3 gap-x-3",
              }}
              title={title}
              // description={description}
            />
          );
        })}
      </Listbox>
    </article>
  );
}
