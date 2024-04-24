"use client";

import { IoMdPower, IoMdMusicalNotes } from "react-icons/io";
import {
  NavbarMenuToggle,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem, NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";

const AcmeLogo = () => "X";

export function TopNavbar() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="mt-2 border shadow" isBordered={true}>
      <NavbarContent justify="start">
        {/* <NavbarMenuToggle className="me-3" /> */}

        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit ps-1">HitzStudio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="warning"
            variant="flat"
            className="relative rounded-md"
          >
            <IoMdPower fontSize={20} className="text-success" /> ARTIST MODE <IoMdMusicalNotes />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="max-w-sm mx-auto">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={index === 2
                ? "warning"
                : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"}
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
}
