"use client";

import { Button } from "@nextui-org/react";
import { MessageCircleWarningIcon, XIcon } from "lucide-react";

export default function AnnoucementSection() {
  return (
    <section className="px-4">
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
        >
          <XIcon size={16} />
        </Button>
      </div>
    </section>
  );
}
