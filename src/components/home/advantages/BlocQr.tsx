import HighlightedText from "@/components/common/HighlightedText";
import {StrapiPictureType} from "@/types/common";
import {getStrapiMedia} from "@/utils/url.utils";
import Image from "next/image";
import {textMediaQueries} from "../hero/HeroContent";

interface BlocQrProps {
  QRText: string;
  QRImage?: StrapiPictureType
  MockupImage: StrapiPictureType
}

export default function BlocQr({QRText, QRImage, MockupImage}: BlocQrProps) {
  const imageUrl = QRImage?.url ? getStrapiMedia(QRImage?.url) : null;
  return (
      <div className="w-full max-w-lg flex flex-col md:flex-row items-center md:items-end gap-4">
        <div className="relative w-3/4 md:w-80 h-[58vh] md:h-[32rem] lg:w-[80%] lg:h-[42rem] ">
          <Image
              src={getStrapiMedia(MockupImage.url) || "/images/Advantages/bob-mobile.png"}
              alt="Borrow and Back"
              fill
              className="object-cover"
          />
        </div>
        {/* QR Code */}
        <div className="flex-shrink-0 flex flex-col justify-end items-center gap-4 -translate-y-2">
          <HighlightedText text={QRText} className={textMediaQueries + "translate-x-4"} style={qsStyle}/>

          <div
              className={`relative w-full h-24 lg:w-full lg:h-32  bg-white rounded-lg flex-shrink-0 border border-[var(--foreground)]/10 shadow`}
              aria-label="Scannez le QR code pour télécharger l'application Borrow and Back"
          >
            {imageUrl ? (
                <Image
                    src={imageUrl || "/images/Advantages/bobQr.png"}
                    alt="QR code Borrow and Back"
                    fill
                    className="object-fill lg:object-contain rounded-lg"
                />
            ) : (
                <Image
                    src={"/images/Advantages/bobQr.png"}
                    alt="QR code Borrow and Back"
                    fill
                    className="object-fill lg:object-contain rounded-lg"
                />
            )}
          </div>
        </div>
      </div>
  )
}


const qsStyle: React.CSSProperties = {
  fontFamily: 'Outfit',
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "15px",
  lineHeight: "19px",
  textAlign: "center",
  letterSpacing: "0.68em",
}
