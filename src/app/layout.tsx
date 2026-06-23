import type { Metadata } from "next";
import { Inter, Roboto_Mono, Quicksand, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700'],
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kids Zone - Premium Kindergarten",
  description: "A safe, stimulating, and premium environment for your child's early education. Building foundations with trustworthy joy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} ${quicksand.variable} ${beVietnamPro.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col`}
      >
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
