"use client";

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { ArrowUpDown, ListIcon, SearchIcon } from "lucide-react";
import GiftcardListing from "@/app/(pwa)/giftcards/listing";
import PWAPageTitle from "../page-title";

const sortOrders = [
  { key: "all", icon: "👀", title: "Browse All" },
  { key: "hot", icon: "🔥", title: "Hottest" },
  { key: "high", icon: "💰", title: "Highest Rate" },
  { key: "low", icon: "📉", title: "Lowest Rate" },
];

export default function GiftcardMarketplacePage() {
  return (
    <div>
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Gift Cards Store" />
      </header>

      <section className="px-4 pt-4">
        <nav className="flex items-center gap-x-2 mb-6">
          <Input
            isClearable
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
                "rounded-lg",
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

          <div>
            <Select
              startContent={<ListIcon />}
              defaultSelectedKeys={["all"]}
              classNames={{
                trigger: "dark:bg-default/60 pe-8 rounded-lg",
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
        </nav>

        <GiftcardListing />
      </section>
    </div>
  );
}
