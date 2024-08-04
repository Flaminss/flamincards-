import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const statuses = [
  {
    key: "all",
    label: "All Status",
  },
  {
    key: "danger",
    label: "Failed",
  },
  {
    key: "primary",
    label: "Refunded",
  },
  {
    key: "danger",
    label: "Cancelled",
  },
  {
    key: "default",
    label: "Pending",
  },
  {
    key: "warning",
    label: "Processing",
  },
  {
    key: "danger",
    label: "Rejected",
  },
  {
    key: "success",
    label: "Successful",
  },
];

export default function StatusSelect() {
  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      <Select
        label="Status"
        radius="md"
        defaultSelectedKeys={["cat"]}
        className="max-w-[45%]"
      >
        {statuses.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
