"use client";

import Link from "next/link";
import { Button, Badge } from "@nextui-org/react";
import { Bell, LogInIcon, Settings2, UserCircle2Icon } from "lucide-react";
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
        <Button
          endContent={<LogInIcon className="size-5" />}
          color="primary"
          variant="solid"
          size="md"
          radius="lg"
          className="hidden"
        >
          Login
        </Button>

        <Button
          isIconOnly
          radius="lg"
          aria-label="unread notifications count"
          variant="flat"
          size="md"
          className="text-zinc-300"
          href="/account"
          as={Link}
        >
          <UserCircle2Icon className="size-6" />
        </Button>

        <Badge
          content={""}
          isInvisible={notificationCount <= 0}
          shape="circle"
          color="danger"
          variant="solid"
          size="sm"
          href="/notifications"
          as={Link}
        >
          <Button
            isIconOnly
            radius="lg"
            aria-label="unread notifications count"
            variant="flat"
            size="md"
            className="text-zinc-300"
          >
            <Bell className="size-5" />
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
        "navbar-item flex items-center text-lg px-0 font-meidum",
        className
      )}
    >
      RML
      <span className="px-.5 font-semibold text-primary-500">PAID</span>
    </Link>
  );
}
