import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StickyRegisterButton from "@/components/sticky-register-button";
import { ThemeProvider } from "@/components/theme-provider";

// Load Montserrat from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// ✅ Load Cabrito Flare locally from /app/fonts
const cabritoFlare = localFont({
  src: "./fonts/CabritoFlare-Bold.otf", // path is relative to this file
  variable: "--font-cabrito-flare",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Africa Aviation Innovation Summit 2025",
  description:
    "Diversification: Reaching New Customer Segments - Join us for the Africa Aviation Innovation Summit 2025 in Nairobi, Kenya",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${cabritoFlare.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <StickyRegisterButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
