"use client"

import Image from 'next/image';
import HighlightedText from "@/components/common/HighlightedText";
import {getStrapiMedia} from "@/utils/url.utils";
import {StrapiPictureType} from "@/types/common";
import {useTheme} from "@/context/themeContext";

const PourquoiChoisirBob = ({data}: {
  data: {
    titre: string;
    avantages: { titre: string; description: string; }[];
    image: StrapiPictureType;
  }
}) => {
  const {theme} = useTheme()
  return (
      <div
          className="bg-gradient-to-b from-white/20 to-[#166AF6]/20 mt-32 px-20 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between container mx-auto">
        <div className="w-10/12">
          <HighlightedText
              className="[font-family:'Prompt']  font-black text-3xl md:text-4xl lg:text-[64px] text-left uppercase max-w-lg text-[var(--foreground)]"
              text={data.titre}/>
          <div
              className={`border-l-2 lg:border-l-0 ${theme === 'light' ? 'border-[#242D31]' : 'border-white'} flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-10 lg:auto-rows-fr mt-10`}>
            {data.avantages.map((avantage, index: number) => (
                <div key={index}
                     className="-ml-[9px] flex gap-4 items-start lg:flex-col justify-start lg:justify-between">
                  <div
                      className={`lg:hidden w-4 h-4 min-w-[1rem] min-h-[1rem] ${theme === 'light' ? 'bg-[#242D31]' : 'bg-white'} rounded-full self-start flex-shrink-0`}></div>
                  <div>
                    <h3 className={`text-lg font-semibold uppercase mb-4 ${theme === 'light' ? 'text-[#242D31]' : 'text-white'}`}>{avantage.titre}</h3>
                    <HighlightedText className={`max-w-md ${theme === 'light' ? 'text-[#242D31]' : 'text-white'}`}
                                     text={avantage.description}/>
                  </div>
                  <div
                      className={`hidden lg:block w-5 h-5 ${theme === 'light' ? 'bg-[#242D31]' : 'bg-white'} rounded-full mt-4 self-start`}></div>
                </div>
            ))}
          </div>
          <div
              className={`hidden lg:block -mt-[10px] w-full h-0.5 ${theme === 'light' ? 'bg-[#242D31]' : 'bg-white'}`}></div>
        </div>
        <div className="w-full lg:w-2/12 relative">
          <Image
              src={getStrapiMedia(data.image.url) || ""}
              alt="Bob App on Phone"
              width={300}
              height={600}
              className="lg:scale-150 mx-auto"
          />
        </div>
      </div>
  );
};

export default PourquoiChoisirBob;