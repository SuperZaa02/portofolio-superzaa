import pkg from "../../package.json";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface VersionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const buildVersion = `v${pkg.version}+${__BUILD_ID__}`;

export default function VersionModal({ open, onOpenChange }: VersionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          p-0
          overflow-hidden

          border-border/40
          bg-background/95
          backdrop-blur-xl

          sm:max-w-2xl
          max-h-[90vh]
        "
      >
        <DialogTitle className="sr-only">Application Information</DialogTitle>

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="flex flex-col max-h-[90vh]"
        >
          {/* HEADER */}
          <div
            className="
              relative
              overflow-hidden

              border-b

              px-6
              pt-6
              pb-5
            "
          >
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-primary/10
                via-transparent
                to-primary/5
              "
            />

            <div className="relative space-y-3">
              <div className="flex items-center gap-3">
                <div>
                  <h2
                    className="
                      text-2xl
                      font-semibold
                      tracking-tight
                    "
                  >
                    Faeza Raziq Portfolio
                  </h2>

                  <p
                    className="
                      text-sm
                      text-muted-foreground
                    "
                  >
                    Personal Portfolio & Projects Showcase
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex-1
              overflow-y-auto
              px-6
              py-5
              space-y-6
            "
          >
            <section className="space-y-3">
              <h3 className="text-sm font-medium">Build Information</h3>

              <div
                className="
                  rounded-xl
                  border
                  bg-muted/20
                  p-4
                "
              >
                <InfoRow label="Full Version" value={buildVersion} mono />
                <InfoRow label="Version" value={"v" + pkg.version} mono />

                <Separator className="my-3" />

                <InfoRow label="Build ID" value={__BUILD_ID__} mono />
                <InfoRow label="Git Branch" value={__GIT_BRANCH__} mono />
                <InfoRow label="Environment" value={__NODE_ENV__} mono />
                <InfoRow label="Node.js" value={__NODE_VERSION__} mono />
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="text-sm font-medium">Timeline</h3>

              <div
                className="
                  rounded-xl
                  border
                  bg-muted/20
                  p-4
                "
              >
                <InfoRow label="Build Time" value={new Date(__BUILD_TIME__).toLocaleString()} />

                <Separator className="my-3" />

                <InfoRow
                  label="Last Commit"
                  value={new Date(__LAST_COMMIT_DATE__).toLocaleString()}
                />
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="text-sm font-medium">Last Commit Message</h3>

              <div
                className="
                  rounded-xl
                  border

                  bg-muted/20

                  p-4

                  font-mono
                  text-sm

                  leading-relaxed
                  break-words
                "
              >
                {__LAST_COMMIT_MESSAGE__}
              </div>
            </section>
          </div>

          {/* FOOTER */}
          <div
            className="
              border-t
              px-6
              py-4
            "
          >
            <p
              className="
                text-xs
                text-muted-foreground
              "
            >
              Built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

function InfoRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>

      <span className={["text-right text-sm", mono && "font-mono"].filter(Boolean).join(" ")}>
        {value}
      </span>
    </div>
  );
}
