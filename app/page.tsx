"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/app/primitives";
import { GithubIcon } from "@/lib/icons";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import React from "react";
import NextLink from "next/link";
import { BrandName } from "./(pwa)/navigation-top";
import { ThemeSwitch } from "@/app/theme-switch";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { HeartFilledIcon, SearchIcon } from "@/lib/icons";
import clsx from "clsx";

export default function HomePage() {
  return (
    <div className="relative flex flex-col h-screen bg-black">
      <TopNavigation />

      <main className="container mx-auto max-w-7xl flex-grow">
        <section
          id="home"
          className="relative z-10 overflow-hidden pt-14 md:pt-40 xl:pt-45 px-5"
        >
          <div className="relative z-1 mx-auto max-w-[900px] lg:text-center">
            <h1 className="mb-6 text-3xl font-medium text-white sm:text-5xl xl:text-heading-1">
              <span className="">Trade</span>,{" "}
              <span className="text-success">Earn</span>,{" "}
              <span className="">Vibe</span>:
              <br />
              <span className="text-3xl font-black">
                Your Go-To Platform for{" "}
                <span className="text-primary">Giftcards</span>, Crypto, and{" "}
                <span className="text-warning">Music</span>!
              </span>
            </h1>
            <p className="font-medium mx-auto mb-9 max-w-[500px] md:text-lg">
              Trade, earn rewards, and immerse yourself in a vibrant digital
              marketplace tailored to your interests.
            </p>
            <Button
              color="primary"
              variant="solid"
              size="md"
              href="/dashboard"
              radius="full"
            >
              🎉 Start Trading Today! 🎉
            </Button>
          </div>

          <div
            className="relative mx-auto mt-17 aspect-[1170/411] w-full max-w-[1170px]"
            data-wow-delay="0.1s"
          >
            <img
              alt="hero"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="mx-auto"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
              src="./images/hero/hero.svg"
            />
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

const TopNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Dashboard",
    "Our Blog",
    "Contact us",
    "FAQ",
    "Sponsor Us",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <NavbarBrand>
          <BrandName />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, id) => {
          return (
            <NavbarItem>
              <Link key={id} color="foreground" href="#">
                {item}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Start here!
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
