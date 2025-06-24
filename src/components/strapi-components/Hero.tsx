"use client";
import { HeroImage } from "../home/hero/HeroImage";
import SVGBob from "@/assets/svg/SVGBob";
import { HeroBackground } from "../home/hero/HeroBackground";
import { HeroContent } from "../home/hero/HeroContent";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  herocontainerVariants,
  herocontentVariants,
  heroimageVariants,
  herosvgVariants
} from "../home/hero/hero-variant";
import { StrapiPictureType } from "@/types/common";
import { getStrapiMedia } from "@/utils/url.utils";
import { useRouter } from "next/navigation";

interface downloadLink {
  text: string;
  url: string;
  newTab: boolean;
}

const Hero = ({ data }: {
  data: {
    title: string;
    sous_titre: string;
    description: string;
    picture: StrapiPictureType;
    downloadLinks: downloadLink[];
  }
}) => {
  const { picture, title, sous_titre, description, downloadLinks } = data;
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.scrollTo) {
      const supportsSmooth = 'scrollBehavior' in document.documentElement.style;
      if (supportsSmooth) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  const getLinkByPlatform = (links: downloadLink[], platform: string): downloadLink | undefined => {
    return links.find(link => link.text.toLowerCase().includes(platform.toLowerCase()));
  }

  const handleDownload = (platform: string) => {
    console.log(`Téléchargement ${platform}`);
    if (downloadLinks) {
      const link = getLinkByPlatform(downloadLinks, platform);
      if (link) {
        if (link?.newTab) {
          window.open(link?.url, '_blank', 'noopener,noreferrer');
        } else {
          router.push(link?.url);
        }
      }
    }
  };

  const handleAndroidDownload = () => handleDownload("android");
  const handleIOSDownload = () => handleDownload("ios");

  return (
    <motion.div
      className=" relative container mx-auto mt-20 lg:mt-0 px-8 min-h-screen flex justify-start items-center text-[var(--foreground)]"
      variants={herocontainerVariants}
      initial="hidden"
      animate="visible"
      data-section="hero"
    >
      <div className="flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-16">
        <motion.div
          variants={heroimageVariants}
        >
          <HeroImage
            src={getStrapiMedia(picture?.url) || "/images/bob-1 1.png"}
            alt="Borrow and Back"
          />
        </motion.div>
        <motion.div
          className="absolute top-1/2 lg:top-0 -left-20 lg:left-1/2 lg:-translate-x-1/3 -translate-y-full lg:-translate-y-0 flex justify-center -z-10"
          variants={herosvgVariants}
        >
          <SVGBob />
        </motion.div>
        <HeroBackground />
        <motion.div variants={herocontentVariants}>
          <HeroContent
            title={title}
            subtitle={sous_titre}
            description={description}
            downloadText="Téléchargez l'application"
            onAndroidDownload={handleAndroidDownload}
            onIOSDownload={handleIOSDownload}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;