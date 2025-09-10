import Link from 'next/link'

export default function ProjectCard({ project, index }) {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
        <div className="text-5xl text-blue-600 font-bold">{project.id}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link 
            href={project.githubUrl} 
            target="_blank"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            Code source
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          {project.liveUrl && (
            <Link 
              href={project.liveUrl} 
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir le projet
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}