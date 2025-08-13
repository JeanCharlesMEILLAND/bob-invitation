"use client"
import Image from 'next/image'
import Container from '@/components/ui/Container'
import {WhiteGradient} from "@/components/WhiteGradient";
import {CircleBg} from "@/components/CircleBg";
import {motion} from 'framer-motion';

export default function Hero() {
  return (
      <motion.section
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          className="relative pt-32 sm:pt-20 md:pt-28 pb-4 z-10 p"> {/* Responsive padding top */}

        {/* Hero background image - absolute positioned on right, vertically centered */}
        <CircleBg/>

        {/*<WhiteGradient/>*/}

        {/* Fonds décoratifs */}
        <div className="absolute inset-0 -z-10 bg-hero-radial bg-no-repeat opacity-70"/>
        <div
            className="absolute inset-0 -z-20 bg-grid opacity-[0.25] [mask-image:radial-gradient(circle at center,black,transparent_70%)]"/>

        <Container className="text-center space-y-10 relative z-10">
          {/* Badge conformité */}
          <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
              className="-mt-4 sm:-mt-6 inline-flex items-center gap-2 rounded-full border border-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-accent">
            <span className="hidden sm:inline">Usage privé entre proches • Aucune transaction financière • Pas de mise en relation publique</span>
            <span className="sm:hidden">Usage privé • Sans transaction • Confidentiel</span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.4}}
              className="mt-6 sm:mt-10 md:mt-22 text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-accent">
          <span className="bg-gradient-to-tr from-[#00C9F7] to-[#166AF6] bg-clip-text text-transparent font-bold">
            Bober
          </span>
            , c&#39;est partager, aider, organiser…
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.6}}
              className="mx-auto max-w-3xl text-base sm:text-lg text-accent leading-relaxed px-4 sm:px-6 md:px-0">
            Gérez vos échanges d&#39;
            <strong className="text-accent">objets</strong>, de{" "}
            <strong className="text-accent">services</strong> et vos{" "}
            <strong className="text-accent">événements</strong> — en toute
            simplicité et confidentialité, uniquement avec vos contacts.
          </motion.p>

          {/* Légende rapprochée */}
          <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.7}}
              className="text-base text-accent text- -mt-2">
            Disponible sur iOS et Android
          </motion.p>

          {/* Badges stores */}
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.8}}
              id="download"
              className="flex flex-wrap items-center justify-center gap-5 pt-4"
          >
            <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="https://apps.apple.com/app/id6743935044"
                aria-label="Télécharger BOB sur l'App Store"
                className="inline-flex"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/app-badges/appstore.svg"
                  alt="Disponible sur l'App Store"
                  width={180}
                  height={54}
                  priority
              />
            </motion.a>
            <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="https://play.google.com/store/apps/details?id=com.bobapp"
                aria-label="Télécharger BOB sur Google Play"
                className="inline-flex"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/app-badges/playstore.svg"
                  alt="Disponible sur Google Play"
                  width={190}
                  height={54}
                  priority
              />
            </motion.a>
          </motion.div>
        </Container>
      </motion.section>
  );
}
