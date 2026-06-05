import { useMemo } from "react";
import { motion } from "framer-motion";

import ReactIcon from "@/components/icons/react.svg?react";
import NextIcon from "@/components/icons/next-js.svg?react";
import TsIcon from "@/components/icons/typescript.svg?react";
import NodeIcon from "@/components/icons/node-js.svg?react";
import PgIcon from "@/components/icons/postgresql.svg?react";
import PythonIcon from "@/components/icons/python.svg?react";
import NestIcon from "@/components/icons/nest-js.svg?react";
import GithubIcon from "@/components/icons/github.svg?react";
import DockerIcon from "@/components/icons/docker.svg?react";
import TailwindIcon from "@/components/icons/tailwind.svg?react";
import LinuxIcon from "@/components/icons/linux.svg?react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const ICONS: IconComponent[] = [
  ReactIcon,
  NextIcon,
  TsIcon,
  NodeIcon,
  PgIcon,
  PythonIcon,
  NestIcon,
  GithubIcon,
  DockerIcon,
  TailwindIcon,
  LinuxIcon,
];

function shuffle<T>(array: T[]) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export default function BackgroundTechIcons() {
  const particles = useMemo(() => {
    const shuffledIcons = shuffle(ICONS);

    const zones = [
      { left: 8, top: 12 },
      { left: 32, top: 16 },
      { left: 68, top: 14 },
      { left: 92, top: 24 },

      { left: 12, top: 56 },
      { left: 50, top: 50 },
      { left: 88, top: 58 },

      { left: 18, top: 88 },
      { left: 50, top: 92 },
      { left: 78, top: 86 },

      { left: 92, top: 76 },
      { left: 8, top: 34 },
    ];

    const sizes = [170, 145, 130, 120, 110, 105, 100, 95, 90, 85, 80];

    return shuffledIcons.map((Icon, index) => {
      const zone = zones[index];

      const offsetX = Math.random() * 4 - 2;
      const offsetY = Math.random() * 4 - 2;

      return {
        Icon,

        left: zone.left + offsetX,
        top: zone.top + offsetY,

        size: sizes[index],

        opacity: index < 3 ? 0.22 : 0.14 + Math.random() * 0.06,

        duration: 18 + Math.random() * 14,

        rotateAmount: 1 + Math.random() * 2,

        floatX: 4 + Math.random() * 5,

        floatY: 6 + Math.random() * 8,

        blur: index > 5 && Math.random() > 0.6,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* GRID */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          [background-image:
            linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
            linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
          [background-size:52px_52px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_95%)]
        "
      />

      {/* ACCENT LINES */}

      <div className="absolute top-[20%] left-0 h-px w-full bg-primary/10" />
      <div className="absolute top-[80%] left-0 h-px w-full bg-primary/10" />

      <div className="absolute left-[20%] top-0 h-full w-px bg-primary/5" />
      <div className="absolute left-[80%] top-0 h-full w-px bg-primary/5" />

      {/* GLOW LEFT */}

      <motion.div
        className="
          absolute
          left-[-18rem]
          top-[5%]
          h-[40rem]
          w-[40rem]
          rounded-full
          bg-primary/5
          blur-3xl
        "
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOW RIGHT */}

      <motion.div
        className="
          absolute
          right-[-18rem]
          bottom-[5%]
          h-[40rem]
          w-[40rem]
          rounded-full
          bg-primary/5
          blur-3xl
        "
        animate={{
          x: [20, -20, 20],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ICONS */}
      {particles.map((item, index) => {
        const Icon = item.Icon;

        return (
          <motion.div
            key={index}
            className="
                absolute
                will-change-transform
                select-none
            "
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              width: `clamp(70px, ${item.size / 10}vw, ${item.size}px)`,
              height: `clamp(70px, ${item.size / 10}vw, ${item.size}px)`,
              opacity: item.opacity,
              filter: "drop-shadow(0 0 12px rgba(255,255,255,0.04))",
            }}
            animate={{
              x: [-item.floatX, item.floatX, -item.floatX],
              y: [-item.floatY, item.floatY, -item.floatY],
              rotate: [-item.rotateAmount, item.rotateAmount, -item.rotateAmount],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon
              className={`
                text-foreground
                ${item.blur ? "blur-[1px]" : ""}
            `}
              style={{
                width: item.size,
                height: item.size,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
