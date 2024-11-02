import { Button } from "@nextui-org/react";
import { LogInIcon, UserCircle2Icon } from "lucide-react";
import { useUserAuthContext } from "@app/(auth)/user-auth-provider";
import Link from "next/link";

export default function SessionButton() {
  const userAuth = useUserAuthContext();

  if (userAuth.session) {
    return (
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
    );
  }

  return (
    <Button
      radius="lg"
      color="primary"
      variant="flat"
      size="md"
      endContent={<LogInIcon className="size-5" />}
    >
      Login
    </Button>
  );
}
