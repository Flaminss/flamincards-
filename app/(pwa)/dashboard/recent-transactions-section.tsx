import { BadgeDollarSign, HandshakeIcon, Landmark } from "lucide-react";
import { Button } from "@nextui-org/react";
import icons from "currency-icons";
import Link from "next/link";
import PWASectionTitle from "../section-title";

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
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-md p-3 bg-success-50 text-success">
              <HandshakeIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-meidum mb-1">Investment</p>
              <p className="text-xs text-zinc-400">May 20th at 9:00pm</p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-medium lg:text-base whitespace-nowrap">
              + {icons["NGN"]?.symbol || "₿"}0.0005
            </p>
            <p className="text-xs text-success">Successful</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-md p-3 bg-secondary-50 text-secondary">
              <Landmark className="size-5" />
            </div>
            <div>
              <p className="text-sm font-meidum mb-1">Withdrawal</p>
              <p className="text-xs text-zinc-400">May 20th at 05:50am</p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-medium lg:text-base whitespace-nowrap">
              - {icons["NGN"]?.symbol || "#"}10,000.00
            </p>
            <p className="text-xs text-danger">Failed</p>
          </div>
        </div>
      </article>
    </section>
  );
}
