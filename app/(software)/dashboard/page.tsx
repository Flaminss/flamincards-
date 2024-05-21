"use client";

import clsx from "clsx";
import Image from "next/image";
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
  Chip,
  Link,
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
  ArrowRightCircle,
  ArrowRight,
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
    <div>
      <header className="py-5 px-4 mb-5">
        <h1 className="text-xl font-semibold md:text-3xl">Dashboard</h1>
      </header>

      <section className="px-4">
        <header className="mb-4">
          <h2 className="text-lg font-semibold">Account Overview</h2>
        </header>
        <article className="relative flex flex-col rounded-lg border border-gray-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 mb-5">
          <p className="flex items-center whitespace-nowrap mb-2.5 text-sm">
            <ShieldCheck className="text-success-400 me-1" size={15} />
            Total Balance
          </p>
          <p className="text-4xl mb-5 font-semibold">
            {icons["NGN"]?.symbol || "#"} 40,000.00
          </p>
          <Button
            variant="flat"
            color="primary"
            size="sm"
            radius="none"
            className="self-start mb-5"
          >
            Hide Balance <EyeOff className="ms-1" size={16} />
          </Button>
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
          className="w-full py-4 text-base max-h-none"
          variant="solid"
          color="primary"
          size="md"
          radius="lg"
        >
          Withdraw
        </Button>
      </section>

      <section className="py-8">
        <header className="pt-2 pb-4 px-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
        </header>
        <article className="flex flex-col gap-5 px-4">
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
              <p className="text-xs text-danger-400">Failed</p>
            </div>
          </div>
        </article>
      </section>

      <section className="py-8">
        <header className="px-4 flex justify-between items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold">Sell(REDEEM) Giftcards</h2>
          <Button variant="light" color="primary" className="pe-0">
            View All
          </Button>
        </header>
        <div className="px-4 mb-8">
          <ul className="flex flex-wrap overflow-x-auto items-start gap-4">
            {[
              {
                name: "Steam",
                rate: {
                  value: 1400,
                  from: "NGN",
                  to: "USD",
                },
                tag: {
                  title: "Hot",
                  status: "danger",
                },
              },
              {
                name: "Appple Pay",
                rate: {
                  value: 1400,
                  from: "NGN",
                  to: "USD",
                },
                tag: {
                  title: "Low Rate",
                  status: "warning",
                },
              },
              {
                name: "Steam",
                rate: {
                  value: 1400,
                  from: "NGN",
                  to: "USD",
                },
                tag: {
                  title: "Low Rate",
                  status: "success",
                },
              },
              {
                name: "Steam",
                rate: {
                  value: 1400,
                  from: "NGN",
                  to: "USD",
                },
                tag: {
                  title: "Low Rate",
                  status: "success",
                },
              },
            ].map(({ name, rate, tag }, index) => {
              return (
                <li className="border rounded-lg px-3 py-2.5 min-h-12 grow max-w-[50%] min-w-32">
                  <div className="relative">
                    <Image
                      src=""
                      alt=""
                      className="bg-gray-400 h-20 mb-2 rounded-md w-full"
                    />
                    <Chip
                      variant="solid"
                      color={tag.status as any}
                      radius="none"
                      className="absolute top-1 right-1 text-xs p-0"
                    >
                      {tag.title}
                    </Chip>
                  </div>
                  <div className="flex items-start justify-between gap-x-4">
                    <h5 className="text-base mb-1">{name}</h5>
                  </div>
                  <p className="text-success-400 text-sm">{`${
                    icons[rate.from]?.symbol
                  }${rate.value}/${icons[rate.to]?.symbol}`}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          color="primary"
          size="lg"
          underline="always"
          className="mx-auto flex gap-x-2 items-center"
        >
          🤑 See more cards at the market <ArrowRight size={18} />
        </Link>
      </section>

      <section className="py-8">

      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center"></div>
      </section>
    </div>
  );
}
