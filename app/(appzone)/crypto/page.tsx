"use client";

// import MultiStep from "react-multistep";
import CryptoSalePitchStep from "./pitch-step";
import CryptoSalePaymentStep from "./payment-step";
import { Button } from "@nextui-org/react";
import PWAPageTitle from "../page-title";

export default function CryptoSellPage() {
  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Web3 Marketplace" />
      </header>

      {/* <MultiStep
        prevButton={{ title: "Go Back", style: { paddingBlock: "2rem" } }}
      >
      </MultiStep> */}

      <div className="px-4">
        <CryptoSalePitchStep title="Provide Information" />
        {/* <CryptoSalePaymentStep title="Payment Procedure" /> */}
      </div>
    </div>
  );
}
