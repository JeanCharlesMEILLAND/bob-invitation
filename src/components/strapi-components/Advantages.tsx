"use client";
import React, { useState } from "react";
import HighlightedText from "../common/HighlightedText";
import { BobButton } from "../ui/BobButton";
import Image from "next/image";
import { textMediaQueries } from "../home/hero/HeroContent";
import CardBlur from "../home/advantages/CardBlur";
import SVGB from "@/assets/svg/SVGB";
import { useTheme } from "@/context/themeContext";
import { StrapiPictureType } from "@/types/common";
import { getStrapiMedia } from "@/utils/url.utils";
import BlocQr from "../home/advantages/BlocQr";
import { titleStyle } from "../home/style";

export interface AdvantagesBloc {
    name: string;
    description: string;
}

export default function Advantages() {
    const { theme } = useTheme();

    const colors = {
        color1: theme === "dark" ? "#166AF6" : "#e5f6ff",
        color2: theme === "dark" ? "#00C9F7" : "#e7f0fe",
    }
    const title = `<h2>LES AVANTAGES</h2>`;

    const advantagesBloc: AdvantagesBloc[] = [
        { name: "Enregistrez facilement vos prêts", description: "Ajoutez des objets ou des montants et suivez leur retour." },
        { name: "Recevez des rappels intelligents", description: "Ne perdez plus un seul emprunt grâce aux notifications automatiques." },
        { name: "Partagez avec vos amis", description: "Ajoutez des contacts et visualisez les échanges en un coup d'œil." }
    ]

    const QRText = " <h2>Scannez</h2>"
    return (
        <div className="relative container mx-auto px-8 flex flex-col gap-8 md:gap-16 text-[var(--foreground)]" data-section="advantages">

            <HighlightedText text={title} style={titleStyle} />

            <div className="grid grid-cols-1 lg:grid-cols-2 justify-content-center place-items-center gap-8">
                <div className="w-fit h-fit ">
                    <CardBlur advantagesBloc={advantagesBloc} button={{ buttonText: "Téléchargez l'application", buttonLink: "" }} />
                </div>

                <BlocQr QRText={QRText} />
            </div>

            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-8 w-3/4 h-3/4 -z-20">
                <SVGB color1={colors.color1} color2={colors.color2} />
            </div>
        </div >
    )
}


