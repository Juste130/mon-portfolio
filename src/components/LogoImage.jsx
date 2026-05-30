'use client'

import { useState } from 'react'

/**
 * Smart Logo Component - Gère les images de logo avec fallback, optimization et accessibility
 * 
 * Utilise une img native (meilleur support d'erreur) + Next.js Image en optionnel
 */
export default function LogoImage({ 
  src,           // Path to image (e.g., '/antigravity-logo.jpg')
  svgFallback,   // Composant SVG de secours
  alt,           // Text alternatif (requis pour l'accessibilité)
  name,          // Nom du logo pour debug
  size = 40,     // Taille en pixels
  className = '' // Classes additionnelles
}) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Si pas d'image ou erreur de chargement → afficher le SVG fallback
  if (!src || imageError) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ width: `${size}px`, height: `${size}px` }}
        title={alt}
      >
        {svgFallback ? (
          <div className="w-full h-full">
            {svgFallback}
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            {name?.[0]?.toUpperCase() || '?'}
          </div>
        )}
      </div>
    )
  }

  return (
    <div 
      className={`relative overflow-hidden rounded flex items-center justify-center ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      {/* Utilise img native pour meilleur support d'erreur */}
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          console.warn(`Logo image failed to load: ${src}`)
          setImageError(true)
          setIsLoading(false)
        }}
        className="w-full h-full object-contain"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  )
}
