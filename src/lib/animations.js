// Variantes Framer Motion partagées entre les sections.
// Fichier volontairement sans 'use client' : ce sont de simples objets,
// importables aussi bien depuis des Server Components que des Client Components.

export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}
