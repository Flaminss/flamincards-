"use client";

import MultiStep from "react-multistep";
import CryptoSalePitchStep from "./pitch-step";
import CryptoSalePaymentStep from "./payment-step";
import { Button } from "@nextui-org/button";

export default function CryptoSellPage() {
  return (
    <>
      <MultiStep
        prevButton={{ title: "Go Back", style: { paddingBlock: "2rem" } }}
      >
        <CryptoSalePitchStep title="Provide Information" />
        <CryptoSalePaymentStep title="Payment Procedure" />
      </MultiStep>
    </>
  );
}
