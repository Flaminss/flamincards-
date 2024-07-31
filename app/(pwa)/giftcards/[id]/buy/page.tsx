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

export default function GiftcardBuyPage() {
  // const multipleCardSelection = [
  //   { key: 1, amount: 50, quantity: 1 },
  //   { key: 2, amount: 200, quantity: 2 },
  //   { key: 3, amount: 1000, quantity: 1 },
  // ];
  const router = useRouter();
  const multipleCardSelection = [] as {
    key: number;
    amount: number;
    quantity: number;
  }[];

  const noCardSelectionMessage = "Add Cards Below!";
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: orderSubmitted,
    onOpen: onSubmitOrder,
    onOpenChange: onOrderSubmitChange,
  } = useDisclosure();

  return (
    <div className="pt-4 pb-48">
      <header className="mb-6 px-4 sm:px-6 md:px-2 w-full">
        {/* <h1 className="text-2xl font-medium">Sell (Redeem) your Gift Card</h1> */}
        <PWAPageTitle title="Sell (Redeem) your Gift Card" />
      </header>
      {/* <section className="px-2 md:hidden">
        <Image
          shadow="lg"
          radius="lg"
          src="https://th.bing.com/th/id/OIP.I89DeQMyCgVqj_eo-QgPYAHaEr?rs=1&pid=ImgDetMain"
          alt=""
          className="object-contain h-[140px] max-w-screen-md mb-6 me-auto"
        />
        <div className="flex-wrap items-center gap-x-8 mb-4">
          <h4 className="text-2xl font-medium">Google Play</h4>
          <Button
            size="sm"
            color="warning"
            variant="light"
            href="/market/giftcard"
            endContent={<ArrowRightCircleIcon size={16} />}
          >
            Choose different card
          </Button>
        </div>
      </section> */}
      <div className="px-4 sm:px-6 md:px-2 flex flex-col gap-y-8 md:flex-row gap-x-12 pt-6">
        <form className="grid gap-y-8 max-w-xl grow">
          <Input
            label="Your Selected Vendor"
            value="Google Play"
            labelPlacement="outside"
            size="lg"
            radius="md"
            type="button"
            onClick={(e) => router.push("/market/giftcard")}
            classNames={{
              input: "text-lg text-start",
            }}
            endContent={<ArrowRightCircleIcon size={28} />}
          />
          <Input
            label="Choose a Region"
            value="United States (USD)"
            labelPlacement="outside"
            size="lg"
            radius="md"
            type="button"
            classNames={{
              input: "text-lg text-start",
            }}
            onClick={onOpen}
            endContent={<ChevronDownCircle size={28} />}
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
            <h4 className="mb-2 pe-2 text-medium text-ellipsis">
              How many cards do you have?
            </h4>
            <Tabs
              size="lg"
              color="primary"
              variant="bordered"
              fullWidth={true}
              className="mb-4"
              radius="md"
              disableAnimation={true}
            >
              <Tab key="single" title="Just one card">
                <div className="grid gap-y-6">
                  <Select
                    label="Card Amount"
                    labelPlacement="outside"
                    radius="md"
                    size="lg"
                    selectionMode="single"
                    defaultSelectedKeys={[20]}
                    selectorIcon={<ChevronDownCircle size={32} />}
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
                  <Select
                    label="Quantity"
                    labelPlacement="outside"
                    radius="md"
                    size="lg"
                    selectionMode="single"
                    defaultSelectedKeys={[1]}
                    selectorIcon={<ChevronDownCircle size={32} />}
                  >
                    {[
                      { label: "1", value: 1 },
                      { label: "2", value: 2 },
                      { label: "3", value: 3 },
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
                    labelPlacement="outside"
                    placeholder="XXXX-XXXX-XXXX"
                    size="lg"
                    radius="sm"
                  />
                  <div className="grid gap-y-3 w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer"
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
                          <span className="font-semibold">
                            Upload image proof
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                    <p className="flex gap-x-2 items-center text-sm text-warning-600 mb-2">
                      <CircleAlertIcon size={16} /> Make sure you upload clear
                      pictures
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab key="multiple" title="Multiple cards">
                <div>
                  <Table
                    isHeaderSticky
                    aria-label="Example table with custom cells, pagination and sorting"
                    className="mb-8"
                    classNames={{
                      wrapper: "max-h-[382px]",
                    }}
                  >
                    <TableHeader
                      columns={[
                        { name: "Amt", uid: "amount" },
                        { name: "Qty", uid: "quantity" },
                        { name: "Value", uid: "value" },
                        { name: "", uid: "actions" },
                      ]}
                    >
                      {(column) => (
                        <TableColumn
                          key={column.uid}
                          align={column.uid === "actions" ? "center" : "start"}
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
                                  className="text-danger cursor-pointer"
                                />
                              )}
                            </TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                  <div className="grid gap-y-6">
                    <div className="flex items-center gap-x-4">
                      <Select
                        labelPlacement="outside"
                        label="Amount"
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
                        labelPlacement="outside"
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
                      labelPlacement="outside"
                      placeholder="XXXX-XXXX-XXXX"
                      size="lg"
                      radius="sm"
                    />
                    <section>
                      <label
                        htmlFor="dropzone-file"
                        className="mb-2 flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-md cursor-pointer"
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
                          <p className="mb-2 text-base text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Upload image proof
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                      <p className="mb-4 flex gap-x-2 items-center text-sm text-warning-600">
                        <CircleAlertIcon size={16} /> Make sure you upload clear
                        pictures
                      </p>
                      <div className="flex items-center gap-x-3 overflow-x-auto">
                        <Card className="h-16 w-16 rounded-sm border shadow-md" />
                        <Card className="h-16 w-16 rounded-sm border shadow-md" />
                        <Card className="h-16 w-16 rounded-sm border shadow-md" />
                      </div>
                    </section>
                    <Button
                      variant="flat"
                      color="default"
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
          <Textarea
            label="Comment (Optional)"
            placeholder="Enter your description"
            className="max-w-.."
            labelPlacement="outside"
          />
        </form>
        <section className="grow w-full md:max-w-sm">
          <Card className="shadow-xl border bg-transparent" radius="lg">
            <CardHeader className="flex-col">
              <h4 className="text-2xl mb-3">Google Play</h4>
              <Image
                shadow="lg"
                radius="lg"
                src="https://th.bing.com/th/id/OIP.I89DeQMyCgVqj_eo-QgPYAHaEr?rs=1&pid=ImgDetMain"
                alt=""
                className="object-contain h-[120px] max-w-screen-md mb-2"
              />
              <Button
                size="md"
                color="warning"
                variant="light"
                className="p-0"
                href="/market/giftcard"
                endContent={<ArrowRightCircleIcon size={16} />}
              >
                Choose different card
              </Button>
            </CardHeader>
            <CardBody className="pb-6 px-5">
              <p className="flex items-center gap-x-4 mb-1">
                <span className="inline-flex items-center text-ellipsis gap-x-2">
                  <ArrowLeftRightIcon size={18} className="inline-flex" />{" "}
                  Excnahge Rate:
                  <ArrowLeftRightIcon size={18} className="inline-flex" />{" "}
                </span>{" "}
                <span className="ms-auto text-warning-600">
                  {currencyIcons["NGN"]?.symbol}1200/
                  {currencyIcons["USD"]?.symbol}
                </span>
              </p>
              <div className="flex flex-wrap justify-between items-end gap-x-6 gap-y-2">
                <h4 className="text-base">
                  <WalletMinimalIcon size={18} className="me-1 inline-flex" />{" "}
                  You'll receive:
                </h4>
                <p className="text-3xl font-medium text-success-600">
                  {currencyIcons["NGN"]?.symbol}5000
                </p>
              </div>
            </CardBody>
            <CardFooter className="flex-col items-start px-5 pb-5 gap-y-4">
              <Checkbox size="sm" radius="full" color="primary">
                I understand errors or fraud may delay payment.
              </Checkbox>
              <Button
                size="lg"
                variant="solid"
                color="primary"
                radius="sm"
                fullWidth={true}
                className="border shadow-lg"
                onPress={(e) => onSubmitOrder()}
                // isDisabled={true}
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>

      <Modal
        isOpen={orderSubmitted}
        onOpenChange={onOrderSubmitChange}
        backdrop="blur"
        className="lg:ms-72"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="justify-center items-center p-8">
                <CheckCircleIcon size={64} className="text-success-600" />
                <h3 className="text-3xl">Successfully Submitted</h3>
                <p>😊Thank you for doing business with us! </p>
              </ModalBody>
              <ModalFooter className="justify-center items-center">
                <Button
                  color="primary"
                  size="lg"
                  radius="sm"
                  variant="solid"
                  onPress={(e) => {
                    onClose();
                    router.push("/market/giftcard");
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
    </div>
  );
}
