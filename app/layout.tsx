import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import Theme from "@/components/theme";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Brandon | Personal Portfolio",
  description: "Recently graduated full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={'${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90' }>
        <div className="bg-[#f8e3e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"> </div>
        <div className="bg-[#eae8f7] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]  xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" > </div>
       <ThemeContextProvider>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer/>
        </ActiveSectionContextProvider>
        <Theme/>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
