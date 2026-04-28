"use client";

import { Bot, Network, Zap, KeyRound } from "lucide-react";
import BrandIcon from "@/components/brand-icon";
import { FadeUp } from "@/components/motion";

const LOGOS = [
  { brand: "anthropic" as const, name: "Anthropic" },
  { brand: "openai" as const, name: "OpenAI" },
  { brand: "gemini" as const, name: "Gemini" },
  { brand: "xai" as const, name: "xAI" },
  { brand: "claude-code" as const, name: "Claude Code" },
  { brand: "codex" as const, name: "Codex" },
];

const FEATURES = [
  {
    icon: Bot,
    title: "Agent 专为智能体与编程助手加速",
  },
  {
    icon: Network,
    title: "100% 兼容主流 IDE 与终端智能体",
  },
  {
    icon: Zap,
    title: "24/7 企业级节点保证极速响应",
  },
  {
    icon: KeyRound,
    title: "0 侵入代码，配置环境变量即可",
  },
];

export default function Models() {
  return (
    <section className="relative py-20 border-y border-[var(--bd)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]/80">
            强劲算力矩阵支持
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fg)]">
            主流 LLM 全覆盖，一个 Key 通吃所有模型
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="relative mt-10 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
            style={{
              background:
                "linear-gradient(90deg, var(--color-background), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
            style={{
              background:
                "linear-gradient(270deg, var(--color-background), transparent)",
            }}
          />
          <div className="flex w-max marquee-track gap-12">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-[var(--fg)]/80 hover:text-[var(--fg)] transition shrink-0"
              >
                <BrandIcon brand={l.brand} className="w-7 h-7" />
                <span className="text-lg font-medium tracking-tight">
                  {l.name}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {FEATURES.map((f, i) => (
            <FadeUp
              key={f.title}
              delay={i * 0.05}
              className="glass rounded-xl p-5 hover:bg-[var(--glass-top)] transition"
            >
              <f.icon className="w-5 h-5 text-[var(--color-primary)]" />
              <p className="mt-3 text-sm text-[var(--fg)] leading-relaxed">
                {f.title}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
