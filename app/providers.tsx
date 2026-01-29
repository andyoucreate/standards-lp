"use client";

import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import type React from "react";

const WaitingListModal = dynamic(() => import("@/components/WaitingListModal"), {
  ssr: false,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
      {children}
      <WaitingListModal />
    </ThemeProvider>
  );
}
