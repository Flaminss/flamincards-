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
      <div className="rounded-lg shadow bg-primary-50 text-primary px-4 sm:px-5 py-3 flex gap-x-4 items-center">
        <MessageCircleWarningIcon className="size-7 shrink-0" />
        <p className="w-full text-sm lg:text-base font-medium">
          This should be an annoucement
        </p>
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
