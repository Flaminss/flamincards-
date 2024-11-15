import { BrandName } from "@app/(appzone)/app-nav";
import React from "react";

export default function AuthNavigationTop({
  renderCTA,
}: {
  renderCTA: (...args: any[]) => React.ReactNode;
}) {
  return (
    <nav className="navbar navbar-glass border-b w-full px-0">
      <div className="flex max-w-lg w-full flex-grow mx-auto px-4 items-center">
        <BrandName />
        <span className="ms-auto">{renderCTA()}</span>
      </div>
    </nav>
  );
}
