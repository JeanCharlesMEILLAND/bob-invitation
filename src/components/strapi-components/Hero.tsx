"use client";
import { HeroImage } from "../home/hero/HeroImage";
import SVGBob from "@/assets/svg/SVGBob";
import { HeroBackground } from "../home/hero/HeroBackground";
import { HeroContent } from "../home/hero/HeroContent";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import { herocontainerVariants, herocontentVariants, heroimageVariants, herosvgVariants } from "../home/hero/hero-variant";

const Hero = () => {

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

  const handleAndroidDownload = () => {
    console.log("Téléchargement Android");
  };

  const handleIOSDownload = () => {
    console.log("Téléchargement iOS");
  };


  return (
    <motion.div 
      className="relative container mx-auto mt-20 lg:mt-0 px-8 min-h-screen flex justify-start items-center text-[var(--foreground)]"
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
            src="/images/bob-1 1.png"
            alt="Borrow and Back"
          />
        </motion.div>

        <motion.div 
          className="absolute top-1/2 lg:top-0 -left-20 lg:left-1/2  lg:-translate-x-1/3 -translate-y-full lg:-translate-y-0 flex justify-center -z-10"
          variants={herosvgVariants}
        >
          <SVGBob />
        </motion.div>

        <HeroBackground />

        <motion.div variants={herocontentVariants}>
          <HeroContent
            title="<h1>BORROW & BACK</h1>"
            subtitle="Partagez, Empruntez, Réduisez vos Dépenses avec BOB !"
            description="Avec Bob, gérez vos prêts d'objets et d'argent en toute simplicité. Ajoutez vos amis, définissez des rappels et gardez le contrôle sans jamais rien oublier !"
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

