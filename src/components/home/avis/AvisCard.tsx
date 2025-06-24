"use client";
import HighlightedText from "@/components/common/HighlightedText";
import { AvisInterface } from "@/types/avis";
import { StrapiPictureType } from "@/types/common";
import { getColorFromName } from "@/utils/getFontColorName";
import { getStrapiMedia } from "@/utils/url.utils";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface AvisCardPros {
  avis: AvisInterface;
}
export default function AvisCard({ avis }: AvisCardPros) {

  const imageUrl = avis?.auteurImage ? getStrapiMedia(avis?.auteurImage?.url) : null;

  const getInitial = (name: string) => {
    if (!name || name.trim() === "") {
      return;
    }

    return name?.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2) || 'AA'
  }
  return (
    <>
      <div className="card-container">
        <div className="card-content">
          {/* Avatar */}
          <div className="avatar">
            {avis?.auteurImage && imageUrl ? (
              <Image
                src={imageUrl}
                alt={avis?.auteurImage?.alternativeText || "avatar"}
                width={81}
                height={81}
                className="object-cover rounded-full"
              />
            ) : (
              <div className={`w-[81px] h-[81px] rounded-full bg-gradient-to-br ${getColorFromName(avis?.auteur)} flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold text-xl">
                  {getInitial(avis?.auteur)}
                </span>
              </div>
            )}
          </div>

          {/* Avatar Name */}
          <h3 className="avatar-name">{avis.auteur}</h3>

          {/* Stars */}
          <div className="stars-container">
            {[...Array(avis.note)].map((_, index) => (
              <div key={index} className="star">
                <div className="star-icon"><StarIcon fill="#23344f" stroke="0" className="w-4 h-4" /></div>
              </div>
            ))}
          </div>

          {/* Avis Text */}
          <div className="avis-text">
            <HighlightedText text={avis.avis} className="avis" />
          </div>
        </div>
      </div>
    </>
  );
}