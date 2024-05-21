"use client";

import icons from "currency-icons";
import GiftcardCatalog from "@/app/components/giftcard-catalog";
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
  ArrowUpDown,
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
    { title: "Crypto", unread: 4 },
    { title: "$cashtags", unread: 4 },
    { title: "Trading Investment", unread: 4 },
  ];
  return (
    <div>
      <header className="py-5 md:pt-0 px-4">
        <h1 className="text-xl font-semibold md:text-3xl uppercase sm:capitalize">
          Market
        </h1>
      </header>

      <section className="pb-8 overflow-x-hidden">
        <Tabs
          variant="underlined"
          aria-label="Tabs variants"
          className="mb-4 w-full max-w-none md:max-w-lg px-2"
          classNames={{
            tabList:
              "gap-x-0 flex overflow-x-scroll scrollbar-show px-0 w-full",
            tab: "grow uppercase",
          }}
        >
          <Tab
            key="/giftcard"
            title={"Giftcard"}
            className="text-base font-medium uppercase"
          >
            <div className="px-3 flex mb-4 items-center gap-x-4">
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
            <GiftcardCatalog />
          </Tab>
          <Tab
            key="/crypto"
            title={"Crypto"}
            className="text-base font-medium px-4"
          >
            <div className="flex flex-col gap-y-2">
              <div className="card p-4 rounded-md max-w-none">
                <div className="flex items-center justify-between">
                  <p className="font-normal">I am Sending</p>
                  <p className="text-sm text-primary-600">Max Limit:20,000</p>
                </div>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-success-200 shrink-0"></div>
                    <h5 className="text-2xl">USDT</h5>
                    <ChevronDown className="" size={16} />
                  </div>
                  <Input
                    type="number"
                    placeholder="0.00"
                    variant="underlined"
                    className="ms-auto min-w-none"
                    classNames={{
                      input: "text-2xl"
                    }}
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">
                          {icons["USDT"]?.symbol || ""}
                        </span>
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="card p-4 rounded-md max-w-none">
                <p className="font-normal">I will Receive</p>
                <div className="flex items-center gap-x-2">
                  <div className="w-8 h-8 rounded-md bg-slate-600"></div>
                  <h5 className="text-2xl">NGN</h5>
                  <ChevronDown className="" size={16} />
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            key="/cashtag"
            title={"$cashtag"}
            className="text-base font-medium uppercase"
          />
          <Tab
            key="/investment"
            title={"Investment"}
            className="text-base font-medium uppercase"
          />
        </Tabs>
      </section>
    </div>
  );
}
