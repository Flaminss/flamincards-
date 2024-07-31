"use client";

import TopNavigation from "@/app/(pwa)/navigation-top";
import BottomNavigation from "@/app/(pwa)/navigation-bottom";
import SidebarNavigation from "@/app/(pwa)/navigation-left";
import clsx from "clsx";

export default function PublicUserInterface({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col min-h-screen md:gap-x-3.5 lg:gap-x-5 md:h-screen md:flex-row md:overflow-y-auto mx-auto md:max-w-none xl:max-w-7xl xl:bg-transparent bg-zinc-950 shadow-2xl",
        `lg:p-2.5 xl:px-0 xl:py-4.. pe-0 thin-scrollbar`
      )}
    >
      <TopNavigation className="md:hidden" />
      <SidebarNavigation
        className={clsx(
          "hidden md:block max-w-[28%] lg:max-w-72 sticky-top top-[0.625rem] shadow-lg",
          "lg:h-[calc(100vh_-_(0.625rem_*_3))]"
        )}
      />
      {/* NOTE: "pe-x" adds breathing room between content and scrollbar */}
      <main className="grow w-full h-full lg:pe-4 md:pt-4 lg:pt-0">
        {children}
        {/* <div className="flex w-full flex-row flex-wrap gap-4">
          <div className="my-4 grid w-full grid-cols-2 gap-4">
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
            <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
              +
            </div>
          </div>
        </div> */}
      </main>
      <BottomNavigation
        classNames={{
          base: "sticky bottom-0 left-0 right-0 w-full md:hidden",
          list: "md:max-w-xl md:mx-auto w-full rounded-none shadow-2xl border-t -shadow-y-10 !navbar-glass shadow-black",
        }}
      />
    </div>
  );
}
