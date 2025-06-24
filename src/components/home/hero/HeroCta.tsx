import HighlightedText from "@/components/common/HighlightedText";
import {BobButton} from "@/components/ui/BobButton";
import {motion} from "framer-motion";
import React from "react";
import {heroCtabuttonsContainerVariants, heroCtactaVariants, heroCtatextVariants} from "./hero-variant";

interface HeroCTAProps {
  downloadText?: string;
  androidButtonProps?: {
    iconSrc: string;
    iconAlt: string;
    onClick?: () => void;
  };
  iosButtonProps?: {
    iconSrc: string;
    iconAlt: string;
    onClick?: () => void;
  };
  textMediaQueries?: string;
}

export function HeroCTA({
                          downloadText = "Téléchargez l'application",
                          androidButtonProps,
                          iosButtonProps,
                          textMediaQueries
                        }: HeroCTAProps) {
  return (
      <motion.div
          className="flex flex-col gap-8"
          variants={heroCtactaVariants}
          initial="hidden"
          animate="visible"
      >
        <motion.div variants={heroCtatextVariants}>
          <HighlightedText text={downloadText} style={downloadTextStyle} className={textMediaQueries}/>
        </motion.div>

        <motion.div
            className="flex flex-row justify-center lg:justify-start gap-4"
            variants={heroCtabuttonsContainerVariants}
        >
          {androidButtonProps && (
              <BobButton
                  iconSrc={androidButtonProps.iconSrc}
                  iconAlt={androidButtonProps.iconAlt}
                  onClick={androidButtonProps.onClick}
              />
          )}

          {iosButtonProps && (
              <BobButton
                  iconSrc={iosButtonProps.iconSrc}
                  iconAlt={iosButtonProps.iconAlt}
                  onClick={iosButtonProps.onClick}
              />
          )}
        </motion.div>
      </motion.div>
  );
}


const downloadTextStyle: React.CSSProperties = {
  fontFamily: 'Outfit',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "19px",
  letterSpacing: "0.75em",
  textTransform: "uppercase",
  color: "#0BCAFF",
};
