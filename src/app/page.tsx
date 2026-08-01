import type { Metadata } from "next";

import { AboutPreview } from "@/components/home/about-preview";
import { BenefitsStrip } from "@/components/home/benefits-strip";
import { HomeHero } from "@/components/home/home-hero";

export const metadata: Metadata = {
  title: "Terapia Online",
  description:
    "Psicoterapia online en español, con atención profesional, cercana y confidencial.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BenefitsStrip />
      <AboutPreview />
    </>
  );
}
