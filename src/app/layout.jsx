import Navigation from "@/components/shared/Navigation";
import "./globals.css";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "DulranDev",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="https://t3.ftcdn.net/jpg/05/00/88/46/360_F_500884609_x94vt52VKMVMRGLhA7S6JCOJE8VgpYHq.jpg" />
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap"
        />
      </head>
      <body
        className="antialiased bg-black max-w-2xl px-8 lg:px-0 mx-auto"
      >
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
