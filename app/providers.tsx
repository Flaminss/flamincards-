"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { UserAuthContextProvider } from "./user-auth-provider";
import { EmailValidationContextProvider } from "./verify-email/status-notice-provider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextThemesProvider {...themeProps}>
      <NextUIProvider navigate={router.push}>
        <UserAuthContextProvider>
          <EmailValidationContextProvider>
            {children}
          </EmailValidationContextProvider>
        </UserAuthContextProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
