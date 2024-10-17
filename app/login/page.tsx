"use client";

import { useState } from "react";
import {
  AlertCircle,
  AlertCircleIcon,
  UserCircle,
  XCircleIcon,
  XIcon,
} from "lucide-react";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import AuthFlowNavigationTop from "../(pwa)/auth-flow-navigation-top";
import { useUserContext } from "../user-session-provider";
import { AppwriteException } from "appwrite";

const exceptionTypeToStatus = {
  user_invalid_credentials: "danger",
} as any;

export default function LoginPage() {
  const user = useUserContext();

  const [email, setEmail] = useState("test-6@gmail.com");
  const [password, setPassword] = useState("passwordnotsafe");

  const [error, setError] = useState<null | {
    status: string;
    message: string;
  }>(null);

  const handleLogin = async () => {
    try {
      await user.login(email, password);
    } catch (exception) {
      if (exception instanceof AppwriteException) {
        const { type, message } = exception;
        setError({ status: exceptionTypeToStatus[type], message });
      } else {
        throw exception;
      }
    }
  };

  const acknowledgeError = () => {
    setError(null);
  };

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
              Welcome Back 👋
            </h1>
            <p className="text-sm text-zinc-400 text-center">
              Provide your login details below to get started.
            </p>
          </header>

          <form className="pt-10">
            {error === null ? null : (
              <div className="mb-10 p-3 gap-x-4 flex items-center border border-danger-200 w-full">
                <AlertCircle className="size-6 text-danger-300" />
                <p className="text-sm font-medium text-danger-950">
                  {error.message}
                </p>
                <button
                  className="ms-auto btn btn-circle size-8"
                  onClick={() => acknowledgeError()}
                >
                  <XIcon className="size-4" />
                </button>
              </div>
            )}

            <div className="grid gap-y-4 mb-10">
              <Input
                radius="sm"
                variant="flat"
                label="Email"
                value={email}
                onValueChange={setEmail}
              />
              <Input
                radius="sm"
                variant="flat"
                type="password"
                label="Password"
                value={password}
                onValueChange={setPassword}
              />
              <div className="flex justify-between items-center gap-x-6 py-1.5">
                <Checkbox
                  size="sm"
                  radius="sm"
                  color="primary"
                  className="ps-2.5"
                  classNames={{ label: "text-zinc-200" }}
                >
                  Remember me
                </Checkbox>
                <Link
                  href="/recover-password"
                  className="text-sm font-medium text-primary"
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
                as={Link}
                onPress={() => handleLogin()}
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
