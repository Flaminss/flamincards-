"use client";

import { Button } from "@nextui-org/button";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import {
  ArrowLeftRightIcon,
  Bitcoin,
  CheckCircle2Icon,
  CheckCircleIcon,
  CheckIcon,
  ChevronRight,
  CoinsIcon,
  CopyIcon,
  DollarSign,
  NetworkIcon,
  SearchIcon,
} from "lucide-react";
import { NG } from "country-flag-icons/react/3x2";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CryptoSalePaymentStep({ title }: { title: string }) {
  const router = useRouter();
  const noCardSelectionMessage = "Add Cards Below!";
  const [depositConfirmed, setDepositConfirmed] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: orderSubmitted,
    onOpen: onSubmitOrder,
    onOpenChange: onOrderSubmitChange,
  } = useDisclosure();

  return (
    <>
      <section className="px-4 sm:px-6">
        <h3 className="text-2xl mb-12">Make Your Deposit</h3>
        <form action="/" className="lg:flex lg:gap-x-8">
          <div className="p-4 py-8 lg:order-2 lg:min-w-[30%] lg:shrink-0">
            <figure className="flex items-center justify-center mb-3 rounded-md">
              <Image
                src="https://th.bing.com/th?id=OIP.AzGsz6YA4Aup3paQ_poIAwHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                width={180}
                height={180}
              />
            </figure>
            <p className="text-warning-600 text-medium text-center">
              Scan the QR Code
            </p>
          </div>
          <div className="grid gap-y-10 grow w-full">
            <Input
              type="coin"
              label={
                <div className="flex items-center justify-between gap-x-8">
                  Coin/Token{" "}
                  <Button
                    size="md"
                    variant="light"
                    color="success"
                    className="pyfont-medium"
                  >
                    Change
                  </Button>
                </div>
              }
              classNames={{
                label: "w-full",
              }}
              placeholder="BTC"
              labelPlacement="outside"
              disabled={true}
              size="lg"
              startContent={
                <Bitcoin className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input
              type="network"
              label={
                <div className="flex items-center justify-between gap-x-8">
                  Network{" "}
                  <Button
                    size="md"
                    variant="light"
                    color="success"
                    className="pyfont-medium"
                  >
                    Change
                  </Button>
                </div>
              }
              classNames={{
                label: "w-full",
              }}
              placeholder="TON"
              labelPlacement="outside"
              disabled={true}
              size="lg"
              startContent={
                <NetworkIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <div>
              <h5 className="text-zinc-400 text-medium mb-1">
                Tag/Memo/Comment
              </h5>
              <div className="flex items-center gap-x-4">
                <p className="text-lg">108228010</p>
                <Button isIconOnly variant="light" size="sm">
                  <CopyIcon />
                </Button>
              </div>
              <p className="text-danger">
                To ensure a successful transfer, please make sure the Tag/Memo
                is copied and accurate.
              </p>
            </div>
            <div>
              <h5 className="text-zinc-400 text-medium mb-1">Wallet address</h5>
              <div className="flex items-center gap-x-4">
                <p className="text-lg">
                  0x5A6f9D6aB42Ebb26Ff77e5E3f80303bAE3A9A76F
                </p>
                <Button isIconOnly variant="light" size="sm">
                  <CopyIcon />
                </Button>
              </div>
              <p className="text-danger">
                Please ensure that you use both the Wallet Address and the
                Tag/Memo/Comment when making your deopsit.
              </p>
            </div>
            <div className="flex gap-6 flex-wrap">
              {/* <Button
                className="grow"
                variant="solid"
                // color="primary"
                size="lg"
                radius="sm"
                endContent={<CopyIcon />}
              >
                Copy Tag/Memo/Comment
              </Button> */}
              <Button
                className="grow"
                variant="flat"
                size="lg"
                radius="sm"
                isDisabled={true}
                color="success"
                endContent={<CheckCircle2Icon />}
              >
                Tag Copied
              </Button>
              {/* <Button
                className="grow"
                variant="solid"
                // color="primary"
                size="lg"
                radius="sm"
                endContent={<CopyIcon />}
              >
                Copy Receiving Address
              </Button> */}
              <Button
                className="grow"
                variant="flat"
                size="lg"
                radius="sm"
                isDisabled={true}
                color="success"
                endContent={<CheckCircle2Icon />}
              >
                Address Copied
              </Button>
              <Button
                variant="solid"
                radius="sm"
                color="primary"
                className="w-full shadow-lg"
                size="lg"
                // isDisabled={true}
                onClick={onSubmitOrder}
              >
                Complete Order
              </Button>
            </div>
          </div>
        </form>
      </section>

      <Modal
        isOpen={orderSubmitted}
        onOpenChange={onOrderSubmitChange}
        backdrop="blur"
        className="max-w-[68ch]"
        classNames={{
          backdrop: "z-[100]",
          wrapper: "z-[110]",
          base: "max-h-[min(80vh,_500px)]",
        }}
        shadow="lg"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="justify-center items-center p-8">
                <CheckCircleIcon size={64} className="text-success-600" />
                <h3 className="text-3xl">Successfully Submitted</h3>
                Your order is pending and waiting to be reviewed....
                <p>😊Thank you for doing business with us! </p>
                WHile you wait, woul'd you like to:
              </ModalBody>
              <ModalFooter className="grid gap-y-6 justify-center items-center">
                <Button
                  color="primary"
                  size="lg"
                  radius="sm"
                  variant="solid"
                  onPress={(e) => {
                    onClose();
                    router.push("/market/crypto");
                  }}
                >
                  Sell again
                </Button>
                <Button
                  color="primary"
                  radius="sm"
                  size="lg"
                  variant="flat"
                  onPress={(e) => {
                    onClose();
                    router.push("/transactions?commodity=giftcards");
                  }}
                >
                  View Order Status
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
