"use client"
import { ThemeProvider } from "@/context/themeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
  navbarData: any;
  footerData: any;
}

export default function ClientLayout({ children, navbarData, footerData }: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <Navbar data={navbarData} />
      <main className="min-h-screen overflow-hidden">
        {children}
      </main>
      {/* <Footer data={footerData} /> */}
    </ThemeProvider>
  );
}