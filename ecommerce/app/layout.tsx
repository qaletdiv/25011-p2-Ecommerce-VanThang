import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer"
import {ClerkProvider} from "@clerk/nextjs"
import HeaderServer from "@/components/HeaderServer";

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
    <ClerkProvider>
    <html lang="en" className="mdl-js">
      <body
        className="font-poppins antialiased"
        >
          <div className="flex flex-col min-h-screen " >
        <HeaderServer/>
          <main className="flex flex-1" >
        {children}
          </main>   
        <Footer/>
          </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
