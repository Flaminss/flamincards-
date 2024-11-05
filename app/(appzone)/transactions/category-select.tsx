"use client";

import React from "react";
import {
  Chip,
  Select,
  SelectItem,
  SelectedItems,
  Selection,
} from "@nextui-org/react";
import { PieChart, PieChartIcon, Scan } from "lucide-react";

const categories = [
  {
    key: "investment",
    label: "Investment",
    // money always GOES out of wallet
  },
  {
    key: "wallet",
    label: "Wallet",
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
      placeholder="All Categories"
      selectedKeys={values}
      isMultiline
      selectionMode="multiple"
      classNames={{
        base: "max-w-[unset]",
        trigger: "gap-y-2.5",
      }}
      onSelectionChange={setValues}
      startContent={<PieChartIcon className="size-5 text-primary me-1" />}
      size="lg"
      renderValue={(items: SelectedItems<{ label: string }>) => {
        return (
          <div className="flex flex-wrap gap-2">
            {items.map((item) => {
              return <Chip key={item.key}>{item.textValue}</Chip>;
            })}
          </div>
        );
      }}
    >
      {categories.map((animal) => (
        <SelectItem key={animal.key}>{animal.label}</SelectItem>
      ))}
    </Select>
  );
}
