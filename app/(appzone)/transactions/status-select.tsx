"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Scan } from "lucide-react";

const statuses = [
  {
    key: "failed",
    label: "Failed",
  },
  {
    key: "refunded",
    label: "Refunded",
  },
  {
    key: "cancelled",
    label: "Cancelled",
  },
  {
    key: "pending",
    label: "Pending",
  },
  {
    key: "processing",
    label: "Processing",
  },
  {
    key: "rejected",
    label: "Rejected",
  },
  {
    key: "success",
    label: "Successful",
  },
];

export default function StatusSelect() {
  return (
    <Select
      label="Status"
      placeholder="All Status"
      radius="lg"
      className="max-w-[45%] lg:max-w-[30%] grow"
      startContent={<Scan className="size-4 text-primary me-1" />}
    >
      {statuses.map((animal) => (
        <SelectItem key={animal.key}>{animal.label}</SelectItem>
      ))}
    </Select>
  );
}
