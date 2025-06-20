import { Inter, Outfit, Prompt } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getFooter, getNavbar } from "@/utils/get-global-data";

const inter = Inter({
  weight: ["300", "400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});


const outfit = Outfit({
  weight: ["300", "400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});


const prompt = Prompt({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-prompt",
});

export const metadata = {
  title: "Invitation à Bob",
  description: "Rejoignez Bob grâce à une invitation exclusive.",
  icons: [{ 
    rel: "icon", 
    url:  "/svg/bob.svg"
  }],
};

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
        className={` ${inter.variable} ${outfit.variable} ${prompt.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Navbar data={navbarData.data} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer data={footerData.data} />
      </body>
    </html>
  );
}