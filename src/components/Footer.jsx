import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Accueil
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              À propos
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-600">
              Projets
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}