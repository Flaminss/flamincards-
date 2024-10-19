"use client";

import { useState } from "react";
import {
  BadgeDollarSign,
  HandshakeIcon,
  Landmark,
  ListIcon,
  ListOrderedIcon,
  ListTreeIcon,
  ScrollIcon,
} from "lucide-react";
import { Button, Link } from "@nextui-org/react";
import icons from "currency-icons";
import PWASectionTitle from "../section-title";
import RecentTransactionItem, {
  TransactionType,
} from "./recent-transactions-item";

export default function RecentTransactionsSection() {
  const transactions = [] as any[];
  // const [transactions, setTransactions] = useState([
  //   {
  //     id: "293ko3uo2kj3",
  //     type: "Investment" as TransactionType,
  //     date: new Date(),
  //     amount: 500,
  //     flow: "in" as const,
  //     status: "successful",
  //   },
  //   {
  //     id: "293ko3uo2kj32e",
  //     type: "Withdrawl" as TransactionType,
  //     date: new Date(),
  //     amount: 2000,
  //     flow: "out" as const,
  //     status: "successful",
  //   },
  // ]);

  return (
    <section className="w-full">
      <header className="mb-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-x-8 gap-y-1">
        <PWASectionTitle title="Recent Transactions" />
        <Button
          variant="light"
          size="sm"
          color="primary"
          className="p-0 text-sm"
          href="/transactions"
          as={Link}
        >
          View all
        </Button>
      </header>
      {transactions.length === 0 ? (
        <div className="rounded-md shadow bg-content1 grid gap-y-2.5 text-center place-items-center p-4 py-8">
          <ListIcon className="size-8 mx-auto text-gray-600" />
          <p className="text-sm text-gray-500 max-w-[32ch] ">
            You have an empty transaction history. Redeem your{" "}
            <Link size="sm" href="/giftcards" underline="always">
              giftcards
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-5">
          {transactions.map((transaction, index) => {
            return (
              <RecentTransactionItem
                key={index + transaction.id}
                {...transaction}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
