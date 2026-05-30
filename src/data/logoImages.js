/**
 * Configuration centralisée pour les logos d'outils avec images
 * 
 * Structure :
 * {
 *   toolName: {
 *     image: '/path/to/image.jpg',  // Image JPEG/PNG optimisée
 *     fallback: SVGComponent,       // SVG de secours
 *   }
 * }
 */

// SVG Fallback pour Antigravity (au cas où l'image ne chargerait pas)
const AntigravitySVG = (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon
      points="50,8 92,38 78,88 22,88 8,38"
      fill="#5B21B6"
    />
    <line x1="50" y1="22" x2="22" y2="88" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
    <line x1="50" y1="22" x2="78" y2="88" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
    <line x1="30" y1="62" x2="70" y2="62" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="50" cy="20" r="4" fill="#C4B5FD"/>
  </svg>
)
const EtherscanSVG = (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="45" fill="#21325B" />
    <path d="M30,70 L70,70 L70,30 L30,30 Z M40,60 L60,60 L60,40 L40,40 Z" fill="#F3F4F6" />
  </svg>
)

export const logoImages = {
  'Antigravity': {
    image: '/antigravity-logo.jpg',  // Place votre image JPEG ici
    fallback: AntigravitySVG,
    color: '#5B21B6',
  },
  'Etherscan': {
    image: '/etherscan-logo.jpg',  // Placez l'image JPEG d'Etherscan ici
    fallback: EtherscanSVG, // Vous pouvez créer un SVG de secours pour Etherscan si vous le souhaitez
    color: '#21325B',
  },
  // ... Ajouter d'autres outils avec images ici
}
