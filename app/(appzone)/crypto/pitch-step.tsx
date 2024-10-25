"use client";

import icons from "currency-icons";
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
  BadgeDollarSignIcon,
  CheckCircleIcon,
  ChevronRight,
  CopyIcon,
  DollarSign,
  SearchIcon,
  WalletIcon,
} from "lucide-react";
import { NG } from "country-flag-icons/react/3x2";

export default function CryptoSalePaymentStep({ title }: { title: string }) {
  const {
    isOpen: sendableTokenSelectOpened,
    onOpen: openSendableTokenSelect,
    onOpenChange: onSendableTokenSelectChange,
  } = useDisclosure();
  const {
    isOpen: receivableTokenSelectOpened,
    onOpen: openReceivableTokenSelect,
    onOpenChange: onReceivableTokenSelectChange,
  } = useDisclosure();

  return (
    <section className="max-w-xl pt-8">
      <Select
        defaultSelectedKeys={["ton"]}
        size="lg"
        label="Select Network"
        labelPlacement="outside"
        className="shadow-2xl"
        classNames={{
          label: "text-center text-primary-600",
        }}
      >
        <SelectItem key="ton">TON</SelectItem>
        <SelectItem key="solana">Solan</SelectItem>
      </Select>
      <div className="flex flex-col gap-y-2 my-6">
        <Card className="rounded-lg max-w-none shadow-lg bg-zinc-800 border">
          <CardBody className="p-6">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-300">I am Sending</p>
              <p className="text-xs text-primary">Min: 0.0001</p>
            </div>
            <div className="flex items-center gap-x-16">
              <div className="flex items-center gap-2">
                {/* <div className="w-8 h-8 rounded-md bg-success-200 shrink-0"></div> */}
                <Image
                  src="/cryptocoins-icons/SVG/USDT.svg"
                  alt=""
                  className=""
                  width={32}
                  height={32}
                />
                <Button
                  onPress={openSendableTokenSelect}
                  variant="light"
                  className="w-auto h-auto"
                  endContent={
                    <ChevronRight className="shrink-0 w-auto" size={16} />
                  }
                >
                  <h5 className="text-2xl font-medium">USDT</h5>
                </Button>

                <Modal
                  backdrop="opaque"
                  isOpen={sendableTokenSelectOpened}
                  classNames={{
                    backdrop: "z-[100]",
                    wrapper: "z-[110]",
                    base: "border max-h-[min(80vh,_400px)]",
                  }}
                  hideCloseButton
                  shadow="lg"
                  placement="center"
                  onOpenChange={onSendableTokenSelectChange}
                  motionProps={{
                    variants: {
                      enter: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      },
                      exit: {
                        scale: 0.95,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      },
                    },
                  }}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1 p-4">
                          {/* <h4 className="text-2xl mb-4">Cryptocurrency List</h4> */}
                          <Input
                            isClearable
                            radius="lg"
                            classNames={{
                              label: "text-black/50 dark:text-white/90",
                              input: [
                                "max-w-md",
                                "bg-transparent",
                                "text-black/90 dark:text-white/90",
                                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                              ],
                              innerWrapper: "bg-transparent",
                              inputWrapper: [
                                "shadow-xl rounded-md",
                                "bg-default-200/50",
                                "dark:bg-default/60",
                                "backdrop-blur-xl",
                                "backdrop-saturate-200",
                                "hover:bg-default-200/70",
                                "dark:hover:bg-default/70",
                                "group-data-[focus=true]:bg-default-200/50",
                                "dark:group-data-[focus=true]:bg-default/60",
                                "!cursor-text",
                              ],
                            }}
                            size="lg"
                            placeholder="Search by coin or token name..."
                            startContent={
                              <SearchIcon
                                className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 me-1"
                                size={16}
                              />
                            }
                          />
                        </ModalHeader>
                        <ModalBody className="px-2">
                          <Listbox
                            aria-label="User Menu"
                            onAction={(key) => onSendableTokenSelectChange()}
                            className="shadow-none p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible rounded-medium"
                            itemClasses={{
                              base: "px-3 rounded-lg gap-3 h-12 data-[hover=true]:bg-default-100/80",
                            }}
                          >
                            {[
                              "Dogs",
                              "PIXL",
                              "NOT",
                              "TON",
                              "BTC",
                              "SOL",
                              "ETH",
                              "HMSTR",
                            ].map((token) => {
                              return (
                                <ListboxItem
                                  key="token"
                                  startContent={
                                    <BadgeDollarSignIcon className="size-6" />
                                  }
                                >
                                  {token}
                                </ListboxItem>
                              );
                            })}
                          </Listbox>
                        </ModalBody>
                        <ModalFooter className="flex-col text-sm text-gray-600 text-center justify-center">
                          <p className="mb-4">
                            -- You've reached the end of the list --
                          </p>
                          <Button
                            variant="solid"
                            color="danger"
                            size="lg"
                            radius="sm"
                            className="w-full"
                          >
                            Cancel
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
              <div className="grid items-end place-items-end gap-y-2">
                <Input
                  type="number"
                  placeholder="0.00"
                  className="ms-auto min-w-none"
                  radius="sm"
                  fullWidth={false}
                  classNames={{
                    input: [
                      "text-end text-white text-3xl font-semibold",
                      "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    ],
                    inputWrapper: "pe-0",
                  }}
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        {icons["USDT"]?.symbol || ""}
                      </span>
                    </div>
                  }
                />
                <p className="text-sm text-zinc-400 whitespace-nowrap flex items-center gap-x-1">
                  <WalletIcon className="size-3" />
                  Balance: N25,000
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="rounded-md max-w-none shadow-lg bg-zinc-800 border">
          <CardBody className="p-6 pb-8">
            <p className="text-sm text-gray-300 mb-1.5">I will receive</p>
            <div className="flex items-center">
              <NG className="w-8 h-8" />
              <Button
                // onPress={openReceivableTokenSelect}
                variant="light"
                className="w-auto h-auto"
                // endContent={
                //   <ChevronRight className="shrink-0 w-auto" size={16} />
                // }
              >
                <h5 className="text-2xl font-medium">NGN</h5>
              </Button>

              <div className="ms-auto place-items-end grid gap-y-2">
                <h5 className="font-semibold text-3xl">42,00.01</h5>
                <p className="text-sm text-zinc-400 whitespace-nowrap flex items-center gap-x-1">
                  <WalletIcon className="size-3" />
                  New Balance: N25,000
                </p>
              </div>

              <Modal
                backdrop="blur"
                isOpen={receivableTokenSelectOpened}
                classNames={{
                  backdrop: "z-[100]",
                  wrapper: "z-[110]",
                  base: "border max-h-[min(80vh,_500px)]",
                }}
                shadow="lg"
                onOpenChange={onReceivableTokenSelectChange}
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                    exit: {
                      y: -20,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeIn",
                      },
                    },
                  },
                }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 py-6">
                        <h4 className="text-2xl mb-2">
                          Select Token to{" "}
                          <span className="text-success-400">Receive</span>
                        </h4>
                        <Input
                          isClearable
                          radius="lg"
                          classNames={{
                            label: "text-black/50 dark:text-white/90",
                            input: [
                              "max-w-md",
                              "bg-transparent",
                              "text-black/90 dark:text-white/90",
                              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-transparent",
                            inputWrapper: [
                              "shadow-xl rounded-md",
                              "bg-default-200/50",
                              "dark:bg-default/60",
                              "backdrop-blur-xl",
                              "backdrop-saturate-200",
                              "hover:bg-default-200/70",
                              "dark:hover:bg-default/70",
                              "group-data-[focus=true]:bg-default-200/50",
                              "dark:group-data-[focus=true]:bg-default/60",
                              "!cursor-text",
                            ],
                          }}
                          size="lg"
                          placeholder="Search by token name..."
                          startContent={
                            <SearchIcon
                              className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 me-1"
                              size={16}
                            />
                          }
                        />
                      </ModalHeader>
                      <ModalBody>
                        <Listbox
                          aria-label="User Menu"
                          onAction={(key) => alert(key)}
                          className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
                          itemClasses={{
                            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                          }}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((token) => {
                            return (
                              <ListboxItem key="issues">{token}</ListboxItem>
                            );
                          })}
                        </Listbox>
                      </ModalBody>
                      <ModalFooter className="flex-col text-sm text-gray-600 text-center justify-center">
                        <p className="mb-4">
                          -- You've reached the end of the list --
                        </p>
                        <Button
                          variant="solid"
                          color="danger"
                          size="lg"
                          radius="sm"
                          className="w-full"
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </CardBody>
          <CardFooter className="card-footer flex-col gap-y-4 w-full border-t py-6">
            <p className="flex gap-x-2 font-seminold text-sm">
              %{" "}
              <span className="flex gap-x-2 items-center">
                1 USD <ArrowLeftRightIcon className="size-4" /> 1400 NGN
              </span>{" "}
              %
            </p>
          </CardFooter>
        </Card>

        <div className="card mt-4 w-full rounded-lg px-4 py-2 max-w-none">
          <div className="cardBody">
            <ul className="self-start text-sm text-gray-400 py-2 w-full grid gap-y-1.5">
              <li>✔ Secure payments</li>
              <li>⚡ Average Release Time: 2 minutes</li>
            </ul>
          </div>
        </div>
      </div>
      <Button
        radius="sm"
        className="w-full shadow-lg"
        size="lg"
        color="primary"
      >
        Proceed to Payment
      </Button>
    </section>
  );
}

// We are currently processing this transaction. You would receive a notification of your trade status shortly.
