import HighlightedText from "@/components/common/HighlightedText";
import { HeroCTA } from "./HeroCta";
import { motion, Variants } from "framer-motion";
import { heroContentcontentVariants, heroContentctaVariants, heroContentitemVariants, heroContenttitleVariants } from "./hero-variant";

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
      className="flex flex-col gap-8"
      variants={heroContentcontentVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Titre */}
      <motion.div variants={heroContenttitleVariants}>
        <HighlightedText text={title} style={titleStyle} />
      </motion.div>

      <motion.div variants={heroContentitemVariants}>
        <HighlightedText text={subtitle} style={subtitleStyle} />
      </motion.div>

      <motion.div variants={heroContentitemVariants}>
        <HighlightedText text={description} style={descriptionStyle} />
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
        />
      </motion.div>
    </motion.div>
  );
}

const titleStyle: React.CSSProperties = {
  fontFamily: 'Prompt',
  fontStyle: "normal",
  fontWeight: 900,
  fontSize: "74px",
  lineHeight: "112px",
};

const subtitleStyle: React.CSSProperties = {
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "36px",
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


