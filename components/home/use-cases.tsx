"use client";

import { Terminal, Code2, Workflow, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/motion";

const CASES = [
  {
    icon: Terminal,
    tag: "Terminal",
    title: "终端智能体编程",
    desc: "在命令行中直接与 AI 协同工作，探讨代码架构、排除 Bug 以及自动执行复杂的重构修改。",
    points: ["支持各大主流终端 Agent", "极大提升 CLI 开发效率"],
    tone: "from-blue-500/15 to-sky-400/5",
    accent: "text-[var(--color-primary)]",
  },
  {
    icon: Code2,
    tag: "IDE",
    title: "IDE 沉浸式开发",
    desc: "将强大学习能力的顶尖大模型搬进编辑器，实现精确的代码快速补全与多文件协同编写。",
    points: ["无缝衔接代码补全插件", "毫无察觉的超低延迟体验"],
    tone: "from-blue-500/15 to-sky-400/5",
    accent: "text-[var(--color-primary)]",
  },
  {
    icon: Workflow,
    tag: "Enterprise",
    title: "企业自动化工作流",
    desc: "将极速的 API 节点接入工作流流水线，建立完全自动化的全网巡检与多阶段智能任务代理。",
    points: ["极高标准的服务稳定性", "多模型配合以降低成本"],
    tone: "from-blue-500/15 to-sky-400/5",
    accent: "text-[var(--color-primary)]",
  },
];

export default function UseCases() {
  return (
    <section className="relative py-28 border-t border-[var(--bd)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]/80">
            专注开发
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="text-gradient">赋能真实工作流</span>
            <br />
            <span className="text-[var(--mu)]">构建极致编码体验</span>
          </h2>
        </FadeUp>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <FadeUp
              key={c.title}
              delay={i * 0.06}
              className={`group relative rounded-2xl glass p-7 overflow-hidden hover:bg-[var(--glass-top)] transition`}
            >
              <div
                className={`absolute -top-32 -right-24 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br ${c.tone} opacity-60 group-hover:opacity-90 transition pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--glass-top)] border border-[var(--bd)]">
                    <c.icon className={`w-5 h-5 ${c.accent}`} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--mu)]">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--fg)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--mu)] leading-relaxed">
                  {c.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs text-[var(--fg)]"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
