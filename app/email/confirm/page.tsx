"use client";

import AuthFlowNavigationTop from "@app/(appzone)/auth-flow-navigation-top";
import { MailSearchIcon } from "lucide-react";
import { useEffect } from "react";

export default function EmailConfirmationRequirementNoticePage({
  searchParams,
}: {
  searchParams: {
    backToRoute?: string;
  };
}) {
  const { backToRoute = "/dashboard" } = searchParams;

  useEffect(() => {
    window.history.replaceState(null, "", backToRoute);
  });

  return (
    <div className="bg-black min-h-screen">
      <AuthFlowNavigationTop renderCTA={() => null} />

      <main className="pt-10 py-8 px-4 max-w-lg mx-auto">
        <section className="py-10 grid place-content-center text-center">
          <div className="p-2.5 rounded-full bg-primary-50 shadow-sm mb-3 mx-auto">
            <MailSearchIcon className="size-8 text-primary" />
          </div>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl mb-2.5 sm:mb-4 font-medium sm:max-w-none mx-auto px-4">
              Confirm your Email - Account Activation Required
            </h1>
            <p className="text-md text-primary">someemal@whatever.domain</p>
          </div>

          <p className="text-center text-default-400 max-w-md mx-auto">
            We've sent a confirmation link to your email address display above.
            Please verify your email to unlock full access.{" "}
            <span className="text-primary">Click here to resend</span>
          </p>
        </section>
      </main>
    </div>
  );
}
