import {
  BarChart3,
  BookOpenText,
  ClipboardCheck,
  FileSearch,
  PenLine,
  Route,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const services = [
  {
    icon: PenLine,
    title: "内容创作思路辅导",
    meta: "选题 · 主线 · 角度",
    description:
      "把散落的想法整理为清晰主题、读者对象、表达角度和可持续展开的内容框架。",
  },
  {
    icon: BookOpenText,
    title: "资料阅读辅助",
    meta: "检索 · 摘录 · 归档",
    description:
      "建立关键词、资料卡片和观点矩阵，让阅读不只是收集材料，而是服务创作判断。",
  },
  {
    icon: ClipboardCheck,
    title: "结构建议",
    meta: "大纲 · 段落 · 节奏",
    description:
      "优化标题、开篇、段落推进和结尾收束，让内容读起来更顺、更有记忆点。",
  },
  {
    icon: BarChart3,
    title: "数据分析思路",
    meta: "指标 · 解释 · 图表",
    description:
      "围绕内容目标讨论数据口径、分析路径和表达方式，避免数字堆砌。",
  },
  {
    icon: FileSearch,
    title: "专业表达优化",
    meta: "语气 · 概念 · 可信度",
    description:
      "调整表述层次、术语边界和叙述节奏，让内容更有专业感但不僵硬。",
  },
  {
    icon: Route,
    title: "创作路径规划",
    meta: "排期 · 反馈 · 复盘",
    description:
      "拆解从灵感、材料、初稿到修订发布的节奏，形成可执行的创作清单。",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-0 w-full max-w-[22rem] sm:mx-auto sm:max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="RECENT WORKBENCH / 近期工作台"
            title="把服务做成一张可翻阅的创作清单"
            description="参考独立站的内容流排版，我们把服务从卡片堆里拿出来，变成更像创作日志的工作台。每一项都对应一个真实卡点。"
            align="center"
          />
        </Reveal>

        <div className="mt-12 divide-y divide-zinc-200/70 rounded-[2rem] border border-zinc-200/70 bg-white/58 shadow-[0_24px_90px_rgba(56,44,38,0.08)] backdrop-blur">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.03}>
                <article className="group grid gap-5 px-5 py-6 transition hover:bg-white/70 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:px-8">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl text-zinc-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-white shadow-[0_12px_35px_rgba(39,31,27,0.16)] transition group-hover:rotate-6 group-hover:bg-rose-500">
                      <Icon className="size-4" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      {service.meta}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600">
                      {service.description}
                    </p>
                  </div>
                  <span className="hidden rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500 sm:inline-flex">
                    支持
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
