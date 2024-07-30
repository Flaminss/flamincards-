"use client";

import { UserCircle } from "lucide-react";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import AuthFlowNavigationTop from "../(pwa)/auth-flow-navigation-top";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <AuthFlowNavigationTop
        renderCTA={() => (
          <Button
            as={Link}
            color="default"
            size="sm"
            radius="sm"
            href="/register"
          >
            Register
          </Button>
        )}
      />

      <main>
        <section className="pt-12 py-8 px-4 max-w-lg mx-auto">
          <header>
            <UserCircle className="block mx-auto size-10 mb-2.5 sm:size-12 sm:mb-4" />
            <h1 className="text-2xl sm:text-3xl text-center mb-1 sm:mb-2 font-medium">
              Welcome Back! 👋
            </h1>
            <p className="text-sm text-zinc-400 text-center">
              Provide your login details below to get started.
            </p>
          </header>

          <form className="pt-10">
            <div className="grid gap-y-6 mb-10">
              <Input radius="sm" variant="flat" label="Email" />
              <Input
                radius="sm"
                variant="flat"
                type="password"
                label="Password"
              />
              <div className="flex justify-between items-center gap-x-6">
                <Checkbox
                  size="md"
                  radius="full"
                  color="primary"
                  classNames={{ label: "text-zinc-200" }}
                >
                  Remember me
                </Checkbox>
                <Link
                  href="/recover-password"
                  className="text-medium font-medium text-primary"
                >
                  Forgot password
                </Link>
              </div>
            </div>

            <footer className="grid gap-y-2">
              <Button
                color="primary"
                variant="solid"
                fullWidth
                radius="sm"
                size="lg"
                className="mb-2"
              >
                Login
              </Button>

              <p className="text-center text-sm">
                Dont have an account yet?{" "}
                <Link href="/register" color="primary" size="sm">
                  Register
                </Link>
              </p>
            </footer>
          </form>
        </section>
      </main>
    </div>
  );
}
