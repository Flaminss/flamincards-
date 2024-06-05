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
  CardFooter,
  Image as ImageNext,
  Card,
  CardHeader,
  Divider,
  Spacer,
  CardBody,
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
  XIcon,
  MessageCircleWarningIcon,
  Gift,
  WalletIcon,
  ShareIcon,
  Handshake,
  ArrowRightCircleIcon,
  CoinsIcon,
  CircleDollarSignIcon,
} from "lucide-react";
import icons from "currency-icons";
import FInancesLineChart from "./finances-line-chart";

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
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Dashboard</h1>
      </header>

      <section className="px-4 pb-6 block">
        <div className="rounded-lg shadow bg-primary-50 text-primary-800 px-5 py-2.5 flex gap-x-4 items-center">
          <MessageCircleWarningIcon />
          <p>This should be an annoucement</p>
          <Button
            isIconOnly
            size="sm"
            radius="full"
            color="primary"
            variant="flat"
            className="ms-auto"
          >
            <XIcon size={16} />
          </Button>
        </div>
      </section>

      <section className="px-4 py-6 md:pt-0 flex flex-col lg:flex-row overflow-hidden md:gap-x-6 lg:gap-x-8 gap-y-8">
        <div className="max-w-lg grow shrink-0 border border-slate-800 rounded-lg p-4 shadow-md">
          <article className="relative flex flex-col rounded-lg border.. p-2 border-slate-800 0 mb-4">
            <p className="text-medium mb-4">Good Morning, Daniel</p>
            <p className="flex items-center whitespace-nowrap mb-2 text-base gap-x-1">
              <ShieldCheck className="text-success-400 me-1" size={18} />
              Total Balance
            </p>
            <p className="text-4xl mb-4 font-medium">
              {icons["NGN"]?.symbol || "#"}1,000,000.00
            </p>
            <Button
              variant="flat"
              color="primary"
              size="sm"
              radius="sm"
              className="self-start mb-6"
            >
              Hide Balance <EyeOff className="ms-0.5" size={14} />
            </Button>
            <Progress
              label={
                <span className="flex items-center flex-row-reverse gap-x-1">
                  Incoming Profits{" "}
                  <LineChart size={18} className="text-success-400" />
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
          <ButtonGroup className="flex gap-2 flex-wrap items-center">
            <Button
              className="shadow-lg text-medium grow"
              variant="solid"
              color="primary"
              size="lg"
              radius="sm"
              startContent={<Gift />}
            >
              Redeem
            </Button>
            <Button
              className="shadow-lg text-medium grow"
              variant="solid"
              color="primary"
              size="lg"
              radius="sm"
              startContent={<ShareIcon />}
            >
              Withdraw
            </Button>
            <Button
              className="shadow-lg text-medium grow"
              variant="solid"
              color="primary"
              size="lg"
              radius="sm"
              startContent={<Handshake />}
            >
              Invest
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex flex-col gap-y-4 justify-between grow">
          <BankDetailsCard />
          <section className="py-4 lg:p-0 w-full">
            <header className="mb-2 flex items-center justify-between gap-x-8 flex-wrap gap-y-1">
              <h2 className="text-base font-medium">Recent Transactions</h2>
              <Button
                variant="light"
                size="sm"
                color="primary"
                className="p-0 underline text-sm underline-offset-4"
                href="/transactions"
              >
                See more
              </Button>
            </header>
            <article className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center rounded-lg w-10 h-10 bg-primary-100 text-primary-400">
                    <BadgeDollarSign size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-meidum">Investment</p>
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
                    <p className="text-sm font-meidum">Withdrawal</p>
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
        </div>
      </section>

      <section className="px-4 py-6">
        <Card isFooterBlurred className="h-[300px] md:h-[420px] grow mb-4">
          <CardHeader>
            <h3 className="mb-4 text-base px-2 text-slate-400">
              Your Finances Reports
            </h3>
          </CardHeader>
          <CardBody className="block">
            <FInancesLineChart />
          </CardBody>
          {/* <CardFooter className="absolute bottom-0 border-t-1 border-gray-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter> */}
        </Card>
        <div className="flex gap-x-8" about="">
          <div>
            <article>
              <h3 className="mb-4 text-medium font-semibold">
                Your Investments
              </h3>
              <ul className="flex flex-wrap gap-4">
                {[, 2, 3, 4].map((commodity) => {
                  return (
                    <li>
                      <Card className="bg-gradient-to-r from-blue-500 to-purple-500">
                        <CardHeader>Passive Income</CardHeader>
                        <CardBody>
                          <p>Capital: ${40}</p>
                          <p>Trading details: {"Running"}</p>
                        </CardBody>
                        <CardFooter>
                          Expected 80% capital return at the end of the month.
                        </CardFooter>
                      </Card>
                    </li>
                  );
                })}
              </ul>
            </article>
            <article>
              <h3 className="mb-4 text-medium font-semibold">Services</h3>
              <ul className="flex gap-2 grow">
                {[1, 2, 3].map((service) => {
                  return (
                    <div className="border rounded-lg p-4 flex items-center shadow-lg gap-x-4">
                      <p>$Cashtag</p>
                    </div>
                  );
                })}
              </ul>
            </article>
          </div>
          <article className="ms-auto">
            <h4 className="mb-4 text-lg hidden text-start">
              <span className="text-danger-400..">🤑 Buy</span>,{" "}
              <span className="text-primary-400..">Sell</span> and{" "}
              <span className="text-success-400">Earn!</span>
            </h4>
            <div className="grid gap-y-2">
              <div className="flex items-center gap-x-4 bg-zinc-900 p-3 rounded-lg shadow">
                <Chip size="lg" radius="sm" className="py-6">
                  <CircleDollarSignIcon />
                </Chip>
                <p>Sell your Notcoins</p>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  color="primary"
                  className="ms-auto"
                >
                  <ArrowRightCircleIcon />
                </Button>
              </div>
              <div className="flex items-center gap-x-4 bg-zinc-900 p-3 rounded-lg shadow">
                <Chip size="lg" radius="sm" className="py-6">
                  <CircleDollarSignIcon />
                </Chip>
                <p>Buy some TON</p>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  color="primary"
                  className="ms-auto"
                >
                  <ArrowRightCircleIcon />
                </Button>
              </div>
              <Link
                href="/market/giftcard"
                className="flex items-center gap-x-4 bg-zinc-900 p-3 rounded-lg shadow"
              >
                <Chip size="lg" radius="sm" className="py-6">
                  <CircleDollarSignIcon />
                </Chip>
                <p>Do more at our Marketplace</p>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  color="primary"
                  className="ms-auto"
                >
                  <ArrowRightCircleIcon />
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="py-6 px-4">
        <header className="mb-4 flex justify-between items-center">
          <h2 className="text-lg lg:text-xl">News and Entertainment</h2>
          <p className="text-slate-600 text-sm">
            Keep up with the latest trends
          </p>
        </header>
        <Card className="h-[240px] md:h-[320px]" />
        <ul className="hidden grid.. grid-cols-[repeat(3,_minmax(28ch,_1fr))] gap-4 py-4">
          {[1, 2, 3].map((article) => {
            return (
              <article className="card max-w-[34ch] grow">
                <div className="card-body">
                  <figure className="card-image"></figure>
                  <div>
                    <h4 className="card-title">
                      This is something yoiu should read now
                    </h4>
                  </div>
                </div>
              </article>
            );
          })}
          {/* <article className="card grow lg:row-span-2 lg:col-start-3 lg:row-start-1">
            <div className="card-body">
              <figure className="card-image"></figure>
              <div>
                <h4 className="card-title">
                  This is something yoiu should read now
                </h4>
              </div>
            </div>
          </article> */}
        </ul>
      </section>

      <div className="h-48"></div>
    </div>
  );
}

function BankDetailsCard() {
  return (
    <div className="grid gap-y-1">
      <article className="relative border border-slate-800 shadow-md rounded-md p-5 lg:p-4">
        <div className="flex gap-x-2 items-center mb-2">
          <div className="inline-flex items-center">
            <div className="h-4 w-4 rounded-full bg-warning-400"></div>
            <div className="h-4 w-4 rounded-full bg-danger-400 -ms-1.5"></div>
          </div>
          <span className="text-xs">Bank Details</span>
        </div>
        <p className="text-xl font-semibold">1234 2342 2422</p>
        <p className="text-medium font-mono flex items-center justify-between gap-x-4">
          <span>John Doe</span>
          <span className="text-sm">09/10</span>
        </p>
        <Button
          variant="light"
          color="success"
          size="sm"
          radius="sm"
          className="text-xs p-0 absolute top-0 right-0"
        >
          Edit
        </Button>
      </article>
      <Divider className="w-[90%] mx-auto block bg-slate-800" />
      <Divider className="w-[80%] mx-auto block bg-slate-800" />
    </div>
  );
}

function GiftCardEntisementSection() {
  return (
    <div>
      {/* // GIftcard introduction/entisinment section */}
      {/* <section className="py-6">
        <header className="px-4 flex justify-between items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold">Redeem/Sell Giftcards</h2>
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
                      className="dark:bg-gray-900 h-20 mb-2 rounded-sm border-none w-full"
                    />
                    <Chip
                      variant="solid"
                      color={tag.status as any}
                      radius="none"
                      size="sm"
                      className="absolute top-1 right-1"
                    >
                      {tag.title}
                    </Chip>
                  </div>
                  <h5 className="text-base font-medium">{name}</h5>
                  <p className="text-success-400 text-sm flex items-end gap-x-1 align-baseline">
                    <span>🔥</span>
                    <span>{`${icons[rate.from]?.symbol}${rate.value}/${
                      icons[rate.to]?.symbol
                    }`}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          color="primary"
          size="lg"
          underline="always"
          className="mx-auto flex gap-x-2 items-center w-max"
        >
          See more cards at the market <ArrowRight size={18} />
        </Link>
      </section> */}
    </div>
  );
}
