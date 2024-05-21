"use client";

import Link from "next/link";
import { Button, Badge } from "@nextui-org/react";
import { Bell, Settings2 } from "lucide-react";
import clsx from "clsx";

export default function TopNavigation({ className }: { className?: string }) {
  const notificationCount = 2;

  return (
    <div
      className={clsx(
        "navbar navbar-glass border-b sticky top-0 left-0 w-full px-4 z-30",
        className
      )}
    >
      <div className="navbar-start">
        <BrandName />
      </div>
      <div className="navbar-end gap-x-2">
        <Button color="primary" variant="light">
          Login
        </Button>
        <Badge
          content={notificationCount}
          isInvisible={notificationCount <= 0}
          shape="circle"
          color="danger"
          variant="flat"
          size="lg"
          showOutline={false}
        >
          <Button
            isIconOnly
            radius="lg"
            aria-label="unread notifications count"
            variant="flat"
            className="text-inherit"
          >
            <Bell />
          </Button>
        </Badge>
      </div>
    </div>
  );
}

export function BrandName({ className }: { className?: any }) {
  return (
    <Link
      href="/"
      className={clsx(
        "navbar-item flex items-center font-semibold text-lg px-0",
        className
      )}
    >
      RML<span className="text-primary-400">Pay</span>
    </Link>
  );
}
