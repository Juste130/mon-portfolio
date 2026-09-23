import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', axes: ['opsz', 'SOFT', 'WONK'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

const siteUrl = 'https://mon-portfolio-two-psi.vercel.app'
const title = 'Juste HOUEZO | Frontend, Fullstack & Web3 Developer'
const description = 'Portfolio of Juste HOUEZO — Frontend-focused developer building across Web2 (Next.js, React, Node.js) and Web3 (Solidity, Hardhat, EVM). Based in Benin.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Juste HOUEZO',
  },
  description,
  keywords: ['Juste HOUEZO', 'Frontend Developer', 'Fullstack Developer', 'Blockchain Developer', 'Solidity', 'Next.js', 'React', 'Web3', 'Benin'],
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

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`

export default function RootLayout({ children }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Juste HOUEZO',
    alternateName: 'Juste130',
    url: siteUrl,
    image: `${siteUrl}/profile.webp`,
    jobTitle: 'Frontend, Fullstack (Web2) & Web3 (EVM) Developer',
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
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider>
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
        </ThemeProvider>
      </body>
    </html>
  )
}
