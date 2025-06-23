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

      <style jsx>{`
        .card-container {
          position: relative;
          width: 451.39px;
          height: 344.36px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 106, 246, 0.21) 61%);
          backdrop-filter: blur(30px);
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }
        
        .avatar {
          width: 80.97px;
          height: 80.97px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 7px;
        }
        
        .avatar-name {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          color: #0BCAFF;
          margin: 0 0 11px 0;
        }
        
        .stars-container {
          display: flex;
          gap: 5.65px;
          margin-bottom: 46px;
        }
        
        .star {
          position: relative;
          width: 26.99px;
          height: 26.99px;
          
        }
        
        .star-icon {
          position: absolute;
          left: 8.34%;
          right: 8.33%;
          top: 8.34%;
          bottom: 8.33%;
          background: #FFC117;
          border-radius: 50%;
          padding: 3px;
        }
        
        .avis-text {
          width: 100%;
          max-width: 321.09px;
        }
        
        .avis {
          font-family: 'Outfit', sans-serif;
          font-style: normal;
          font-weight: 200;
          font-size: 24px;
          line-height: 30px;
          text-align: center;
          color: #FFFFFF;
          margin: 0;
        }
      `}</style>
    </>
  );
}