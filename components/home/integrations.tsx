"use client";

import { Terminal, Code, Gauge } from "lucide-react";
import { FadeUp } from "@/components/motion";
import CodeBlock from "@/components/code-block";

export default function Integrations() {
  return (
    <section className="relative py-28 border-t border-[var(--bd)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <FadeUp className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]/80">
              无缝接入
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              <span className="text-gradient">环境变量替换</span>
              <br />
              <span className="text-[var(--mu)]">秒级唤醒顶尖模型</span>
            </h2>
            <p className="mt-5 text-[var(--mu)] leading-relaxed">
              配置极简。告别复杂的第三方封装，通过环境变量直接连接，让你的开发环境、代码编辑器与终端即刻全副武装。
            </p>

            <div className="mt-8 rounded-xl glass p-5">
              <div className="text-xs uppercase tracking-wider text-[var(--mu)]">
                Pro Tip
              </div>
              <p className="mt-2 text-sm text-[var(--fg)] leading-relaxed">
                同一个 API Key 同时适配 <span className="text-[var(--color-primary)]">Anthropic</span>{" "}
                与 <span className="text-[var(--color-primary)]">OpenAI</span> 接口规范，无需切换密钥。
              </p>
            </div>
          </FadeUp>

          <div className="lg:col-span-7 space-y-5">
            <FadeUp className="rounded-2xl glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-sky-400/10 border border-[var(--bd)] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold">完美支持 Claude Code</div>
                  <div className="text-xs text-[var(--mu)] mt-0.5">
                    通过配置 ANTHROPIC_BASE_URL，在终端中唤醒最强大的命令行编程助手。
                  </div>
                </div>
              </div>
              <CodeBlock
                code={`export ANTHROPIC_BASE_URL="https://api.taylent.com"
export ANTHROPIC_AUTH_TOKEN="sk-tay-..."

claude`}
                filename="~/.zshrc · Claude Code"
              />
            </FadeUp>

            <FadeUp delay={0.05} className="rounded-2xl glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/20 to-sky-400/10 border border-[var(--bd)] flex items-center justify-center">
                  <Code className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold">全面兼容 Codex</div>
                  <div className="text-xs text-[var(--mu)] mt-0.5">
                    使用标准 Base URL 快速桥接，与你最熟悉的 IDE 和自动补全引擎顺畅融合。
                  </div>
                </div>
              </div>
              <CodeBlock
                code={`export OPENAI_BASE_URL="https://api.taylent.com/v1"
export OPENAI_API_KEY="sk-tay-..."

codex`}
                filename="~/.zshrc · Codex"
              />
            </FadeUp>

            <FadeUp delay={0.1} className="rounded-2xl glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-sky-400/10 border border-[var(--bd)] flex items-center justify-center">
                  <Gauge className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold">控制台与额度一目了然</div>
                  <div className="text-xs text-[var(--mu)] mt-0.5">
                    摆脱复杂的账单计算，快速创建密钥并时刻掌控你的使用额度情况。
                  </div>
                </div>
              </div>
              <div className="rounded-xl glass overflow-hidden gradient-border">
                <div className="px-5 py-4 grid grid-cols-3 divide-x divide-[var(--bd)]">
                  <Stat label="本月用量" value="¥ 174.6" sub="+ 12% MoM" tone="up" />
                  <Stat label="活跃 Key" value="7" sub="3 active now" />
                  <Stat label="平均延迟" value="64 ms" sub="all regions" tone="up" />
                </div>
                <div className="h-20 relative bg-gradient-to-b from-blue-500/[0.05] to-transparent border-t border-[var(--bd)]">
                  <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#1677ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#1677ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,55 C40,50 60,60 90,40 C120,20 140,55 170,38 C200,22 230,48 260,30 C290,12 320,40 360,25 L400,28 L400,80 L0,80 Z"
                      fill="url(#lg)"
                    />
                    <path
                      d="M0,55 C40,50 60,60 90,40 C120,20 140,55 170,38 C200,22 230,48 260,30 C290,12 320,40 360,25 L400,28"
                      stroke="#1677ff"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone?: "up";
}) {
  return (
    <div className="px-4 py-3">
      <div className="text-[10px] uppercase tracking-wider text-[var(--mu)]">{label}</div>
      <div className="mt-1 text-lg font-semibold text-[var(--fg)]">{value}</div>
      <div
        className={`text-[10px] mt-0.5 ${tone === "up" ? "text-emerald-400" : "text-[var(--mu)]"}`}
      >
        {sub}
      </div>
    </div>
  );
}
