"use client";

import Link from "next/link";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import {
  CheckCircleIcon,
  ClipboardSignature,
  DeleteIcon,
  LandmarkIcon,
  PenBoxIcon,
  TimerIcon,
  WalletIcon,
} from "lucide-react";
import icons from "currency-icons";
import { useState } from "react";
import clsx from "clsx";
import PWAPageTitle from "../page-title";

export default function WithdrawlPage() {
  const {
    isOpen: showingWithdrawlRequestOutcome,
    onOpen: showWithdrawlRequestOutcome,
    onOpenChange: displayWithdrawlRequestOutcome,
    onClose: hideWithdrawlRequestOutcome,
  } = useDisclosure();

  const [amountToBeWithdrawn, setAmountToBeWithdrawn] = useState(0);

  return (
    <div className="pb-20">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Withdrawl" />
      </header>

      <section className="pt-0 pb-4 overflow-y-auto px-4 max-w-xl">
        <div className={clsx("space-y-6 block pt-4")}>
          <div>
            <h4 className="mb-3 text-sm text-zinc-100">Receiving Account</h4>
            <article className="flex gap-x-4 items-center p-2 bg-default-100 rounded-xl">
              <div className="p-4 rounded-lg text-primary bg-primary-50 shadow">
                <LandmarkIcon className="size-7" />
              </div>
              <div className="flex-grow w-full text-sm text-zinc-200">
                <p>Palmpay</p>
                <p>999 282 0202</p>
                <p>Sunday Awanu Paul</p>
              </div>
              <Button variant="light" isIconOnly size="lg" radius="full">
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
              <WalletIcon className="size-4" /> Balance: 18,000.00
            </p>
          </div>

          <div className="hidden lg:flex flex-wrap gap-3">
            {[1000, 5000, 10_000].map((amount, index) => {
              return (
                <Button
                  key={`${amount}-${index}`}
                  radius="full"
                  size="lg"
                  className="h-10 min-w-0 px-3"
                >
                  #{amount}
                </Button>
              );
            })}
          </div>

          <Button
            variant="solid"
            color="primary"
            size="lg"
            radius="md"
            fullWidth
            onClick={() => showWithdrawlRequestOutcome()}
            className="font-semibold"
            isDisabled={!amountToBeWithdrawn}
          >
            Withdraw
          </Button>
        </div>

        <Modal
          isOpen={showingWithdrawlRequestOutcome}
          onOpenChange={displayWithdrawlRequestOutcome}
          backdrop="opaque"
          placement="center"
          hideCloseButton
          isDismissable={false}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="px-6 py-12 flex items-center justify-center">
                  <ClipboardSignature className="size-10 text-warning mb-4" />
                  <h3 className="text-xl">
                    Your transaction is being reviewed
                  </h3>
                  <p className="text-zinc-400 text-xs flex gap-x-2 items-center">
                    <TimerIcon className="size-4" /> Average wait time: 2 min
                  </p>
                </ModalBody>
                <ModalFooter className="flex-wrap gap-4">
                  <Button
                    size="lg"
                    color="primary"
                    variant="solid"
                    onPress={onClose}
                    className="grow"
                    radius="sm"
                  >
                    Withdrawl again
                  </Button>
                  <Button
                    as={Link}
                    size="lg"
                    href="/transactions"
                    color="primary"
                    variant="solid"
                    onPress={onClose}
                    className="grow"
                    radius="sm"
                  >
                    View status
                  </Button>
                  <Button
                    as={Link}
                    href="/dashboard"
                    size="lg"
                    color="primary"
                    variant="flat"
                    onPress={onClose}
                    className="w-full"
                    radius="sm"
                  >
                    Back to Dashboard
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </div>
  );
}
