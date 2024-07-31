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
    <section
      className={clsx("px-4 pb-6", { block: !dismissed, hidden: dismissed })}
    >
      <div className="shadow border-warning bg-default-50 rounded-xl text-warning px-4 sm:px-5 py-3 flex gap-x-4 items-center">
        <MessageCircleWarningIcon className="size-6 shrink-0" />
        <p className="w-full text-sm lg:text-base">
          This should be an annoucement
        </p>
        <Button
          isIconOnly
          size="sm"
          radius="md"
          color="warning"
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
