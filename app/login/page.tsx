"use client";

import { Button, Checkbox, DatePicker, Input } from "@nextui-org/react";
import TopNavigation, { BrandName } from "../(pwa)/navigation-top";
import PWASectionTitle from "../(pwa)/section-title";
import Link from "next/link";
import { UserCircle } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <section className="navbar navbar-glass border-b w-full px-0">
        <div className="flex max-w-lg w-full flex-grow mx-auto px-4 items-center">
          <BrandName />
          <Button
            as={Link}
            variant="flat"
            color="primary"
            size="md"
            href="/register"
            className="ms-auto"
          >
            Register
          </Button>
        </div>
      </section>

      <main>
        <section className="py-10 px-4 max-w-lg mx-auto">
          <header className="mb-6">
            <UserCircle className="block mx-auto size-10 mb-2"/>
            <h1 className="text-xl lg:text-3xl text-center mb-2 font-medium">
              Welcome Back! 👋
            </h1>
            <p className="text-sm text-zinc-400 text-center">
              Please enter your login details below.
            </p>
          </header>

          <form className="pt-6">
            <div className="grid gap-y-10">
              <Input
                size="lg"
                radius="sm"
                variant="flat"
                label="Email"
                labelPlacement="outside"
                placeholder=" "
                fullWidth
              />
              <Input
                size="lg"
                radius="sm"
                variant="flat"
                type="password"
                id="login-password"
                label={
                  <>
                    <label htmlFor="login-password">Password</label>
                    <Link
                      href="/recover-password"
                      className="text-medium text-primary"
                    >
                      Forgot password
                    </Link>
                  </>
                }
                classNames={{
                  label: "flex justify-between gap-x-4 items-end w-full",
                }}
                labelPlacement="outside"
                placeholder=" "
                fullWidth
              />
              <Checkbox size="md" radius="sm" color="primary">
                Remember me for 30 days
              </Checkbox>
            </div>

            <footer className="pt-8">
              <Button
                color="primary"
                variant="solid"
                fullWidth
                radius="sm"
                size="lg"
              >
                Login
              </Button>
            </footer>
          </form>
        </section>
      </main>
    </div>
  );
}
