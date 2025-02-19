import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("min-h-screen", fontSans.variable)}>
        <SidebarProvider>
          <AppSidebar /> 
          <main className="flex flex-1 flex-col">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
