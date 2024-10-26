"use client";

import { useEffect, useState } from "react";
import { Client, Account, AppwriteException } from "appwrite";
import RouterLink, { useRouter } from "next/navigation";
import Link, { Button, Spinner } from "@nextui-org/react";
import AuthFlowNavigationTop from "@app/(appzone)/auth-flow-navigation-top";
import clsx from "clsx";
import {
  CheckCircle,
  CheckCircle2,
  CircleAlertIcon,
  MailQuestionIcon,
  OctagonAlertIcon,
  X,
} from "lucide-react";
import { account } from "@lib/appwrite";

const verificationProgressContent = {
  processing: {
    renderTitle: () => "We're Verifying Your Email...",
    renderIndicator: () => {
      return (
        <div className="grid place-content-center mb-3 mx-auto">
          <Spinner color="warning" size="lg" />
        </div>
      );
    },
    renderDescription: () => {
      return (
        <p className="text-sm text-zinc-400 text-center">
          Hang tight! We're verifying your email address. This should only take
          a moment.
        </p>
      );
    },
  },
  success: {
    renderTitle: () => {
      return (
        <>
          Congratulations! <br /> Your Email Has Been Verified!{" "}
        </>
      );
    },
    renderIndicator: () => {
      return (
        <div className="p-2.5 rounded-full bg-success-50 shadow-sm mb-3 mx-auto">
          <CheckCircle className="size-8 text-success" />
        </div>
      );
    },
    renderDescription: () => {
      return "Please wait while we log you in...";
    },
  },
  failed: {
    renderTitle: () => {
      return (
        <>
          Uh oh! <br /> We Couldn't Verify Your Email
        </>
      );
    },
    renderIndicator: () => {
      return (
        <div className="p-2.5 rounded-full bg-danger-50 shadow-sm mb-3 mx-auto">
          <OctagonAlertIcon className="size-8 text-danger" />
        </div>
      );
    },
    renderDescription: (message?: string) => {
      return <span className="text-sm text-danger-950 mt-1">{message}</span>;
    },
  },
};

export default function EmailVerificationPage({
  searchParams,
}: {
  searchParams: {
    userId?: string;
    secret?: string;
  };
}) {
  const { userId, secret } = searchParams; // Get query params using Next.js useRouter
  const [accountVerification, setAccountVerification] = useState<{
    status: "idle" | "processing" | "success" | "failed";
    message?: string;
  }>({
    status: "processing",
  });

  useEffect(() => {
    const verifyUser = async (userId: string, secret: string) => {
      try {
        console.log('verifying...');

        await account.updateVerification(userId, secret);
        setAccountVerification({
          status: "success",
          message: "We're logging you in automatically...",
        });
      } catch (exception) {
        console.log("Caught an error while verifying...");
        
        if (exception instanceof AppwriteException) {
          const status = "failed";
          let message = "";

          console.log("exception: ", exception);
          console.log("exception", exception.code);

          if (exception.code === 404) {
            message =
              "Something went wrong. Please check your email and try the verification link again.";
          } else {
            message = "Something unexpected happened. Its not you, its us";
            // type = "unexpected"
          }

          setAccountVerification({ status, message });
        } else {
          throw exception;
        }
      }
    };

    // const [userId, secret] = ["dev", "not-so-secret"];
    if (userId && secret) {
      verifyUser(userId, secret);
    } else {
      setAccountVerification({
        status: "failed",
        message:
          "Something went wrong. Check your email and try the verification link again.",
      });
    }
  }, [userId, secret]);

  const content =
    verificationProgressContent[
      accountVerification.status as keyof typeof verificationProgressContent
    ];

  return (
    <div className="bg-black min-h-screen">
      <AuthFlowNavigationTop renderCTA={() => null} />

      <main className="pt-10 py-8 px-4 max-w-lg mx-auto">
        <form className="py-10 grid place-content-center text-center">
          {content.renderIndicator()}
          <h1 className="text-2xl sm:text-3xl mb-2.5 sm:mb-4 font-medium sm:max-w-none mx-auto">
            {content.renderTitle()}
          </h1>
          {content.renderDescription(accountVerification.message)}
        </form>
      </main>
    </div>
  );
}
