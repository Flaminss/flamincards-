"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { IoMdHome } from "react-icons/io";
import { IoHome } from "react-icons/io5";

export default function BottomNavbar() {
  return (
    <Tabs
      radius="sm"
      aria-label="App Scenes Navigation Menu"
      className="fixed bottom-0 left-0 w-full !rounded-none"
    >
      <Tab
        key="photos"
        className="h-auto m-1"
        title={
          <div className="grid items-center justify-center text-center text-sm space-y-1">
            <IoMdHome fontSize={28} className="justify-self-center" />
            <span>Home</span>
          </div>
        }
      />
      <Tab key="music" title="Notifications" />
      <Tab key="videos" title="Transactions" />
      <Tab key="videos" title="More" />
    </Tabs>
  );
}
