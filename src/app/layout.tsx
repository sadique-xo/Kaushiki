import type { Metadata } from "next";
import { Fuzzy_Bubbles, Syne, DM_Mono } from "next/font/google";
import "./globals.css";

const fuzzyBubbles = Fuzzy_Bubbles({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kaushiki Kumari - Psychology Creator & Aesthetic Visionary",
  description:
    "Psychology-backed content creator. Emotional intelligence educator. Aesthetic visionary. Turning psychology into content Gen Z actually connects with.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fuzzyBubbles.variable} ${syne.variable} ${dmMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
