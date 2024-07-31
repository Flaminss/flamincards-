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
    <div className="!mt-auto items-start flex gap-1 lg:gap-x-4.. flex-wrap lg:flex-nowrap content-end shadow">
      <Button
        as={Link}
        variant="light"
        href="/funding"
        radius="sm"
        size="md"
        className="grow h-auto gap-x-4 grid justify-center items-center text-center hover:!bg-transparent hover:text-primary-800"
        startContent={
          <span className="shadow shrink-0 justify-self-center py-3 px-3.5 rounded-lg bg-primary.. border text-white group-hover:bg-primary group-hover:border-transparent">
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
        className="grow h-auto gap-x-4 grid justify-center items-center text-center hover:!bg-transparent hover:text-primary-800"
        startContent={
          <span className="shadow shrink-0 justify-self-center py-3 px-3.5 rounded-lg bg-primary.. border text-white group-hover:bg-primary group-hover:border-transparent">
            <DollarSignIcon className="size-5" />
          </span>
        }
      >
        Withdraw
      </Button>
      <Button
        as={Link}
        variant="light"
        href="/dashboard#investment-portfolio"
        radius="sm"
        size="md"
        className="grow h-auto gap-x-4 grid justify-center items-center text-center hover:!bg-transparent hover:text-primary-800"
        startContent={
          <span className="shadow shrink-0 justify-self-center py-3 px-3.5 rounded-lg bg-primary.. border text-white group-hover:bg-primary group-hover:border-transparent">
            <History className="size-5" />
          </span>
        }
      >
        Transactions
      </Button>
    </div>
  );
}
