import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Project } from "./projects.data";

interface ProjectVisualProps {
  project: Project;
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx);
    y.set(dy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="perspective-[1200px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="
          relative
          w-full
          max-w-md
          h-[340px]
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_60px_140px_rgba(0,0,0,0.65)]
          overflow-hidden
        "
      >
        {/* glow light */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at top left, ${project.accent.from}55, transparent 60%)`,
          }}
        />

        {/* inner content (floating layer) */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 translate-z-20">
          <p className="text-xs tracking-widest uppercase text-muted mb-3">
            {project.visualType.replace("-", " ")}
          </p>

          <h4 className="text-2xl font-semibold mb-2">
            {project.title}
          </h4>

          <p className="text-sm text-muted">
            {project.subtitle}
          </p>
        </div>

        {/* depth shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl" />
      </motion.div>
    </div>
  );
}
