import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { profileConfig } from "@/config/info";

const lexendDeca = localFont({
  src: [
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-Thin.ttf",
      weight: "100",
    },
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-Medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../assets/fonts/LexendDeca/LexendDeca-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-lexend-deca",
});

export const metadata: Metadata = {
  title: profileConfig.name,
  description: "Personal Profile",
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
