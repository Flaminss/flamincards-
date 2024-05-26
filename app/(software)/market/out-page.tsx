"use client";

import { usePathname } from "next/navigation";
import { Tabs, Tab } from "@nextui-org/react";
import GiftcardMarketplacePage from "./giftcard/page";
import CryptoSellPage from "./crypto/sell/page";
import CashtagLendPage from "./cashtag/page";
import InvestmentPage from "../assets/investment/page";

const menu = [
  {
    title: "Giftcard",
    path: "giftcard",
    Page: GiftcardMarketplacePage,
  },
  {
    title: "Crypto",
    path: "crypto",
    Page: CryptoSellPage,
  },
  {
    title: "$Cashtags",
    path: "cashtag",
    Page: CashtagLendPage,
  },
  {
    title: "Investment",
    path: "investment",
    Page: InvestmentPage,
  },
];

export default function MarketPage() {
  const pathname = usePathname();

  return (
    <div>
      <header className="py-5 md:pt-0 px-2">
        <h1 className="text-xl font-semibold md:text-2xl uppercase sm:capitalize">
          Market
        </h1>
      </header>

      <section className="pb-8 overflow-x-hidden">
        <Tabs
          variant="underlined"
          aria-label="Tabs variants"
          className="mb-4 px-2 md:px-0"
          // selectedKey={pathname}
          // defaultSelectedKey={`/market/${menu[0].path}`}
          classNames={{
            tabList:
              "gap-x-0 flex overflow-x-scroll scrollbar-show px-0 w-full",
            tab: "grow uppercase",
          }}
        >
          {menu.map(({ title, path, Page }) => {
            return (
              <Tab
                key={path}
                // href={`/market/${path}`}
                title={title}
                className="font-medium text-base"
              >
                <Page />
              </Tab>
            );
          })}
        </Tabs>
      </section>
    </div>
  );
}
