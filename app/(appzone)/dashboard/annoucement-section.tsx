"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { MessageCircleWarningIcon, XIcon } from "lucide-react";
import clsx from "clsx";

// TODO: utilize "useToggle" package

const message =
  "✨ New features are coming soon to expand your purchasing options! Stay tuned! 🥂";

export default function AnnoucementSection() {
  const [dismissed, setDismissed] = useState(false);

  const dismiss = () => setDismissed(true);

  return (
    <section
      className={clsx("px-4 pb-8", { block: !dismissed, hidden: dismissed })}
    >
      <div className="shadow border slick-dark-bg rounded-lg ps-4 pe-2.5 py-3 flex gap-x-2.5 items-center">
        <MessageCircleWarningIcon className="size-6 shrink-0 text-primary me-1" />
        <p className="w-full text-xs sm:text-sm">{message}</p>
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
