"use client"

import React from 'react';
import Image from 'next/image';
import HighlightedText from "@/components/common/HighlightedText";
import {getStrapiMedia} from "@/utils/url.utils";
import {BobButton} from "@/components/ui/BobButton";
import {renderSocialIcon} from "@/utils/icon.utils";

interface RejoignezProps {
  data: {
    titre: string;
    description: string;
    image: {
      url: string;
      alternativeText: string;
    };
    lien_telechargements: { id: string; url: string; newTab: boolean }[];
    lien_reseaux_sociaux: {
      id: string;
      url: string;
      newTab: boolean;
      text: string;
      social: any;
    }[];
  }
}

const Rejoinez: React.FC<RejoignezProps> = ({data}) => {
  const {titre, description, image, lien_telechargements, lien_reseaux_sociaux} = data;

  return (
      <div className="container mx-auto px-8 space-y-8 pt-14">
        {image && (
            <div className="flex justify-center">
              <Image
                  src={getStrapiMedia(image.url) || ""}
                  alt={image.alternativeText}
                  width={200}
                  height={200}
                  className="object-contain"
              />
            </div>
        )}

        <HighlightedText
            className="max-w-3xl mx-auto [font-family:'Prompt'] uppercase font-black text-3xl md:text-4xl lg:text-5xl text-center text-[var(--foreground)]"
            text={titre}/>
        <HighlightedText className="text-center" text={description}/>


        <div className={"flex justify-between items-end"}>
          <div></div>

          <div className={"flex justify-center gap-4 pl-20"}>
            <BobButton
                iconSrc={"/images/buttons/downloadonandroid.png"}
                iconAlt={"Download on Android"}
                onClick={() => {
                  if (lien_telechargements[0] && lien_telechargements[0].url) {
                    window.open(lien_telechargements[0].url, '_blank');
                  }
                }}
            />
            <BobButton
                iconSrc={"/images/buttons/downloadonapple.png"}
                iconAlt={"Download on Apple Store"}
                onClick={() => {
                  if (lien_telechargements[1] && lien_telechargements[1].url) {
                    window.open(lien_telechargements[1].url, '_blank');
                  }
                }}
            />
          </div>

          <div className="flex justify-center space-x-4">
            {lien_reseaux_sociaux.map((social, index) => (
                <span key={index}>{renderSocialIcon(social)}</span>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Rejoinez;