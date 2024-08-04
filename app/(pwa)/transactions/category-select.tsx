"use client";

import React from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { PieChart, Scan } from "lucide-react";

const categories = [
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
    key: "funding",
    label: "Deposit",
    // money always GOES out of wallet
  },
  {
    key: "giftcard",
    label: "GiftCard",
    // money COMES or GOES of wallet
  },
  {
    key: "internet",
    label: "Data Bundle",
    // money always COMES into wallet
  },
  {
    key: "airtime",
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

export default function CategorySelect({
  values,
  setValues,
}: {
  values: Selection;
  setValues: React.Dispatch<React.SetStateAction<Selection>>;
}) {
  return (
    <Select
      label="Payment Category"
      selectionMode="multiple"
      placeholder="All Categories"
      selectedKeys={values}
      className="w-full lg:max-w-[40%] grow"
      onSelectionChange={setValues} 
      variant="underlined"
      classNames={{ label: "mb-4" }}
      startContent={<PieChart className="size-4 text-warning me-1" />}
    >
      {categories.map((animal) => (
        <SelectItem key={animal.key}>{animal.label}</SelectItem>
      ))}
    </Select>
  );
}
