"use client";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { BrandName } from "@app/(appzone)/navigation-top";

export default function NavigationBarTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Blog", href: "gistnaija.com" },
    { title: "FAQ", href: "/#faq" },
    { title: "Contact us", href: "/" },
    { title: "Sponsor us", href: "/sponsor" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} classNames={{ wrapper: "px-4" }}>
      <NavbarContent>
        <NavbarBrand>
          <BrandName className="sm:text-xl" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-x-6" justify="end">
        {menuItems.map(({ title, href }, id) => {
          return (
            <NavbarItem key={id}>
              <Link
                color="foreground"
                href={href}
                size="md"
                className="px-2 py-2 font-medium"
              >
                {title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ title, href }, id) => (
          <NavbarMenuItem key={id}>
            <Link
              href={href}
              color="foreground"
              className="flex justify-between items-center gap-x-2 w-full py-2 font-medium"
            >
              {title}
              <ChevronRightIcon className="" />
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
