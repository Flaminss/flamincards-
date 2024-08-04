"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import {
  DollarSignIcon,
  DownloadIcon,
  Gift,
  Handshake,
  History,
} from "lucide-react";

export default function QuickWalletActions() {
  return (
    <div className="grid grid-cols-3 items-center my-auto">
      <Button
        as={Link}
        variant="light"
        href="/funding"
        radius="sm"
        size="md"
        className="h-auto gap-x-4 grid justify-center items-center text-center hover:!bg-transparent hover:text-primary-800 gap-y-1.5 text-zinc-400 font-medium text-xs"
        startContent={
          <span className="shadow-lg shrink-0 justify-self-center py-3 px-3.5 rounded-xl xl:py-3.5 border text-white group-hover:bg-primary group-hover:border-transparent">
            <DownloadIcon className="size-5" />
          </span>
        }
      >
        Deposit
      </Button>
      <Button
        as={Link}
        variant="light"
        href="/withdrawl"
        radius="sm"
        size="md"
        className="h-auto gap-x-4 grid justify-center items-center text-center hover:!bg-transparent hover:text-primary-800 gap-y-1 lg:gap-y-1.5 text-zinc-400 font-medium text-xs"
        startContent={
          <span className="shadow-lg shrink-0 justify-self-center py-3 px-3.5 rounded-xl xl:py-3.5 border text-white group-hover:bg-primary group-hover:border-transparent">
            <DollarSignIcon className="size-5" />
          </span>
        }
      >
        Withdraw
      </Button>
      <Button
        as={Link}
        variant="light"
        href="/transactions"
        radius="sm"
        size="md"
        className="h-auto gap-x-4 grid justify-center items-center text-center hover:!bg-transparent hover:text-primary-800 gap-y-1 lg:gap-y-1.5 text-zinc-400 font-medium text-xs"
        startContent={
          <span className="shadow-lg shrink-0 justify-self-center py-3 px-3.5 rounded-xl xl:py-3.5 border text-white group-hover:bg-primary group-hover:border-transparent">
            <History className="size-5" />
          </span>
        }
      >
        Transactions
      </Button>
    </div>
  );
}
