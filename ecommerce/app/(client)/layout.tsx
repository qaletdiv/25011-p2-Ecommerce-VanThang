import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import HeaderServer from "@/components/HeaderServer";
import Providers from "../providers";

export const metadata: Metadata = {
  title: {
    template: "%s - ShopCart",
    default: "ShopCart",
  },
  description: "Shopcart online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <div className="flex flex-col min-h-screen">
            <HeaderServer />
            <main>{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
