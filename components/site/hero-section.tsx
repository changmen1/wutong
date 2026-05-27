"use client";

import Image from "next/image";
import {
  ArrowDown,
  BookOpenText,
  MessageCircle,
  PenLine,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const stats = [
  { value: "6+", label: "创作场景" },
  { value: "1v1", label: "思路陪跑" },
  { value: "48h", label: "节奏反馈" },
];

const quickLinks = [
  { icon: PenLine, label: "结构" },
  { icon: BookOpenText, label: "资料" },
  { icon: MessageCircle, label: "沟通" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8"
    >
      <div className="hero-grid absolute inset-x-0 top-0 -z-10 h-[640px] opacity-45" />

      <div className="mx-0 w-full max-w-[22rem] text-center sm:mx-auto sm:max-w-5xl">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-rose-200/40 blur-3xl" />
            <Image
              src="/beta-avatar.png"
              alt="贝塔文创头像"
              width={132}
              height={132}
              priority
              className="relative size-28 rounded-full border border-white/80 object-cover shadow-[0_20px_80px_rgba(56,44,38,0.16)] sm:size-32"
            />
          </div>

          <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-[0_16px_55px_rgba(56,44,38,0.07)] backdrop-blur">
            <Sparkles className="size-4 text-rose-500" />
            Beta Creative Studio
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-normal text-zinc-950 sm:text-6xl lg:text-7xl">
            贝塔文创
            <span className="mt-3 block text-[2rem] text-zinc-500 sm:text-5xl lg:text-6xl">
              <span className="block sm:inline">把想法编排成</span>
              <span className="mx-1 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-cyan-500 bg-clip-text italic text-transparent sm:mx-2">
                可发布
              </span>
              <span>的内容</span>
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            我们不做流水线模板。我们陪你拆开选题、资料、结构、表达和发布节奏，让模糊灵感变成有脉络、有语气、有完成度的内容作品。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              预约一次灵感诊断
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#services"
              className={buttonVariants({ variant: "glass", size: "lg" })}
            >
              看看我们怎么做
            </a>
          </div>

          <TooltipProvider delayDuration={120}>
            <div className="mt-8 flex items-center gap-3">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Tooltip key={item.label}>
                    <TooltipTrigger asChild>
                      <span className="soft-card inline-flex size-11 items-center justify-center rounded-full text-zinc-600 transition hover:-translate-y-0.5 hover:bg-white">
                        <Icon className="size-4" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>{item.label}</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>

          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-zinc-500">
            {stats.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <strong className="text-zinc-950">{item.value}</strong>
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
