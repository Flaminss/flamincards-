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
  SunIcon,
  UserCircleIcon,
  WalletIcon,
} from "lucide-react";
import icons from "currency-icons";
import { useState } from "react";
import clsx from "clsx";
import DepositionScreen from "./deposition-screen";
import WithdrawlScreen from "./withdrawl-screen";
import QuickWalletActions from "./quick-wallet-actions";
import commaNumber from "comma-number";

const figureAsBalance = (figure: number) => {
  return commaNumber(figure) + ".00";
};

export default function Wallet() {
  const user = {
    firstname: "Sunday",
    lastname: "Awanu",
    wallet: {
      balance: 64_000,
      settings: {
        balanceVisible: true,
      },
    },
  };

  const [balanceVisible, setBalanceVisible] = useState(
    user.wallet.settings.balanceVisible
  );

  const renderBalanceVisibilityToggleContent = (balanceVisible: boolean) => {
    const actionAccessible = {
      label: balanceVisible ? "Hide" : "Show",
      Icon: balanceVisible ? EyeOff : EyeIcon,
    };

    return (
      <>
        {<actionAccessible.Icon className="me-0.5 size-4" />}
        {actionAccessible.label} Balance{" "}
      </>
    );
  };

  const {
    isOpen: depositing,
    onOpen: startDepositProcess,
    onOpenChange: onDeposit,
    onClose: closeDepositProcess,
  } = useDisclosure();

  const {
    isOpen: withdrawing,
    onOpen: startWithdrawlProcess,
    onOpenChange: onWithdraw,
    onClose: pauseWithdrawlProcess,
  } = useDisclosure();

  const receiptAttached = false;
  const withdrawlReceiptAttached = false;

  const [depositTransactionDetails, setDepositTransactionDetails] = useState({
    detailsHidden: false,
    amount: 2000,
    date: "20th July, 2024",
    description: "DEPOSIT to RML-PAID Wallet",
  });

  const [withdrawlTransactionDetails, setWithdrawlTransactionDetails] =
    useState({
      detailsHidden: false,
      amount: 2000,
      date: "20th July, 2024",
      description: "DEPOSIT to RML-PAID Wallet",
    });

  const [amountToBeDeposited, setAmountToBeDeposited] = useState(0);
  const [amountToBeWithdrawn, setAmountToBeWithdrawn] = useState(0);
  const [depositProcessStep, setDepositProcessStep] = useState(1);
  const [withdrawProcessStep, setWithdrawlProcessStep] = useState(1);

  return (
    <>
      <div className="flex flex-col max-w-xl lg:max-w-lg grow w-full shrink-0 lg:shrink border p-4 sm:p-6 mx-auto">
        <h3 className="text-xs text-zinc-400 flex flex-col mb-6">
          Good morning,
          <span className="text-white text-base">
            Mr. {user.lastname} {user.firstname}
          </span>
        </h3>

        <div className="mb-8">
          <span className="flex items-center whitespace-nowrap mb-1 text-xs sm:text-sm gap-x-1 text-zinc-400 font-semibold">
            <WalletIcon className="me-.5 sm:me-1 size-4" />
            Balance
          </span>
          <p
            className={clsx("text-3xl font-medium sm:text-4xl mb-4", {
              "filter blur": !balanceVisible,
            })}
          >
            {icons["NGN"]?.symbol || "#"}
            {figureAsBalance(user.wallet.balance)}
          </p>
          <Button
            variant="flat"
            color="warning"
            size="sm"
            radius="sm"
            onClick={() => setBalanceVisible((visible) => !visible)}
          >
            {renderBalanceVisibilityToggleContent(balanceVisible)}
          </Button>
        </div>

        {/* <Link href="#investment-portfolio" className="px-1 mt-7 text-white">
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
          </Link> */}

        {/* <ButtonGroup
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
            onClick={() => startWithdrawlProcess()}
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
        </ButtonGroup> */}
        <QuickWalletActions />
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

      <WithdrawlScreen
        withdrawing={withdrawing}
        onWithdraw={onWithdraw}
        withdrawProcessStep={withdrawProcessStep}
        amountToBeWithdrawn={amountToBeWithdrawn}
        setAmountToBeWithdrawn={setAmountToBeWithdrawn}
        setWithdrawlProcessStep={setWithdrawlProcessStep}
        withdrawlTransactionDetails={withdrawlTransactionDetails}
        setWithdrawlTransactionDetails={setWithdrawlTransactionDetails}
        withdrawlReceiptAttached={withdrawlReceiptAttached}
        pauseWithdrawlProcess={pauseWithdrawlProcess}
      />
    </>
  );
}
