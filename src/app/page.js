import Link from 'next/link'
import Image from 'next/image'
import { skills } from '@/data/skills'
import { tools } from '@/data/tools'
import ToolIcon from '@/components/ToolIcon'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bonjour, je suis <span className="text-blue-600">Juste HOUEZO</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Développeur full-stack passionné spécialisé dans la création d&apos;expériences web modernes et performantes.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir mes projets
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
        <div className="md:w-2/5">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-1 animate-float">
            <div className="bg-white rounded-2xl p-6 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image src="/mypicture.jpg" width={130} height={130} className="text-3xl rounded-full text-blue-600 font-bold"/>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Développeur Full-Stack</h2>
                <p className="text-gray-600">Créateur d&apos;expériences digitales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mes Outils de travail</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Je maîtrise un écosystème complet d&apos;outils modernes qui couvrent l&apos;ensemble 
              du cycle de développement, de la conception UI/UX au déploiement et monitoring.
            </p>
        </div>
                                    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <ToolIcon 
              key={tool.name} 
              name={tool.name} 
              icon={tool.icon}
            />
            ))}
        </div>
      </section>
    </div>
  )
}