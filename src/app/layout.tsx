import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";

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

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
      {children}
      <Footer/>
      </body>
      </html>
  );
}
