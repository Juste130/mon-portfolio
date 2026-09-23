// Contenu visuel partagé par app/opengraph-image.jsx et app/twitter-image.jsx.
// Volontairement séparé des fichiers de convention Next.js : ces derniers doivent
// exporter runtime/alt/size/contentType directement pour que Next les détecte
// statiquement — un re-export ne fonctionne pas (voir avertissement de build).

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
        background: '#131110',
        fontFamily: 'sans-serif',
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
            alignItems: 'center',
            justifyContent: 'center',
            width: 10,
            height: 10,
            borderRadius: 999,
            background: '#e37a48',
          }}
        />
        <div style={{ display: 'flex', color: '#857e6e', fontSize: 24, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>
          Available for new projects
        </div>
      </div>

      <div style={{ display: 'flex', color: '#f3eee3', fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
        Juste Houezo.
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 32, fontSize: 30, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
        <span style={{ display: 'flex', color: '#f3eee3' }}>Frontend Developer</span>
        <span style={{ display: 'flex', color: '#857e6e' }}>—</span>
        <span style={{ display: 'flex', color: '#c7c0b0' }}>Fullstack (Web2)</span>
        <span style={{ display: 'flex', color: '#857e6e' }}>—</span>
        <span style={{ display: 'flex', color: '#c7c0b0' }}>Web3 Engineer</span>
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 48 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 24px',
            border: '1px solid #2b2723',
            color: '#c7c0b0',
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          React · Next.js · Node.js
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 24px',
            border: '1px solid #e37a48',
            color: '#e37a48',
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          Solidity · Hardhat
        </div>
      </div>
    </div>
  )
}
