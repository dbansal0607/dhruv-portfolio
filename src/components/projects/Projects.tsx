import { motion } from "framer-motion";
import { PROJECTS } from "./projects.data";
import ProjectText from "./ProjectText";
import ProjectVisual from "./ProjectVisual";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-32"
    >
      {/* 🔹 SECTION HEADING */}
      <div className="px-6 md:px-16 mb-32 max-w-4xl">
        <p className="text-accent text-sm tracking-wide mb-3">
          Selected Work
        </p>

        <h2 className="text-5xl md:text-6xl font-semibold mb-6">
          Projects
        </h2>

        <p className="text-muted text-lg md:text-xl max-w-2xl">
          Deep dives into real systems I’ve built — focusing on scalability,
          performance, and production-ready engineering.
        </p>
      </div>

      {/* 🔹 PROJECT LIST */}
      <div className="space-y-40">
        {PROJECTS.map((project, index) => (
          <section
            key={project.id}
            className="relative w-full overflow-hidden"
          >
            {/* Subtle background glow */}
            <div
              className="absolute inset-0 -z-10 opacity-25"
              style={{
                background: `radial-gradient(circle at 70% 50%, ${project.accent.from}, transparent 60%)`,
              }}
            />

            <div
              className="
                relative
                z-10
                w-full
                grid
                grid-cols-1
                md:grid-cols-2
                gap-16
                px-6
                md:px-16
                items-center
              "
            >
              {/* LEFT — TEXT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <ProjectText project={project} index={index} />
              </motion.div>

              {/* RIGHT — VISUAL */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative flex justify-center"
              >
                <ProjectVisual project={project} />
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
