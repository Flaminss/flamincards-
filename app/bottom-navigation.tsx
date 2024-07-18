"use client";

import { Tabs, Tab, Chip } from "@nextui-org/react";
import { Home, CandlestickChart, History, Menu } from "lucide-react";
import { Badge, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function BottomNavigationPro({
  classNames,
}: {
  classNames?: {
    base: any;
    list: any;
  };
}) {
  const pathname = usePathname();
  const menu = [
    {
      title: "Home",
      href: "/dashboard",
      Icon: Home,
      notificationCount: 0,
    },
    {
      title: "Market",
      href: "/market",
      Icon: CandlestickChart,
      notificationCount: 2,
    },
    {
      title: "History",
      href: "/Transactions",
      Icon: History,
      notificationCount: 0,
    },
    {
      title: "More",
      href: "/account",
      Icon: Menu,
      notificationCount: 0,
    },
  ];

  return (
    <Tabs
      color="primary"
      aria-label="Options"
      selectedKey={pathname}
      className={clsx(classNames?.base, "w-full z-30")}
      classNames={{
        cursor: "hidden",
        tab: "h-auto pt-2.5",
        tabList: clsx(classNames?.list, "flex p-1.5 gap-4"),
        tabContent: "group-data-[selected=true]:text-primary-500",
      }}
    >
      {menu.map(({ title, href, Icon, notificationCount }) => {
        return (
          <Tab
            key={href}
            href={href}
            title={
              <div className="text-center text-xs grid sm:flex gap-x-2 justify-center items-center space-y-1 grow max-w-[4ch]">
                <Icon className="mx-auto" />
                <span>{title}</span>
              </div>
            }
          />
        );
      })}
    </Tabs>
  );
}
