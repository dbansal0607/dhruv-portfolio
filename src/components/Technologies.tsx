import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiVercel,
} from "react-icons/si";

const technologies = [
  // Frontend
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Vite", icon: SiVite },

  // Backend
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "FastAPI", icon: SiFastapi },

  // Data / ML
  { name: "Python", icon: SiPython },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Jupyter", icon: SiJupyter },

  // Databases
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },

  // DevOps / Tools
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "Vercel", icon: SiVercel },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative w-full py-40 px-6 md:px-16 overflow-hidden"
    >
      {/* Ambient continuation */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(108,124,255,0.12),transparent_60%)]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Technologies
        </h2>
        <p className="text-muted text-lg">
          Tools and technologies I use to design, build, and scale modern software systems.
        </p>
      </motion.div>

      {/* ICON GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-14">
        {technologies.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.3 }}
            className="relative group flex flex-col items-center justify-center cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute w-24 h-24 rounded-full bg-accent/30 blur-3xl opacity-0 group-hover:opacity-100 transition" />

            {/* Icon */}
            <Icon className="text-4xl text-muted group-hover:text-accent transition relative z-10" />

            {/* Name */}
            <span className="mt-3 text-sm text-accent opacity-0 group-hover:opacity-100 transition tracking-wide">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
