import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./ui/Sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Pigmo Cassino",
  description: "Cassino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex-none md:w-64">
            <Sidebar />
          </div>
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
