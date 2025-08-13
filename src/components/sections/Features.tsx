"use client"

import {FeaturesCard} from "@/components/FeaturesCard";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Features() {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
  };

  const imageVariants = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  return (
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={containerVariants}
          className="
              mt-10
              grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_1.6fr_1fr] grid-rows-auto lg:grid-rows-3 gap-6
              items-center justify-items-stretch
              max-w-6xl mx-auto overflow-visible px-4 sm:px-6 md:px-8
              relative z-20
            "
          id={"features"}
      >
        {/* Left column (rows 1..3) on desktop, first row items 1,2,3 on tablet */}
        <motion.div variants={itemVariants} className="mx-auto md:mt-8 lg:mt-0 md:ml-5 lg:col-start-1 lg:row-start-1">
          <FeaturesCard
              icon={"/icons/Entre proches.svg"}
              title={"Entre proches uniquement"}
              description={"Fonctionne avec les contacts de votre téléphone. Pas d'annuaire public, pas d'inconnus."}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="mx-auto md:-mt-4 lg:mt-0 md:mr-5 lg:col-start-1 lg:row-start-2">
          <FeaturesCard
              icon={"/icons/Frame 1597880141.svg"}
              title={"Messagerie intégrée"}
              description={"Discutez en tête-à-tête pour vos échanges ou utilisez le chat d'événement pour coordonner un groupe."}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="mx-auto md:mt-8 lg:mt-0 md:ml-5 lg:col-start-1 lg:row-start-3">
          <FeaturesCard
              icon={"/icons/Frame 1597880138.svg"}
              title={"Échanges d'objets & services"}
              description={"Proposez ou demandez en privé : un geste, une confirmation… et l'échange est suivi automatiquement."}
          />
        </motion.div>

        {/* Center image - full width on mobile, spanning all 3 middle rows on desktop, middle row on tablet */}
        <motion.div
            variants={imageVariants}
            className="my-8 md:my-0 md:col-span-3 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-3 justify-self-center self-center"
        >
          <Image
              src="/central.png"
              alt="Aperçu de l'événement"
              width={700}
              height={700}
              className="w-full h-auto max-w-[300px] md:max-w-full object-contain z-10 mx-auto"
          />
        </motion.div>

        {/* Right column (rows 1..3) on desktop, third row items 4,5,6 on tablet */}
        <motion.div variants={itemVariants} className="mx-auto md:-mt-4 lg:mt-0 md:mr-5 lg:col-start-3 lg:row-start-1">
          <FeaturesCard
              icon={"/icons/Frame 1597880140.svg"}
              title={"Rappels & agenda"}
              description={"Rappels automatiques des deux côtés et ajout à l'agenda pour éviter les oublis."}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="mx-auto md:mt-8 lg:mt-0 md:ml-5 lg:col-start-3 lg:row-start-2">
          <FeaturesCard
              icon={"/icons/Frame 1597880139.svg"}
              title={"Événements privés"}
              description={"Invitez un petit groupe. Liste mixte (objets, consommables, services) et positionnement en 1 clic."}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="mx-auto md:-mt-4 lg:mt-0 md:mr-5 lg:col-start-3 lg:row-start-3">
          <FeaturesCard
              icon={"/icons/Frame 1597880142.svg"}
              title={"Confidentialité intégrée"}
              description={"Aucune transaction financière. Aucune mise en relation publique. Historique personnel."}
          />
        </motion.div>
      </motion.div>
  )
}