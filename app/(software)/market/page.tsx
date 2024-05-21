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
  DropdownItem,
  Select,
  SelectItem,
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
    { title: "Funds", unread: 4 },
    { title: "Investment", unread: 4 },
  ];
  return (
    <div className="pt-4">
      <header className="py-5 px-4 mb-5">
        <h1 className="text-xl font-semibold md:text-3xl">Market</h1>
      </header>

      <section className="pb-8 overflow-x-hidden">
        <Tabs
          variant="underlined"
          aria-label="Tabs variants"
          classNames={{
            tabList: "gap-x-0 flex overflow-x-scroll",
            tab: "grow px-6",
          }}
        >
          {menu.map(({ title }, index) => {
            return <Tab key={index} title={title} className="text-lg" />;
          })}
        </Tabs>
      </section>
    </div>
  );
}
