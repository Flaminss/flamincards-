"use client";

import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/react";
import { CircleDollarSignIcon, DownloadIcon, Handshake } from "lucide-react";

export default function QuickWalletActions() {
  return (
    <ButtonGroup
      className="mt-auto.. items-start flex gap-1 flex-wrap content-end shadow-lg"
      variant="solid"
      // variant="light"
      color="primary"
      size="md"
    >
      <Button
        as={Link}
        href="/funding"
        className="shadow-lg grow font-medium !rounded-md xl:!rounded-s-lg xl:!rounded-e-none"
        startContent={<DownloadIcon className="size-5" />}
        // className="shadow-lg grow font-medium !rounded-md xl:!rounded-s-lg xl:rounded-e-none flex-col h-20"
        // startContent={<DownloadIcon className="size-5" className="lg:size-8 flex-shrink-0" />}
      >
        Deposit
      </Button>
      <Button
        as={Link}
        href="/withdrawl"
        className="shadow-lg grow font-medium !rounded-md xl:!rounded-none"
        startContent={<CircleDollarSignIcon className="size-5" />}
      >
        Withdraw
      </Button>
      <Button
        as={Link}
        href="/dashboard#investment-portfolio"
        className="shadow-lg grow font-medium !rounded-md xl:!rounded-e-lg xl:!rounded-s-none"
        startContent={<Handshake className="size-5" />}
      >
        Invest
      </Button>
    </ButtonGroup>
  );
}
