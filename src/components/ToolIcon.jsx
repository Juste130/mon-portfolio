'use client'

import LogoImage from './LogoImage'
import { logoImages } from '@/data/logoImages'

export default function ToolIcon({ name, icon, color, image }) {
  // Si une image est fournie, utiliser le composant LogoImage
  if (image) {
    const logoConfig = logoImages[name]
    return (
      <div className="tool-card group">
        <div className="flex items-center justify-center w-10 h-10">
          <LogoImage 
            src={logoConfig?.image}
            svgFallback={logoConfig?.fallback || icon}
            alt={`${name} logo`}
            name={name}
            size={40}
            className="rounded"
          />
        </div>
        <span className="text-xs font-semibold text-center text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">
          {name}
        </span>
      </div>
    )
  }

  // Sinon, afficher l'icône SVG comme avant
  return (
    <div className="tool-card group">
      <div className="flex items-center justify-center w-10 h-10">
        {icon}
      </div>
      <span className="text-xs font-semibold text-center text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">
        {name}
      </span>
    </div>
  )
}