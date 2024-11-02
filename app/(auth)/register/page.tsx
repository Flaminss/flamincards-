"use client";

import { useEffect, useState } from "react";
import { Button, Input, Link, Spinner } from "@nextui-org/react";
import { MailPlus, XIcon } from "lucide-react";
import { userUserAuthContext } from "@/app/(auth)/user-auth-provider";
import { AppwriteException } from "appwrite";
import { useRouter } from "next/navigation";
import AuthNavigationTop from "@/app/(auth)/auth-navigation-top";
import * as schema from "./schema";
import clsx from "clsx";

const inputErrorClassNames = "pt-1 text-sm text-red-200";
const unsecureButStrongPassword = "Th1sIsP@s#w0rd";

export default function RegisterPage() {
  const router = useRouter();
  const userAuth = userUserAuthContext();

  if (userAuth.session) {
    // check if account email is already verified
    const emailVerified = false;
    if (emailVerified) {
      router.replace("/dashboard");
    } else {
      router.replace("/email/confirm?nextExpectedRoute=/dashboard");
    }
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [registrationProgress, setRegistratonProgress] = useState("idle");

  const [formErrors, setFormErrors] = useState<{
    [key: string]: string[] | null;
  }>({
    _all: null,
    email: null,
    password: null,
    retypedPassword: null,
  });

  async function handleRegisteration() {
    setRegistratonProgress("processing");

    try {
      schema.registrationFormSchema.parse({
        email,
        password,
        retypedPassword,
      });

      await userAuth.register({ email, password });
      await userAuth.login({ email, password });
      setRegistratonProgress("done");
    } catch (exception) {
      setRegistratonProgress("failed");

      if (exception instanceof schema.ZodError) {
        const { email, password, retypedPassword } = (
          exception as schema.ZodError<schema.RegistrationForm>
        ).format();
        setFormErrors((prevErrors) => {
          return {
            ...prevErrors,
            email: email?._errors || null,
            password: password?._errors || null,
            retypedPassword: retypedPassword?._errors || null,
          };
        });
      } else if (exception instanceof AppwriteException) {
        const { type, message } = exception;

        if (type === "user_already_exists") {
          setFormErrors((prevErrors) => {
            return {
              ...prevErrors,
              email: [
                "An account is already registered with this email address. Login or Reset Password",
              ],
            } as any;
          });
        }
      } else {
        throw exception;
      }
    }
  }

  async function clearGeneralFormError() {
    setFormErrors((prevErrors) => {
      return {
        ...prevErrors,
        _all: null,
      };
    });
  }

  const registerButtonStyle = {
    color: () => {
      return {
        idle: "primary",
        done: "default",
        failed: "primary",
      }[registrationProgress];
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <AuthNavigationTop
        renderCTA={() => (
          <Button as={Link} color="default" size="sm" radius="sm" href="/login">
            Login
          </Button>
        )}
      />

      <main>
        <section className="pt-12 py-8 px-4 max-w-lg mx-auto">
          <header>
            <MailPlus className="block mx-auto size-10 mb-2 sm:size-12 sm:mb-4" />
            <h1 className="text-2xl sm:text-3xl text-center mb-1 sm:mb-2 font-medium">
              Create an account ✨
            </h1>
            <p className="text-sm text-zinc-400 text-center">
              Start your exciting journey with us today.
            </p>
          </header>

          <form className={clsx("pt-10")}>
            <p
              data-description="general-form-error"
              className={clsx(
                " flex items-center gap-x-6 p-2.5 mb-10 border border-danger-300 bg-danger-50 rounded-lg text-sm text-danger-900",
                {
                  hidden: formErrors._all === null,
                }
              )}
            >
              <span className="w-full px-1">{formErrors?._all}</span>

              <Button
                isIconOnly
                size="sm"
                color="danger"
                radius="sm"
                onPress={clearGeneralFormError}
              >
                <XIcon className="size-4" />
              </Button>
            </p>

            <section className="grid gap-y-6 mb-10">
              <Input
                isRequired
                size="md"
                type="email"
                radius="sm"
                label="Email"
                placeholder=""
                value={email}
                onValueChange={setEmail}
                isInvalid={formErrors?.email !== null}
                errorMessage={formErrors?.email}
                classNames={{ errorMessage: inputErrorClassNames }}
              />

              <Input
                radius="sm"
                type="password"
                label="Password"
                value={password}
                onValueChange={setPassword}
                isInvalid={formErrors?.password !== null}
                errorMessage={
                  formErrors?.password && formErrors?.password.length === 1 ? (
                    formErrors?.password
                  ) : (
                    <ul className="flex flex-col gap-y-1 list-disc marker:text-danger-400 ps-5">
                      {formErrors?.password?.map((error, index) => {
                        return <li key={index}>{error}</li>;
                      })}
                    </ul>
                  )
                }
                classNames={{ errorMessage: inputErrorClassNames }}
              />

              <Input
                radius="sm"
                type="password"
                label="Re-type Password"
                value={retypedPassword}
                onValueChange={setRetypedPassword}
                isInvalid={formErrors?.retypedPassword !== null}
                errorMessage={formErrors?.retypedPassword}
                classNames={{ errorMessage: inputErrorClassNames }}
              />
            </section>

            <Button
              color={registerButtonStyle.color() as any}
              variant="solid"
              fullWidth
              isDisabled={registrationProgress === "done"}
              radius="sm"
              size="lg"
              onPress={() => handleRegisteration()}
            >
              {registrationProgress !== "processing" && "Register"}
              {registrationProgress === "processing" && <Spinner size="sm" />}
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
