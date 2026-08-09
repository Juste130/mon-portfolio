export default function sitemap() {
  const siteUrl = 'https://mon-portfolio-two-psi.vercel.app'

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
