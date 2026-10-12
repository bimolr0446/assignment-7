import type { Metadata } from "next";
import {  Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavLinks from "@/components/NavLinks";
import Marquee from "@/components/Marquee";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";



const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  weight: ["400", "500", "700"],
  subsets: ["latin","bengali"],
});


export const metadata: Metadata = {
  title: "বাজার দর || Bazar-Dor",
  description:
    "Bazar_Dor web application that helps users explore product prices and market information in Bangladesh. Users can browse products, view category-wise information",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"
      data-theme="light"
      className={`${hindSiliguri.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <NavLinks></NavLinks>
        <Marquee></Marquee>
        <main>{children}</main>
        <Footer></Footer>
        <ToastContainer />
      </body>
    </html>
  );
}
