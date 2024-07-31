"use client";

import { Button, Link, Tab, Tabs } from "@nextui-org/react";
import { ComingSoonScene } from "@/app/coming-soon-scene";
import PWAPageTitle from "../page-title";
import BeatsCatalogPage from "./beats-page";
import { ArrowRightCircle } from "lucide-react";

const musicLibraryTabs = [
  {
    title: "Instrumentals (Beats)",
    path: "beats",
    Page: ComingSoonScene,
  },
  {
    title: "Your Downloads",
    path: "downloads",
    Page: ComingSoonScene,
  },
];

export default function MusicPage({ children }: { children: any }) {
  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      {/* <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2 flex items-center flex-col gap-y-4 lg:flex-row justify-between flex-wrap gap-x-6"> */}
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Music Store" />

        {/* <Button
          variant="light"
          color="primary"
          size="md"
          className="font-medium h-auto py-2"
          endContent={<ArrowRightCircle className="size-4" />}
        >
          My Downloads
        </Button> */}
      </header>

      <BeatsCatalogPage />

      {/* <section className="pb-8 overflow-x-hidden"> */}
      {/* <Tabs
          size="lg"
          variant="underlined"
          className="lg:text-lg"
          classNames={{
            // base: "px-4 w-full max-w-xl",
            // tab: "px-0",
            // cursor: "w-full",
            // tabList: "border-b.. w-full px-0",
            tabContent: "lg:text-lg px-4.. pb-2",
          }}
        >
          {musicLibraryTabs.map(({ title, path, Page }) => {
            return <Tab title={title} key={path} />;
          })}
        </Tabs> */}
      {/* </section> */}
    </div>
  );
}
