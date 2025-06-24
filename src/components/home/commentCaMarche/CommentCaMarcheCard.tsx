"use client";
import "@/assets/css/commentCaMarche.css";
import HighlightedText from "@/components/common/HighlightedText";
import {Etape} from "@/components/strapi-components/CommentCaMarche";

export default function CommentCaMarcheCard({etape}: { etape: Etape }) {

  const cleanOrderFormat = (order: number): string => {
    const cleanedOrder = order < 10 ? "0" + String(order) : (order);
    return String(cleanedOrder);
  }

  return (
      <>
        <div className="whyItWorks-container">
          <div className="vector"></div>
          <div className="step-number">{cleanOrderFormat(etape.ordre)}</div>
          <div className="title-container">
            <h2>{etape.titre}</h2>
          </div>
          <div className="description-container">
            <HighlightedText text={etape.description}/>
          </div>
        </div>
      </>
  )
}

