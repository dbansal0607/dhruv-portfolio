import { motion } from "framer-motion";

export default function About() {
  return (
    <section
  id="about"
  className="scroll-mt-24 relative w-full py-40"
>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-10">
            About Me
          </h2>

          {/* 🔽 REDUCED TEXT SIZE */}
          <div className="space-y-7 text-muted text-base md:text-lg leading-relaxed">
            <p>
              I’m Dhruv Bansal, a software engineering–focused student at
              Vellore Institute of Technology with hands-on experience
              building full-stack systems, backend APIs, and applied
              machine learning solutions.
            </p>

            <p>
              I enjoy working close to real data and real constraints —
              designing efficient search systems, scalable APIs, and
              production-ready applications that are built to survive
              real-world usage, not just demos.
            </p>

            <p>
              My interests lie in backend engineering, distributed
              systems, and applied ML — with a strong focus on writing
              clean, maintainable code that scales with both users and
              complexity.
            </p>
          </div>
        </motion.div>

        {/* RIGHT — LIVE SOFTWARE SYSTEM VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* API Layer */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="
              relative
              w-[320px]
              h-[220px]
              rounded-xl
              bg-white/5
              backdrop-blur
              border border-white/10
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              p-6
            "
          >
            <p className="text-sm text-muted mb-2">API Layer</p>
            <div className="h-2 w-3/4 bg-accent/60 rounded mb-2" />
            <div className="h-2 w-2/3 bg-accent/40 rounded mb-2" />
            <div className="h-2 w-1/2 bg-accent/30 rounded" />
          </motion.div>

          {/* Backend Services */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute
              top-[60%]
              left-[60%]
              w-[260px]
              h-[180px]
              rounded-xl
              bg-white/5
              backdrop-blur
              border border-white/10
              shadow-[0_25px_70px_rgba(0,0,0,0.6)]
              p-5
            "
          >
            <p className="text-sm text-muted mb-2">Backend Services</p>
            <div className="h-2 w-2/3 bg-accent/50 rounded mb-2" />
            <div className="h-2 w-1/2 bg-accent/35 rounded" />
          </motion.div>

          {/* Database Node */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute
              top-[20%]
              right-[65%]
              w-24
              h-24
              rounded-full
              bg-accent/20
              blur-[2px]
              flex items-center justify-center
              text-sm
              text-accent
            "
          >
            DB
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
