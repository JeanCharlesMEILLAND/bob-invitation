"use client"

import ItemSwiper from "@/components/item-swiper/ItemSwiper";
import Container from "@/components/ui/Container";
import Image from "next/image";
import {motion} from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Sarah, présidente d'asso",
    text: "On a évité l'achat de matériel en doublon. L'interface est simple et tout le monde s'y retrouve.",
  },
  {
    name: "Karim, voisinage",
    text: "On se prête outillage et jeux pour les enfants. Les rappels évitent les oublis.",
  },
  {
    name: "Élodie, RH",
    text: "Parfait pour animer un collectif interne sur plusieurs sites. Traçabilité légère mais suffisante.",
  },
  {
    name: "Karim, voisinage",
    text: "On se prête outillage et jeux pour les enfants. Les rappels évitent les oublis.",
  },
  {
    name: "Élodie, RH",
    text: "Parfait pour animer un collectif interne sur plusieurs sites. Traçabilité légère mais suffisante.",
  },
]

export default function Testimonials() {
  return (
      <motion.section
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.8}}
          id="testimonials"
          className="">
        <Container>
          <motion.h2
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="text-3xl sm:text-4xl md:text-5xl text-accent text-center">
            Ils en parlent
          </motion.h2>

          <motion.div
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.7, delay: 0.2}}
          >
            <ItemSwiper className="mt-8 ">
              {TESTIMONIALS.map((t, index) => (
                  <motion.div
                      initial={{opacity: 0, scale: 0.9}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{duration: 0.5, delay: index * 0.1}}
                      className={" max-w-xs mx-auto md:max-w-none cursor-grab bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-5 w-full"}
                      key={index}
                      whileHover={{y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"}}
                  >
                    <Image
                        src="/el_quote-alt.svg"
                        alt="Décor graphique"
                        width={40}
                        height={40}
                        className="ml-auto"
                    />
                    <p className="font-medium text-sm sm:text-base text-accent">{t.text}</p>
                    <p className="font-extrabold text-xs sm:text-sm md:text-base text-accent text-center"> - {t.name}</p>
                  </motion.div>
              ))}
            </ItemSwiper>
          </motion.div>
        </Container>
      </motion.section>
  )
}