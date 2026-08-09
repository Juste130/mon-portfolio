export default function robots() {
  const siteUrl = 'https://mon-portfolio-two-psi.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
