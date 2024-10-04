import { BadgeDollarSign, HandshakeIcon, Landmark } from "lucide-react";
import { Button } from "@nextui-org/react";
import icons from "currency-icons";
import Link from "next/link";
import PWASectionTitle from "../section-title";
import RecentTransactionItem, {
  TransactionType,
} from "./recent-transactions-item";

export default function RecentTransactionsSection() {
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
      <article className="flex flex-col gap-y-5">
        {[
          {
            id: "#293ko3uo2kj3",
            type: "Investment" as TransactionType,
            date: new Date(),
            amount: 500,
            flow: "in" as const,
            status: "successful",
          },
          {
            id: "#293ko3uo2kj32e",
            type: "Withdrawl" as TransactionType,
            date: new Date(),
            amount: 2000,
            flow: "out" as const,
            status: "successful",
          },
        ].map((transaction) => {
          return <RecentTransactionItem {...transaction} />;
        })}
      </article>
    </section>
  );
}
