import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: {
    template: "%S - ShopCart",
    default: "ShopCart"
  },
  description: "Shopcart online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <body
        className="font-poppins antialiased"
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
