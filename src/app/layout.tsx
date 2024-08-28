import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import { UserProvider } from "@auth0/nextjs-auth0/client";

import { cn } from "@/lib/utils";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
