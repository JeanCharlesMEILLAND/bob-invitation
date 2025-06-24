"use client";
import React from "react";
import HighlightedText from "../common/HighlightedText";
import CardBlur from "../home/advantages/CardBlur";
import SVGB from "@/assets/svg/SVGB";
import BlocQr from "../home/advantages/BlocQr";
import {titleStyle} from "../home/style";
import {StrapiButton, StrapiPictureType} from "@/types/common";

export interface AdvantagesBloc {
  data: {
    title: string;
    description?: string;
    avantages: {
      titre: string;
      description: string;
    }[],
    qr_code: StrapiPictureType,
    image: StrapiPictureType,
    liens: StrapiButton[];
  }
}

export default function Advantages({data}: AdvantagesBloc) {
  const {title, qr_code, image, liens, avantages} = data;

  const QRText = " <p>Scannez</p>"


  return (
      <div className="relative container mx-auto px-8 flex flex-col gap-8 md:gap-16 text-[var(--foreground)]"
           data-section="advantages">

        <HighlightedText text={title} style={titleStyle}/>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-content-center place-items-center gap-8">
          <div className="w-fit h-fit ">
            <CardBlur advantagesBloc={avantages}
                      button={liens}/>
          </div>

          <BlocQr QRText={QRText} QRImage={qr_code} MockupImage={image}/>

        </div>

        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-8 w-3/4 h-3/4 -z-20">
          <SVGB/>
        </div>
      </div>
  )
}


