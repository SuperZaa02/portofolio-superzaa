import pkg from "../../package.json";
import HoverWords from "@/components/HoverWords";
import { motion } from "framer-motion";

import { fadeInUp } from "@/lib/animations";

const buildVersion = "v" + pkg.version + "+" + __BUILD_ID__;

export default function FooterSection() {
  return (
    <motion.footer
      className="
        mt-12
        border-t
        border-border/40
        py-6
      "
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.8}
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-2
          px-6
          text-center
          sm:flex-row
          sm:justify-between
        "
      >
        <p
          className="
            text-xs
            text-muted-foreground
          "
        >
          <HoverWords>© {new Date().getUTCFullYear()} Faeza Raziq</HoverWords>
        </p>

        <p
          className="
            text-[11px]
            text-muted-foreground/60
          "
        >
          <HoverWords>{buildVersion}</HoverWords>
        </p>
      </div>
    </motion.footer>
  );
}
