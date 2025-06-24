import {Inter, Outfit, Prompt} from "next/font/google";
import "./globals.css";
import "@/assets/css/container.css";
import {getFooter, getGlobal, getNavbar} from "@/utils/get-global-data";
import ClientLayout from "./ClientLayout";
import {Metadata} from 'next';

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

export async function generateMetadata(): Promise<Metadata> {
  const globalData = await getGlobal();
  const {siteName, siteDescription, defaultSeo} = globalData.data;

  return {
    title: defaultSeo.metaTitle || siteName,
    description: defaultSeo.metaDescription || siteDescription,
    keywords: defaultSeo.keywords || "Bob, Borrow and Back, partage, emprunt, économies, gestion de prêts, rappels, communauté",
    openGraph: {
      title: defaultSeo.metaTitle || siteName,
      description: defaultSeo.metaDescription || siteDescription,
      type: "website",
      url: defaultSeo.canonicalUrl || "https://www.bob-app.com",
      images: defaultSeo.shareImage?.url || "/images/bob-og-image.jpg",
    },
    twitter: {
      card: "summary_large_image",
      title: defaultSeo.metaTitle || siteName,
      description: defaultSeo.metaDescription || siteDescription,
      images: defaultSeo.shareImage?.url || "/images/bob-twitter-image.jpg",
    },
    icons: [{
      rel: "icon",
      type: "image/svg+xml",
      url: "/svg/bob.svg"
    }, {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png"
    }],
    alternates: {
      canonical: defaultSeo.canonicalUrl || "https://www.bob-app.com",
    },
  };
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
          className={`${inter.variable} ${outfit.variable} ${prompt.variable} antialiased max-w-screen overflow-x-hidden`}
      >
      <ClientLayout navbarData={navbarData.data} footerData={footerData.data}>
        {children}
      </ClientLayout>
      </body>
      </html>
  );
}
