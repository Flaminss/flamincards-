"use client";

import Link from "next/link";
import { Button, DatePicker, Input } from "@nextui-org/react";
import TransactionPINInput from "../(pwa)/account/transaction-pin-input";
import AuthFlowNavigationTop from "../(pwa)/auth-flow-navigation-top";
import { MailPlus } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function RegisterPage() {
  const [eligible, setEligible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <AuthFlowNavigationTop
        renderCTA={() => (
          <Button as={Link} color="default" size="sm" radius="sm" href="/login">
            Login
          </Button>
        )}
      />

      <main>
        <section className="pt-12 py-8 px-4 max-w-lg mx-auto">
          <header>
            <MailPlus className="block mx-auto size-8 mb-2 sm:size-10" />
            <h1 className="text-2xl sm:text-3xl text-center mb-1 sm:mb-2 font-medium">
              Create an account! ✨
            </h1>
            <p className="text-sm text-zinc-400 text-center">
              Start your exciting journey with us today.
            </p>
          </header>

          <form className={clsx("pt-10", { hidden: eligible })}>
            <div className="grid gap-y-6 mb-10">
              <Input
                isRequired
                size="md"
                type="email"
                radius="sm"
                label="Email"
              />
              <DatePicker
                isRequired
                radius="sm"
                label="Date of Birth"
                showMonthAndYearPickers
              />
              <Input radius="sm" type="password" label="Password" />
              <Input radius="sm" type="password" label="Re-type Password" />
            </div>

            <Button
              color="primary"
              variant="solid"
              fullWidth
              radius="sm"
              size="lg"
              onClick={() => setEligible(true)}
            >
              Setup your Profile
            </Button>
          </form>

          <form className={clsx("pt-10", { hidden: !eligible })}>
            <div className="grid gap-y-8">
              <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full">
                <Input size="md" radius="sm" label="First Name" />
                <Input size="md" radius="sm" label="Last Name" />
              </div>
              <div>
                <label htmlFor="transaction-pin" className="text-sm block mb-2">
                  Transaction PIN
                </label>
                <TransactionPINInput />
              </div>
            </div>

            <Button
              as={Link}
              color="primary"
              variant="solid"
              fullWidth
              radius="sm"
              size="lg"
            >
              Done! Proceed to Dashboard
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
