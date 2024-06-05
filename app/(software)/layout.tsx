"use client";

import TopNavigation from "@/app/top-navigation";
import BottomNavigation from "@/app/bottom-navigation";
import SidebarNavigation from "@/app/sidebar-navigation";
import clsx from "clsx";

export default function PublicUserInterface({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "md:gap-x-3.5 md:flex md:h-screen md:flex-row md:overflow-y-auto max-w-xl mx-auto md:max-w-none xl:max-w-7xl xl:bg-transparent bg-zinc-950 shadow-2xl",
        `lg:p-2.5 xl:px-0 xl:py-4`
      )}
    >
      <TopNavigation className="md:hidden" />
      <SidebarNavigation
        className={clsx(
          "hidden md:block max-w-[30%] lg:max-w-80 sticky-top shadow-lg",
          "lg:h-[calc(100vh_-_(0.625rem_*_2))]"
        )}
      />
      {/* NOTE: "pe-4" adds breathing room between content and scrollbar */}
      <main className="grow w-full h-full md:pe-3 md:pt-4 lg:pt-0">
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
