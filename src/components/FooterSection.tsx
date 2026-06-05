import pkg from "../../package.json";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useState } from "react";
import VersionModal from "./VersionModal";

const buildVersion = "v" + pkg.version + "+" + __BUILD_ID__;

export default function FooterSection() {
  const [versionModalOpen, setVersionModalOpen] = useState(false);

  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.8}
      className="pb-8"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="
            relative
            overflow-hidden
            rounded-3xl

            border
            border-white/[0.05]

            bg-background/20

            backdrop-blur-[24px]
            backdrop-saturate-[180%]

            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
        >
          {/* Top highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px

              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          {/* Glass reflection */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-br
              from-white/[0.05]
              via-transparent
              to-transparent
            "
          />

          {/* Soft glow */}
          <div
            className="
              pointer-events-none
              absolute
              -top-20
              left-1/2

              h-40
              w-40

              -translate-x-1/2
              rounded-full

              bg-primary/10
              blur-3xl
            "
          />

          <div
            className="
              relative

              grid
              grid-cols-2
              items-center
              gap-y-3

              px-6
              py-4

              sm:flex
              sm:flex-row
              sm:justify-between
              sm:gap-y-0
            "
          >
            {/* Copyright */}
            <p
              className="
                col-span-2

                text-center
                text-xs

                text-muted-foreground

                transition-colors
                duration-300

                hover:text-foreground

                sm:order-2
                sm:flex-1
              "
            >
              &copy; {new Date().getUTCFullYear()} Faeza Raziq
            </p>

            {/* Coordinates */}
            <div className="text-left sm:order-1 sm:flex-1">
              <span
                onClick={() =>
                  window.open(
                    "https://www.google.com/search?q=6%C2%B0LU-11%C2%B0LS%20&%2095%C2%B0BT-141%C2%B0BT",
                    "_blank",
                  )
                }
                className="
                  inline-block
                  cursor-pointer

                  font-mono
                  text-[10px]
                  sm:text-[11px]

                  text-muted-foreground

                  transition-all
                  duration-300

                  hover:text-foreground
                  hover:tracking-wide
                "
              >
                6&deg;LU-11&deg;LS & 95&deg;BT-141&deg;BT
              </span>
            </div>

            {/* Version */}
            <div className="text-right sm:order-3 sm:flex-1">
              <span
                onClick={() => setVersionModalOpen(true)}
                className="
                  inline-block
                  cursor-pointer

                  font-mono
                  text-[10px]
                  sm:text-[11px]

                  text-muted-foreground

                  transition-all
                  duration-300

                  hover:text-foreground
                  hover:tracking-wide
                "
              >
                {buildVersion}
              </span>
            </div>

            <VersionModal open={versionModalOpen} onOpenChange={setVersionModalOpen} />
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
