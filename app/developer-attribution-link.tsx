import { Link } from "@nextui-org/react";

export default function DeveloperAttributionLink() {
  return (
    <Link
      isExternal
      href="https://t.me/everurstruly"
      title="Development team portfolio website"
      className="text-default-600 font-mono font-medium flex items-center justify-center text-center gap-x-2"
    >
      Developed by
      <span className="text-primary font-semibold">YoursTruly</span>
    </Link>
  );
}
