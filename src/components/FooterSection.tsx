import HoverWords from "@/components/HoverWords";
import pkg from "../../package.json";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const buildVersion = "v" + pkg.version + "+" + __BUILD_ID__;

export default function FooterSection() {
  return (
    <motion.footer
      className="border-t border-border/40 pt-8 pb-6 text-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.8}
    >
      <div className="space-y-1">
        <p className="font-body text-xs text-muted-foreground">
          <HoverWords>
            &copy; {new Date().getUTCFullYear()} Faeza Raziq • All rights reserved.
          </HoverWords>
        </p>

        <p className="font-body text-[11px] text-muted-foreground/70">
          <HoverWords>{buildVersion}</HoverWords>
        </p>
      </div>
    </motion.footer>
  );
}