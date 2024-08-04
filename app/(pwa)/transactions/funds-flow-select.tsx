"use client";

import React from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { Signpost } from "lucide-react";

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
    <Select
      label="Money Flow"
      radius="md"
      defaultSelectedKeys={["out-flow"]}
      className="max-w-[35%] lg:max-w-[20%] grow"
      startContent={<Signpost className="size-4 text-warning me-1" />}
    >
      {flows.map((flow) => (
        <SelectItem key={flow.key}>{flow.label}</SelectItem>
      ))}
    </Select>
  );
}
