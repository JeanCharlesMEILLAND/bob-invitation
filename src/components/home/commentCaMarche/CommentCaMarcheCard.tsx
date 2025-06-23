"use client";
import "@/assets/css/commentCaMarche.css";
import HighlightedText from "@/components/common/HighlightedText";
import { Etape } from "@/components/strapi-components/CommentCaMarche";

export default function CommentCaMarcheCard({ etape }: { etape: Etape }) {
    return (
        <>
            <div className="whyItWorks-container">
                <div className="vector"></div>
                <div className="step-number">{etape.ordre}</div>
                <div className="title-container">
                    <h3>{etape.titre}</h3>
                </div>
                <div className="description-container">
                    <HighlightedText text={etape.description}/>
                </div>
            </div>
        </>
    )
}

