import { Inter, Outfit, Prompt } from "next/font/google";
import "./globals.css";
import { getFooter, getNavbar } from "@/utils/get-global-data";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const prompt = Prompt({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-prompt",
});

export const metadata = {
  title: "Invitation à Bob",
  description: "Rejoignez Bob grâce à une invitation exclusive.",
  icons: [{
    rel: "icon",
    url: "/svg/bob.svg"
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
        className={`${inter.variable} ${outfit.variable} ${prompt.variable} antialiased`}
      >
        <ClientLayout navbarData={navbarData.data} footerData={footerData.data}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
