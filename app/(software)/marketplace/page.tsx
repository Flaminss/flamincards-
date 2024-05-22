"use client";

import AutosizeInput from "react-18-input-autosize";
import axios from "axios";
import icons from "currency-icons";
import GiftcardCatalog from "@/app/components/giftcard-catalog";
import {
  Tabs,
  Tab,
  Input,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Select,
  SelectItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Listbox,
  ListboxItem,
  Chip,
  ScrollShadow,
  Avatar,
} from "@nextui-org/react";
import {
  SearchIcon,
  ChevronDown,
  ListOrderedIcon,
  FilterXIcon,
  ArrowDownUp,
  ArrowUpDown,
  ArrowLeftRightIcon,
  ChevronRight,
  CopyIcon,
  DollarSign,
} from "lucide-react";
import BTCsvg from "cryptocoins-icons/SVG/BTC.svg";
import { NG } from "country-flag-icons/react/3x2";

const sortOrders = [
  { key: "all", icon: "👀", title: "Browse All" },
  { key: "hot", icon: "🔥", title: "Hottest" },
  { key: "high", icon: "💰", title: "Highest Rate" },
  { key: "low", icon: "📉", title: "Lowest Rate" },
];

// const fetcher = (url: string) => axios.get(url).then(r => r.json())

export default function MarketPage() {
  // const { data, error } = useSWR('/api/profile-data', fetcher)

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

  const menu = [
    { title: "Giftcards", unread: 0 },
    { title: "Crypto", unread: 4 },
    { title: "$cashtags", unread: 4 },
    { title: "Trading Investment", unread: 4 },
  ];
  return (
    <div>
      <header className="py-5 md:pt-0 px-4">
        <h1 className="text-xl font-semibold md:text-3xl uppercase sm:capitalize">
          Marketplace
        </h1>
      </header>

      <section className="pb-8 overflow-x-hidden">
        <Tabs
          variant="underlined"
          aria-label="Tabs variants"
          className="mb-4 px-2"
          classNames={{
            tabList:
              "gap-x-0 flex overflow-x-scroll scrollbar-show px-0 w-full",
            tab: "grow uppercase",
          }}
        >
          <Tab
            key="/giftcard"
            title={"Giftcard"}
            className="text-base font-medium uppercase"
          >
            <div className="px-3 flex mb-4 items-center gap-x-4">
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
                    "shadow-xl",
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
                placeholder="Search by card name..."
                startContent={
                  <SearchIcon
                    className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 me-1"
                    size={16}
                  />
                }
              />

              <div className="flex items-center">
                <Select
                  startContent={<ArrowUpDown />}
                  defaultSelectedKeys={["all"]}
                  classNames={{
                    trigger: "pe-8",
                    innerWrapper: "w-auto",
                  }}
                >
                  {sortOrders.map(({ icon, title, key }) => {
                    return (
                      <SelectItem key={key} value={key} startContent={icon}>
                        {title}
                      </SelectItem>
                    );
                  })}
                </Select>
              </div>
            </div>
            <GiftcardCatalog />
          </Tab>
          <Tab
            key="/crypto"
            title={"Crypto"}
            className="text-base font-medium px-4"
          >
            <section className="max-w-xl">
              <div className="flex flex-col gap-y-2 mb-6">
                {/* <div className="card p-4 rounded-md max-w-none shadow-lg">
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
                </div> */}
                <Card className="rounded-lg max-w-none shadow-lg bg-zinc-800 border">
                  <CardBody className="p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-300 mb-1.5">
                        I am Sending
                      </p>
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
                            <ChevronRight
                              className="shrink-0 w-auto"
                              size={16}
                            />
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
                                    <span className="text-danger-400">
                                      Send
                                    </span>
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
                    <p className="text-sm text-gray-300 mb-1.5">
                      I will receive
                    </p>
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

                      <h5 className="ms-auto font-semibold text-3xl">
                        42,00.01
                      </h5>

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
                                  <span className="text-success-400">
                                    Receive
                                  </span>
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
                    To ensure a successful transfer, please make sure the
                    Tag/Memo is copied and accurate.
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

                <Button variant="solid" radius="sm" color="primary" className="w-full shadow-lg" size="lg" >Complete Order</Button>
              </form>
            </section>
            <div className="py-12"></div>
            <section className="max-w-xl">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 !border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-zinc-800 hover:bg-zinc-800 dark:border dark:hover:border"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </section>
          </Tab>
          <Tab
            key="/cashtag"
            title={"$cashtag"}
            className="text-base font-medium uppercase"
          />
          <Tab
            key="/investment"
            title={"Investment"}
            className="text-base font-medium uppercase"
          />
        </Tabs>
      </section>
    </div>
  );
}
