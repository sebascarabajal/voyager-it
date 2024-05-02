import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { Theme } from "@radix-ui/themes";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voyager-IT",
  description: "A reliable telecommunications company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Theme appearance="dark">
          <NavBar />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
