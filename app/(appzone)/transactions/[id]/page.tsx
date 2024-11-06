"use client";

import {
  Card,
  CardBody,
  Button,
  Spacer,
  CardHeader,
  ButtonGroup,
  Chip,
  Spinner,
} from "@nextui-org/react";
import PWAPageTitle from "../../page-title";
import { CheckCircle, Copy, Headphones, Landmark } from "lucide-react";

export default function TransactionDetails() {
  const status = "pending";

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
    // handle troubleshoot click
  };

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Transaction Detail" />
      </header>

      <section className="px-4 py-6 max-w-xl grid gap-y-4">
        <Card className="overflow-visible">
          <CardBody className="items-center justify-items-center py-6 px-4 grid gap-y-6 overflow-visible">
            <div className="-mt-10">
              <div className="shadow-lg mb-2 size-16 rounded-xl bg-green-950 grid place-content-center">
                <Landmark className="size-8 text-green-100" />
              </div>
              <h4 className="text-center text-sm sm:text-medium font-medium text-green-100">
                Withdrawl
              </h4>
            </div>

            <div className="text-center">
              <h4 className="hidden text-sm sm:text-medium text-zinc-400">
                Withdrawl
              </h4>
              <h4 className="text-3xl lg:text-4xl font-medium">$2,000</h4>
            </div>
            <p className="flex text-nowrap gap-x-2 items-center text-success-400">
              <CheckCircle className="text-success size-4" />
              Successful
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Details</CardHeader>
          <CardBody className="text-sm">
            <ul className="grid gap-y-4">
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
                To:
                <div className="text-white grid text-end">
                  <span>John Doe</span>
                  <span>Bank (888***999)</span>
                </div>
              </li>
              <li></li>
              <li className="text-zinc-400 hidden">
                <Button
                  fullWidth
                  variant="flat"
                  className="text-white mb-2 mt-4"
                  // isLoading={true}
                  spinner={<Spinner size="sm" />}
                  // color="primary"
                >
                  View Order Items
                </Button>

                <ul className="hidden divide-y-1.5 bg-zinc-800 p-1 rounded-lg mb-4">
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <li className="flex justify-between items-center gap-x-4 rounded-md.. bg-default-200.. p-2">
                        <span className="truncate">Order Item Title</span>
                        <span className="text-zinc-200">$500</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="flex justify-between gap-x-6 border-t border-dashed pt-4 px-1 pb-2.5 items-center text-zinc-400">
                Total Amount:
                <span className="text-white">
                  ${transaction.totalAmount.toFixed(2)}
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

        <div className="grid pt-6">
          {status === "pending" ? (
            <Button
              radius="sm"
              color="warning"
              variant="flat"
              size="lg"
              fullWidth
            >
              Cancel Order
            </Button>
          ) : (
            <Button
              radius="sm"
              color="primary"
              variant="solid"
              size="lg"
              fullWidth
            >
              Save Receipt
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
