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
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #312e81 100%)',
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
            width: 14,
            height: 14,
            borderRadius: 999,
            background: '#34d399',
          }}
        />
        <div style={{ display: 'flex', color: '#34d399', fontSize: 26, fontWeight: 600, letterSpacing: 1 }}>
          AVAILABLE FOR NEW PROJECTS
        </div>
      </div>

      <div style={{ display: 'flex', color: '#ffffff', fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>
        Juste HOUEZO
      </div>

      <div style={{ display: 'flex', color: '#93c5fd', fontSize: 40, fontWeight: 700, marginTop: 18 }}>
        Full-Stack &amp; Blockchain Developer
      </div>

      <div style={{ display: 'flex', gap: 16, marginTop: 44 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 28px',
            borderRadius: 999,
            background: 'rgba(6, 182, 212, 0.15)',
            border: '2px solid rgba(6, 182, 212, 0.4)',
            color: '#67e8f9',
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          React · Next.js · Node.js
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 28px',
            borderRadius: 999,
            background: 'rgba(139, 92, 246, 0.15)',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            color: '#c4b5fd',
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          Solidity · Hardhat
        </div>
      </div>
    </div>
  )
}
