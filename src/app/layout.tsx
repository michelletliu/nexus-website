import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus - Southern California's First Intercollegiate Entrepreneurship Society",
  description: "Nexus is the community for SoCal's most talented and driven student entrepreneurs. We bring together the brightest builders— engineers, designers, creators, and more.",
  keywords: "entrepreneurship, students, Southern California, USC, UCLA, Caltech, LMU, UC San Diego, startup, innovation",
  authors: [{ name: "Emily Shen", name: "Michelle Liu" }],
  openGraph: {
    title: "Nexus - Southern California's First Intercollegiate Entrepreneurship Society",
    description: "Join the community for SoCal's most talented and driven student entrepreneurs.",
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
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
