"use client";
import Link from 'next/link';
import { BobButton } from "@/components/ui/BobButton";
import SVGB from "@/assets/svg/SVGB";
import BackgroundStep from "@/components/home/commentCaMarche/BackgroundStep";
import { Metadata } from 'next';
import { BiArrowBack } from 'react-icons/bi';
import '@/assets/css/404.css';
import "@/assets/css/commentCaMarche.css"
import { useTheme } from '@/context/themeContext';
import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { scrollToSection } from '@/utils/scrollUtils';

// export const metadata: Metadata = {
//     title: '404 - Page non trouvée',
//     description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
// };

export default function NotFoundPage() {

    const { theme } = useTheme();
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const router = useRouter();


    const handleScrollToSection = useCallback(async (sectionName: string) => {
        if (!isHomePage) {
            router.push("/");

            await new Promise(resolve => {
                const checkNavigation = () => {
                    if (window.location.pathname === "/") {
                        setTimeout(() => {
                            resolve(true);
                        }, 500)
                    } else {
                        setTimeout(checkNavigation, 500)
                    }
                };

                checkNavigation();
            })

            await new Promise(resolve => setTimeout(resolve, 200))
        }

        scrollToSection(sectionName, 1000, -120);
    }, [isHomePage, pathname, router]);

    return (
        <div className="container mx-auto px-8 py-8 min-h-[80vh] flex items-center justify-center  relative text-[var(--foreground)] overflow-hidden">
            <div className="fixed top-1/4 2xl:left-8 opacity-30 ">
                <BackgroundStep />
            </div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className=" mx-auto mb-8 relative">
                    <div className="vector hidden 2x:flex" />

                    <div className='flex flex-col items-center justify-center'>
                        <div className="step-number text-center text-4xl lg:text-6xl 2xl:text-8xl font-black mb-4"
                        style={{color:"var(--foreground)"}}
                        >
                            404
                        </div>

                        <div className="title-container mb-6">
                            <h1 className="text-2xl md:text-3xl font-bold mb-2 whitespace-normal md:whitespace-nowrap">
                                Oups ! Page non trouvée
                            </h1>
                            <h2
                                className="text-primary font-prompt font-bold text-sm md:text-base tracking-wider uppercase"
                                style={{ color: 'var(--primary, #166AF6)' }}
                            >
                                Erreur 404
                            </h2>
                        </div>
                        <div className="description-container"
                            style={{ color: 'var(--foreground)' }}
                        >
                            <p className=" text-lg md:text-xl leading-relaxed"
                                style={{ color: 'var(--foreground)' }}
                            >
                                La page que vous recherchez n'existe pas ou a été déplacée.
                                Vérifiez l'URL ou retournez à l'accueil.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/" aria-label="Retourner à la page d'accueil">
                        <BobButton
                            onClick={() => { }}
                            className="px-8 flex items-center gap-2"
                            style={{
                                color: "var(--foreground)",
                                padding: "12px 32px",
                                backgroundColor: "var(--primary)",
                                border: "none"
                            }}
                        >
                            <BiArrowBack />
                            Retour à l'accueil
                        </BobButton>
                    </Link>
                    <BobButton
                        onClick={() => { handleScrollToSection("rejoignez") }}
                        className="px-8"
                        style={{
                            color: "var(--foreground)",
                            padding: "12px 32px",
                            backgroundColor: "transparent",
                            border: "2px solid var(--primary)"
                        }}
                        aria-label="Nous contacter pour signaler le problème"
                    >
                        Nous contacter
                    </BobButton>
                </div>

            </div>

            <div className="fixed top-1/3 2xl:right-8 hidden lg:flex opacity-30 ">
                <BackgroundStep />
            </div>
        </div>
    );
}