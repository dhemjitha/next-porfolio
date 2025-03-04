import Navigation from "@/components/shared/Navigation";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { publicSans } from "@/components/ui/font";

export const metadata = {
  title: "DulranDev",
  description: "FullStack Developer, ReactJS, NextJS, ExpressJS, TypeScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.className} antialiased bg-black max-w-2xl px-8 lg:px-0 mx-auto`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
