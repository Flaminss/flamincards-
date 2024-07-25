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
import DepositionScreen from "./deposition-screen";

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

      <DepositionScreen
        depositing={depositing}
        onDeposit={onDeposit}
        depositProcessStep={depositProcessStep}
        amountToBeDeposited={amountToBeDeposited}
        setAmountToBeDeposited={setAmountToBeDeposited}
        setDepositProcessStep={setDepositProcessStep}
        depositTransactionDetails={depositTransactionDetails}
        setDepositTransactionDetails={setDepositTransactionDetails}
        receiptAttached={receiptAttached}
        closeDepositProcess={closeDepositProcess}
      />
    </>
  );
}
