import type { Metadata } from "next";
import { IBM_Plex_Sans, Alexandria } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const EN_FONT = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const AR_FONT = Alexandria({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MARO-AI",
  description: "MARO-AI PLATFORM",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <ClerkProvider>
      <html
        suppressHydrationWarning
        lang={locale}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <body
          className={`${
            locale === "ar" ? AR_FONT.className : EN_FONT.className
          } antialiased`}
          cz-shortcut-listen="true"
        >
          <NextIntlClientProvider>
            <NextTopLoader />
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
