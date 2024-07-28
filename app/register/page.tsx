"use client";

import Link from "next/link";
import { Button, DatePicker, Input } from "@nextui-org/react";
import TopNavigation, { BrandName } from "../(pwa)/navigation-top";
import PWASectionTitle from "../(pwa)/section-title";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <section className="navbar navbar-glass border-b w-full px-0">
        <div className="flex max-w-xl w-full flex-grow mx-auto px-4 items-center">
          <BrandName />
          <Button
            as={Link}
            variant="flat"
            color="primary"
            size="sm"
            href="/login"
            className="ms-auto"
          >
            Login
          </Button>
        </div>
      </section>

      <main>
        <section className="py-8 px-4 max-w-xl mx-auto">
          <header className="mb-6">
            <h1 className="text-xl lg:text-3xl text-center font-medium">
              Create an Account
            </h1>
          </header>

          <form className="hidden">
            <div className="grid gap-y-8">
              <div className="flex flex-wrap gap-y-8 gap-x-6 w-full pt-10">
                <div className="grow">
                  <Input
                    size="lg"
                    radius="sm"
                    variant="bordered"
                    label="First Name"
                    labelPlacement="outside"
                    placeholder=" "
                    fullWidth
                  />
                </div>
                <div className="grow">
                  <Input
                    size="lg"
                    radius="sm"
                    variant="bordered"
                    label="Last Name"
                    labelPlacement="outside"
                    placeholder=" "
                    fullWidth
                  />
                </div>
              </div>

              <div>
                <Input
                  radius="sm"
                  size="lg"
                  type="email"
                  variant="bordered"
                  label="Email"
                  labelPlacement="outside"
                  placeholder=" "
                />
              </div>
              <div>
                <DatePicker
                  size="lg"
                  radius="sm"
                  variant="bordered"
                  label="Date of Birth"
                  labelPlacement="outside"
                  showMonthAndYearPickers
                />
              </div>
            </div>

            <footer className="pt-8">
              <Button
                color="primary"
                variant="solid"
                fullWidth
                radius="sm"
                size="lg"
              >
                Set-Up Passwords
              </Button>
            </footer>
          </form>

          <div className="hidden..">
            <SetupPassword />
          </div>
        </section>
      </main>
    </div>
  );
}

function SetupPassword() {
  return (
    <form>
      <div className="grid gap-y-8">
        <div>
          <Input
            radius="sm"
            variant="bordered"
            size="lg"
            label="Password"
            labelPlacement="outside"
            placeholder=" "
          />
        </div>
        <div>
          <Input
            radius="sm"
            variant="bordered"
            size="lg"
            label="Re-type Password"
            labelPlacement="outside"
            placeholder=" "
          />
        </div>
        <div>
          <label htmlFor="transaction-pin" className="text-sm block mb-2">
            Transaction PIN
          </label>
          <div className="flex gap-x-6">
            {[1, 2, 3, 4].map((digit, index) => {
              return (
                <Input 
                key={`${digit}#${index}`}
                  type="number"
                  size="lg"
                  minLength={1}
                  maxLength={1}
                  min="0"
                  max="9"
                  variant="bordered"
                  className="lg:size-16 thin-scrollbar"
                  radius="sm"
                />
              );
            })}
          </div>
        </div>
      </div>

      <footer className="pt-8">
        <Button color="primary" variant="solid" fullWidth radius="sm" size="lg">
          Register
        </Button>
      </footer>
    </form>
  );
}
