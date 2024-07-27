import { BadgeDollarSign, HandshakeIcon, Landmark } from "lucide-react";
import { Button } from "@nextui-org/react";
import icons from "currency-icons";
import Link from "next/link";

export default function RecentTransactionsSection() {
  return (
    <section className="w-full">
      <header className="mb-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-x-8 gap-y-1">
        <h2 className="text-medium font-medium whitespace-nowrap">
          Recent Transactions
        </h2>
        <Button
          variant="light"
          size="sm"
          color="primary"
          className="p-0 underline text-sm underline-offset-4"
          href="/transactions"
          as={Link}
        >
          View all
        </Button>
      </header>
      <article className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-md p-3 bg-success-50 text-success">
              <HandshakeIcon className="size-6" />
            </div>
            <div>
              <p className="text-sm font-meidum mb-1">
                Investment
              </p>
              <p className="text-xs text-zinc-400">
                May 20th at 9:00pm
              </p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-sm lg:text-base whitespace-nowrap text-success">
              + {icons["NGN"]?.symbol || "₿"} 0.0005
            </p>
            {/* <p className="text-sm text-success font-semibold">Successful</p> */}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-md p-3 bg-secondary-50 text-secondary">
              <Landmark className="size-6" />
            </div>
            <div>
              <p className="text-sm font-meidum mb-1">
                Withdrawal
              </p>
              <p className="text-xs text-zinc-400">
                May 20th at 05:50am
              </p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-sm lg:text-base whitespace-nowrap text-danger">
              - {icons["NGN"]?.symbol || "#"} 10,000.00
            </p>
            {/* <p className="text-sm text-danger font-semibold">Failed</p> */}
          </div>
        </div>
      </article>
    </section>
  );
}
