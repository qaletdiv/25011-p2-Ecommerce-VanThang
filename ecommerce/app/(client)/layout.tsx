import type { Metadata } from "next";
import "../globals.css";
import Footer from "../../components/Footer"
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
   
        
        
          <div className="flex flex-col min-h-screen " >
        <HeaderServer/>
          <main >
        {children}
          </main>   
        <Footer/>
          </div>
     
    </ClerkProvider>
  );
}
