import Navigation from "@/components/shared/Navigation";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { publicSans } from "@/components/ui/font";

export const metadata = {
  title: "DulranDev",
  description: "FullStack Developer, ReactJS, NextJS, ExpressJS, TypeScript",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${publicSans.className} antialiased bg-[hsl(223,70%,4%)] max-w-2xl px-8 lg:px-0 mx-auto`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
