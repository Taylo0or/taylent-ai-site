"use client";

import Link from "next/link";
import { LINKS } from "@/lib/links";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion";
import CodeBlock from "@/components/code-block";

export default function QuickStart() {
  return (
    <section className="relative py-28 border-t border-[var(--bd)] overflow-hidden">
      <div className="absolute inset-0 bg-grid-dense opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <FadeUp>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]/80">
              Quick Start
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              <span className="text-gradient">2 steps</span>{" "}
              <span className="text-[var(--mu)]">to power up</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <a
              href="/docs"
              className="btn-ghost px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2"
            >
              查看文档 <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <FadeUp className="rounded-2xl glass p-7">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 text-[var(--fg)] text-xs font-semibold flex items-center justify-center">
                1
              </span>
              <h3 className="text-lg font-semibold">获取专属的 API Key</h3>
            </div>
            <p className="mt-3 text-sm text-[var(--mu)] leading-relaxed">
              登录 Taylent 控制台并生成具有特定权限的 API Key，支持按项目、按额度、按 IP 精细化管控。
            </p>
            <div className="mt-5 rounded-xl glass overflow-hidden gradient-border">
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--mu)]">
                    Your Key
                  </div>
                  <div className="mt-1 font-mono text-sm text-[var(--color-primary)]">
                    sk-tay-•••••••••••••••••3a7f
                  </div>
                </div>
                <a href={LINKS.keys} target="_top" rel="noopener" className="btn-primary px-3.5 py-2 rounded-lg text-xs font-medium"
                >
                  创建密钥
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.05} className="rounded-2xl glass p-7">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 text-[var(--fg)] text-xs font-semibold flex items-center justify-center">
                2
              </span>
              <h3 className="text-lg font-semibold">配置终端或 IDE 环境变量</h3>
            </div>
            <p className="mt-3 text-sm text-[var(--mu)] leading-relaxed">
              根据你的编程助手覆盖对应的 BASE_URL，无需安装任何依赖，立即开启高速通道。
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3">
              <CodeBlock
                code={`# 接入 Claude Code
export ANTHROPIC_BASE_URL="https://api.taylent.com"
export ANTHROPIC_AUTH_TOKEN="sk-tay-..."
claude`}
              />
              <CodeBlock
                code={`# 接入 Codex
export OPENAI_BASE_URL="https://api.taylent.com/v1"
export OPENAI_API_KEY="sk-tay-..."
codex`}
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
