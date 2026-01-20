import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100svh] w-full flex items-center overflow-visible isolate"
    >
      {/* 🌌 FULL-SCREEN AMBIENT */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060a16] via-[#0b0e14] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_55%,rgba(108,124,255,0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(108,124,255,0.28),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            max-w-xl
            md:-translate-x-8
            lg:-translate-x-14
          "
        >
          {/* 🔹 INTRO (BIGGER) */}
          <p className="text-accent text-base md:text-lg mb-4 tracking-wide">
            Hi! I’m Dhruv Bansal
          </p>

          {/* 🔥 MAIN HERO TEXT */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Software Engineering Student
          </h1>

          {/* 🔽 REDUCED SUPPORT TEXT */}
          <p className="mt-4 text-base md:text-lg text-muted opacity-90">
            Building scalable systems and data-driven applications
          </p>

          <p className="mt-2 text-sm md:text-base text-muted opacity-70 tracking-wide">
            Backend • Full-Stack • Machine Learning • Systems Thinking
          </p>

          {/* CTA */}
          <div className="mt-10 flex gap-5">
            <a
              href="#projects"
              className="
                px-8 py-3.5 rounded-lg
                bg-accent text-bg font-medium text-base
                shadow-[0_18px_55px_rgba(108,124,255,0.6)]
                hover:shadow-[0_22px_70px_rgba(108,124,255,0.8)]
                transition
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-8 py-3.5 rounded-lg
                border border-white/20
                hover:bg-white/5
                transition
              "
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="relative flex justify-center md:justify-end translate-y-6">
          {/* 🫧 BLOB */}
          <motion.svg
            viewBox="0 0 500 500"
            className="
              absolute
              w-[760px]
              h-[760px]
              -z-10
              left-1/5
              translate-x-12
            "
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          >
            <motion.path
              fill="url(#blobGradient)"
              animate={{
                d: [
                  "M421,307Q387,364,330,397Q273,430,210,403Q147,376,99,324Q51,272,83,207Q115,142,181,102Q247,62,309,95Q371,128,414,189Q457,250,421,307Z",
                  "M404,302Q368,354,315,389Q262,424,200,400Q138,376,91,322Q44,268,78,204Q112,140,176,106Q240,72,305,97Q370,122,408,186Q446,250,404,302Z",
                ],
              }}
              transition={{ duration: 16, repeat: Infinity }}
            />
            <defs>
              <linearGradient id="blobGradient">
                <stop offset="0%" stopColor="rgba(108,124,255,0.7)" />
                <stop offset="100%" stopColor="rgba(108,124,255,0.22)" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* 👤 PHOTO */}
          <motion.img
            src={profile}
            alt="Dhruv Bansal"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="
              relative mt-6
              w-80 h-96
              md:w-96 md:h-[420px]
              rounded-2xl
              object-cover object-top
              shadow-[0_45px_110px_rgba(0,0,0,0.7)]
            "
          />
        </div>
      </div>
    </section>
  );
}
