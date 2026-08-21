import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SaarthiProvider } from "@/components/saarthi/SaarthiProvider";
import { SaarthiFloating } from "@/components/saarthi/SaarthiFloating";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JANSAHAY AI - Your problem. Your next step.",
  description: "Understand complicated real-world processes such as government services, schemes, documents, police procedures, and emergency situations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SaarthiProvider>
              {children}
              <SaarthiFloating />
            </SaarthiProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
