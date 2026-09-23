import { ExternalLink, Github, Film, LayoutGrid, Server, Blocks, Layers } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const categoryConfig = {
  Blockchain: { label: 'Blockchain', Icon: Blocks },
  Frontend: { label: 'Frontend', Icon: LayoutGrid },
  Backend: { label: 'Backend', Icon: Server },
  Fullstack: { label: 'Fullstack', Icon: Layers },
}

export default function ProjectCard({ project }) {
  const { t } = useLanguage()
  const cfg = categoryConfig[project.category] || { label: project.category, Icon: Layers }
  const { Icon } = cfg

  // Get translated project data
  const translatedProject = t.projects.projectsList?.find(p => p.id === project.id)
  const displayTitle = translatedProject?.title || project.title
  const displayDescription = translatedProject?.description || project.description

  const typeLabelMap = {
    'Projet Solo': t.projects.solo,
    'Solo Project': t.projects.solo,
    'Collaboration': t.projects.collab,
    'Formation': t.projects.training,
    'Training': t.projects.training,
    'Entrainement': t.projects.training,
  }

  const displayType = typeLabelMap[project.type] || project.type

  return (
    <div className="project-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="chip">
          <Icon size={12} />
          {cfg.label}
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
          {displayType}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl text-ink mb-2">
        {displayTitle}
      </h3>

      {/* Description */}
      <p className="text-sm text-ink-soft leading-relaxed mb-4 flex-grow">
        {displayDescription}
      </p>

      {/* Tech breakdown — montre explicitement la part frontend, même sur les projets Web3 */}
      {project.techBreakdown && (
        <p className="font-mono text-[0.7rem] text-muted leading-relaxed mb-4">
          {project.techBreakdown}
        </p>
      )}

      {/* Tags */}
      <p className="font-mono text-[0.65rem] uppercase tracking-wide text-muted mb-5">
        {project.tags.join(' · ')}
      </p>

      {/* Links */}
      <div className="flex gap-4 mt-auto pt-4 border-t border-border">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink hover:text-accent transition-colors"
          >
            <ExternalLink size={13} />
            {t.projects.live}
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink hover:text-accent transition-colors"
          >
            <Film size={13} />
            Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-accent transition-colors ml-auto"
          >
            <Github size={13} />
            {t.projects.source}
          </a>
        )}
      </div>
    </div>
  )
}
