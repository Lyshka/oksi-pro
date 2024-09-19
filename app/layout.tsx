import type { Metadata } from "next";
import "./globals.css";
import { proximaNova } from "@/fonts/ProximaNova/index";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { siteInfo } from "@/constants/siteInfo";
import Modal from "@/components/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: siteInfo.name,
  description:
    "качественная и экологически безопасная мойка посуды при любых загрязнениях",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={proximaNova.className}>
        <NextTopLoader />
        <ToastContainer position="top-right" />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
