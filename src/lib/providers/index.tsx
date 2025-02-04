"use client";

import { ReactNode } from "react";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { UserProvider } from "@/src/context/user.provider";
const queryClient = new QueryClient();

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </NextUIProvider>
        <Toaster />
      </UserProvider>
    </QueryClientProvider>
  );
}
