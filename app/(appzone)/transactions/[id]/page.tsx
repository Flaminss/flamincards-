"use client";

import { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Button,
  Spacer,
  CardHeader,
  ButtonGroup,
  Chip,
} from "@nextui-org/react";
import PWAPageTitle from "../../page-title";
import { CheckCircle, Copy, Headphones, Landmark } from "lucide-react";

export default function TransactionDetails() {
  const [activeTab, setActiveTab] = useState("details");

  const transaction = {
    id: "TX123456",
    date: "2024-08-03",
    amount: 150.0,
    fees: 3.5,
    totalAmount: 153.5,
    status: "Completed",
    sender: {
      name: "John Doe",
      account: "john.doe@example.com",
    },
    receiver: {
      name: "Jane Smith",
      account: "jane.smith@example.com",
    },
    history: [
      {
        id: "TX123455",
        date: "2024-07-29",
        amount: 200.0,
        status: "Completed",
      },
      { id: "TX123454", date: "2024-07-28", amount: 50.0, status: "Completed" },
    ],
  };

  const handleTroubleshootClick = () => {
    setActiveTab("troubleshooting");
  };

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Transaction Detail" />
      </header>

      <section className="px-4 py-6 max-w-xl">
        <Card className="overflow-visible mb-8">
          <CardBody className="items-center justify-items-center py-6 px-4 grid gap-y-6 overflow-visible">
            <div className="-mt-10">
              <Chip
                size="lg"
                radius="md"
                color="success"
                className="mb-2 border shadow h-14"
              >
                <Landmark className="size-7" />
              </Chip>
              <h4 className="text-center text-sm sm:text-medium text-zinc-400">
                Withdrawl
              </h4>
            </div>

            <div className="text-center">
              <h4 className="hidden text-sm sm:text-medium text-zinc-400">
                Withdrawl
              </h4>
              <h4 className="text-4xl lg:text-4xl">+ $2,000</h4>
            </div>
            <p className="flex text-nowrap gap-x-2 items-center text-zinc-400">
              <CheckCircle className="text-success size-4" />
              Successful
            </p>
          </CardBody>
        </Card>

        <Tabs
          aria-label="Options"
          classNames={{ base: "w-full", tabList: "w-full max-w-sm mx-auto" }}
          size="lg"
        >
          <Tab key="details" title="Details" className="grid gap-y-6">
            <Card>
              <CardHeader>Summary</CardHeader>
              <CardBody className="text-sm">
                <ul className="grid gap-y-3">
                  <li className="flex justify-between gap-x-6 items-center text-zinc-400">
                    ID:{" "}
                    <div className="flex gap-x-2">
                      <span className="text-white">{transaction.id}</span>{" "}
                      <Copy className="size-4 text-zinc-400" />
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 items-center text-zinc-400">
                    Date: <span className="text-white">{transaction.date}</span>
                  </li>
                  <li className="flex justify-between gap-x-6 items-center text-zinc-400">
                    Amount ($):
                    <span className="text-white">
                      {transaction.amount.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex justify-between gap-x-6 items-center text-zinc-400">
                    Fees ($):
                    <span className="text-white">
                      {transaction.fees.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex justify-between gap-x-6 border-t border-dashed mt-4 pt-5 pb-2.5 items-center text-zinc-400">
                    Total Amount: $
                    <span className="text-white">
                      {transaction.totalAmount.toFixed(2)}
                    </span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center justify-center p-4">
                <p className="text-zinc-300 mb-4 font-light">
                  Any complaints or questions about this transaction?
                </p>
                <Button
                  variant="flat"
                  color="primary"
                  radius="sm"
                  onClick={handleTroubleshootClick}
                  startContent={<Headphones className="size-4" />}
                  className="font-medium w-fit mx-auto"
                >
                  Customer Support
                </Button>
              </CardBody>
            </Card>

            <Button radius="sm" color="primary" variant="solid" size="lg">
              Save Receipt
            </Button>
          </Tab>
          <Tab key="support" title="Customer Support">
            <Card>
              <CardHeader>Troubleshooting</CardHeader>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </section>
    </div>
  );
}
