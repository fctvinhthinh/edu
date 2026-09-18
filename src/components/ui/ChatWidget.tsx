"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "@/constants";

const channels = [
  {
    name: "Messenger",
    icon: MessageCircle,
    href: SITE_CONFIG.facebook,
    color: "bg-blue-600",
    label: "Chat Messenger",
  },
  {
    name: "Zalo",
    icon: MessageSquare,
    href: SITE_CONFIG.zalo,
    color: "bg-blue-500",
    label: "Chat Zalo",
  },
  {
    name: "Hotline",
    icon: Phone,
    href: `tel:${SITE_CONFIG.phone}`,
    color: "bg-green-500",
    label: SITE_CONFIG.phone,
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex flex-col gap-3 mb-2"
          >
            {channels.map((channel, i) => (
              <motion.a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 group"
              >
                <span className="bg-white text-sm font-medium px-3 py-1.5 rounded-full shadow-card opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {channel.label}
                </span>
                <div
                  className={`w-12 h-12 ${channel.color} text-white rounded-full shadow-card flex items-center justify-center hover:scale-110 transition-transform`}
                >
                  <channel.icon size={22} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-elevated flex items-center justify-center relative"
        aria-label="Liên hệ hỗ trợ"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </motion.button>
    </div>
  );
}
