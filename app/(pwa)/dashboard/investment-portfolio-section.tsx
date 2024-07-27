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
      <header className="mb-6 space-y-4">
        <PWASectionTitle title="Your Investments Portfolio" />
        <p className="text-sm text-warning-500 leading-snug flex items-center gap-x-3 sm:gap-x-2">
          <span className="p-2 rounded-lg bg-warning-50">
            <AlertCircle className="size-5" />{" "}
          </span>
          <p className="max-w-[28ch]">
            Choose a Plan - You have{" "}
            <span className="px-1 text-white">0 of 2</span> investment running.
          </p>
        </p>
      </header>

      <ul className="flex flex-wrap gap-6">
        {[{ title: "Basic" }, { title: "Silver" }, { title: "Gold" }].map(
          ({ title }, index) => {
            return (
              <li key={title} className="grow min-w-[24ch].. max-w-72..">
                <Card className="shadow p-2">
                  <CardHeader className="text-medium py-3 shadow-lg bg-default font-medium uppercase text-center justify-center">
                    {title}
                  </CardHeader>
                  <CardBody className="pt-8 px-2">
                    <div className="space-y-1.5">
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
                  <CardFooter>
                    {index % 2 === 0 ? (
                      <Button
                        fullWidth
                        variant="flat"
                        size="lg"
                        color="success"
                      >
                        Running
                      </Button>
                    ) : (
                      // <Button fullWidth color="primary">Invest</Button>
                      <Button fullWidth size="lg">
                        Unavailable
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
