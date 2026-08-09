import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

const siteUrl = 'https://mon-portfolio-two-psi.vercel.app'
const title = 'Juste HOUEZO | Full-Stack & Blockchain Developer'
const description = 'Portfolio of Juste HOUEZO, Full-Stack and EVM Blockchain Developer based in Benin. Next.js, React, Node.js, Solidity, Hardhat.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Juste HOUEZO',
  },
  description,
  keywords: ['Juste HOUEZO', 'Full-Stack Developer', 'Blockchain Developer', 'Solidity', 'Next.js', 'React', 'Web3', 'Benin'],
  authors: [{ name: 'Juste HOUEZO', url: 'https://github.com/Juste130' }],
  creator: 'Juste HOUEZO',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Juste HOUEZO — Portfolio',
    title,
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@Juste130',
  },
}

export default function RootLayout({ children }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Juste HOUEZO',
    alternateName: 'Juste130',
    url: siteUrl,
    image: `${siteUrl}/profile.webp`,
    jobTitle: 'Full-Stack & Blockchain Developer',
    description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BJ',
    },
    email: 'mailto:houezojuste0@gmail.com',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: "Institut de Formation et de Recherche en Informatique (IFRI), Université d'Abomey-Calavi",
    },
    knowsAbout: ['React', 'Next.js', 'Node.js', 'Solidity', 'Hardhat', 'Web3', 'Blockchain'],
    sameAs: [
      'https://github.com/Juste130',
      'https://www.linkedin.com/in/juste-houezo/',
      'https://twitter.com/Juste130',
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Aller au contenu principal
          </a>
          <Navigation />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}