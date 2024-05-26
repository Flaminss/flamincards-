"use client";

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { ArrowUpDown, SearchIcon } from "lucide-react";
import GiftcardListing from "@/app/(software)/market/giftcard/listing";

const sortOrders = [
  { key: "all", icon: "👀", title: "Browse All" },
  { key: "hot", icon: "🔥", title: "Hottest" },
  { key: "high", icon: "💰", title: "Highest Rate" },
  { key: "low", icon: "📉", title: "Lowest Rate" },
];

export default function GiftcardMarketplacePage() {
  return (
    <>
      <div className="px-3 md:px-2 flex mb-4 items-center gap-x-4 pt-4">
        <Input
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "max-w-md",
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Search by card name..."
          startContent={
            <SearchIcon
              className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 me-1"
              size={16}
            />
          }
        />

        <div className="flex items-center">
          <Select
            startContent={<ArrowUpDown />}
            defaultSelectedKeys={["all"]}
            classNames={{
              trigger: "pe-8",
              innerWrapper: "w-auto",
            }}
          >
            {sortOrders.map(({ icon, title, key }) => {
              return (
                <SelectItem key={key} value={key} startContent={icon}>
                  {title}
                </SelectItem>
              );
            })}
          </Select>
        </div>
      </div>
      <GiftcardListing />
    </>
  );
}
