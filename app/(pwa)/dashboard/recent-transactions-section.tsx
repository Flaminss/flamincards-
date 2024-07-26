import { BadgeDollarSign, Landmark } from "lucide-react";
import { Button } from "@nextui-org/react";
import icons from "currency-icons";
import Link from "next/link";

export default function RecentTransactionsSection() {
  return (
    <section className="w-full">
      <header className="mb-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-x-8 gap-y-1">
        <h2 className="text-lg whitespace-nowrap">Recent Transactions</h2>
        <Button
          variant="light"
          size="sm"
          color="primary"
          className="p-0 underline text-sm underline-offset-4"
          href="/transactions"
          as={Link}
        >
          See more
        </Button>
      </header>
      <article className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-lg w-10 h-10 bg-primary-100 text-primary-400">
              <BadgeDollarSign size={20} />
            </div>
            <div>
              <p className="text-sm font-meidum">Investment</p>
              <p className="text-xs text-gray-500">May 20th at 9:00pm</p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-sm font-semibold whitespace-nowrap">
              + {icons["BTC"]?.symbol || "₿"} 0.0005
            </p>
            <p className="text-sm text-success-400">Successful</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-lg w-10 h-10 bg-warning-100 text-warning-400">
              <Landmark size={20} />
            </div>
            <div>
              <p className="text-sm font-meidum">Withdrawal</p>
              <p className="text-xs text-gray-500">May 20th at 05:50am</p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-sm font-semibold whitespace-nowrap">
              - {icons["NGN"]?.symbol || "#"} 10,000.00
            </p>
            <p className="text-xs text-danger-400">Failed</p>
          </div>
        </div>
      </article>
    </section>
  );
}
