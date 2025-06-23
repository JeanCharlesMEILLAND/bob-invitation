"use client";
import { StrapiButton, StrapiPictureType } from "@/types/common";
import HighlightedText from "../common/HighlightedText"
import CommentCaMarcheCard from "../home/commentCaMarche/CommentCaMarcheCard";
import { subtitleStyle, titleStyle } from "../home/style"
import BackgroundStep from "../home/commentCaMarche/BackgroundStep";
import Image from "next/image";

export interface Etape {
    titre: string;
    description: string;
    ordre: number;
}
interface CommentCaMarcheProps {
    data: {
        sous_titre: string;
        titre: string;
        lien: StrapiButton;
        image?: StrapiPictureType;
        etapes: Etape[];
    }
}
export default function CommentCaMarche({ data }: CommentCaMarcheProps) {
    const { sous_titre, titre, etapes } = data;

    return (<>
        <div className="relative container mx-auto px-8 flex flex-col gap-8 md:gap-16 text-[var(--foreground)]" data-section="commentCaMarche">
            <div className="space-y-4">
                <HighlightedText text={sous_titre} style={titleStyle} />

                <HighlightedText text={titre} style={subtitleStyle} />
            </div>
            <div className="flex flex-col 2xl:flex-row gap-16">
                <div className="bob-logo">
                    <Image
                        src={"/svg/bob-steps/bob-logo.svg"}
                        alt="Borrow and Back"
                        width={600}
                        height={600}
                        className="object-cover"
                    />
                </div>
                <div className="comment-ca-marche-grid-fixed">
                    {etapes && etapes.sort((a, b) => a.ordre - b.ordre).map((etape, index) => (
                        <CommentCaMarcheCard etape={etape} key={index} />
                    ))}
                </div>
            </div>

            {/* Steps en fond */}
            <div className="absolute top-0 left-0 opacity-50 -z-10">
                <BackgroundStep />
            </div>
        </div>

    </>
    )
}




