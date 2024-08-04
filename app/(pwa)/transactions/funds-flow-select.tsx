"use client"

import React from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";

const flows = [
  {
    key: "out-flow",
    label: "Out",
  },
  {
    key: "in-flow",
    label: "In",
  },
];

export default function FundsFlowSelect() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Money Flow"
        radius="md"
        defaultSelectedKeys={["out-flow"]}
        className="max-w-[45%]"
      >
        {flows.map((flow) => (
          <SelectItem key={flow.key}>{flow.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
