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
            rounded-3xl
            border
            border-border/50
            bg-background/70
            backdrop-blur-xl
            shadow-lg
            shadow-black/5
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-y-3
              px-6
              py-4
              items-center
              sm:flex
              sm:flex-row
              sm:justify-between
              sm:gap-y-0
            "
          >
            {/* Copyright: Mengisi baris atas penuh di mobile, pindah ke tengah di desktop */}
            <p
              className="
                col-span-2 
                text-center 
                text-xs 
                text-muted-foreground 
                transition-colors 
                hover:text-foreground
                sm:order-2 
                sm:flex-1
              "
            >
              &copy; {new Date().getUTCFullYear()} Faeza Raziq
            </p>

            <div className="text-left sm:order-1 sm:flex-1 sm:text-left">
              <span
                onClick={() =>
                  window.open(
                    "https://www.google.com/search?q=6%C2%B0LU-11%C2%B0LS%20&%2095%C2%B0BT-141%C2%B0BT",
                  )
                }
                className="
                  inline-block
                  cursor-pointer
                  font-mono
                  text-[10px]
                  sm:text-[11px]
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
                "
              >
                6&deg;LU-11&deg;LS & 95&deg;BT-141&deg;BT
              </span>
            </div>

            <div className="text-right sm:order-3 sm:flex-1 sm:text-right">
              <span
                onClick={() => setVersionModalOpen(true)}
                className="
                  inline-block
                  cursor-pointer
                  font-mono
                  text-[10px]
                  sm:text-[11px]
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
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
