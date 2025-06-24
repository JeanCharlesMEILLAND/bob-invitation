import { Inter, Outfit, Prompt } from "next/font/google";
import "./globals.css";
import "@/assets/css/container.css";
import { getFooter, getNavbar } from "@/utils/get-global-data";
import ClientLayout from "./ClientLayout";
import { headers } from "next/headers";

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

export async function generateMetadata() {
  const hdrs = await headers();
  const host = hdrs.get('host');
  const protocol = host?.startsWith('localhost') ? 'http' : 'https';
  const url = `${protocol}://${host}`;

  return {
    title: "Borrow & Back - Partagez, Empruntez, Réduisez vos Dépenses avec BOB !",
    description: "Avec BOB (Borrow and Back), gérez vos prêts d'objets et d'argent entre amis en toute simplicité. Ajoutez des contacts, recevez des rappels, partagez facilement, et réduisez vos dépenses !",
    keywords: [
      "prêt d'objet",
      "emprunt entre amis",
      "gestion de prêts",
      "partage communautaire",
      "consommation responsable",
      "application prêt",
      "Borrow and Back",
      "BOB app",
      "objets à partager",
      "économie circulaire"
    ],
    icons: [
      {
        rel: "icon",
        url: "/svg/bob.svg",
      },
    ],
    openGraph: {
      title: "Borrow & Back - Gérer et Partager vos Prêts en Toute Simplicité",
      description: "Empruntez et prêtez objets ou argent à vos proches avec BOB. Notifications, historique, groupes privés/publics. Simplifiez vos échanges !",
      url: url,
      siteName: "Borrow and Back",
      images: [
        {
          url: "/svg/bob.svg", // Remplace par ton image réelle
          width: 1200,
          height: 630,
          alt: "Aperçu de l'application Borrow and Back",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Borrow & Back - L'app de prêt entre amis",
      description: "Partagez des objets, recevez des rappels automatiques et gagnez des points Bobies. Rejoignez la communauté dès aujourd’hui !",
      images: ["/svg/bob.svg"], // Remplace par ton image réelle
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
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
        className={`${inter.variable} ${outfit.variable} ${prompt.variable} antialiased max-w-screen overflow-x-hidden`}
      >
        <ClientLayout navbarData={navbarData.data} footerData={footerData.data}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
