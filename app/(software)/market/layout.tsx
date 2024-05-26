"use client";

import { Tab, Tabs } from "@nextui-org/react";
import GiftcardMarketplacePage from "./giftcard/page";
import CryptoSellPage from "./crypto/sell/page";
import CashtagLendPage from "./cashtag/page";
import { ComingSoonScene } from "@/app/coming-soon-scene";

export const marketMenu = {
  giftcard: {
    title: "Gift Cards",
    path: "giftcard",
    Page: GiftcardMarketplacePage,
  },
  crypto: {
    title: "Crypto",
    path: "crypto/sell",
    Page: CryptoSellPage,
  },
  cashtag: {
    title: "$cashtags",
    path: "cashtag",
    Page: CashtagLendPage,
  },
  instrumental: {
    title: "Instrumentals (Beatz)",
    path: "beatz",
    Page: ComingSoonScene,
  },
};

export default function MarketPage({ children }: { children: any }) {
  return (
    <div>
      <header className="py-5 md:pt-0 px-4 sm:px-2">
        <h1 className="text-xl font-semibold md:text-2xl uppercase sm:capitalize">
          Market
        </h1>
      </header>

      <section className="pb-8">
        <Tabs
          variant="underlined"
          aria-label="Tabs variants"
          className="px-2 md:px-0 mb-4"
          classNames={{
            tabList:
              "gap-x-0 md:gap-x-4 flex overflow-x-scroll scrollbar-show px-0 w-full",
            tab: "text-lg font-medium grow",
          }}
        >
          {Object.values(marketMenu).map(({ title, path }) => {
            return <Tab title={title} key={path} href={`/market/${path}`} />;
          })}
        </Tabs>
        {children}
      </section>
    </div>
  );
}
