"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { MessageCircleWarningIcon, XIcon } from "lucide-react";
import clsx from "clsx";

// TODO: utilize "useToggle" package

export default function AnnoucementSection() {
  const [dismissed, setDismissed] = useState(false);

  const dismiss = () => setDismissed(true);

  return (
    <section className={clsx("px-4", { block: !dismissed, hidden: dismissed })}>
      <div className="rounded-lg shadow bg-primary-50 text-primary-800 px-4 sm:px-5 py-2.5 flex gap-x-4 items-center">
        <MessageCircleWarningIcon />
        <p className="text-sm sm:text-base">This should be an annoucement</p>
        <Button
          isIconOnly
          size="sm"
          radius="full"
          color="primary"
          variant="flat"
          className="ms-auto"
          onClick={() => dismiss()}
        >
          <XIcon size={16} />
        </Button>
      </div>
    </section>
  );
}
