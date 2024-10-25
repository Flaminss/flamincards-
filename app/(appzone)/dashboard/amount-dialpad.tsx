"use client";

import { Button, Input } from "@nextui-org/react";
import { DeleteIcon, WalletIcon } from "lucide-react";
import { useState } from "react";
import { figureAsBalance } from "./wallet-section";

export default function AmountDialpad() {
  const [amount, setAmount] = useState("");

  const dialDigit = (digit: string) => {
    setAmount((prevAmount) => {
      return `${prevAmount}${digit}`;
    });
  };

  const deleteAmount = () => {
    setAmount((prevAmount) => {
      const indexOfDigitToBeDeleted = prevAmount.length - 1;
      return prevAmount.slice(0, indexOfDigitToBeDeleted);
    });
  };

  const getDisplayValue = () => {
    const value = figureAsBalance(parseInt(amount));

    if (value === "NaN") {
      return "";
    }

    return value;
  };

  return (
    <section>
      <div className="mb-8">
        <Input
          label="Amount (#)"
          value={getDisplayValue()}
          placeholder="5,000"
          size="lg"
          disabled
          classNames={{
            label: "ps-1 text-zinc-400 text-sm",
            input: "text-xl",
          }}
          labelPlacement="outside"
          startContent={<span className="text-xl font-meidum">₦</span>}
        />

        <p className="text-sm text-zinc-400 flex items-center gap-x-1.5 py-2.5 px-1.5">
          <WalletIcon className="size-4" /> Available Balance: 18,000.00
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 xl:hidden..">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00"].map(
          (digit, index) => {
            return (
              <Button
                key={`${digit}#${index}`}
                className="min-w-[unset] justify-self-center w-full h-16 x:h-12 text-xl bg-default-100 rounded-lg"
                onClick={() => dialDigit(digit)}
              >
                {digit}
              </Button>
            );
          }
        )}
        <Button
          radius="sm"
          className="min-w-[unset] justify-self-center w-full h-16 x:h-12 text-xl font-medium"
          onClick={deleteAmount}
        >
          <DeleteIcon />
        </Button>
      </div>
    </section>
  );
}
