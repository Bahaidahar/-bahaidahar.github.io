import { Raleway } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { locales } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const raleway = Raleway({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my work and skills",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <body className={raleway.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CustomCursor />
          <div className="relative z-10 min-h-screen bg-gradient-to-br from-background/80 to-background text-foreground">
            <AnimatedBackground />
            <Navigation />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
