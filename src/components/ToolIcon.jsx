export default function ToolIcon({ name, icon, color }) {
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