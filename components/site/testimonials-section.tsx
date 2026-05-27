import { Quote } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const testimonials = [
  {
    name: "L",
    role: "知识博主",
    content:
      "以前总是越写越散，沟通过后发现问题不是素材不够，而是没有一个稳定的叙述角度。",
  },
  {
    name: "Chen",
    role: "品牌主理人",
    content:
      "最喜欢的是没有把我的内容修成营销腔，而是帮我把个人经验和产品价值接起来。",
  },
  {
    name: "W",
    role: "自由创作者",
    content:
      "从标题、开篇到结尾都有了可以继续改的方向，创作焦虑少了很多。",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-0 w-full max-w-[22rem] sm:mx-auto sm:max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="MAILBOX / 信箱"
            title="更像一次认真读稿，而不是一次流水线修改"
            description="这里保留参考站的“来信”气质，用更轻的方式呈现信任感。"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <figure className="soft-card h-full rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white">
                <Quote className="size-7 text-rose-400" />
                <blockquote className="mt-5 text-base leading-8 text-zinc-700">
                  “{item.content}”
                </blockquote>
                <figcaption className="mt-6 border-t border-zinc-200/70 pt-5">
                  <div className="font-semibold text-zinc-950">
                    {item.name}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">{item.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
