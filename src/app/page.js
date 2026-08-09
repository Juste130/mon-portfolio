// Server Component : pas de 'use client' ici. Chaque section qui a besoin
// d'interactivité (traductions via contexte, état local, animations Framer
// Motion) porte elle-même son propre 'use client' — voir src/components/sections.
// Ça garde la coquille de la page côté serveur et ouvre la porte à du
// data-fetching serveur ou à generateMetadata directement dans ce fichier,
// sans devoir remonter tout l'arbre en client.

import HeroSection from '@/components/sections/HeroSection'
import JourneySection from '@/components/sections/JourneySection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
