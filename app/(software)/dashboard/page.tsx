"use client";

import { useState, useMemo } from "react";
import {
  Input,
  Progress,
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
  ShieldCheck,
  EyeOff,
  TrendingUp,
  LineChart,
  Landmark,
  BadgeDollarSign,
} from "lucide-react";
import icons from "currency-icons";

const sortOrders = [
  { key: "all", icon: "👀", title: "Browse All" },
  { key: "hot", icon: "🔥", title: "Hottest" },
  { key: "high", icon: "💰", title: "Highest Rate" },
  { key: "low", icon: "📉", title: "Lowest Rate" },
];

export default function DashboardPage() {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set([sortOrders[0].title])
  );
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <>
      <header className="py-5 px-4 mb-5">
        <h1 className="text-xl font-semibold md:text-3xl">Dashboard</h1>
      </header>
      <section className="px-4">
        <header className="mb-4">
          <h2 className="text-lg font-semibold">Account Overview</h2>
        </header>
        <article className="flex flex-col rounded-lg border border-gray-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 mb-4">
          <div className="flex justify-between items-center">
            <p className="flex items-center whitespace-nowrap mb-2.5 text-sm">
              <ShieldCheck className="text-success-400 me-1" size={15} />
              Total Balance
            </p>
            <Button
              variant="flat"
              color="primary"
              size="sm"
              radius="lg"
              className="self-start mb-5"
            >
              <span className="hidden sm:inline-block">Hide Balance</span>< <EyeOff className="ms-1" size={16} />
            </Button>
          </div>
          <p className="text-4xl mb-5 font-semibold">
            {icons["NGN"]?.symbol || "#"} 40,000.00
          </p>
          {/* <Button
            variant="flat"
            color="primary"
            size="sm"
            radius="lg"
            className="self-start mb-5"
          >
            Hide Balance <EyeOff className="ms-1" size={16} />
          </Button> */}
          <Progress
            label={
              <span className="flex items-center flex-row-reverse gap-x-1">
                <LineChart size={15} /> Profits{" "}
              </span>
            }
            size="sm"
            value={500}
            maxValue={3000}
            color="success"
            formatOptions={{ style: "currency", currency: "NGN" }}
            showValueLabel={true}
            className="max-w-md"
          />
        </article>
        <Button
          className="w-full py-2 text-lg"
          variant="solid"
          color="primary"
          size="md"
          radius="lg"
        >
          Withdraw
        </Button>
      </section>
      <section className="py-8 px-4">
        <header className="pt-2 pb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
        </header>
        <article className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-lg w-10 h-10 bg-primary-100 text-primary-400">
                <BadgeDollarSign size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">Investment</p>
                <p className="text-sm text-gray-500">May 20th at 9:00pm</p>
              </div>
            </div>
            <div className="grid justify-items-end">
              <p className="text-sm font-semibold">
                + {icons["BTC"]?.symbol || "₿"} 0.0005
              </p>
              <p className="text-sm text-success-400">Successful</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-lg w-10 h-10 bg-warning-100 text-warning-400">
                <Landmark size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">Withdrawal</p>
                <p className="text-sm text-gray-500">May 20th at 05:50am</p>
              </div>
            </div>
            <div className="grid justify-items-end">
              <p className="text-sm font-semibold">
                - {icons["NGN"]?.symbol || "#"} 10,000.00
              </p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </article>
      </section>
      <section className="py-8 px-4">
        <header className="mb-4 px-2.5">
          <h2 className="text-lg font-semibold uppercase mb-4">Giftcards</h2>
          <div className="flex items-center gap-x-4">
            <Select
              radius="md"
              label="Showing giftcard"
              defaultSelectedKeys={["all"]}
            >
              {sortOrders.map(({ key, icon, title }) => (
                <SelectItem key={key} value={title} startContent={icon}>
                  {title}
                </SelectItem>
              ))}
            </Select>
            <Input
              isClearable
              radius="sm"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "!px-2.5",
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "h-12",
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
              placeholder="Search by Giftcard name..."
              startContent={
                <SearchIcon
                  size="20"
                  className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
                />
              }
            />
          </div>
        </header>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center"></div>
      </section>
    </>
  );
}
