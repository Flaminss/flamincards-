"use client";

import { useState } from "react";
import { UserCircleIcon, XIcon } from "lucide-react";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import AuthFlowNavigationTop from "../(appzone)/auth-flow-navigation-top";
import { useUserAuthContext } from "../(appzone)/account/user-auth-provider";
import { AppwriteException } from "appwrite";
import { useRouter } from "next/navigation";
import clsx from "clsx";

const exceptionTypeToStatus = {
  user_invalid_credentials: "danger",
} as any;

export default function LoginPage() {
  const user = useUserAuthContext();
  const router = useRouter();

  const [email, setEmail] = useState("test-6@gmail.com");
  const [password, setPassword] = useState("password123");

  const [error, setError] = useState<null | {
    status: string;
    message: string;
  }>(null);

  const handleLogin = async () => {
    try {
      await user.login(email, password);
      router.replace("/dashboard");
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

  if (user.current) {
    router.replace("/dashboard");
    return;
  }

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
            <UserCircleIcon className="block mx-auto size-10 mb-2.5 sm:size-12 sm:mb-4" />
            <h1 className="text-2xl sm:text-3xl text-center mb-1 sm:mb-2 font-medium">
              Welcome Back 👋
            </h1>
            <p className="text-sm text-zinc-400 text-center">
              Provide your login details below to get started.
            </p>
          </header>

          <form className="pt-10">
            {error === null ? null : (
              <p
                data-description="general-form-error"
                className={clsx(
                  " flex items-center gap-x-6 p-2.5 mb-10 border border-danger-300 bg-danger-50 rounded-lg text-sm text-danger-900",
                  {
                    hidden: error === null,
                  }
                )}
              >
                <span className="w-full px-1.5">{error.message}</span>

                <Button
                  isIconOnly
                  size="sm"
                  color="danger"
                  radius="sm"
                  onPress={acknowledgeError}
                >
                  <XIcon className="size-4" />
                </Button>
              </p>
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
