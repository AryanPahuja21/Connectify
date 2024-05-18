import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connectify - Click. Connect. Communicate.",
  description: "Connectify is a video conferencing app.",
  icons: {
    icon: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/favicon.png",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#2a2e3e",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2 text-white`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
