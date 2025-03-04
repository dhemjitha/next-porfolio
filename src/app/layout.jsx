import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "DulranDev",
  description: "FullStack Developer, ReactJS, NextJS, ExpressJS, TypeScript",
  keywords: "Dulran, DulranDev, dulran, dulran dev, dulrandev, full stack developer, web development, AI-powered apps, MERN stack, Next.js, programming, AI, portfolio, dulran hemjitha, dulranhemjitha, software engineering",
  author: "Dulran Hemjitha",
  robots: "index, follow",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://dulran.dev/header.jpeg" />
        <meta property="og:url" content="https://dulran.dev/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://dulran.dev/header.jpeg" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="https://t3.ftcdn.net/jpg/05/00/88/46/360_F_500884609_x94vt52VKMVMRGLhA7S6JCOJE8VgpYHq.jpg" />

        {/* Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap" />
      </Head>
      <body className="antialiased bg-black max-w-2xl px-8 lg:px-0 mx-auto">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
