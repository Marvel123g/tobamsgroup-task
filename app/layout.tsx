import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ["latin"]
});
const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Tobams Group",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AOSProvider/>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
