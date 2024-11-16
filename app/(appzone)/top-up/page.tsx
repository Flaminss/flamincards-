"use client";

import PWAPageTitle from "../page-title";
import clsx from "clsx";
import { useState } from "react";
import {
  Button,
  Input,
  Select,
  Selection,
  SelectItem,
} from "@nextui-org/react";
import {
  ArrowDownCircleIcon,
  ClockIcon,
  RadioTowerIcon,
  WifiIcon,
  PhoneIcon,
  SignalIcon,
} from "lucide-react";

const networks = [
  {
    _id: "9mobile",
    color: "white",
    logo: "",
    name: "9Mobile",
  },
  {
    _id: "mtn",
    color: "warning",
    logo: "",
    name: "MTN",
  },
  {
    _id: "airtel",
    color: "danger",
    logo: "",
    name: "Airtel",
  },
  {
    _id: "glo",
    color: "success",
    logo: "",
    name: "Glo",
  },
];

const services = [
  {
    _id: "airtime",
    Icon: PhoneIcon,
    name: "Airtime",
    description: "",
  },
  {
    _id: "internet",
    Icon: SignalIcon,
    name: "Data Bundle",
    description: "",
  },
];

// plans would be { [key: network]: value => options }
const plans = [
  { key: "usa", label: "1GB for 30 Days @ $500" },
  { key: "dns", label: "30GB for 1 Month $1500" },
  { key: "uk", label: "United Kingdom (UK)" },
  { key: "eu", label: "Europe (EU)" },
  { key: "ca", label: "Canada (CA)" },
  { key: "au", label: "Australia (AU)" },
  { key: "jp", label: "Japan (JP)" },
  { key: "cn", label: "China (CN)" },
];

export default function TopUpPage() {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("mtn");
  const [selectedType, setSelectedType] = useState<string>("airtime");
  const [amount, setAmount] = useState<string | undefined>();
  const [selectedPlanDuration, setSelectedPlanDuration] = useState("general");
  const [selectedPlan, setSelectedPlan] = useState<Selection>(new Set(["usa"]));

  return (
    <div className="max-w-xl mx-auto lg:border">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Top Up" />
      </header>

      <section className="py-4 px-4 flex flex-col space-y-8">
        <div>
          <h4 className="mb-4">Network</h4>

          <ul className="flex items-center gap-4">
            {networks.map(({ _id, name, color }) => {
              return (
                <li key={_id} className="flex-1 grow">
                  <label
                    htmlFor={_id}
                    className={clsx(
                      "cursor-pointer flex flex-col items-center text-center gap-y-3 border p-4 cardBackground text-sm transition-all",
                      {
                        "border-primary": selectedNetwork == _id,
                      }
                    )}
                  >
                    <span
                      className={clsx({
                        "shadow size-4 rounded-sm aspect-square": true,
                        [`bg-${color}`]: true,
                      })}
                    ></span>

                    <span className={`text-${color}-600`}>{name}</span>

                    <input
                      type="radio"
                      name="network"
                      id={_id}
                      className="hidden"
                      onChange={(evt_) => {
                        setSelectedNetwork(_id);
                      }}
                    />
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-4">Service</h4>

          <ul className="flex items-center gap-x-4">
            {services.map(({ _id, name, description, Icon }) => {
              return (
                <li key={_id} className="grow">
                  <label
                    htmlFor={_id}
                    className={clsx(
                      "cursor-pointer flex gap-x-4 items-center border p-4 grow transition-all",
                      {
                        "border-primary": selectedType == _id,
                        cardBackground: selectedType !== _id,
                      }
                    )}
                  >
                    <div className="rounded-md bg-zinc-800 block">
                      <Icon className="size-5 m-2 mx-2.5" />
                    </div>

                    <div>
                      <h5 className="leading-tight">{name}</h5>
                      <p className="text-xs text-gray-500 truncate font-medium">
                        {description}
                      </p>
                    </div>

                    <input
                      type="radio"
                      name="type"
                      id={_id}
                      className="hidden"
                      onChange={(evt_) => {
                        setSelectedType(_id);
                      }}
                    />
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          {/* <h4 className="mb-4">Phone Number</h4> */}
          <Input
            label={
              <>
                Phone Number
                <button className="text-sm text-gray-400">Recents</button>
              </>
            }
            classNames={{
              label: "!w-full flex items-end justify-between",
            }}
            labelPlacement="outside"
            placeholder="XXXXXXXXXX"
            variant="flat"
            size="lg"
            radius="sm"
            // value={cardValueEcode}
            // onValueChange={setCardValueEcode}
          />

          <div className="pt-4 hidden">
            <h5 className="mb-2.5 ps-1 text-sm text-zinc-400">Recents</h5>

            <ul className="flex flex-col gap-y-2">
              {["lkwjel2kej", "202kjkl2jd", "2023kkljsd"].map((phone, index) => {
                return (
                  <li key={index} className="bg-content1 rounded-md py-2 ps-4 pe-2 flex item-center gap-x-4 text-sm text-gray-500">
                    {phone}{" "}
                    <button className="ms-auto p-1 size-5 bg-zinc-700 aspect-square flex items-center justify-center text-center rounded-full leading-none align-middle">
                      &times;
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className={clsx({
            hidden: selectedType !== "airtime",
          })}
        >
          <Input
            label="Amount"
            labelPlacement="outside"
            placeholder="0.00"
            size="lg"
            radius="sm"
            className="mb-4"
            type="number"
            value={amount}
            onValueChange={setAmount}
            isDisabled={selectedType !== "airtime"}
          />

          <ul
            className={clsx({
              "flex flex-wrap gap-2": true,
              hidden: selectedType !== "airtime",
            })}
          >
            {[100, 200, 500, 1000, 5000].map((amt, index) => {
              return (
                <Button
                  key={`${amt}#${index}`}
                  className="text-medium shadow cursor-pointer rounded-md bg-content1 px-4 py-2 grow"
                  onPress={() => {
                    setAmount(`${amt}`);
                  }}
                >
                  ${amt}
                </Button>
              );
            })}
          </ul>
        </div>

        <div
          className={clsx({
            "transition-all": true,
            "max-h-[0px] overflow-hidden !my-0": selectedType === "airtime",
            "max-h-[200px] ": selectedType !== "airtime",
          })}
        >
          <h4 className="mb-2">Choose a Plan</h4>

          <ul
            className={clsx({
              "flex mb-4 gap-x-1": true,
            })}
          >
            {["General", "Weekly", "Monthly", "SME"].map((duration, index) => {
              const _id = duration.toLowerCase();
              return (
                <li 
                  key={`${duration}#${index}`}
                >
                  <label
                    className={clsx({
                      "text-sm inline-block cursor-pointer border-b px-4 py-2 grow":
                        true,
                      "transition-all hover:border-b-primary-800": true,
                      "border-b-primary": selectedPlanDuration === _id,
                    })}
                  >
                    {duration}

                    <input
                      type="radio"
                      name="plan-duration"
                      id={_id}
                      className="hidden"
                      onChange={(evt_) => {
                        setSelectedPlanDuration(_id);
                      }}
                    />
                  </label>
                </li>
              );
            })}
          </ul>

          <Select
            items={plans}
            // label="Choose a Plan"
            // labelPlacement="outside"
            size="lg"
            radius="sm"
            selectedKeys={selectedPlan}
            onSelectionChange={setSelectedPlan}
            selectorIcon={<ArrowDownCircleIcon />}
            disallowEmptySelection
            classNames={{
              base: "cursor-pointer",
              selectorIcon: "shrink-0 w-auto h-auto !size-4 text-zinc-400",
            }}
          >
            {(region) => (
              <SelectItem key={region.key}>{region.label}</SelectItem>
            )}
          </Select>
        </div>

        <div className="pt-4">
          <Button fullWidth radius="sm" color="primary" size="lg">
            Buy {services.find((s) => s._id === selectedType)?.["name"]}
          </Button>
        </div>
      </section>
    </div>
  );
}
