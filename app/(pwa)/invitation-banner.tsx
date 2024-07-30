import { ChevronRightCircleIcon } from "lucide-react";

export default function InvitationBanner() {
  return (
    <article
      about="banner"
      className="flex items-center gap-x-4 rounded-xl shadow p-4 bg-warning-50 lg:hidden"
    >
      <div className="me-auto">
        <h3 className="text-base font-mono uppercase">🏆 Invite Friends</h3>
        <p className="text-sm text-warning-500">
          ✨ Stand a chance to win rewards ✨
        </p>
      </div>
      <span className="text-warning-500">
        <ChevronRightCircleIcon className="size-6" />
      </span>
    </article>
  );
}
