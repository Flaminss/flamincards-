"use client";

import axios from "axios";
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
  useDisclosure,
} from "@nextui-org/react";
import {
  ArrowLeftRightIcon,
  ChevronRight,
  CopyIcon,
  DollarSign,
  SearchIcon,
} from "lucide-react";
import { NG } from "country-flag-icons/react/3x2";

export default function CryptoSellPage() {
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
    <>
      <section className="max-w-xl">
        <div className="flex flex-col gap-y-2 mb-6">
          <Card className="rounded-lg max-w-none shadow-lg bg-zinc-800 border">
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-300 mb-1.5">I am Sending</p>
              </div>
              <div className="flex items-center gap-x-16">
                <div className="flex items-center gap-2">
                  {/* <div className="w-8 h-8 rounded-md bg-success-200 shrink-0"></div> */}
                  <Image
                    src="/cryptocoins-icons/SVG/USDT.svg"
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
                    backdrop="blur"
                    isOpen={sendableTokenSelectOpened}
                    classNames={{
                      backdrop: "z-[100]",
                      wrapper: "z-[110]",
                      base: "border max-h-[min(80vh,_500px)]",
                    }}
                    shadow="lg"
                    onOpenChange={onSendableTokenSelectChange}
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
                            <h4 className="text-2xl mb-4">
                              Select Token to{" "}
                              <span className="text-danger-400">Send</span>
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
                                  <ListboxItem key="issues">
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
              </div>
            </CardBody>
          </Card>
          <Card className="rounded-md max-w-none shadow-lg bg-zinc-800 border">
            <CardBody className="p-6">
              <p className="text-sm text-gray-300 mb-1.5">I will receive</p>
              <div className="flex items-center">
                <NG className="w-8 h-8" />
                <Button
                  onPress={openReceivableTokenSelect}
                  variant="light"
                  className="w-auto h-auto"
                  endContent={
                    <ChevronRight className="shrink-0 w-auto" size={16} />
                  }
                >
                  <h5 className="text-2xl font-medium">NGN</h5>
                </Button>

                <h5 className="ms-auto font-semibold text-3xl">42,00.01</h5>

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
            <Divider />
            <CardFooter className="card-footer flex-col gap-y-4 w-full">
              <p className="self-start flex items-center content-center justify-center text-center gap-x-2 text-gray-400">
                %{" "}
                <span className="flex gap-x-2 items-center">
                  1 USD <ArrowLeftRightIcon size={18} /> 1400 NGN
                </span>{" "}
                %
              </p>

              <ul className="self-start text-sm text-gray-400 py-2 w-full hidden">
                <li>✔ Secure payments</li>
                <li>{`🤑 New balance: ${icons["NGN"]?.symbol}25,728.00`}</li>
                <li>⚡ Average Release Time: 2 minutes</li>
              </ul>
            </CardFooter>
          </Card>
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
      <div className="py-12"></div>
      <section className="max-w-xl">
        <form action="/">
          <Input
            type="coin"
            label="Coin"
            placeholder="BTC"
            labelPlacement="outside"
            isDisabled={true}
            size="lg"
            startContent={
              <DollarSign className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            type="network"
            label="Network"
            placeholder="TON"
            labelPlacement="outside"
            isDisabled={true}
            size="lg"
            startContent={
              <DollarSign className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <div className="flex items-center justify-center p-4 py-8">
            <Image
              src="https://th.bing.com/th?id=OIP.AzGsz6YA4Aup3paQ_poIAwHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              width={180}
              height={180}
            />
          </div>
          <div className="py-4">
            <h5 className="text-zinc-400 text-sm mb-1">Tag/Memo</h5>
            <div className="flex items-center gap-x-4">
              <p className="text-lg">108228010</p>
              <Button isIconOnly variant="light" size="md">
                <CopyIcon />
              </Button>
            </div>
            <p className="text-danger text-sm">
              To ensure a successful transfer, please make sure the Tag/Memo is
              copied and accurate.
            </p>
          </div>
          <div className="py-4">
            <h5 className="text-zinc-400 text-sm mb-1">Wallet address</h5>
            <div className="flex items-center gap-x-4">
              <p className="text-lg">
                0x5A6f9D6aB42Ebb26Ff77e5E3f80303bAE3A9A76F
              </p>
              <Button isIconOnly variant="light" size="md">
                <CopyIcon />
              </Button>
            </div>
            <p className="text-danger text-sm">
              Please ensure that you use both the Wallet Address and the
              Tag/Memo when making your deopsit.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap mt-4 mb-6">
            <Button
              className="grow"
              variant="flat"
              // color="primary"
              size="lg"
              radius="sm"
            >
              Copy Tag/Memo
            </Button>
            <Button
              className="grow"
              variant="solid"
              // color="primary"
              size="lg"
              radius="sm"
            >
              Copy Address
            </Button>
          </div>

          <Button
            variant="solid"
            radius="sm"
            color="primary"
            className="w-full shadow-lg"
            size="lg"
          >
            Complete Order
          </Button>
        </form>
      </section>
    </>
  );
}

{
  /* <div className="card p-4 rounded-md max-w-none shadow-lg">
                  <div className="flex items-center justify-between">
                    <p className="font-normal text-sm text-gray-200">
                      I am Sending
                    </p>
                  </div>
                  <div className="flex items-center gap-x-16">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-md bg-success-200 shrink-0"></div>
                      <h5 className="text-2xl">USDT</h5>
                      <ChevronDown className="" size={16} />
                    </div>
                    <Input
                      type="number"
                      placeholder="0.00"
                      variant="underlined"
                      className="ms-auto min-w-none"
                      classNames={{
                        input: "text-2xl",
                      }}
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            {icons["USDT"]?.symbol || ""}
                          </span>
                        </div>
                      }
                    />
                  </div>
                </div> */
}
