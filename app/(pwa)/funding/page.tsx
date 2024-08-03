"use client";

import Link from "next/link";
import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  useDisclosure,
} from "@nextui-org/react";
import {
  ChevronDown,
  ChevronUp,
  ChevronsRightIcon,
  CircleAlertIcon,
  CloudUploadIcon,
  CopyIcon,
  Hash,
  LandmarkIcon,
  UserCircleIcon,
} from "lucide-react";
import icons from "currency-icons";
import { useState } from "react";
import clsx from "clsx";
import PWAPageTitle from "../page-title";
import AmountDialpad from "../dashboard/amount-dialpad";

export default function FundingPage() {
  const {
    isOpen: depositing,
    onOpen: startDepositProcess,
    onOpenChange: onDeposit,
    onClose: closeDepositProcess,
  } = useDisclosure();

  const receiptAttached = false;

  const [depositTransactionDetails, setDepositTransactionDetails] = useState({
    detailsHidden: false,
    amount: 2000,
    date: "20th July, 2024",
    description: "DEPOSIT to RML-PAID Wallet",
  });

  const [amountToBeDeposited, setAmountToBeDeposited] = useState(0);
  const [depositProcessStep, setDepositProcessStep] = useState(1);

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Fund your Account" />
      </header>

      <section className="pt-6 pb-4 px-4 max-w-xl">
        <div
          className={clsx({
            "space-y-4 block": depositProcessStep === 1,
            hidden: depositProcessStep !== 1,
          })}
        >
          {/* <Listbox className="px-0">
            <ListboxItem
              key="bank"
              startContent={
                <div className="p-3 rounded-md text-primary bg-primary-50 shadow">
                  <LandmarkIcon className="size-6" />
                </div>
              }
              endContent={
                <span className="text-zinc-400">
                  <CopyIcon className="size-4" />
                </span>
              }
              classNames={{
                title: "text-medium",
                base: "px-0 gap-x-4",
              }}
              title="Palmpay"
              description="Bank"
            />
            <ListboxItem
              key="acct-no"
              startContent={
                <div className="p-3 rounded-md text-primary bg-primary-50 shadow">
                  <Hash className="size-6" />
                </div>
              }
              endContent={
                <span className="text-zinc-400">
                  <CopyIcon className="size-4" />
                </span>
              }
              classNames={{
                title: "text-xl font-semibold",
                base: "px-0 gap-x-4",
              }}
              title="903 622 7457"
              description="Account Number"
            />
            <ListboxItem
              key="acct-name"
              startContent={
                <div className="p-3 rounded-md text-primary bg-primary-50 shadow">
                  <UserCircleIcon className="size-6" />
                </div>
              }
              endContent={
                <span className="text-zinc-400">
                  <CopyIcon className="size-4" />
                </span>
              }
              classNames={{
                title: "text-medium",
                base: "px-0 gap-x-4",
              }}
              title="Sunday Awanu Paul"
              description="Account Name"
            />
          </Listbox> */}

          {/* <div className="pt-2">
            <Input
              type="number"
              label="Amount"
              value={amountToBeDeposited.toString()}
              onValueChange={(value) => {
                setAmountToBeDeposited(parseInt(value));
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
          </div> */}

          <AmountDialpad />

          {/* <p className="text-sm items-start text-warning flex gap-x-2 px-2">
            <CircleAlertIcon className="size-4 mt-1" />
            Kobo will not be recognized
          </p> */}

          <footer className="pt-8">
            <Button
              variant="solid"
              color="primary"
              size="lg"
              radius="md"
              fullWidth
              onClick={() => setDepositProcessStep(2)}
              className="font-semibold"
              endContent={
                <span className="ms-auto">
                  <ChevronsRightIcon className="size-5" />
                </span>
              }
              // isDisabled={!amountToBeDeposited}
            >
              Submit Recepit
            </Button>
          </footer>
        </div>

        <div
          className={clsx("space-y-6", {
            block: depositProcessStep === 2,
            hidden: depositProcessStep !== 2,
          })}
        >
          <div>
            <Listbox className="px-0 mb-4">
              <ListboxItem
                key="bank"
                startContent={
                  <div className="p-3 rounded-md text-primary bg-primary-50 shadow">
                    <LandmarkIcon className="size-6" />
                  </div>
                }
                endContent={
                  <span className="text-zinc-400">
                    <CopyIcon className="size-4" />
                  </span>
                }
                classNames={{
                  title: "text-medium",
                  base: "px-0 gap-x-4",
                }}
                title="Palmpay"
                description="Bank"
              />
              <ListboxItem
                key="acct-no"
                startContent={
                  <div className="p-3 rounded-md text-primary bg-primary-50 shadow">
                    <Hash className="size-6" />
                  </div>
                }
                endContent={
                  <span className="text-zinc-400">
                    <CopyIcon className="size-4" />
                  </span>
                }
                classNames={{
                  title: "text-xl font-semibold",
                  base: "px-0 gap-x-4",
                }}
                title="903 622 7457"
                description="Account Number"
              />
              <ListboxItem
                key="acct-name"
                startContent={
                  <div className="p-3 rounded-md text-primary bg-primary-50 shadow">
                    <UserCircleIcon className="size-6" />
                  </div>
                }
                endContent={
                  <span className="text-zinc-400">
                    <CopyIcon className="size-4" />
                  </span>
                }
                classNames={{
                  title: "text-medium",
                  base: "px-0 gap-x-4",
                }}
                title="Sunday Awanu Paul"
                description="Account Name"
              />
            </Listbox>

            <ul
              className={clsx("space-y-1.5 mb-4", {
                hidden: depositTransactionDetails.detailsHidden,
              })}
            >
              <li className="flex gap-x-6 justify-between items-center">
                <span className="text-zinc-500 font-medium">Amount:</span>{" "}
                <span className="text-zinc-200">$2,000</span>
              </li>
              <li className="flex gap-x-6 justify-between items-center">
                <span className="text-zinc-500 font-medium">Date:</span>{" "}
                <span className="text-zinc-200">20th July, 2004</span>
              </li>
              <li className="flex gap-x-6 justify-between items-center">
                <span className="text-zinc-500 font-medium">Description:</span>{" "}
                <span className="text-zinc-200 text-sm max-w-[28ch]">
                  {depositTransactionDetails.description}
                </span>
              </li>
            </ul>

            <Button
              variant="flat"
              size="sm"
              color="default"
              fullWidth
              className="justify-between"
              onClick={() => {
                setDepositTransactionDetails((curr: any) => {
                  return {
                    ...curr,
                    detailsHidden: !curr.detailsHidden,
                  };
                });
              }}
              endContent={
                <span>
                  {depositTransactionDetails.detailsHidden ? (
                    <ChevronDown className="size-4" />
                  ) : (
                    <ChevronUp className="size-4" />
                  )}
                </span>
              }
            >
              {depositTransactionDetails.detailsHidden ? "Show" : "Hide"}{" "}
              transaction details
            </Button>
          </div>

          <div className="grid gap-y-4 w-full">
            <label
              htmlFor="dropzone-file"
              className="mb-1 flex flex-col items-center justify-center w-full h-32.. border-2 pt-4 p-1.5 border-dashed rounded-lg cursor-pointer"
            >
              <span className="text-default">
                <CloudUploadIcon className="size-8" />
              </span>
              <p className="mt-2 mb-1.5 text-sm text-zinc-200 dark:text-gray-400">
                <span className="font-semibold">Upload your receipt</span> or
                drag and drop
              </p>
              <p className="mb-6 text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
              <p className="flex gap-x-2 pb-4 items-center text-sm text-warning">
                <CircleAlertIcon className="size-4" /> Ensure you upload a clear
                picture
              </p>
              {/* <Input type="file" radius="lg" /> */}
            </label>
          </div>

          <footer className="pt-6 flex items-center gap-x-2">
            <Button
              variant="flat"
              color="danger"
              size="lg"
              radius="md"
              fullWidth
              onClick={() => {
                setDepositProcessStep(1);
              }}
              isDisabled={receiptAttached}
            >
              New Deposit
            </Button>
            <Button
              variant="solid"
              color="primary"
              size="lg"
              radius="md"
              fullWidth
              onClick={() => closeDepositProcess()}
              // isDisabled={!receiptAttached}
            >
              Done!
            </Button>
          </footer>
        </div>
      </section>
    </div>
  );
}
