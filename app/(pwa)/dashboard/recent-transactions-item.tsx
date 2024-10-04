"use client";

import { CheckCircle2Icon, HandshakeIcon, LandmarkIcon } from "lucide-react";
import { Link } from "@nextui-org/react";
import icons from "currency-icons";

const transactionTypeToIconMap = {
  withdrawl: LandmarkIcon,
  investment: HandshakeIcon,
};
// } as const;

export type TransactionType = "withdrawl" | "investment";

type RecentTransactionItem = {
  id: string;
  type: TransactionType;
  date: Date;
  flow: "in" | "out";
  amount: number;
  status: string;
};

export default function RecentTransactionItem({
  id,
  type,
  date,
  flow,
  amount,
  status,
}: RecentTransactionItem) {
  const getFlowIcon = (flow: RecentTransactionItem["flow"]) => {
    return flow === "in" ? "+" : "-";
  };

  const getCUrrencyIcon = () => {
    return icons["NGN"]?.symbol || "#";
  };

  const generateTitle = (transactionType: TransactionType) => {
    const firstChar = transactionType[0].toUpperCase();
    const postFirstChars = transactionType.slice(1);
    return `${firstChar.toUpperCase()}${postFirstChars}`;
  };

  const renderTransactionIcon = (type: TransactionType) => {
    const Icon = transactionTypeToIconMap[type] || CheckCircle2Icon;
    return <Icon className="size-5" />;
  };

  return (
    <Link
      href={`/transactions/${id}`}
      className="flex items-center justify-between gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center rounded-md p-2.5 bg-success-50 text-success">
          {renderTransactionIcon(type)}
        </div>
        <div>
          <p className="text-sm font-meidum mb-1">{generateTitle(type)}</p>
          <p className="text-xs text-zinc-400">{date.toUTCString()}</p>
        </div>
      </div>
      <div className="grid justify-items-end">
        <p className="text-medium lg:text-base whitespace-nowrap">
          {getFlowIcon(flow)} {getCUrrencyIcon()}
          {amount}
        </p>
        <p className="text-xs text-success">{status}</p>
      </div>
    </Link>
  );
}
