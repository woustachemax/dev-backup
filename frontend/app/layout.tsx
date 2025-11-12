import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dev Backup",
  description: "Switch Laptops like frameworks",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo.svg"
        />
      </head>
      <body
        className="font-sans"
      >
        {children}
      </body>
    </html>
  );
}
