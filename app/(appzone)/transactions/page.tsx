"use client";

import { Chip, Selection } from "@nextui-org/react";
import PWAPageTitle from "../page-title";
import CategorySelect from "./category-select";
import FundsFlowSelect from "./funds-flow-select";
import StatusSelect from "./status-select";
import { useState } from "react";
import { HandshakeIcon } from "lucide-react";
import icons from "currency-icons";
import HistoryBatch from "./history-batch";

export default function TransactionsPage() {
  const [values, setValues] = useState<Selection>(new Set([]));

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Transaction History" />
      </header>

      <section className="px-4 py-6">
        <div className=" flex flex-wrap items-center gap-8 xl:gap-12 xl:flex-nowrap mb-4">
          <CategorySelect values={values} setValues={setValues} />
          <StatusSelect />
          <FundsFlowSelect />
        </div>
        <p className="text-sm text-zinc-400">
          <span className="pe-1 text-warning">Showing Records of:</span>{" "}
          <span className="capitalize">{Array.from(values).join(", ")}</span>
        </p>
      </section>

      <section className="py-6 px-4 grid gap-y-16">
        <article>
          <h3 className="mb-4 text-lg">Today</h3>
          <HistoryBatch />
        </article>
        <article>
          <h3 className="mb-4 text-lg">Yesterday</h3>
          <HistoryBatch />
        </article>
        <article>
          <h3 className="mb-4 text-lg">August</h3>
          <HistoryBatch />
        </article>
      </section>

      <p className="text-sm text-zinc-400 text-center py-2 mt-8 mb-6">
        -- You’ve reached the end of the list --
      </p>
    </div>
  );
}
