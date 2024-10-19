"use client";

import clsx from "clsx";
import {
  Button,
  CardFooter,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Spacer,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  Textarea,
  getKeyValue,
  Card,
  CardHeader,
  Divider,
  CardBody,
  Checkbox,
  useDisclosure,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import {
  ArrowLeftRightIcon,
  ArrowRightCircleIcon,
  CheckCircle2Icon,
  CheckCircleIcon,
  ChevronDownCircle,
  CircleAlertIcon,
  DeleteIcon,
  Trash2Icon,
  WalletMinimalIcon,
} from "lucide-react";
import currencyIcons from "currency-icons";
import { useRouter } from "next/navigation";
import PWAPageTitle from "@/app/(pwa)/page-title";
import { useState } from "react";

export default function GiftcardBuyPage() {
  const selectedCardType = "Steam";
  const router = useRouter();
  const multipleCardSelection = [
    { key: 1, amount: 50, quantity: 1 },
    { key: 2, amount: 200, quantity: 2 },
    { key: 3, amount: 1000, quantity: 1 },
  ];
  // const multipleCardSelection = [] as {
  //   key: number;
  //   amount: number;
  //   quantity: number;
  // }[];

  const [consentToTradeAgreement, setConsentToTradeAgreement] = useState(false);

  const noCardSelectionMessage = "Add Cards Below!";
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: orderSubmitted,
    onOpen: onSubmitOrder,
    onClose: onCompleteOrder,
    onOpenChange: onOrderSubmitChange,
  } = useDisclosure();

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 px-4 mb-2">
        <PWAPageTitle title="Sell (Redeem) your Gift Card" />
      </header>

      <section className="px-4 py-6 flex flex-col gap-y-8 xl:flex-row gap-x-12">
        <div className="max-w-xl grow">
          <Image
            shadow="lg"
            radius="lg"
            src="https://th.bing.com/th/id/OIP.I89DeQMyCgVqj_eo-QgPYAHaEr?rs=1&pid=ImgDetMain"
            alt=""
            className="md:hidden object-contain h-[192px] w-full max-w-screen-md mb-12 me-auto"
            classNames={{ wrapper: "bg-default-50 !max-w-[unset] w-full" }}
          />

          <form className="grid gap-y-8">
            <Input
              label="Your Selected Card"
              value={selectedCardType}
              labelPlacement="outside"
              size="lg"
              radius="md"
              type="button"
              onClick={(e) => router.push("/giftcards")}
              classNames={{
                base: "cursor-pointer",
                input: "text-start",
                label: "ps-1",
              }}
              endContent={
                <ArrowRightCircleIcon className="size-6 text-zinc-400" />
              }
            />
            <Input
              label="Choose a Region"
              value="United States (USD)"
              labelPlacement="outside"
              size="lg"
              radius="md"
              type="button"
              classNames={{
                base: "cursor-pointer",
                input: "text-start",
                label: "ps-1",
              }}
              onClick={onOpen}
              endContent={
                <ChevronDownCircle className="size-6 text-zinc-400" />
              }
            />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Select a region
                    </ModalHeader>
                    <ModalBody className="p-4">
                      <Listbox>
                        {[
                          "United Kingdon (UK)",
                          "United States (USA)",
                          "Europe (EU)",
                          "Canada (CA",
                          "Australia (AU)",
                        ].map((state) => {
                          return (
                            <ListboxItem
                              key={state}
                              onClick={onClose}
                              className="!text-lg"
                            >
                              {state}
                            </ListboxItem>
                          );
                        })}
                      </Listbox>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" variant="flat" onPress={onClose}>
                        Confirm
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            <div>
              <h4 className="ps-1 mb-2.5 text-medium text-ellipsis">
                Quantity of {selectedCardType} Card you have?
              </h4>
              <Tabs
                size="lg"
                color="primary"
                fullWidth={true}
                radius="md"
                disableAnimation={true}
              >
                <Tab key="single" title="Just One">
                  <div className="grid gap-y-4 pt-1">
                    <Select
                      label="Amount (#)"
                      radius="md"
                      size="lg"
                      selectionMode="single"
                      defaultSelectedKeys={[20]}
                      selectorIcon={<ChevronDownCircle />}
                      classNames={{
                        selectorIcon:
                          "shrink-0 w-auto h-auto size-4 text-zinc-400",
                      }}
                    >
                      {[
                        { label: "20", value: 20 },
                        { label: "25", value: 25 },
                        { label: "50", value: 50 },
                      ].map((item) => (
                        <SelectItem
                          key={item.value}
                          value={item.value}
                          className="text-white"
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Input
                      label="E-Code (Optional)"
                      placeholder="XXXX-XXXX-XXXX"
                      size="lg"
                      radius="sm"
                    />
                    <div className="grid gap-y-3 w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-default-400 bg-default-100 rounded-lg cursor-pointer"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="size-10 mb-2 text-gray-400 dark:text-gray-400"
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
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Upload image proof
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs mb-2 text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                          <p className="ps-1 py-1 flex gap-x-2 items-center text-sm text-warning-600 mb-2">
                            <CircleAlertIcon className="size-4" /> Make sure you
                            upload clear pictures
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </Tab>
                <Tab key="multiple" title="Many">
                  <div className="pt-1">
                    <Table
                      isHeaderSticky
                      aria-label="Example table with custom cells, pagination and sorting"
                      className="mb-8"
                      classNames={{
                        wrapper: "max-h-[382px] p-2",
                      }}
                    >
                      <TableHeader
                        columns={[
                          { name: "Amt", uid: "amount" },
                          { name: "Qty", uid: "quantity" },
                          { name: "Value", uid: "value" },
                          { name: "Action", uid: "actions" },
                        ]}
                      >
                        {(column) => (
                          <TableColumn
                            key={column.uid}
                            align={
                              column.uid === "actions" ? "center" : "start"
                            }
                          >
                            {column.name}
                          </TableColumn>
                        )}
                      </TableHeader>
                      <TableBody
                        emptyContent={noCardSelectionMessage}
                        items={[
                          ...multipleCardSelection.map((item) => {
                            return {
                              ...item,
                              value: item.amount * item.quantity,
                            };
                          }),
                          // {
                          //   key: 0,
                          //   amount: multipleCardSelection.reduce(
                          //     (accumulator, value) => {
                          //       return accumulator + value.amount;
                          //     },
                          //     0
                          //   ),
                          //   quantity: multipleCardSelection.reduce(
                          //     (accumulator, value) => {
                          //       return accumulator + value.quantity;
                          //     },
                          //     0
                          //   ),
                          //   value: 0,
                          // },
                        ]}
                      >
                        {(item) => (
                          <TableRow
                            key={item.key}
                            className={clsx({
                              "text-primary !font-semibold !text-base":
                                item.key === 0,
                            })}
                          >
                            {(columnKey) => (
                              <TableCell>
                                {columnKey !== "actions" ? (
                                  getKeyValue(item, columnKey)
                                ) : (
                                  <Trash2Icon
                                    size={16}
                                    className="mx-auto text-danger cursor-pointer"
                                  />
                                )}
                              </TableCell>
                            )}
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>

                    <div className="grid gap-y-4">
                      <div className="flex items-center gap-x-4">
                        <Select
                          label="Amount (#)"
                          radius="md"
                          className="grow w-full"
                          defaultSelectedKeys={["20"]}
                          classNames={{
                            label: "text-base",
                          }}
                        >
                          {["20", "100", "200"].map((amount) => (
                            <SelectItem
                              key={amount}
                              value={amount}
                              className="text-white text-4xl"
                            >
                              {amount}
                            </SelectItem>
                          ))}
                        </Select>
                        <Select
                          label="Quantity"
                          radius="md"
                          defaultSelectedKeys={["X 1"]}
                          classNames={{
                            label: "text-base",
                          }}
                        >
                          {["X 1", "X 2", "X 3", "X 4", "X 5"].map((amount) => (
                            <SelectItem key={amount} value={amount}>
                              {amount}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <Input
                        label="E-Code (Optional)"
                        placeholder="XXXX-XXXX-XXXX"
                        size="lg"
                        radius="sm"
                      />
                      <div className="grid gap-y-3 w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-default-400 bg-default-100 rounded-lg cursor-pointer"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="size-10 mb-2 text-gray-400 dark:text-gray-400"
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
                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Upload image proof
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs mb-2 text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                            <p className="ps-1 py-1 flex gap-x-2 items-center text-sm text-warning-600 mb-2">
                              <CircleAlertIcon className="size-4" /> Make sure
                              you upload clear pictures
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>

                      <Button
                        variant="flat"
                        color="primary"
                        size="lg"
                        radius="sm"
                        className="w-full"
                      >
                        Add Card
                      </Button>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
            {/* <Textarea
            label="Add a Comment (Optional)"
            placeholder="Write some additional details or heads up"
            labelPlacement="outside"
            classNames={{
              label: "ps-1",
            }}
          /> */}
          </form>
        </div>

        <div className="md:pt-6 grow w-full lg:max-w-xl xl:max-w-sm">
          <Card
            className="shadow-xl cardBackground max-w-md mx-auto"
            radius="lg"
          >
            <CardHeader className="hidden xl:flex flex-col p-6">
              <Image
                shadow="lg"
                radius="lg"
                src="https://th.bing.com/th/id/OIP.I89DeQMyCgVqj_eo-QgPYAHaEr?rs=1&pid=ImgDetMain"
                alt=""
                className="hidden md:block object-contain h-[120px] max-w-screen-md mb-2"
              />
              <Button
                size="md"
                color="warning"
                variant="light"
                className="py-0"
                href="/market/giftcard"
                endContent={<ArrowRightCircleIcon size={16} />}
              >
                Choose different card
              </Button>
            </CardHeader>
            <CardBody className="pt-5 pb-4 px-5">
              <div className="mb-6">
                <p className="flex flex-wrap justify-between items-center gap-x-6 gap-y-2 mb-2">
                  <span className="inline-flex items-center text-ellipsis gap-x-4 text-sm">
                    <WalletMinimalIcon className="inline-flex size-4" /> You'll
                    receive:
                  </span>
                  <span className="text-3xl font-medium text-success..">
                    {currencyIcons["NGN"]?.symbol}5000
                  </span>
                </p>
                <p className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                  <span className="inline-flex items-center text-ellipsis gap-x-4 text-sm">
                    <ArrowLeftRightIcon className="inline-flex size-4" />{" "}
                    Exchange Rate:
                  </span>{" "}
                  <span className="ms-auto lg:text-xl text-success font-medium">
                    {currencyIcons["NGN"]?.symbol}1200/
                    {currencyIcons["USD"]?.symbol}
                  </span>
                </p>
              </div>

              <Checkbox
                size="sm"
                radius="sm"
                color="primary"
                className="gap-x-2"
                classNames={{ icon: "size-4" }}
                checked={consentToTradeAgreement}
                onClick={() =>
                  setConsentToTradeAgreement((consent) => !consent)
                }
              >
                I understand errors and attempted fraud may cause delay or
                refusal of payment.
              </Checkbox>
            </CardBody>
            <CardFooter className="flex-col items-start px-5 pb-5 gap-y-8">
              <Button
                size="lg"
                variant="solid"
                color="primary"
                radius="sm"
                fullWidth={true}
                className="border shadow-lg"
                isDisabled={!consentToTradeAgreement}
                onClick={() => onSubmitOrder()}
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Modal
        isOpen={orderSubmitted}
        onOpenChange={onOrderSubmitChange}
        backdrop="opaque"
        placement="center"
        classNames={{ backdrop: "z-[2000]", wrapper: "z-[2001]" }}
        isDismissable={false}
        hideCloseButton
      >
        <ModalContent className="border">
          {(onClose) => (
            <>
              <ModalBody className="justify-center items-center p-8 pb-6">
                <CheckCircleIcon className="size-14 mb-2 text-success" />
                <h3 className="text-3xl">Successfully Submitted</h3>
                <p className="text-sm text-zinc-400">
                  Thank you for doing business with us, Sir!{" "}
                </p>
              </ModalBody>
              <ModalFooter className="items-center p-5">
                <Button
                  color="primary"
                  radius="sm"
                  size="lg"
                  variant="flat"
                  fullWidth
                  className="text-sm font-normal"
                  onPress={() => onCompleteOrder()}
                >
                  Done
                </Button>
                <Button
                  color="primary"
                  radius="sm"
                  size="lg"
                  variant="solid"
                  fullWidth
                  className="text-sm font-normal"
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
    </div>
  );
}
