import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const cases = [
  {
    type: "品牌内容",
    title: "从产品卖点到一组可连续发布的选题",
    summary:
      "把零散卖点拆成读者问题、场景故事和内容栏目，形成一套能持续更新的选题池。",
    tags: ["选题池", "栏目结构", "发布节奏"],
  },
  {
    type: "个人 IP",
    title: "重建表达语气，不再像说明书",
    summary:
      "保留专业判断，同时加入案例、转折和个人视角，让内容更像真实的人在说话。",
    tags: ["语气", "案例", "个人风格"],
  },
  {
    type: "知识内容",
    title: "把资料堆变成清晰的论述线",
    summary:
      "用资料卡片和观点矩阵重新组织材料，让开篇、论证和收束彼此咬合。",
    tags: ["资料矩阵", "大纲", "逻辑线"],
  },
];

const outcomes = [
  "选题更聚焦",
  "标题和开篇更有抓力",
  "资料不再堆砌",
  "表达更像一个人",
];

export function ResultsSection() {
  return (
    <section id="results" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-0 w-full max-w-[22rem] sm:mx-auto sm:max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="LETTERS / 来信案例"
              title="一些虚拟案例，展示我们会怎样介入"
              description="不承诺结果，但会把问题拆清楚，把路径排出来，把下一版内容变得更可完成。"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="soft-card rounded-[2rem] p-6">
              <p className="text-sm font-semibold text-zinc-950">
                常见阶段性变化
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    <span className="text-sm leading-6 text-zinc-600">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="soft-card group h-full rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600">
                    {item.type}
                  </span>
                  <ArrowUpRight className="size-5 text-zinc-400 transition group-hover:text-rose-500" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-8 text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {item.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
