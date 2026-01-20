import type { Project } from "./projects.data";

interface ProjectTextProps {
  project: Project;
  index: number;
}

export default function ProjectText({ project, index }: ProjectTextProps) {
  return (
    <div className="max-w-xl">
      {/* Project index */}
      <p className="text-sm text-accent mb-3 tracking-wide">
        Project {index + 1}
      </p>

      {/* Title */}
      <h3 className="text-4xl md:text-5xl font-semibold leading-tight mb-2">
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="text-lg text-muted mb-6">
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2 mb-8">
        {project.highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-muted"
          >
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Metrics */}
      {project.metrics && (
        <div className="grid grid-cols-3 gap-6 mb-8">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-xl font-semibold">
                {metric.value}
              </p>
              <p className="text-sm text-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-lg bg-accent text-bg font-medium shadow-lg"
          >
            Live
          </a>
        )}

        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition"
          >
            GitHub
          </a>
        )}

        {project.links.api && (
          <a
            href={project.links.api}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition"
          >
            API
          </a>
        )}
      </div>
    </div>
  );
}
