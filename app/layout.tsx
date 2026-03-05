import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fire Detection Unlimited, Inc. | Bay Area Fire Alarm Systems",
  description: "Design-build fire alarm systems, 24/7 monitoring, and comprehensive life safety services from Concord to Sacramento. Veteran-owned, NICET Level IV certified since 2001.",
  keywords: ["fire alarm", "fire detection", "Bay Area", "Sacramento", "NICET IV", "design-build", "fire safety", "Concord CA"],
  openGraph: {
    title: "Fire Detection Unlimited, Inc.",
    description: "Making Fire Alarm Simple for Bay Area Businesses Since 2001",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
