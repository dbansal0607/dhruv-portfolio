import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tools", href: "#tools" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-[100]
        backdrop-blur-xl
        bg-black/30
        border-b
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-end
          gap-10
          text-sm
          text-muted
        "
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="
              relative
              hover:text-white
              transition
            "
          >
            {link.name}
            <span
              className="
                absolute
                left-0
                -bottom-1
                h-[1px]
                w-0
                bg-accent
                transition-all
                duration-300
                hover:w-full
              "
            />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
