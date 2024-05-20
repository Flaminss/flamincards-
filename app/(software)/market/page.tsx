"use client";

import {
  Tabs,
  Tab,
  Input,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem, Select, SelectItem
} from "@nextui-org/react";
import {
  SearchIcon,
  ChevronDown,
  ListOrderedIcon,
  FilterXIcon,
  ArrowDownUp,
} from "lucide-react";

const sortOrders = [
  { key: "all", icon: "👀", title: "Browse All" },
  { key: "hot", icon: "🔥", title: "Hottest" },
  { key: "high", icon: "💰", title: "Highest Rate" },
  { key: "low", icon: "📉", title: "Lowest Rate" },
];


export default function MarketPage() {
  const menu = [
    { title: "Giftcards", unread: 0 },
    { title: "Cryptocurrency", unread: 4 },
    { title: "Funds and Transfers", unread: 4 },
    { title: "Trade Investment", unread: 4 },
  ];
  return (
    <div className="pt-4">
       <header>
        <h1 className="text-lg font-semibold md:text-3xl">Market</h1>
      </header>
      <Tabs
        variant="underlined"
        aria-label="Tabs variants"
        classNames={{
          tabList: "flex",
          tab: "grow",
        }}
      >
        {menu.map(({ title, unread }, index) => {
          return (
            <Tab
              key={index}
              title={
                <div className="flex items-center">
                  {title}{" "}
                  {!unread ? (
                    0
                  ) : (
                    <span className="ms-2 badge badge-flat-primary">
                      {unread}
                    </span>
                  )}
                </div>
              }
            />
          );
        })}
      </Tabs>
    </div>
  );
}
