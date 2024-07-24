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
} from "@nextui-org/react";
import {
  CircleAlertIcon,
  CircleDollarSignIcon,
  CloudUploadIcon,
  DownloadIcon,
  EyeIcon,
  EyeOff,
  Handshake,
  LandmarkIcon,
  LineChart,
  ScrollIcon,
  SearchIcon,
  ShieldCheck,
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
    onClose: cancelDepositProcess,
  } = useDisclosure();

  return (
    <>
      <div className="flex flex-col max-w-lg grow w-full shrink-0 lg:shrink border p-4 sm:p-6 lg:py-4 space-y-10 xl:space-y-4 mx-auto">
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
            {figureAsBalance(finances.balance)}.00
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
                <h4 className="text-xl">Add to your Balance</h4>
              </ModalHeader>
              <ModalBody className="pt-4 pb-8">
                <Listbox className="px-0">
                  <ListboxItem
                    key="bank"
                    startContent={
                      <div className="p-3 rounded-md text-primary bg-primary-50">
                        <LandmarkIcon className="size-8" />
                      </div>
                    }
                    classNames={{ title: "text-medium", base: "px-0 py-2.5" }}
                    title="Palmpay"
                    description="Bank"
                  />
                  <ListboxItem
                    key="acct-no"
                    startContent={
                      <div className="p-3 rounded-md text-primary bg-primary-50">
                        <LandmarkIcon className="size-8" />
                      </div>
                    }
                    classNames={{ title: "text-lg", base: "px-0 py-2.5" }}
                    title="903-622-7457"
                    description="Account Number"
                  />
                  <ListboxItem
                    key="acct-name"
                    startContent={
                      <div className="p-3 rounded-md text-primary bg-primary-50">
                        <LandmarkIcon className="size-8" />
                      </div>
                    }
                    classNames={{ title: "text-medium", base: "px-0 py-2.5" }}
                    title="Sunday Awanu Paul"
                    description="Account Name"
                  />
                </Listbox>
                <div className="grid gap-y-3 w-full">
                  <p className="flex gap-x-2 mb-1 items-center text-sm text-warning">
                    <CircleAlertIcon size={16} /> Make sure you upload a clear
                    picture
                  </p>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-lg cursor-pointer"
                  >
                    <span className="text-default">
                      <CloudUploadIcon className="size-8" />
                    </span>
                    <p className="mt-2 mb-2 text-sm text-zinc-200 dark:text-gray-400">
                      <span className="font-semibold">Upload your receipt</span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </ModalBody>
              <ModalFooter className="flex-col text-sm text-gray-600 text-center justify-center">
                <Button
                  variant="flat"
                  color="success"
                  size="lg"
                  radius="lg"
                  fullWidth
                  onClick={() => cancelDepositProcess()}
                >
                  Mark as Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
