import HighlightedText from "@/components/common/HighlightedText";
import { BobButton } from "@/components/ui/BobButton";
import { motion, Variants } from "framer-motion";
import React from "react";
import { heroCtabuttonsContainerVariants, heroCtabuttonVariants, heroCtactaVariants, heroCtatextVariants } from "./hero-variant";

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
}

export function HeroCTA({
  downloadText = "Téléchargez l'application",
  androidButtonProps,
  iosButtonProps
}: HeroCTAProps) {


  return (
    <motion.div
      className="flex flex-col gap-8"
      variants={heroCtactaVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={heroCtatextVariants}>
        <HighlightedText text={downloadText} style={downloadTextStyle} />
      </motion.div>

      <motion.div
        className="flex flex-row gap-4"
        variants={heroCtabuttonsContainerVariants}
      >
        {androidButtonProps && (
          <motion.div
            variants={heroCtabuttonVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <BobButton
              iconSrc={androidButtonProps.iconSrc}
              iconAlt={androidButtonProps.iconAlt}
              onClick={androidButtonProps.onClick}
            />
          </motion.div>
        )}

        {iosButtonProps && (
          <motion.div
            variants={heroCtabuttonVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <BobButton
              iconSrc={iosButtonProps.iconSrc}
              iconAlt={iosButtonProps.iconAlt}
              onClick={iosButtonProps.onClick}
            />
          </motion.div>
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
