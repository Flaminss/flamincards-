"use client";

import { Tab, Tabs } from "@nextui-org/react";
import GiftcardMarketplacePage from "./giftcards/page";
import CryptoSellPage from "./crypto/page";
import CashtagLendPage from "./cashtag/page";
import InstrumentalCatalogPage from "../music/page";

export const marketMenu = {
  giftcard: {
    title: "Giftcards",
    path: "giftcards",
    Page: GiftcardMarketplacePage,
  },
  crypto: {
    title: "Crypto",
    path: "crypto",
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
    Page: InstrumentalCatalogPage,
  },
};

export default function MarketPage({ children }: { children: any }) {
  return (
    <div>
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Marketplace</h1>
      </header>

      <section className="pb-8 px-4">
        <Tabs
          variant="underlined"
          aria-label="Tabs variants"
          className="md:px-0 mb-4"
          classNames={{
            tabList:
              "gap-x-0 md:gap-x-4 flex overflow-x-scroll scrollbar-show px-0 w-full",
            tab: "text-lg font-medium grow",
          }}
        >
          {Object.values(marketMenu).map(({ title, path }) => {
            return <Tab title={title} key={path} href={`/${path}`} />;
          })}
        </Tabs>
        {children}
      </section>
    </div>
  );
}
