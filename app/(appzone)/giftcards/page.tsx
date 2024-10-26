"use client";

import { Input, Select, SelectItem, SharedSelection } from "@nextui-org/react";
import {
  ArrowUpDown,
  ArrowUpDownIcon,
  FilterIcon,
  ListIcon,
  SearchIcon,
} from "lucide-react";
import GiftcardListing, {
  GiftcardSortFilter,
  GiftcardSortOrder,
} from "@app/(appzone)/giftcards/listing";
import PWAPageTitle from "../page-title";
import { ChangeEvent, useState } from "react";

const sortOrders = [
  { key: "rate-dsc", icon: "💰", title: "Highest Rate" },
  { key: "rate-asc", icon: "📉", title: "Lowest Rate" },
  { key: "name-asc", icon: "💰", title: "Name (A - Z)" },
  { key: "name-dsc", icon: "💰", title: "Name (Z - A)" },
];

const sortFilters = [
  { key: "all", icon: "👀", title: "Browse All" },
  { key: "hot", icon: "🔥", title: "Hottest" },
];

export default function GiftcardMarketplacePage() {
  const [cardSearchValue, setCardSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState<GiftcardSortFilter>({ tags: [] });
  const [orderBy, setOrderBy] = useState<GiftcardSortOrder>({
    attr: "name",
    direction: "asc",
  });

  const updateCardSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardSearchValue(value);
  };

  const clearCardSearchValue = () => setCardSearchValue("");

  const sortByOrder = (evt: SharedSelection) => {
    const { currentKey } = evt;
    if (currentKey === undefined) {
      return;
    }

    const [attr, direction] = currentKey.split("-");
    setOrderBy(() => ({ attr, direction } as any));
  };

  const sortByFilter = (evt: SharedSelection, attr: string) => {
    const { currentKey } = evt;
    if (currentKey === undefined) {
      return;
    }

    setFilterBy(() => {
      return { [attr]: [currentKey] } as any;
    });
  };

  return (
    <div>
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Gift Cards Store" />
      </header>

      <section className="px-4 pt-4 grid gap-y-2.5">
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
          value={cardSearchValue}
          onChange={(e) => updateCardSearchValue(e)}
          label="Search by card name..."
          startContent={
            <SearchIcon
              className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 me-1"
              size={16}
            />
          }
          onClear={() => clearCardSearchValue()}
        />

        <div className="flex items-center gap-x-2 mb-6">
          <Select
            startContent={
              <FilterIcon className="size-4 shrink-0 me-1 text-zinc-300" />
            }
            defaultSelectedKeys={["all"]}
            classNames={{
              trigger: "dark:bg-default/60 pe-8 rounded-lg",
              innerWrapper: "w-auto",
            }}
            onSelectionChange={(evt) => sortByFilter(evt, "tags")}
            label="Filter By:"
          >
            {sortFilters.map(({ icon, title, key }) => {
              return (
                <SelectItem key={key} value={key} startContent={icon}>
                  {title}
                </SelectItem>
              );
            })}
          </Select>
          <Select
            startContent={
              <ArrowUpDownIcon className="size-4 shrink-0 text-zinc-300 me-1" />
            }
            defaultSelectedKeys={["name-asc"]}
            classNames={{
              trigger: "dark:bg-default/60 pe-8 rounded-lg",
              innerWrapper: "w-auto",
            }}
            onSelectionChange={(evt) => sortByOrder(evt)}
            label="Order By:"
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

        <GiftcardListing
          searchValue={cardSearchValue}
          filterBy={filterBy}
          orderBy={orderBy}
        />
      </section>
    </div>
  );
}
