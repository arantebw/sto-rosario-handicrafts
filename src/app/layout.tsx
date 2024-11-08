import { ReactNode } from "react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Theme } from "@radix-ui/themes";

import { cn } from "@/lib/utils";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
});

import "@radix-ui/themes/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={cn(
            "min-h-screen bg-background antialised",
            ubuntu.className,
          )}
        >
          <Theme>{children}</Theme>
        </body>
      </UserProvider>
    </html>
  );
}
