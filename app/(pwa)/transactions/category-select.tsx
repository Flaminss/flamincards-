import React from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";

const categories = [
  {
    key: "all",
    label: "All Categories",
  },
  {
    key: "investment",
    label: "Investment",
    // money always GOES out of wallet
  },
  {
    key: "withdrawl",
    label: "Wallet",
    // money always GOES out of wallet
  },
  {
    key: "giftcard",
    label: "GiftCard",
    // money COMES or GOES of wallet
  },
  {
    key: "bills",
    label: "Data Bundle",
    // money always COMES into wallet
  },
  {
    key: "bills",
    label: "Airtime",
    // money always COMES into wallet
  },
  {
    key: "music",
    label: "Music",
    // money always COMES into wallet
  },
  {
    key: "crypto",
    label: "Cryptocurrency",
    // money always COMES into wallet
  },
  {
    key: "cashtag",
    label: "Cashtag",
    // money always COMES into wallet
  },
  {
    key: "airdrop",
    label: "Airdrop Earnings",
    // money always COMES into wallet
  },
];

export default function CategorySelect() {
  const [values, setValues] = React.useState<Selection>(new Set(["all"]));

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Payment Category"
        selectionMode="multiple"
        placeholder="All"
        selectedKeys={values}
        className="max-w-xs"
        onSelectionChange={setValues}
      >
        {categories.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
      <p className="text-small text-default-500">
        Selected Categories: {Array.from(values).join(", ")}
      </p>
    </div>
  );
}
