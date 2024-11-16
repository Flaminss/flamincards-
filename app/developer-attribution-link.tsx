import { Link } from "@nextui-org/react";

export default function DeveloperAttributionLink() {
  return (
    <Link
      isExternal
      href="https://t.me/everurstruly"
      title="Development team portfolio website"
      className="text-default-500 text-xs font-medium flex items-center justify-center text-center gap-x-1 my-4"
    >
      <span className="">Developed by</span>
      <span className="text-primary">YoursTrulyLabs</span>
    </Link>
  );
}
