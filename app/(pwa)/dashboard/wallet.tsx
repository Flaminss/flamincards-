import Link from "next/link";
import { Button, ButtonGroup, Progress } from "@nextui-org/react";
import {
  CircleDollarSignIcon,
  DownloadIcon,
  EyeIcon,
  EyeOff,
  Handshake,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import icons from "currency-icons";
import { useState } from "react";
import clsx from "clsx";

const figureAsBalance = (figure: number) => {
  return "64,000";
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

  return (
    <div className="grid max-w-lg grow w-full shrink-0 lg:shrink border p-4 sm:p-6 pt-6 space-y-10 mx-auto">
      <article className="relative flex flex-col">
        <h3 className="text-lg sm:text-xl mb-6 lg:mb-9">
          Welcome back, Mr. {user.lastname} 🌞
          {/* 🌞 👋*/}
        </h3>

        <p className="flex items-center whitespace-nowrap mb-1 text-xs sm:text-base gap-x-1">
          <ShieldCheck className="text-success-400 me-.5 sm:m4-1 size-4" />
          Total Balance
        </p>
        <p className={clsx("text-3xl font-medium sm:text-4xl mb-4")}>
          {icons["NGN"]?.symbol || "#"}
          <span
            className={clsx({
              "filter blur": !balanceVisible,
            })}
          >
            {figureAsBalance(finances.balance)}
          </span>
        </p>
        <Button
          variant="flat"
          color="primary"
          size="sm"
          radius="sm"
          className="self-start"
          onClick={() => setBalanceVisible((visible) => !visible)}
        >
          {/* Hide Balance <EyeOff className="ms-0.5" size={15} /> */}
          {renderBalanceVisibilityToggleContent()}
        </Button>

        <Link href="#investment-portfolio" className="mt-8 text-white hidden">
          <Progress
            label={
              <span className="flex items-center flex-row-reverse gap-x-1">
                Investments <LineChart size={18} className="text-warning-400" />
              </span>
            }
            size="sm"
            value={500}
            maxValue={3000}
            color="warning"
            formatOptions={{ style: "currency", currency: "NGN" }}
            showValueLabel={true}
            className="max-w-md"
          />
        </Link>
      </article>

      <ButtonGroup
        className="mt-auto flex gap-1 flex-wrap content-end shadow-lg"
        variant="solid"
        color="primary"
        size="md"
      >
        <Button
          className="shadow-lg grow font-medium !rounded-md xl:!rounded-s-lg xl:rounded-e-none"
          startContent={<DownloadIcon size={20} />}
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
          className="shadow-lg grow font-medium !rounded-md xl:!rounded-e-lg xl:rounded-s-none"
          startContent={<Handshake size={20} />}
        >
          Invest
        </Button>
      </ButtonGroup>
    </div>
  );
}
