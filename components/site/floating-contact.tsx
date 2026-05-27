"use client";

import { motion } from "framer-motion";
import { MessageCircle, QrCode, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        aria-label="客服咨询入口"
      >
        <div className="group relative flex items-center">
          <div className="soft-card pointer-events-none absolute right-full mr-3 w-64 translate-x-3 rounded-[1.5rem] p-4 text-zinc-950 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <QrCode className="size-4 text-cyan-600" />
              微信扫码咨询
            </div>
            <div className="mt-4 rounded-lg border border-zinc-100 bg-white p-2">
              <Image
                src="/qrcode.png"
                alt="客服二维码"
                width={200}
                height={200}
                className="h-auto w-full rounded-md"
              />
            </div>
          </div>

          <a
            href="#contact"
            className="soft-card flex min-h-36 w-12 flex-col items-center justify-center gap-3 rounded-full px-2 py-4 text-zinc-900 transition hover:-translate-y-1 hover:bg-white"
          >
            <MessageCircle className="size-5 text-cyan-600" />
            <span className="[writing-mode:vertical-rl] text-sm font-semibold">
              客服咨询
            </span>
          </a>
        </div>
      </motion.aside>

      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <div
          className={cn(
            "soft-card mb-3 w-56 rounded-[1.5rem] p-4 text-zinc-950 transition",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">扫码咨询</p>
            <button
              type="button"
              aria-label="关闭客服二维码"
              onClick={() => setOpen(false)}
              className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="mt-3 rounded-lg bg-white p-2">
            <Image
              src="/qrcode.png"
              alt="客服二维码"
              width={180}
              height={180}
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 items-center gap-2 rounded-full bg-zinc-950 px-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(39,31,27,0.18)]"
        >
          <MessageCircle className="size-4" />
          咨询
        </button>
      </div>
    </>
  );
}
