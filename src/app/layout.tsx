import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {getFooter, getNavbar} from "@/utils/get-global-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Invitation à Bob',
  description: 'Rejoignez Bob grâce à une invitation exclusive.',
}

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const [navbarData, footerData] = await Promise.all([
    getNavbar(),
    getFooter(),
  ]);
  return (
      <html lang="fr">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar data={navbarData.data}/>
      {children}
      <Footer data={footerData.data}/>
      </body>
      </html>
  );
}
