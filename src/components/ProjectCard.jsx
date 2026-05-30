import { ExternalLink, Github, Film } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const categoryConfig = {
  'Blockchain': {
    label: 'Blockchain',
    icon: '⛓️',
    bg: 'bg-violet-50',
    text: 'text-violet-700',
    border: 'border-violet-200',
    dot: 'bg-violet-500',
  },
  'Frontend': {
    label: 'Frontend',
    icon: '🎨',
    bg: 'bg-cyan-50',
    text: 'text-cyan-700',
    border: 'border-cyan-200',
    dot: 'bg-cyan-500',
  },
  'Backend': {
    label: 'Backend',
    icon: '⚙️',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    dot: 'bg-emerald-500',
  },
  'Fullstack': {
    label: 'Fullstack',
    icon: '🚀',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    dot: 'bg-blue-500',
  },
}

export default function ProjectCard({ project }) {
  const { t } = useLanguage()
  const cfg = categoryConfig[project.category] || {
    label: project.category, icon: '📦',
    bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', dot: 'bg-slate-400'
  }

  const typeLabelMap = {
    'Projet Solo': t.projects.solo,
    'Collaboration': t.projects.collab,
    'Formation': 'Formation',
  }

  return (
    <div className="project-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
          <span>{cfg.icon}</span>
          {cfg.label}
        </span>
        <span className="text-xs text-slate-400 font-medium">
          {typeLabelMap[project.type] || project.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)] mb-2 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ExternalLink size={14} />
            {t.projects.live}
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-pink-600 hover:text-pink-800 transition-colors"
          >
            <Film size={14} />
            Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors ml-auto"
          >
            <Github size={14} />
            {t.projects.source}
          </a>
        )}
      </div>
    </div>
  )
}