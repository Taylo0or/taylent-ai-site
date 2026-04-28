"use client";

import { KeyRound, Wand2, Rocket } from "lucide-react";
import { FadeUp } from "@/components/motion";

const STEPS = [
  {
    icon: KeyRound,
    title: "获取专属密钥",
    desc: "登录 Taylent 控制台并生成具有特定权限的 API Key。",
  },
  {
    icon: Wand2,
    title: "配置环境变量",
    desc: "根据你的编程助手工具（如 Claude Code）覆盖对应的 BASE_URL。",
  },
  {
    icon: Rocket,
    title: "开启高效编程",
    desc: "直接在终端或 IDE 中唤出 AI，开启极速畅快的沉浸式开发体验。",
  },
];

export default function ThreeSteps() {
  return (
    <section className="relative py-28 border-t border-[var(--bd)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]/80">
            极简上路
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="text-gradient">仅需三步</span>
            <span className="text-[var(--mu)]">，即可将 AI 注入你的业务代码</span>
          </h2>
        </FadeUp>

        <div className="relative mt-16 grid md:grid-cols-3 gap-5">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          {STEPS.map((s, i) => (
            <FadeUp
              key={s.title}
              delay={i * 0.08}
              className="relative rounded-2xl glass p-7 text-center hover:bg-[var(--glass-top)] transition"
            >
              <div className="relative mx-auto w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-sky-400/20 border border-[var(--bd)]">
                <s.icon className="w-6 h-6 text-[var(--color-primary)]" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[11px] font-semibold bg-[var(--bg)] border border-blue-500/40 text-[var(--color-primary)] flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--fg)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--mu)] leading-relaxed">
                {s.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
