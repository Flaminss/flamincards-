import Link from "next/link";
import {
  Button,
  ButtonGroup,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
  Input,
  useDisclosure,
  useInput,
} from "@nextui-org/react";
import {
  ChevronDown,
  ChevronRightCircle,
  ChevronUp,
  ChevronsRightIcon,
  CircleAlertIcon,
  CircleDollarSignIcon,
  CloudUploadIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  EyeOff,
  Handshake,
  Hash,
  LandmarkIcon,
  LineChart,
  ScrollIcon,
  SearchIcon,
  ShieldCheck,
  UserCircleIcon,
  WalletIcon,
} from "lucide-react";
import icons from "currency-icons";
import { useState } from "react";
import clsx from "clsx";

const figureAsBalance = (figure: number) => {
  return "64,000.00";
};

export default function Wallet() {
  const user = {
    firstname: "Sunday",
    lastname: "Awanu",
  };

  const finances = {
    balance: 64_000,
  };

  const userWalletSettings = {
    balanceVisible: false,
  };

  const [balanceVisible, setBalanceVisible] = useState(
    userWalletSettings.balanceVisible
  );

  const renderBalanceVisibilityToggleContent = () => {
    if (!balanceVisible) {
      return (
        <>
          Show Balance <EyeIcon className="ms-0.5" size={15} />
        </>
      );
    }
    return (
      <>
        Hide Balance <EyeOff className="ms-0.5" size={15} />
      </>
    );
  };

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

  const [depositProcessStep, setDepositProcessStep] = useState(1);
  const [amountToBeDeposited, setAmountToBeDeposited] = useState(0);

  return (
    <>
      <div className="flex flex-col max-w-lg grow w-full shrink-0 lg:shrink border p-4 sm:p-6 lg:py-4 space-y-8 xl:space-y-4 mx-auto">
        <article className="relative flex flex-col lg:mb-auto">
          <h3 className="text-lg sm:text-xl... sm:hidden mb-6 lg:mb-9 hidden">
            Welcome back, Mr. {user.lastname} 🌞
            {/* 🌞 👋*/}
          </h3>

          <h3 className="text-xs text-zinc-400 mb-6 flex flex-col sm:hidden">
            Good morning,{" "}
            <span className="text-white text-base">
              Mr. {user.lastname} {user.firstname}
            </span>
            {/* 🌞 👋*/}
          </h3>

          <p className="flex items-center whitespace-nowrap mb-1 text-xs sm:text-sm gap-x-1 text-zinc-400 font-semibold">
            <WalletIcon className="text-success-400 me-.5 sm:me-1 size-4" />
            Total Balance
          </p>
          <p
            className={clsx("text-3xl font-medium sm:text-4xl mb-4", {
              "filter blur": !balanceVisible,
            })}
          >
            {icons["NGN"]?.symbol || "#"}
            {figureAsBalance(finances.balance)}
          </p>
          <Button
            variant="flat"
            color="warning"
            size="sm"
            radius="sm"
            className="self-start"
            onClick={() => setBalanceVisible((visible) => !visible)}
          >
            {/* Hide Balance <EyeOff className="ms-0.5" size={15} /> */}
            {renderBalanceVisibilityToggleContent()}
          </Button>

          <Link href="#investment-portfolio" className="px-1 mt-7 text-white">
            <Progress
              label={
                <span className="flex items-center flex-row-reverse gap-x-1">
                  Investments{" "}
                  <LineChart size={18} className="text-warning-400" />
                </span>
              }
              size="sm"
              value={500}
              maxValue={750}
              color="warning"
              formatOptions={{ style: "currency", currency: "NGN" }}
              showValueLabel={true}
              className="max-w-md"
            />
          </Link>
        </article>

        <ButtonGroup
          className="mt-auto.. items-start flex gap-1 flex-wrap content-end shadow-lg"
          variant="solid"
          // variant="light"
          color="primary"
          size="md"
        >
          <Button
            className="shadow-lg grow font-medium !rounded-md xl:!rounded-s-lg xl:!rounded-e-none"
            startContent={<DownloadIcon size={20} />}
            // className="shadow-lg grow font-medium !rounded-md xl:!rounded-s-lg xl:rounded-e-none flex-col h-20"
            // startContent={<DownloadIcon size={20} className="lg:size-8 flex-shrink-0" />}
            onClick={() => startDepositProcess()}
          >
            Deposit
          </Button>
          <Button
            className="shadow-lg grow font-medium !rounded-md xl:!rounded-none"
            startContent={<CircleDollarSignIcon size={20} />}
          >
            Withdraw
          </Button>
          <Button
            as={Link}
            href="#investment-portfolio"
            className="shadow-lg grow font-medium !rounded-md xl:!rounded-e-lg xl:!rounded-s-none"
            startContent={<Handshake size={20} />}
          >
            Invest
          </Button>
        </ButtonGroup>
      </div>

      <Modal
        backdrop="blur"
        isOpen={depositing}
        classNames={{
          backdrop: "z-[100]",
          wrapper: "z-[110] p-4",
          // base: "border max-h-[min(70vh,_500px)]",
        }}
        shadow="lg"
        onOpenChange={onDeposit}
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
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 py-4">
                <h4 className="text-xl">Add Money</h4>
              </ModalHeader>
              <ModalBody className="pb-4 space-y-4">
                <div
                  className={clsx("space-y-4", {
                    block: depositProcessStep === 1,
                    hidden: depositProcessStep !== 1,
                  })}
                >
                  <Listbox className="px-0">
                    <ListboxItem
                      key="bank"
                      startContent={
                        <div className="p-3 rounded-md text-success bg-success-50">
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
                        <div className="p-3 rounded-md text-success bg-success-50">
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
                        <div className="p-3 rounded-md text-success bg-success-50">
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

                  <div className="pt-2">
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
                      startContent={
                        <span className="text-xl font-meidum">₦</span>
                      }
                    />
                  </div>

                  <p className="text-sm items-start text-warning flex gap-x-2 px-2">
                    <CircleAlertIcon className="size-4 mt-1" />
                    Kobo will not be recognized
                  </p>

                  <footer className="pt-8">
                    <Button
                      variant="flat"
                      color="success"
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
                      isDisabled={!amountToBeDeposited}
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
                  <div className="space-y-4">
                    <ul
                      className={clsx("space-y-1.5", {
                        hidden: depositTransactionDetails.detailsHidden,
                      })}
                    >
                      <li className="flex gap-x-6 justify-between items-center">
                        <span className="text-zinc-400">Amount:</span>{" "}
                        <span className="text-zinc-200">$2,000</span>
                      </li>
                      <li className="flex gap-x-6 justify-between items-center">
                        <span className="text-zinc-400">Date:</span>{" "}
                        <span className="text-zinc-200">20th July, 2004</span>
                      </li>
                      <li className="flex gap-x-6 justify-between items-center">
                        <span className="text-zinc-400">Description:</span>{" "}
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
                        setDepositTransactionDetails((curr) => {
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
                      {depositTransactionDetails.detailsHidden
                        ? "Show"
                        : "Hide"}{" "}
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
                        <span className="font-semibold">
                          Upload your receipt
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="mb-6 text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                      <Input type="file" radius="lg" />
                    </label>
                    <p className="flex gap-x-2 items-center text-sm text-warning">
                      <CircleAlertIcon className="size-4" /> Ensure you upload a
                      clear picture
                    </p>
                  </div>

                  <footer className="pt-8 flex items-center gap-x-2">
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
                      variant="flat"
                      color="success"
                      size="lg"
                      radius="md"
                      fullWidth
                      onClick={() => closeDepositProcess()}
                      isDisabled={!receiptAttached}
                    >
                      Complete Deposit
                    </Button>
                  </footer>
                </div>
              </ModalBody>
              <ModalFooter className="hidden flex-col text-sm text-gray-600 text-center justify-center">
                <Button
                  variant="flat"
                  color="success"
                  size="lg"
                  radius="lg"
                  fullWidth
                  onClick={() => closeDepositProcess()}
                  className="font-semibold hidden"
                  endContent={
                    <span className="ms-auto">
                      <ChevronRightCircle className="size-5" />
                    </span>
                  }
                  // isDisabled={!receiptAttached}
                >
                  Submit Recepit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
