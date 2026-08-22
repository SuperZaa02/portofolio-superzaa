"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { SocialLink } from "@/data/socialsData";

interface LinkConfirmModalProps {
  link: SocialLink | null;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function LinkConfirmModal({
  link,
  open,
  onConfirm,
  onCancel,
}: LinkConfirmModalProps) {
  if (!link) return null;

  const Icon = link.icon;

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onCancel();
      }}
    >
      <DialogContent
        style={{
          maxWidth: 400,
          padding: 0,
          background: "#121212",
          border: "1px solid #3A3A3A",
          borderRadius: 0,
          boxShadow: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* ACCENT LINE */}
          <div
            style={{
              height: 3,
              background: "#E61919",
            }}
          />

          <div style={{ padding: "22px" }}>
            <DialogHeader
              style={{
                textAlign: "left",
                marginBottom: 20,
              }}
            >
              <DialogTitle
                style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                  letterSpacing: "-0.02em",
                  color: "#EAEAEA",
                }}
              >
                Open external link?
              </DialogTitle>

              <DialogDescription
                style={{
                  marginTop: 8,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  lineHeight: 1.7,
                  color: "#8A8A8A",
                }}
              >
                This will open {link.platform} in a new tab.
              </DialogDescription>
            </DialogHeader>

            {/* LINK */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "11px 12px",
                border: "1px solid #3A3A3A",
                background: "#181818",
                marginBottom: 20,
              }}
            >
              <Icon
                size={14}
                style={{
                  color: "#8A8A8A",
                  flexShrink: 0,
                }}
              />

              <span
                style={{
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#EAEAEA",
                }}
              >
                {link.label}
              </span>
            </div>

            {/* ACTIONS */}
            <DialogFooter
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 8,
              }}
            >
              <button
                type="button"
                onClick={onCancel}
                className="cmd-btn"
                style={{
                  fontSize: 10,
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={onConfirm}
                className="cmd-btn cmd-btn-accent"
                style={{
                  fontSize: 10,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                Open Link
                <ExternalLink size={11} />
              </button>
            </DialogFooter>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}