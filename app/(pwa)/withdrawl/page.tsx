"use client";

import Link from "next/link";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import {
  CheckCircleIcon,
  DeleteIcon,
  LandmarkIcon,
  PenBoxIcon,
  WalletIcon,
} from "lucide-react";
import icons from "currency-icons";
import { useState } from "react";
import clsx from "clsx";
import PWAPageTitle from "../page-title";

export default function WithdrawlPage() {
  const {
    isOpen: withdrawing,
    onOpen: startWithdrawlProcess,
    onOpenChange: onWithdraw,
    onClose: pauseWithdrawlProcess,
  } = useDisclosure();

  const [amountToBeWithdrawn, setAmountToBeWithdrawn] = useState(0);
  const [withdrawProcessStep, setWithdrawlProcessStep] = useState(1);

  return (
    <div className="pb-20">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        {/* <h1 className="text-2xl lg:text-3xl">Withdrawal Funds</h1> */}
        <PWAPageTitle title="Withdraw Funds" />
      </header>

      <section className="pt-0 pb-4 overflow-y-auto px-4 max-w-xl">
        <div
          className={clsx({
            "space-y-6 block pt-4": withdrawProcessStep === 1,
            hidden: withdrawProcessStep !== 1,
          })}
        >
          <div>
            <h4 className="mb-2 text-sm text-zinc-100">Receiving Account</h4>
            <article className="flex gap-x-4 items-center p-2.5 bg-zinc-800 rounded-xl pe-4">
              <div className="p-4 rounded-lg text-primary bg-primary-50 shadow">
                <LandmarkIcon className="size-7" />
              </div>
              <div className="flex-grow w-full text-sm text-zinc-300">
                <p>Palmpay</p>
                <p>999 282 0202</p>
                <p>Sunday Awanu Paul</p>
              </div>
              <Button variant="light" isIconOnly size="md" radius="full">
                <PenBoxIcon className="size-5 text-zinc-200" />
              </Button>
            </article>
          </div>

          <div className="pt-2">
            <Input
              type="number"
              label="Amount (#)"
              value={amountToBeWithdrawn.toString()}
              onValueChange={(value) => {
                setAmountToBeWithdrawn(parseInt(value));
              }}
              placeholder="5,000"
              size="lg"
              classNames={{
                label: "ps-1 text-zinc-400 text-sm",
                input: "text-xl",
              }}
              labelPlacement="outside"
              startContent={<span className="text-xl font-meidum">₦</span>}
            />

            <p className="text-sm text-zinc-400 flex items-center gap-x-1.5 py-2.5 px-1.5">
              <WalletIcon className="size-4" /> Balance: #18,000.00
            </p>
          </div>

          <div className="hidden lg:flex flex-wrap gap-3">
            {[1000, 5000, 10_000].map((amount, index) => {
              return (
                <Button
                  key={`${amount}-${index}`}
                  radius="full"
                  size="md"
                  className="h-9"
                >
                  # {amount}
                </Button>
              );
            })}
          </div>

          <footer className="pt-4">
            <div className="lg:hidden mb-2">
              <div className="grid grid-cols-3 gap-1.5">
                {[1, 2, 3, 4, 5, 9, 0, "00"].map((digit, index) => {
                  return (
                    <Button
                      key={`${digit}#${index}`}
                      radius="sm"
                      className="text-xl font-medium"
                    >
                      {digit}
                    </Button>
                  );
                })}
                <Button radius="sm" className="text-xl font-medium">
                  <DeleteIcon />
                </Button>
              </div>
            </div>
            <Button
              variant="solid"
              color="primary"
              size="lg"
              radius="md"
              fullWidth
              onClick={() => setWithdrawlProcessStep(2)}
              className="font-semibold"
              // endContent={
              //   <span className="ms-auto">
              //     <ChevronsRightIcon className="size-5" />
              //   </span>
              // }
              isDisabled={!amountToBeWithdrawn}
            >
              Withdrawl
            </Button>
          </footer>
        </div>

        <div
          className={clsx("space-y-6", {
            block: withdrawProcessStep === 2,
            hidden: withdrawProcessStep !== 2,
          })}
        >
          <div className="text-center flex flex-col items-center gap-y-4 py-4">
            <CheckCircleIcon className="text-success size-16" />
            <p className="text-lg">Withdrawl Request Successful!</p>
          </div>

          <footer className="pt-6 flex items-center gap-x-2">
            <Button
              variant="flat"
              color="success"
              size="lg"
              radius="md"
              fullWidth
              onClick={() => {
                setWithdrawlProcessStep(1);
              }}
            >
              Withdrawl Again!
            </Button>
            <Button
              as={Link}
              href="/transactions/#8482"
              variant="flat"
              color="warning"
              size="lg"
              radius="md"
              fullWidth
              onClick={() => pauseWithdrawlProcess()}
            >
              View Status
            </Button>
          </footer>
        </div>
      </section>
    </div>
  );
}
