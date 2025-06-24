"use client"

import Image from 'next/image';
import HighlightedText from "@/components/common/HighlightedText";
import { getStrapiMedia } from "@/utils/url.utils";
import { StrapiPictureType } from "@/types/common";
import { useTheme } from "@/context/themeContext";
import "@/assets/css/pourquoi.css";

const PourquoiChoisirBob = ({ data }: {
  data: {
    titre: string;
    avantages: { titre: string; description: string; }[];
    image: StrapiPictureType;
  }
}) => {

  return (
    <div className="container px-8 mx-auto">
      <div
        className="relative bg-gradient-to-b from-white/20 to-[#166AF6]/20 mt-32 px-10 lg:px-20  p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between container mx-auto pourquoi-container">
        <div className="w-10/12">
          <HighlightedText
            className="[font-family:'Prompt']  font-black text-3xl md:text-4xl lg:text-[64px] text-left uppercase max-w-lg text-[var(--foreground)] pourquoi-title"
            text={data.titre} />
          <div
            className={`border-l-2 lg:border-l-0 border-[var(--foreground)] flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-10 lg:auto-rows-fr mt-10`}>
            {data.avantages.map((avantage, index: number) => (
              <div key={index}
                className="-ml-[9px] flex gap-4 items-start lg:flex-col justify-start lg:justify-between">
                <div
                  className={`lg:hidden w-4 h-4 min-w-[1rem] min-h-[1rem] bg-[var(--foreground)] rounded-full self-start flex-shrink-0`}></div>
                <div>
                  <h3 className={`text-lg font-semibold uppercase mb-4 pourquoi-subtitle`}>{avantage.titre}</h3>
                  <HighlightedText className={`max-w-md  pourquoi-description`}
                    text={avantage.description} />
                </div>
                <div
                  className={`hidden lg:block w-5 h-5 bg-[var(--foreground)] rounded-full mt-4 self-start`}></div>
              </div>
            ))}
          </div>
          <div
            className={`hidden lg:block -mt-[10px] w-full h-0.25 bg-[var(--foreground)]`}></div>
        </div>
        <div className="group relative w-full lg:w-2/12">
          <Image
            src={getStrapiMedia(data.image.url) || ""}
            alt="Bob App on Phone"
            width={300}
            height={600}
            className="lg:scale-150 mx-auto group-hover:scale-105 lg:group-hover:scale-[1.55] transition"
          />
          {/* Radial element */}
          <div className="absolute top-[35%] left-0 -translate-x-1/2 w-[500px] h-[500px]  bg-[#166AF6]  opacity-40 -z-10"
            style={{
              mixBlendMode: "normal",
              filter: "blur(250px)",
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default PourquoiChoisirBob;



