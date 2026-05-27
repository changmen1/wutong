"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "你们会直接替代创作内容吗？",
    answer:
      "不会。服务边界是内容创作思路辅导、方法讨论、结构建议、资料阅读辅助和专业表达优化，帮助你自己完成研究与创作。",
  },
  {
    question: "是否承诺审核通过、平台发布或最终结果？",
    answer:
      "不承诺具体结果。我们会基于材料和目标提供专业建议，但最终结果受研究质量、平台规则、评审标准和个人执行等因素影响。",
  },
  {
    question: "我只有一个很模糊的选题，也可以咨询吗？",
    answer:
      "可以。初步诊断会先帮助你判断选题范围、表达对象、资料可得性和方法可行性，再决定下一步是否适合继续推进。",
  },
  {
    question: "数据分析部分能提供什么帮助？",
    answer:
      "可以一起梳理变量、样本、指标、模型选择和结果解释思路，重点是让分析方案与内容目标保持一致。",
  },
  {
    question: "如何开始一次辅导？",
    answer:
      "你可以先通过右侧客服二维码或底部入口联系，发送方向、当前材料、时间节点和最想解决的问题，便于做初步判断。",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-0 w-full max-w-[22rem] sm:mx-auto sm:max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ / 问答"
            title="常见问题"
            description="把服务边界说清楚，合作才会更高效、更安心。"
            align="center"
          />
        </Reveal>

        <Accordion.Root
          type="single"
          collapsible
          className="mt-12 space-y-3"
        >
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <Accordion.Item
                value={`faq-${index}`}
                className="soft-card overflow-hidden rounded-[1.25rem] transition duration-300 hover:-translate-y-0.5 hover:bg-white/82"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-zinc-950 outline-none",
                      "focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="size-5 shrink-0 text-cyan-600" />
                      {faq.question}
                    </span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-zinc-600 shadow-[0_10px_30px_rgba(56,44,38,0.08)] transition group-data-[state=open]:rotate-180">
                      <ChevronDown className="size-4" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden px-5 pb-5 text-sm leading-7 text-zinc-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="border-t border-zinc-200/70 pt-4 sm:pl-8">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Reveal>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
