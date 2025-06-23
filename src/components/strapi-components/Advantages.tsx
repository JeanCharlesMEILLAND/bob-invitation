"use client";
import React from "react";
import HighlightedText from "../common/HighlightedText";
import CardBlur from "../home/advantages/CardBlur";
import SVGB from "@/assets/svg/SVGB";
import {useTheme} from "@/context/themeContext";
import BlocQr from "../home/advantages/BlocQr";
import {titleStyle} from "../home/style";
import {StrapiButton, StrapiPictureType} from "@/types/common";

export interface AdvantagesBloc {
  data: {
    title: string;
    avantages: {
      titre: string;
      description: string;
    }[],
    qr_code: StrapiPictureType,
    image: StrapiPictureType,
    button: StrapiButton
  }
}

export default function Advantages({data}: AdvantagesBloc) {
  console.log(data)
  const {theme} = useTheme();

  const colors = {
    color1: theme === "dark" ? "#166AF6" : "#e5f6ff",
    color2: theme === "dark" ? "#00C9F7" : "#e7f0fe",
  }

  const QRText = " <h2>Scannez</h2>"

  return (
      <div className="relative container mx-auto px-8 flex flex-col gap-8 md:gap-16 text-[var(--foreground)]"
           data-section="advantages">

        <HighlightedText text={data.title} style={titleStyle}/>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-content-center place-items-center gap-8">
          <div className="w-fit h-fit ">
            <CardBlur advantagesBloc={data.avantages}
                      button={{buttonText: data.button.text, buttonLink: data.button.url}}/>
          </div>

          <BlocQr QRText={QRText} QRImage={data.qr_code} MockupImage={data.image}/>

        </div>

        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-8 w-3/4 h-3/4 -z-20">
          <SVGB color1={colors.color1} color2={colors.color2}/>
        </div>
      </div>
  )
}


