import pkg from "../../package.json";
import { motion } from "framer-motion";
import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface VersionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const buildVersion = `v${pkg.version}+${__BUILD_ID__}`;

export default function VersionModal({
  open,
  onOpenChange,
}: VersionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[calc(100%-24px)]
          max-w-[560px]
          gap-0
          overflow-hidden
          rounded-none
          border
          border-[#3A3A3A]
          bg-[#0F0F0F]
          p-0
          text-[#EAEAEA]
          shadow-none
        "
      >
        <DialogTitle className="sr-only">
          Version Information
        </DialogTitle>

        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.14 }}
          className="flex max-h-[85svh] flex-col overflow-hidden"
        >
          {/* HEADER */}
          <header className="relative border-b border-[#3A3A3A] bg-[#141414] px-4 py-4 sm:px-5 sm:py-5">
            <div
              className="mb-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#6F6F6F]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Version
            </div>

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pr-10">
              <h2
                className="m-0 text-[1.45rem] font-black uppercase leading-none tracking-[-0.04em] text-[#EAEAEA] sm:text-[1.7rem]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Portfolio
              </h2>

              <span
                className="font-mono text-[10px] tracking-[0.04em] text-[#E61919]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {buildVersion}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close version information"
              className="
                absolute
                right-3
                top-3
                flex
                h-8
                w-8
                items-center
                justify-center
                border
                border-[#3A3A3A]
                bg-transparent
                text-[#8A8A8A]
                transition-colors
                duration-100
                hover:border-[#E61919]
                hover:bg-[#E61919]
                hover:text-white
              "
            >
              <X size={14} strokeWidth={1.8} />
            </button>
          </header>

          {/* CONTENT */}
          <div className="min-h-0 flex-1 overflow-y-auto bg-[#101010]">
            <div className="px-3 py-4 sm:px-4 sm:py-5">
              <SectionLabel label="Build" />

              <div className="border border-[#363636] bg-[#151515]">
                <InfoRow label="Version" value={`v${pkg.version}`} />
                <InfoRow label="Build ID" value={__BUILD_ID__} />
                <InfoRow label="Branch" value={__GIT_BRANCH__} />
                <InfoRow label="Environment" value={__NODE_ENV__} />
                <InfoRow label="Node.js" value={__NODE_VERSION__} last />
              </div>

              <SectionLabel label="Dates" />

              <div className="border border-[#363636] bg-[#151515]">
                <InfoRow
                  label="Built"
                  value={new Date(__BUILD_TIME__).toLocaleString()}
                />
                <InfoRow
                  label="Last Commit"
                  value={new Date(
                    __LAST_COMMIT_DATE__,
                  ).toLocaleString()}
                  last
                />
              </div>

              <SectionLabel label="Latest Commit" />

              <div className="border border-[#363636] bg-[#151515] px-3 py-3 sm:px-4 sm:py-3.5">
                <p
                  className="m-0 break-words font-mono text-[10px] leading-[1.7] tracking-[0.02em] text-[#C5C5C5] sm:text-[11px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {__LAST_COMMIT_MESSAGE__}
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="border-t border-[#3A3A3A] bg-[#141414] px-4 py-3">
            <span
              className="block text-center font-mono text-[9px] uppercase tracking-[0.08em] text-[#656565]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              © {new Date().getUTCFullYear()} Faeza Raziq (SuperZaa)
            </span>
          </footer>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div
      className="mb-2 mt-5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#6F6F6F] first:mt-0"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {label}
    </div>
  );
}

function InfoRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={[
        "grid min-h-[42px] grid-cols-[90px_minmax(0,1fr)] items-center gap-3 px-3 py-2.5",
        "sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-4 sm:px-3.5",
        !last ? "border-b border-[#292929]" : "",
      ].join(" ")}
    >
      <span
        className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#6F6F6F]"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {label}
      </span>

      <span
        className="
          min-w-0
          break-words
          text-right
          font-mono
          text-[9px]
          tracking-[0.02em]
          text-[#D8D8D8]
          sm:text-[10px]
        "
        style={{
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {value}
      </span>
    </div>
  );
}