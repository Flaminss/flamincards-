"use client";

import AuthNavigationTop from "@app/(auth)/auth-navigation-top";
import { useEffect } from "react";
import { MailSearchIcon } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function EmailConfirmationRequirementNoticePage({
  searchParams,
}: {
  searchParams: {
    nextExpectedRoute?: string;
  };
}) {
  const router = useRouter();
  const { nextExpectedRoute = "/dashboard" } = searchParams;

  const continueUsingApp = () => {
    router.replace(nextExpectedRoute);
  };

  return (
    <div className="bg-black min-h-screen">
      <AuthNavigationTop renderCTA={() => null} />

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

          <p className="text-center text-default-400 max-w-md mx-auto mb-8">
            We've sent a confirmation link to your email address display above.
            Please verify your email to unlock full access.{" "}
            <span className="text-primary">Click here to resend</span>
          </p>

          <Button
            size="md"
            color="primary"
            radius="md"
            className="justify-self-center"
            onPress={() => continueUsingApp()}
          >
            Continue using the app
          </Button>
        </section>
      </main>
    </div>
  );
}
