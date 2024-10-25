"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import {
  Progress,
  Button,
  CardFooter,
  Image as ImageNext,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { AlertCircle } from "lucide-react";
import PWASectionTitle from "../section-title";

export default function InvestmentPortfolioSection() {
  return (
    <section className="px-4 py-8" id="investment-portfolio">
      <header className="mb-6 space-y-1">
        <PWASectionTitle title="Your Investments Portfolio" />
        <p className="text-sm text-default-500 leading-snug">
          Choose a Plan - You have{" "}
          <span className="px-.5 text-primary-900">0 of 2</span> investment
          running.
        </p>
      </header>

      <ul className="flex flex-wrap gap-6">
        {[{ title: "Bronze" }, { title: "Silver" }, { title: "Gold" }].map(
          ({ title }, index) => {
            return (
              <li key={title} className="grow min-w-[32ch] max-w-[74ch]">
                <Card className="shadow p-4">
                  <CardHeader className="text-medium py-3 text- uppercase bg-none font-medium justify-center border-2">
                    {title}
                  </CardHeader>
                  <CardBody className="pt-8 pb-4 px-2">
                    <div className="space-y-2 text-sm">
                      <p className="flex justify-between">
                        Capital:{" "}
                        <span className="text-primary-400..">${40}</span>
                      </p>
                      <p className="flex justify-between">
                        Returns:{" "}
                        <span className="text-success-400">${100}/month</span>
                      </p>
                      <p className="flex justify-between">
                        Lifespan: <span className="">30 days</span>
                      </p>
                    </div>
                    <Progress
                      label={
                        <span className="flex items-center flex-row-reverse gap-x-1">
                          Progress{" "}
                          {/* <LineChart size={18} className="text-warning-400" /> */}
                        </span>
                      }
                      size="sm"
                      value={15}
                      maxValue={30}
                      color="warning"
                      showValueLabel={true}
                      className="max-w-md mt-6"
                    />
                  </CardBody>
                  <CardFooter className="pb-0 px-0 h-auto rounded-none">
                    {index % 2 === 0 ? (
                      <Button
                        fullWidth
                        variant="flat"
                        size="lg"
                        color="primary"
                        radius="sm"
                      >
                        Earning...
                      </Button>
                    ) : (
                      // <Button fullWidth color="primary">Invest</Button>
                      <Button fullWidth size="lg" radius="sm" isDisabled>
                        Not available
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
}
