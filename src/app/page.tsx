import Hero from '@/components/sections/Hero'
import {FeaturesHighlight} from "@/components/sections/FeaturesHighlight";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import {CTA} from "@/components/sections/CTA";

export default function Page() {
  return (
      <>
        <Hero/>
        <Features/>
        <FeaturesHighlight/>
        <Testimonials/>
        <CTA/>
      </>
  )
}
