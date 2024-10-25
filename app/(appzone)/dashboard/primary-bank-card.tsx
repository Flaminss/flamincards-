"use client";

import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";
import { LandmarkIcon, PenBoxIcon, WalletIcon } from "lucide-react";
import { useState } from "react";

export default function PrimaryBankCard({
  classnames,
}: {
  classnames: string;
}) {
  const cardDetails = {
    bank: "Your Bank Name",
    accountNumber: "XXX XXXX XXX",
    fullName: "Your Full Name",
  };

  return (
    <div className={clsx("grid gap-y-1 max-w-md w-full mx-auto", classnames)}>
      <article className="relative p-5 sm:p-5 text-zinc-100 bg-content1 rounded-sm">
        <div className="flex gap-x-3 mb-5">
          <div className="inline-flex items-center">
            <div className="size-4 rounded-full bg-warning"></div>
            <div className="size-4 rounded-full bg-danger -ms-1.5"></div>
          </div>
          <span className="text-xs text-zinc-400 uppercase">Primary</span>
        </div>
        <p className="text-lg sm:text-xl font-mono mb-2.5">
          {cardDetails.accountNumber}
        </p>
        <p className="text-sm sm:text-medium font-mono flex items-center justify-between gap-x-4">
          <span className="text-sm">{cardDetails.fullName}</span>
          <span className="text-sm text-gray-500">{cardDetails.bank}</span>
        </p>
        <Button
          variant="light"
          color="primary"
          size="sm"
          radius="sm"
          className="text-xs absolute top-2 right-2 min-w-[auto]"
          href="/account/banks"
        >
          Change
        </Button>
      </article>
      <Divider className="w-[90%] mx-auto block border" />
      <Divider className="w-[80%] mx-auto block border" />
    </div>
  );
}
