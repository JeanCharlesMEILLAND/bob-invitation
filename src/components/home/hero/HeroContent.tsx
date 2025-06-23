import HighlightedText from "@/components/common/HighlightedText";
import {HeroCTA} from "./HeroCta";
import {motion} from "framer-motion";
import {
  heroContentcontentVariants,
  heroContentctaVariants,
  heroContentitemVariants,
  heroContenttitleVariants
} from "./hero-variant";

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
  downloadText?: string;
  onAndroidDownload?: () => void;
  onIOSDownload?: () => void;
}

export function HeroContent({
                              title,
                              subtitle,
                              description,
                              downloadText,
                              onAndroidDownload,
                              onIOSDownload
                            }: HeroContentProps) {
  return (
      <motion.div
          className="flex flex-col items-center lg:items-start gap-8"
          variants={heroContentcontentVariants}
          initial="hidden"
          animate="visible"
      >
        {/* Titre */}
        <motion.div variants={heroContenttitleVariants}>
          <HighlightedText text={title} style={titleStyle}
                           className={textMediaQueries + " text-4xl md:text-5xl lg:text-[74px] lg:[line-height:112px]"}/>
        </motion.div>

        <motion.div variants={heroContentitemVariants}>
          <HighlightedText text={subtitle} style={subtitleStyle}
                           className={textMediaQueries + " text-2xl md:text-3xl lg:text-[36px]"}/>
        </motion.div>

        <motion.div variants={heroContentitemVariants}>
          <HighlightedText text={description} style={descriptionStyle} className={textMediaQueries}/>
        </motion.div>

        <motion.div variants={heroContentctaVariants}>
          <HeroCTA
              downloadText={downloadText}
              androidButtonProps={{
                iconSrc: "/images/buttons/downloadonandroid.png",
                iconAlt: "Download on Android",
                onClick: onAndroidDownload
              }}
              iosButtonProps={{
                iconSrc: "/images/buttons/downloadonapple.png",
                iconAlt: "Download on Apple Store",
                onClick: onIOSDownload
              }}
              textMediaQueries={textMediaQueries}
          />
        </motion.div>
      </motion.div>
  );
}

const titleStyle: React.CSSProperties = {
  fontFamily: 'Prompt',
  fontStyle: "normal",
  fontWeight: 900,
};

const subtitleStyle: React.CSSProperties = {
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "130%",
  letterSpacing: "-0.06em",
};

const descriptionStyle: React.CSSProperties = {
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "20px",
  lineHeight: "140%",
};


export const textMediaQueries = "text-center lg:text-start";