import HoverWords from "@/components/HoverWords";
import pkg from "../../package.json";

const buildVersion = "v" + pkg.version + "+" + __BUILD_ID__;

export default function FooterSection() {
  return (
    <footer
      className="
        border-t border-border/40
        pt-8 pb-6
        text-center
        opacity-0
        animate-fadeIn
        [animation-delay:800ms]
        [animation-fill-mode:forwards]
      "
    >
      <div className="space-y-1">
        <p className="font-body text-xs text-muted-foreground">
          <HoverWords>
            &copy; {new Date().getUTCFullYear()} Faeza Raziq • All rights reserved.
          </HoverWords>
        </p>

        <p className="font-body text-[11px] text-muted-foreground/70">
          <HoverWords>
            {buildVersion}
          </HoverWords>
        </p>
      </div>
    </footer>
  );
}