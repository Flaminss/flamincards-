"use client";

import { title } from "@/app/primitives";
import { Button, Chip, Listbox, ListboxItem, Switch } from "@nextui-org/react";
import {
  BugIcon,
  CakeIcon,
  CalendarDaysIcon,
  ChevronRightCircleIcon,
  ChevronRightIcon,
  ClapperboardIcon,
  CreditCardIcon,
  HeadsetIcon,
  KeyRoundIcon,
  LineChartIcon,
  MailWarningIcon,
  MessageCircleQuestionIcon,
  MoonIcon,
  PhoneIcon,
  TrophyIcon,
  UserCircleIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="max-w-xl mx-auto lg:mx-0 pb-10">
      <header className="px-4 py-4">
        <h1 className="text-2xl lg:text-3xl">Account Settings</h1>
      </header>

      <section className="px-4 space-y-8">
        <article
          about="banner"
          className="flex items-center gap-x-4 rounded-xl shadow-lg p-3 bg-primary-50 lg:hidden"
        >
          <Chip
            color="primary"
            variant="flat"
            size="lg"
            className="h-full py-2.5 self-stretch"
            radius="sm"
          >
            <span className="text-2xl">🏆</span>
          </Chip>
          <div className="me-auto">
            <h3 className="text-base font-mono">Invite friends. Win!</h3>
            <p className="text-sm text-primary-500">
              Stand a chance to earn rewards ✨
            </p>
          </div>
          <span className="text-primary-500">
            <ChevronRightCircleIcon className="size-6" />
          </span>
        </article>
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
            { title: "Investment Plans", Icon: LineChartIcon },
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
              Icon: MailWarningIcon,
            },
            { title: "Change Transaction PIN", Icon: KeyRoundIcon },
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

      <footer className="px-4 py-4 text-center">
        <Link href="t.me/everurstruly" className="text-sm text-zinc-200">
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
    <article className="space-y-3">
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
                  <ChevronRightIcon className="text-zinc-500 shrink-0 size-4" />
                )
              }
              startContent={
                <div className="bg-primary/10 p-1.5 rounded-md text-primary">
                  <Icon className="text-lg lg:text-xl" />
                </div>
              }
              classNames={{
                base: "py-2 lg:px-2.5 lg:py-2.5 gap-x-4",
                description: "text-zinc-500 shrink-0 font-meidum",
              }}
              title={title}
              description={description}
            />
          );
        })}
      </Listbox>
    </article>
  );
}
