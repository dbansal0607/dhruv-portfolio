import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        py-40
        px-6 md:px-16
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_50%_30%,rgba(108,124,255,0.25),transparent_60%)]" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-accent text-sm tracking-wide mb-3">
            Let’s connect
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Contact Me
          </h2>

          <p className="text-muted text-lg md:text-xl leading-relaxed mb-10">
            I’m always open to discussing new opportunities, interesting
            projects, or deep conversations around software engineering,
            backend systems, and applied machine learning.
          </p>

          {/* Contact links */}
          <div className="space-y-4 text-lg">
            <a
              href="mailto:dhruvbansal23731@gmail.com"
              className="block hover:text-accent transition"
            >
              📧 dhruvbansal23731@gmail.com
            </a>

            <a
              href="https://github.com/dbansal0607"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-accent transition"
            >
              💻 github.com/dbansal0607
            </a>

            <a
              href="https://www.linkedin.com/in/dhruv-bansal-74a987258/"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-accent transition"
            >
              🔗 LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            relative
            bg-white/5
            backdrop-blur
            border border-white/10
            rounded-2xl
            p-8
            shadow-[0_40px_120px_rgba(0,0,0,0.6)]
          "
        >
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="
                w-full
                bg-transparent
                border-b border-white/20
                focus:border-accent
                outline-none
                py-3
              "
            />

            <input
              type="email"
              placeholder="Your email"
              className="
                w-full
                bg-transparent
                border-b border-white/20
                focus:border-accent
                outline-none
                py-3
              "
            />

            <textarea
              placeholder="Your message"
              rows={4}
              className="
                w-full
                bg-transparent
                border-b border-white/20
                focus:border-accent
                outline-none
                py-3
                resize-none
              "
            />

            <button
              type="submit"
              className="
                mt-6
                px-8 py-3
                rounded-lg
                bg-accent
                text-bg
                font-medium
                shadow-[0_18px_55px_rgba(108,124,255,0.6)]
                hover:shadow-[0_22px_70px_rgba(108,124,255,0.8)]
                transition
              "
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
