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
  AlertCircle,
  Link2Off,
  OutdentIcon,
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
    <div className="pb-20">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <h1 className="text-2xl lg:text-3xl">Dashboard</h1>
      </header>

      <section className="px-4">
        <div className="rounded-lg shadow bg-primary-50 text-primary-800 px-4 sm:px-5 py-2.5 flex gap-x-4 items-center">
          <MessageCircleWarningIcon />
          <p className="text-sm sm:text-base">This should be an annoucement</p>
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

      <section className="px-4 py-6 flex flex-col lg:flex-row overflow-hidden md:gap-x-6 lg:gap-x-8 gap-y-12">
        <div className="grid max-w-lg grow w-full shrink-0 lg:shrink xl:shrink-0.. border p-4 sm:p-6 pt-6 space-y-10 mx-auto">
          <article className="relative flex flex-col">
            <h3 className="text-lg sm:text-xl mb-6">
              Welcome back, Mr. Daniel 🌞
              {/* 🌞 👋*/}
            </h3>

            <p className="flex items-center whitespace-nowrap mb-1 text-xs sm:text-base gap-x-1">
              <ShieldCheck className="text-success-400 me-.5 sm:m4-1 size-4" />
              Total Balance
            </p>
            <p className="text-3xl sm:text-4xl mb-4">
              {icons["NGN"]?.symbol || "#"}64,000.00
            </p>
            <Button
              variant="flat"
              color="primary"
              size="sm"
              radius="sm"
              className="self-start"
            >
              Hide Balance <EyeOff className="ms-0.5" size={15} />
            </Button>

            <Link
              href="#investment-portfolio"
              className="mt-8 text-white hidden"
            >
              <Progress
                label={
                  <span className="flex items-center flex-row-reverse gap-x-1">
                    Investments{" "}
                    <LineChart size={18} className="text-warning-400" />
                  </span>
                }
                size="sm"
                value={500}
                maxValue={3000}
                color="warning"
                formatOptions={{ style: "currency", currency: "NGN" }}
                showValueLabel={true}
                className="max-w-md"
              />
            </Link>
          </article>

          <ButtonGroup
            className="mt-auto flex gap-1 flex-wrap content-end shadow-lg"
            radius="sm"
            variant="solid"
            color="primary"
            size="md"
          >
            <Button
              className="shadow-lg grow font-medium"
              // color="secondary"
              startContent={<Gift size={20} />}
            >
              Redeem
            </Button>
            <Button
              className="shadow-lg grow font-medium"
              // color="secondary"
              startContent={<ShareIcon size={20} />}
            >
              Withdraw
            </Button>
            <Button
              className="shadow-lg grow font-medium"
              // color="secondary"
              startContent={<Handshake size={20} />}
            >
              Invest
            </Button>
          </ButtonGroup>
        </div>

        <aside className="flex flex-col lg:gap-x-12 justify-between grow gap-y-10 xl:gap-y-8">
          <BankDetailsCard />

          <article className="w-full">
            <header className="mb-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-x-8 gap-y-1">
              <h2 className="text-lg whitespace-nowrap">Recent Transactions</h2>
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
                    <p className="text-xs text-gray-500">May 20th at 9:00pm</p>
                  </div>
                </div>
                <div className="grid justify-items-end">
                  <p className="text-sm font-semibold whitespace-nowrap">
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
                    <p className="text-xs text-gray-500">May 20th at 05:50am</p>
                  </div>
                </div>
                <div className="grid justify-items-end">
                  <p className="text-sm font-semibold whitespace-nowrap">
                    - {icons["NGN"]?.symbol || "#"} 10,000.00
                  </p>
                  <p className="text-xs text-danger-400">Failed</p>
                </div>
              </div>
            </article>
          </article>
        </aside>
      </section>

      <section className="px-4 py-8">
        <h2 className="text-xl lg:text-2xl mb-6">Our Services</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center gap-4">
          {[
            {
              title: "Sell your GIftcards",
              href: "/giftcard",
              color: "primary",
            },
            {
              title: "Airdrop Earnings Withdrawl",
              href: "/crypto",
              color: "warning",
            },
            {
              title: "Recieve with reliable $cashtag",
              href: "/crypto",
              color: "danger",
            },
            {
              title: "Buy Cheap Data Plans",
              href: "/crypto",
              color: "success",
            },
            {
              title: "Download Free Instrumentals",
              href: "/crypto",
              color: "secondary",
            },
          ].map(({ title, href, color }, index) => {
            return (
              <Button
                href={href}
                variant="light"
                size="lg"
                className={`border items-center self-stretch h-auto w-auto text-white py-4 text-sm md:text-medium justify-between gap-x-4 rounded-none ${
                  index === 0
                    ? "lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:h-full"
                    : ""
                }`}
              >
                <span className="whitespace-break-spaces text-start">
                  {title}
                </span>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  color="primary"
                  className={`ms-auto ${index === 0 ? "lg:ms-0" : ""}`}
                >
                  <ArrowRightCircleIcon />
                </Button>
              </Button>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-8" id="investment-portfolio">
        <header className="mb-6 space-y-2">
          <h2 className="text-xl lg:text-2xl">Your Investments Portfolio</h2>
          <p className="text-sm text-warning-500 leading-snug flex items-center gap-x-4 sm:gap-x-2">
            <AlertCircle className="size-8 sm:size-4" />{" "}
            <p>
              Choose a Plan - You have{" "}
              <span className="font-medium text-white">0 of 2</span> investment
              running.
            </p>
          </p>
        </header>

        <ul className="flex flex-wrap gap-6">
          {[{ title: "Basic" }, { title: "Silver" }, { title: "Gold" }].map(
            ({ title }, index) => {
              return (
                <li className="grow max-w-72..">
                  <Card className="p-2 shadow-lg border">
                    <CardHeader className="text-lg font-bold py-2 shadow-lg bg-yellow-100 text-yellow-800 text-center justify-center">
                      {title}
                    </CardHeader>
                    <CardBody className="pt-8">
                      <div className="space-y-1.5">
                        <p className="flex justify-between">
                          Capital:{" "}
                          <span className="text-primary-400..">${40}</span>
                        </p>
                        <p className="flex justify-between">
                          Returns:{" "}
                          <span className="text-success-400">${100}/month</span>
                        </p>
                        <p className="flex justify-between">
                          Lifespan: <span className="">30 days</span>
                        </p>
                      </div>
                      <Progress
                        label={
                          <span className="flex items-center flex-row-reverse gap-x-1">
                            Progress{" "}
                            {/* <LineChart size={18} className="text-warning-400" /> */}
                          </span>
                        }
                        size="sm"
                        value={15}
                        maxValue={30}
                        color="warning"
                        showValueLabel={true}
                        className="max-w-md mt-6"
                      />
                    </CardBody>
                    <CardFooter>
                      {index % 2 === 0 ? (
                        <Button
                          fullWidth
                          variant="flat"
                          size="lg"
                          color="success"
                        >
                          Running
                        </Button>
                      ) : (
                        // <Button fullWidth color="primary">Invest</Button>
                        <Button fullWidth size="lg">
                          Unavailable
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </li>
              );
            }
          )}
        </ul>
      </section>

      <section className="px-4 py-8 space-y-6">
        <h2 className="text-xl lg:text-2xl mb-6">
          Latest News, Trends and Promotions
        </h2>

        {/* CAROUSEL */}
        <Card about="carousel" className="h-[260px] md:h-[320px] w-full" />

        <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-10">
          {[1, 2, 3].map((article) => {
            return (
              <article className="flex gap-x-2 max-w-[34ch] grow">
                <figure className="w-14 h-12 bg-zinc-800"></figure>
                <Link className="underline text-sm xl:text-base underline-offset-2">
                  Jagaban set the Nation on Haster Tonight!
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function BankDetailsCard() {
  return (
    <div className="grid gap-y-1 max-w-md w-full mx-auto">
      <article className="relative border border-slate-800.. shadow-md p-4 sm:p-5 lg:p-4">
        <div className="flex gap-x-2.5 items-center mb-2">
          <div className="inline-flex items-center">
            <div className="h-4 w-4 rounded-full bg-warning-400"></div>
            <div className="h-4 w-4 rounded-full bg-danger-400 -ms-1.5"></div>
          </div>
          <span className="text-sm">Bank Details</span>
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
          className="text-xs absolute top-2 right-2"
        >
          Edit
        </Button>
      </article>
      <Divider className="w-[90%] mx-auto block border" />
      <Divider className="w-[80%] mx-auto block border" />
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
