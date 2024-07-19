import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/app/primitives";
import { GithubIcon } from "@/lib/icons";
import { Navbar } from "@/app/navbar";
//
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/app/theme-switch";
import {
  TwitterIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/lib/icons";

import { Logo } from "@/lib/icons";
import { BrandName } from "./(pwa)/navigation-top";
import {
  InstagramIcon,
  Music2Icon,
  PhoneIcon,
  SendHorizontalIcon,
} from "lucide-react";
import { Chip } from "@nextui-org/react";

export default function HomePage() {
  return (
    <div className="relative flex flex-col h-screen">
      <TopNavigation />

      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Make&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
            <br />
            <h1 className={title()}>
              websites regardless of your design experience.
            </h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Beautiful, fast and modern React UI library.
            </h2>
          </div>

          <div className="flex gap-3">
            <Link
              isExternal
              href={siteConfig.links.docs}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              Documentation
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>

          <div className="mt-8">
            <Snippet hideSymbol hideCopyButton variant="flat">
              <span>
                Get started by editing <Code color="primary">app/page.tsx</Code>
              </span>
            </Snippet>
          </div>
        </section>
      </main>
      <footer className="w-full flex items-center justify-center py-4">
        <Link
          isExternal
          href="t.me/everurstruly"
          title="Development team portfolio website"
          className="flex items-center gap-1 text-current font-mono font-sm"
        >
          <span className="text-default-600">Developed by</span>
          <p className="text-primary">YoursTruly</p>
        </Link>
      </footer>
    </div>
  );
}

export const TopNavigation = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="lg" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <BrandName />
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full items-center"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <NextLink href="/dashboard">Dashboard</NextLink>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <NextLink href="gistnaija.com">Blog</NextLink>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button as={Link} variant="light">
            Contact
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={
              <HeartFilledIcon className="text-sm size-4 text-danger" />
            }
            variant="flat"
            size="md"
          >
            Sponsor
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
