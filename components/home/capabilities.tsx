"use client";

import { Globe, Cpu, Layers, Code2 } from "lucide-react";
import { FadeUp } from "@/components/motion";

const ITEMS = [
  {
    icon: Globe,
    tag: "Capability",
    title: "全球边缘节点加速",
    desc: "通过分布式边缘节点网络与智能路由，大幅降低跨区域调用模型时的连接延迟，实现极致的响应速度。",
  },
  {
    icon: Cpu,
    tag: "Capability",
    title: "企业级并发支持",
    desc: "强大的底层集群架构支撑，无惧高并发冲击。即使是复杂的多智能体并行任务，也能保持稳定且丝滑的输出。",
  },
  {
    icon: Layers,
    tag: "Capability",
    title: "拒绝繁琐，专注核心",
    desc: "抛弃复杂的模型管理与账单计算。直观的使用量统计，让你随时掌握资源消耗，把精力完全留给代码。",
  },
  {
    icon: Code2,
    tag: "Capability",
    title: "格式规范接口统一",
    desc: "提供完全兼容行业标准的 API 接口，无需繁琐的适配逻辑，一行代码即可无缝迁移现有的 AI 项目生态。",
  },
];

export default function Capabilities() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeUp>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]/80">
              极速接入层
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              <span className="text-gradient">专为 AI 编程</span>
              <br />
              <span className="text-[var(--mu)]">与智能体加速</span>
            </h2>
            <p className="mt-5 text-[var(--mu)] leading-relaxed text-base md:text-lg">
              Taylent.ai 专为现代开发者打造，全面支持 Claude Code 与 Codex 接入。不需要繁琐的适配逻辑，无缝集成到你的工作流。
            </p>
          </FadeUp>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {ITEMS.map((item, i) => (
            <FadeUp
              key={item.title}
              delay={i * 0.06}
              className="group relative rounded-2xl glass p-7 overflow-hidden hover:bg-[var(--glass-top)] transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/15 blur-3xl rounded-full" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-sky-400/10 border border-[var(--bd)]">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]/80">
                    {item.tag}
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold text-[var(--fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--mu)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
