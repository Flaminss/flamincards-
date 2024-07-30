import { Button, Link } from "@nextui-org/react";
import { BrandName } from "./navigation-top";
import React from "react";

export default function AuthFlowNavigationTop({
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
