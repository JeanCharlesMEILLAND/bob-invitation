import Image from 'next/image';
import HighlightedText from "@/components/common/HighlightedText";
import {getStrapiMedia} from "@/utils/url.utils";
import {StrapiPictureType} from "@/types/common";

const PourquoiChoisirBob = ({data}: {
  data: {
    titre: string;
    avantages: { titre: string; description: string; }[];
    image: StrapiPictureType;
  }
}) => {

  return (
      <div
          className="bg-gradient-to-b from-white/20 to-[#166AF6]/20 mt-32 px-20 text-white p-8 rounded-3xl flex items-center justify-between container mx-auto">
        <div className="w-10/12">
          <HighlightedText
              className="[font-family:'Prompt']  font-black text-3xl md:text-4xl lg:text-[64px] text-left uppercase max-w-lg text-[var(--foreground)]"
              text={data.titre}/>
          <div className="grid grid-cols-4 gap-10 auto-rows-fr mt-10">
            {data.avantages.map((avantage, index: number) => (
                <div key={index} className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold uppercase mb-4">{avantage.titre}</h3>
                    <HighlightedText className={"max-w-md"} text={avantage.description}/>
                  </div>
                  <div className="w-5 h-5 bg-white rounded-full mt-4 self-start"></div>
                </div>
            ))}
          </div>
          <div className="-mt-[10px] w-full h-0.5 bg-white"></div>
        </div>
        <div className="w-2/12 relative">
          <Image
              src={getStrapiMedia(data.image.url) || ""}
              alt="Bob App on Phone"
              width={300}
              height={600}
              className="scale-150"
          />
        </div>
      </div>
  );
};

export default PourquoiChoisirBob;