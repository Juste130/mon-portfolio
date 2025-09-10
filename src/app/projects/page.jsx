import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Mes Projets</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Une sélection de mes travaux récents, allant du développement frontend au backend.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
          />
        ))}
      </div>
    </div>
  )
}