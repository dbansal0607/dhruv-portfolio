import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface TechnologyIconProps {
  name: string;
  icon: IconType;
}

const labelVariants = {
  rest: {
    opacity: 0,
    y: 6,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
    },
  },
};

export default function TechnologyIcon({
  name,
  icon: Icon,
}: TechnologyIconProps) {
  return (
    <motion.div
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        select-none
        group
      "
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileHover={{
        scale: 1.35,
        rotateX: 12,
        rotateY: -12,
      }}
      transition={{
        duration: 0.18,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Floating */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center"
      >
        {/* Glow */}
        <div
          className="
            absolute
            w-28
            h-28
            rounded-full
            bg-accent/40
            blur-3xl
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-150
          "
        />

        {/* Icon */}
        <Icon
          className="
            text-4xl
            text-muted
            relative
            z-10
            transition-colors
            duration-150
            group-hover:text-accent
          "
          style={{ transform: "translateZ(40px)" }}
        />

        {/* Label */}
        <motion.span
          variants={labelVariants}
          className="
            mt-3
            text-sm
            tracking-wide
            text-accent
            pointer-events-none
          "
        >
          {name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
