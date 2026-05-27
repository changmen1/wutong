import {
  BrainCircuit,
  Feather,
  Layers3,
  ShieldCheck,
  SlidersHorizontal,
  Target,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const advantages = [
  {
    icon: BrainCircuit,
    title: "先想清楚",
    description: "从目标、读者、语气和边界开始，避免一上来就陷入字句打磨。",
  },
  {
    icon: Layers3,
    title: "再搭结构",
    description: "把段落功能、论据顺序和阅读节奏排好，让内容自然往前走。",
  },
  {
    icon: Feather,
    title: "保留个人气味",
    description: "不把内容修成模板腔，保留你自己的判断、语气和审美。",
  },
  {
    icon: Target,
    title: "对齐场景",
    description: "根据公众号、小红书、报告、专栏或品牌稿等不同场景调整策略。",
  },
  {
    icon: SlidersHorizontal,
    title: "节奏可控",
    description: "用阶段反馈替代临时焦虑，让每一步都有可交付的小结果。",
  },
  {
    icon: ShieldCheck,
    title: "边界清晰",
    description: "提供思路、结构和表达建议，不替代创作，不承诺平台结果。",
  },
];

export function AdvantagesSection() {
  return (
    <section id="advantages" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-0 w-full max-w-[22rem] sm:mx-auto sm:max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="SEASONS / 创作四季"
            title="让内容长出来，而不是套出来"
            description="好的内容服务不是把所有人修成一个声音，而是帮每个想法找到它自己的形状。"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <Reveal key={advantage.title} delay={index * 0.04}>
                <article className="soft-card h-full rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white">
                  <Icon className="size-6 text-rose-500" />
                  <h3 className="mt-6 text-lg font-semibold text-zinc-950">
                    {advantage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {advantage.description}
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
