// Contenu visuel partagé par app/opengraph-image.jsx et app/twitter-image.jsx.
// Volontairement séparé des fichiers de convention Next.js : ces derniers doivent
// exporter runtime/alt/size/contentType directement pour que Next les détecte
// statiquement — un re-export ne fonctionne pas (voir avertissement de build).
//
// Les couleurs et la police reprennent le vrai design system du site
// (papier/encre + accent terracotta, Fraunces en display) pour que l'aperçu
// du lien corresponde à ce que voit réellement un visiteur.

const FRAUNCES_TEXT = 'Juste Houezo.'

async function loadGoogleFont(family, weight, text) {
  try {
    const textParam = text ? `&text=${encodeURIComponent(text)}` : ''
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}${textParam}`)
    ).text()
    const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/)
    if (!match) return null
    const res = await fetch(match[1])
    if (res.status !== 200) return null
    return await res.arrayBuffer()
  } catch {
    return null
  }
}

// On charge Fraunces (titre) ET Inter (tout le reste) explicitement : satori
// utilise n'importe quelle police chargée pour combler un glyphe manquant du
// générique "sans-serif", donc sans Inter enregistré, des lettres du texte
// courant se retrouvaient rendues avec les glyphes de Fraunces.
export async function loadOgFonts() {
  const [fraunces, inter] = await Promise.all([
    loadGoogleFont('Fraunces', 700, FRAUNCES_TEXT),
    loadGoogleFont('Inter', 600),
  ])
  const fonts = []
  if (fraunces) fonts.push({ name: 'Fraunces', data: fraunces, style: 'normal', weight: 700 })
  if (inter) fonts.push({ name: 'Inter', data: inter, style: 'normal', weight: 600 })
  return fonts
}

export function OgImageContent() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#faf8f3',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 36,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 10,
            height: 10,
            borderRadius: 999,
            background: '#c1502e',
          }}
        />
        <div style={{ display: 'flex', color: '#948c7a', fontSize: 22, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>
          Available for new projects — remote friendly
        </div>
      </div>

      <div style={{ display: 'flex', color: '#16140f', fontSize: 88, fontFamily: 'Fraunces, serif', lineHeight: 1.05 }}>
        Juste Houezo<span style={{ display: 'flex', color: '#c1502e' }}>.</span>
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 32, fontSize: 28, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
        <span style={{ display: 'flex', color: '#16140f' }}>Frontend Developer</span>
        <span style={{ display: 'flex', color: '#c1502e' }}>—</span>
        <span style={{ display: 'flex', color: '#16140f' }}>Fullstack (Web2)</span>
        <span style={{ display: 'flex', color: '#c1502e' }}>—</span>
        <span style={{ display: 'flex', color: '#16140f' }}>Web3 Engineer</span>
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 48 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 24px',
            border: '1px solid #e2dacb',
            color: '#55503f',
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          React · Next.js · Node.js
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 24px',
            border: '1px solid #c1502e',
            color: '#c1502e',
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Solidity · Hardhat
        </div>
      </div>
    </div>
  )
}
