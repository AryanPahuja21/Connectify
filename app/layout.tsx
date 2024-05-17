import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} bg-dark-2 text-white`}>
        {children}
      </body>
    </html>
  );
}
