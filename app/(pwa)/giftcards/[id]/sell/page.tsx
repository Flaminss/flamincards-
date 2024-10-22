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
  Selection,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import {
  ArrowDownCircleIcon,
  ArrowLeftRightIcon,
  ArrowRightCircleIcon,
  CheckCircle2,
  CheckCircle2Icon,
  CheckCircleIcon,
  ChevronDownCircle,
  CircleAlertIcon,
  ClockIcon,
  CloudUploadIcon,
  DeleteIcon,
  ImagePlusIcon,
  PlusCircleIcon,
  PlusIcon,
  Trash2,
  Trash2Icon,
  WalletMinimalIcon,
  XCircleIcon,
} from "lucide-react";
import currencyIcons from "currency-icons";
import { useRouter } from "next/navigation";
import PWAPageTitle from "@/app/(pwa)/page-title";
import { useState } from "react";
import FileInput from "./file-input";
import Files from "react-files";
import ProofInput from "./proof-input";
import MultipleCardAddButton from "./multiple-cards-add-button";

export default function GiftcardBuyPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const { id: selectedCardType } = params;
  const [selectedRegion, setSelectedRegion] = useState<Selection>(
    new Set(["usa"])
  );

  const regions = [
    { key: "usa", label: "United States (USA)" },
    { key: "uk", label: "United Kingdom (UK)" },
    { key: "eu", label: "Europe (EU)" },
    { key: "ca", label: "Canada (CA)" },
    { key: "au", label: "Australia (AU)" },
    { key: "jp", label: "Japan (JP)" },
    { key: "cn", label: "China (CN)" },
    { key: "sa", label: "Saudi Arabia (SA)" },
    { key: "in", label: "India (IN)" },
    { key: "aef", label: "United Arab Emirates (UAE)" },
    { key: "za", label: "South Africa (ZA)" },
    { key: "br", label: "Brazil (BR)" },
  ];

  const noCardSelectionMessage = "Add Cards Below!";

  const [consentToTradeAgreement, setConsentToTradeAgreement] = useState(false);

  const {
    isOpen: orderSubmitted,
    onOpen: onSubmitOrder,
    onClose: onCompleteOrder,
    onOpenChange: onOrderSubmitChange,
  } = useDisclosure();

  const formattedSelectedCardType =
    selectedCardType[0].toUpperCase() + selectedCardType.slice(1);

  const [multipleCardSelection, setMultipleCardSelection] = useState([
    // { key: 1, amount: 50, eCode: "skljdlkjsdfsd" },
    // { key: 2, amount: 200, eCode: "" },
  ]);

  const getRegionInitials = () => {
    const value = Array.from(selectedRegion)[0];

    if (selectedRegion === "all") {
      return "";
    }

    return value.toString().toUpperCase();
  };

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

          <form className="grid gap-y-7">
            <Input
              label="Your Selected Card"
              value={formattedSelectedCardType}
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
                <ArrowRightCircleIcon className="!size-4 text-zinc-400" />
              }
            />

            <Select
              items={regions}
              label="Choose card(s) Region"
              labelPlacement="outside"
              size="lg"
              radius="md"
              selectedKeys={selectedRegion}
              onSelectionChange={setSelectedRegion}
              selectorIcon={<ArrowDownCircleIcon />}
              classNames={{
                base: "cursor-pointer",
                label: "ps-1",
                selectorIcon: "shrink-0 w-auto h-auto !size-4 text-zinc-400",
              }}
            >
              {(region) => (
                <SelectItem key={region.key}>{region.label}</SelectItem>
              )}
            </Select>

            <div>
              <h4 className="ps-1 mb-2.5 text-medium text-ellipsis">
                Hom many{" "}
                <span className="font-medium">
                  {formattedSelectedCardType} ({getRegionInitials()})
                </span>{" "}
                Card do you have?
              </h4>

              <Tabs
                size="lg"
                color="primary"
                fullWidth={true}
                radius="md"
                disableAnimation={true}
                classNames={{
                  tab: "pt-1",
                  panel: "pb-0",
                }}
              >
                <Tab key="single" title="Just One">
                  <div className="grid gap-y-4">
                    <Select
                      label="Amount (#)"
                      radius="md"
                      size="sm"
                      selectionMode="single"
                      defaultSelectedKeys={[20]}
                      selectorIcon={<ArrowDownCircleIcon />}
                      classNames={{
                        selectorIcon:
                          "shrink-0 w-auto h-auto !size-4 text-zinc-400",
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

                    <ProofInput />
                  </div>
                </Tab>
                <Tab key="many" title="Many">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {multipleCardSelection.map((item) => {
                      return (
                        <Card shadow="sm" key={item.key}>
                          <CardBody className="relative p-0">
                            <Image
                              shadow="sm"
                              radius="lg"
                              width="100%"
                              // alt={item.title}
                              className="w-full object-cover h-[140px] rounded-b-sm"
                              src={`https://th.bing.com/th/id/OIP.I89DeQMyCgVqj_eo-QgPYAHaEr?rs=1&pid=ImgDetMain`}
                            />

                            {/* <div className="absolute top-1.5 left-1.5 z-10">
                              
                            </div> */}

                            <Button
                              isIconOnly
                              size="sm"
                              radius="sm"
                              color="danger"
                              className="absolute top-2 right-2 z-10"
                            >
                              <Trash2
                                className="size-4"
                                // onClick={() => handleFileRemove(files[0].id)}
                              />
                            </Button>
                          </CardBody>
                          <CardFooter className="text-sm flex flex-wrap gap-4 justify-between p-3 pt-3">
                            {item.eCode ? (
                              <Tooltip content={item.eCode}>
                                <div className="flex items-center gap-x-2 text-xs ps-3 pe-2 py-1 shadow-sm rounded-lg bg-success-50 border text-success">
                                  E-Code
                                  {/* <CheckCircle2 className="size-4" /> */}
                                </div>
                              </Tooltip>
                            ) : (
                              // <div className="flex items-center gap-x-2 text-xs ps-3 pe-2 py-1 shadow-sm rounded-lg bg-danger-50 border text-danger">
                              //   E-Code
                              //   {/* <XCircleIcon className="size-4" /> */}
                              // </div>
                              <p className="font-medium text-xs">Amount</p>
                            )}

                            <p className="font-medium text-default-700 px-2">
                              ${item.amount}
                            </p>
                          </CardFooter>
                        </Card>
                      );
                    })}

                    <MultipleCardAddButton />
                  </div>

                  {/* <div className="p-2 bg-content2 rounded-lg flex items-center gap-x-2">
                    <img className="size-24 bg-content1 rounded-lg border-none" />
                    <div className="ms-2 grid flex-grow text-xs">
                      <p className="flex gap-x-2">
                        Amount: <span className="font-semibold">50</span>
                      </p>
                      <p className="flex gap-x-2">
                        Ecode:{" "}
                        <span className="font-semibold">XXXX-XXXX-XXXX</span>
                      </p>
                    </div>
                    <Chip
                      size="sm"
                      radius="sm"
                      variant="flat"
                      color="danger"
                      className="self-end"
                    >
                      <Trash2 className="size-4" />
                    </Chip>
                  </div> */}
                </Tab>
                {/* <Tab key="multiple" title="Many">
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
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
                </Tab> */}
              </Tabs>
            </div>

            <Textarea
              label="Add a Comment (Optional)"
              placeholder="Write some additional details or give some heads up"
              labelPlacement="outside"
              classNames={{
                label: "ps-1 text-base font-medium mb-.5",
                input: "p-1.5",
              }}
            />
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
                checked={consentToTradeAgreement}
                classNames={{ icon: "size-4" }}
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
                isDisabled={!consentToTradeAgreement}
                size="lg"
                variant="solid"
                color="primary"
                radius="sm"
                fullWidth={true}
                className="border shadow-lg"
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
              <ModalBody className="justify-center items-center text-center p-8 pb-6">
                <ClockIcon className="size-14 mb-2 text-warning" />
                <h3 className="text-xl font-semibold">
                  Order Successfully Submitted
                </h3>
                <p className="text-sm text-zinc-400">
                  Your order is being processed! <br />
                  Thank you for your patience.
                </p>
              </ModalBody>
              <ModalFooter className="flex-col items-center p-5">
                <Button
                  color="primary"
                  radius="sm"
                  size="lg"
                  variant="flat"
                  fullWidth
                  className="text-sm font-normal"
                  onPress={() => onCompleteOrder()}
                >
                  Buy again
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
                    router.push("/transactions/$randomId");
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

// DROPZONE
{
  /* <div className="grid gap-y-3 w-full">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Upload image proof</span> or
                    drag and drop
                  </p>
                  <p className="text-xs mb-2 text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  <p className="ps-1 py-1 flex gap-x-2 items-center text-sm text-warning-600 mb-2">
                    <CircleAlertIcon className="size-4" /> Make sure you upload
                    clear pictures
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div> */
}

// ALLOW MULTIPLE CARD TYPE
{
  /* <div>
              <h4 className="ps-1 mb-2.5 text-medium text-ellipsis">
                Hom many{" "}
                <span className="font-medium">
                  {formattedSelectedCardType} ({getRegionInitials()})
                </span>{" "}
                Card do you have?
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
                      size="sm"
                      selectionMode="single"
                      defaultSelectedKeys={[20]}
                      selectorIcon={<ArrowDownCircleIcon />}
                      classNames={{
                        selectorIcon:
                          "shrink-0 w-auto h-auto !size-4 text-zinc-400",
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
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
            </div> */
}
