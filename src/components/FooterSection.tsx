import pkg from "../../package.json";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const buildVersion = "v" + pkg.version + "+" + __BUILD_ID__;

export default function FooterSection() {
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
              gap-2
              px-6
              py-5
              text-center
              sm:grid-cols-3
              sm:items-center
            "
          >
            <p
              className="
                font-mono
                text-[11px]
                text-muted-foreground
                sm:text-left
              "
            >
              -6.2383, 106.9756
            </p>

            <p
              className="
                text-xs
                text-muted-foreground
                sm:text-center
              "
            >
              &copy; {new Date().getUTCFullYear()} Faeza Raziq
            </p>

            <p
              className="
                font-mono
                text-[11px]
                text-muted-foreground
                sm:text-right
              "
            >
              {buildVersion}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
