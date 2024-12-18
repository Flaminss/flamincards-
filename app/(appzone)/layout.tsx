"use client";

import AppNav from "@app/(appzone)/app-nav";
import AppDock from "@app/(appzone)/app-dock";
import Sidebar from "@app/(appzone)/sidebar";
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
        `lg:p-2.5 xl:px-0 xl:py-[0.875rem] pe-0 thin-scrollbar`
      )}
    >
      <AppNav className="md:hidden" />
      <Sidebar
        className={clsx(
          "hidden md:block max-w-[28%] lg:max-w-72 sticky-top shadow-lg",
          "lg:h-[calc(100vh_-_(0.875rem_*_2))]",
          "z-[1]"
        )}
      />
      {/* NOTE: "pe-x" adds breathing room between content and scrollbar */}
      <main className="grow w-full h-full lg:pe-4 md:pt-4 lg:pt-2.5">
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
      <AppDock
        classNames={{
          base: "sticky bottom-0 left-0 right-0 w-full md:hidden",
          list: "md:max-w-xl md:mx-auto w-full rounded-none shadow-2xl border-t -shadow-y-10 !navbar-glass shadow-black",
        }}
      />
    </div>
  );
}
