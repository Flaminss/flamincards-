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
      <div className="shadow border slick-dark-bg rounded-lg ps-4 pe-2.5 sm:ps-5 py-3 flex gap-x-2.5 items-center">
        <MessageCircleWarningIcon className="size-6 shrink-0 text-primary" />
        <p className="w-full text-sm">
          We just launched some cool stuff!
        </p>
        <Button
          isIconOnly
          size="sm"
          radius="md"
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
