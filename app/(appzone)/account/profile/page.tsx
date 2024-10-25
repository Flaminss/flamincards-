import RouterLink from "next/link";
import { Button, DatePicker, Input } from "@nextui-org/react";
import clsx from "clsx";
import TransactionPINInput from "../transaction-pin-input";

export default function ProfilePage() {
  return (
    <main>
      <form className={clsx("pt-10")}>
        <section className="grid gap-y-6 mb-10">
          <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full">
            <Input size="md" radius="sm" label="First Name" />
            <Input size="md" radius="sm" label="Last Name" />
          </div>
          <DatePicker
            isRequired
            radius="sm"
            label="Date of Birth"
            showMonthAndYearPickers
          />
          {/* <Input size="md" radius="sm" label="Transaction PIN" /> */}
          <div className="bg-zinc-800 rounded-lg p-2.5">
            <label
              htmlFor="transaction-pin"
              className="text-sm text-zinc-300 block mb-1.5"
            >
              Transaction PIN
            </label>
            <TransactionPINInput />
          </div>
        </section>

        <Button
          as={RouterLink}
          href="/dashboard"
          color="primary"
          variant="solid"
          fullWidth
          radius="sm"
          size="lg"
        >
          Done! Go-to Dashboard
        </Button>
      </form>
    </main>
  );
}
