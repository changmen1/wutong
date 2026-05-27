import { ArrowRight, CalendarCheck, MessagesSquare, ScanSearch } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const steps = [
  {
    icon: ScanSearch,
    title: "读一读",
    description: "先看你的目标、已有素材、平台语境和最卡住的地方。",
  },
  {
    icon: MessagesSquare,
    title: "聊一聊",
    description: "围绕主题、结构、证据和表达语气做一次高密度讨论。",
  },
  {
    icon: CalendarCheck,
    title: "排一排",
    description: "把下一步拆成清单、优先级和反馈节奏，降低创作阻力。",
  },
  {
    icon: ArrowRight,
    title: "修一修",
    description: "根据反馈继续调整标题、段落、表达和发布呈现。",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-0 w-full max-w-[22rem] sm:mx-auto sm:max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="MUSINGS / 工作方式"
              title="不急着给模板，先把问题看清楚"
              description="像写一篇好文章一样，我们会先找到真正的题眼，再决定结构、资料和表达如何服务它。"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="soft-card rounded-[2rem] p-6">
              <p className="text-4xl leading-none text-rose-400">“</p>
              <p className="mt-3 text-lg leading-9 text-zinc-700">
                模板解决的是空白页，陪跑解决的是“我知道很多，但不知道怎么说”。
              </p>
              <p className="mt-5 text-sm font-semibold text-zinc-400">
                Beta Creative Studio
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="soft-card h-full rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-zinc-400">
                      0{index + 1}
                    </span>
                    <Icon className="size-5 text-cyan-600" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-zinc-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
