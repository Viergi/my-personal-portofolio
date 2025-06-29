import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// @component
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { LocaleProvider } from "./locale-provider";
import Script from "next/script";
import MovingTitle from "@/components/MovingTitle";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Viergi || Portofolio Web Developer",
  description:
    "Portofolio online saya yang menampilkan proyek-proyek terbaik saya dalam web development. Saya adalah seorang web developer yang bersemangat dan berpengalaman dalam membangun website yang responsif dan modern.",
  keywords: [
    "web developer",
    "pengembang web",
    "portofolio",
    "proyek web",
    "desain web",
    "front-end",
    "back-end",
    "viergi",
    "depok",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {/* <MovingTitle fullTitle={"Viergi | Portofolio Web Developer "} /> */}
        <LocaleProvider>
          <Header></Header>
          <StairTransition></StairTransition>
          <PageTransition>{children}</PageTransition>
        </LocaleProvider>
      </body>
    </html>
  );
}
