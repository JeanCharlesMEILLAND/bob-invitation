"use client"
import Image from "next/image";
import Container from "@/components/ui/Container";
import {motion} from "framer-motion";

export const CTA = () => {
  return (
      <Container className="mt-16 relative">
        {/* Custom background for CTA - properly sized */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden rounded-3xl">
          <Image
              src="/circle.png"
              alt=""
              width={800}
              height={800}
              className="w-auto h-auto object-contain opacity-20 scale-110"
          />
        </div>

        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.8}}
            className="relative px-4 py-8 pb-0 sm:px-6 md:px-10 sm:py-10 md:py-14 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#166DF6] to-[#05B1F5]">
          {/* Content + Image wrapper */}
          <div className="relative z-10 h-fit">
            {/* Left: content (takes left half on md+) */}
            <div className="text-white space-y-4 sm:space-y-6 md:w-1/2 md:pr-10">
              <motion.h2
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: 0.2}}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                Commencer à bober dès maintenant !
              </motion.h2>

              <motion.p
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: 0.3}}
                  className="text-sm sm:text-base text-white/95 leading-relaxed max-w-2xl">
                Avec BOB, organiser vos échanges privés devient simple et bien
                suivi. L&#39;application est 100% gratuite, sans paiements ni
                abonnements, et toutes les fonctionnalités sont incluses.
              </motion.p>

              {/* Store badges */}
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: 0.4}}
                  className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <motion.a
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    href="https://apps.apple.com/app/id6743935044"
                    aria-label="Télécharger BOB sur l'App Store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
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
            </div>

            {/* Right: image (absolute on md+, exactly half width) */}
            <motion.div
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.5}}
                className="mt-8 md:mt-0 md:absolute bottom-10 md:-bottom-2 md:inset-y-0 md:right-0 md:w-1/2 flex items-center justify-center">
              <Image
                  src="/Group%201000001285%20(1).png"
                  alt="Aperçu de l'application sur smartphone"
                  width={1200}
                  height={800}
                  className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[560px] h-auto object-contain drop-shadow-2xl scale-110 sm:scale-120 md:scale-[130%]"
                  priority
              />
            </motion.div>
          </div>

          {/* Optional subtle right-side decoration */}
          <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(80%_80%_at_70%_50%,rgba(255,255,255,0.35)_0%,transparent_70%)]"
          />
        </motion.div>
      </Container>
  );
};