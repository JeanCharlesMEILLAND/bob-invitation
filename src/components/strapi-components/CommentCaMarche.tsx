"use client";
import {StrapiButton, StrapiPictureType} from "@/types/common";
import HighlightedText from "../common/HighlightedText"
import CommentCaMarcheCard from "../home/commentCaMarche/CommentCaMarcheCard";
import {titleStyle} from "../home/style"
import BackgroundStep from "../home/commentCaMarche/BackgroundStep";
import Image from "next/image";
import BobLogoBlured from "../home/commentCaMarche/BobLogoBlured";
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import "@/assets/css/commentCaMarche.css"
import {getStrapiMedia} from "@/utils/url.utils";

export interface Etape {
  titre: string;
  description: string;
  ordre: number;
}

interface CommentCaMarcheProps {
  data: {
    titre: string;
    sous_titre: string;
    lien: StrapiButton;
    image?: StrapiPictureType;
    etapes: Etape[];
  }
}

export default function CommentCaMarche({data}: CommentCaMarcheProps) {
  const {sous_titre, titre, etapes, image} = data;

  return (<>
        <div
            className="relative container mx-auto px-8 pt-4 lg:pt-10  flex flex-col gap-8 2xl:gap-16 text-[var(--foreground)] z-30"
            data-section="commentCaMarche">
          <div className="relative space-y-4 z-20">
            <HighlightedText text={sous_titre} style={titleStyle}/>

            <HighlightedText text={titre}
                             className="[font-family:'Prompt']  font-black text-3xl md:text-4xl lg:text-[64px] leading-[97px] text-center text-[var(--foreground)]"/>
          </div>
          <div className="relative flex flex-col 2xl:flex-row justify-center items-center gap-4 2xl:gap-16 z-30 ">
            <div className=" relative hidden 2xl:flex opacity-80 xl:opacity-100 -z-40"
            >
              <Image
                  src={getStrapiMedia(image?.url) || "/svg/bob-steps/bob-logo.svg"}
                  alt="Borrow and Back"
                  width={600}
                  height={600}
                  className="object-cover"
              />

              <BobLogo/>
            </div>

            <div className="-z-20 " style={{zIndex: -30}}>
              <BobLogoBlured/>
            </div>
            <div className="comment-ca-marche-grid-fixed">
              {etapes && etapes.sort((a, b) => a.ordre - b.ordre).map((etape, index) => (
                  <CommentCaMarcheCard etape={etape} key={index}/>
              ))}
            </div>
          </div>

          {/* Steps en fond */}
          <div className="absolute top-0 left-0 opacity-50 -z-10">
            <BackgroundStep/>
          </div>
        </div>

      </>
  )
}

function BobLogo() {
  const [targetElement, setTargetElement] = useState<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const element = document.querySelector('[data-section="commentCaMarche"]');
    if (!element) {
      setTargetElement(null)
    } else {
      setTargetElement(element as HTMLDivElement);
    }
  }, []);

  if (!mounted || !targetElement) return null;

  return createPortal(
      <>
        <div
            className="flex 2xl:hidden absolute bottom-1/2 md:bottom-0 xl:bottom-0 left-16 translate-y-1/2 md:translate-y-[15%] xl:translate-y-0 2xl:relative opacity-80 xl:opacity-100 -z-40">
          <Image
              src={"/svg/bob-steps/bob-logo.svg"}
              alt="Borrow and Back"
              width={600}
              height={600}
              className="object-cover"
          />
        </div>
      </>, targetElement
  )
}


