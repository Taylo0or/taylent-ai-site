"use client";

import Link from "next/link";
import { LINKS } from "@/lib/links";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import CodeBlock from "@/components/code-block";
import { cn } from "@/lib/utils";

const TABS = [
  {
    key: "claude",
    label: "Claude Code",
    code: `# 接入 Claude Code
export ANTHROPIC_BASE_URL="https://api.taylent.com"
export ANTHROPIC_AUTH_TOKEN="sk-tay-..."

claude`,
  },
  {
    key: "codex",
    label: "Codex",
    code: `# 接入 Codex
export OPENAI_BASE_URL="https://api.taylent.com/v1"
export OPENAI_API_KEY="sk-tay-..."

codex`,
  },
  {
    key: "cursor",
    label: "Cursor / IDE",
    code: `# Cursor / Continue / Cline
Base URL: https://api.taylent.com/v1
API Key:  sk-tay-...
Model:    claude-sonnet-4-6, gpt-5, ...`,
  },
];

export default function Hero() {
  const [tab, setTab] = useState("claude");
  const active = TABS.find((t) => t.key === tab) ?? TABS[0];

  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      <div className="aurora" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs glass"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-[var(--fg)]">企业级节点 · 24/7 在线</span>
            <span className="text-[var(--mu)]">·</span>
            <span className="text-[var(--fg)]">支持 Claude · GPT · Gemini · Grok</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            <span className="text-gradient">AI 高速中转</span>
            <br />
            <span className="text-gradient-violet">为 AI Agent 赋能</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-[var(--mu)] max-w-xl leading-relaxed"
          >
            完美适配 <span className="text-[var(--fg)] font-medium">Claude Code</span> 与{" "}
            <span className="text-[var(--fg)] font-medium">Codex</span>，0 代码侵入，尽享沉浸式极速编程体验。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={LINKS.keys} target="_top" rel="noopener" className="btn-primary px-5 py-3 rounded-xl font-medium inline-flex items-center gap-2"
            >
              获取密钥 <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/docs"
              className="btn-ghost px-5 py-3 rounded-xl inline-flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> 查看文档
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[var(--mu)]"
          >
            <Tag>原生适配 Claude</Tag>
            <Tag>无缝对接 Codex</Tag>
            <Tag>极低延迟体验</Tag>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/20 via-transparent to-sky-400/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl glass overflow-hidden">
              <div className="conic-ring rounded-2xl" />
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--bd)]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span className="text-[11px] uppercase tracking-wider text-[var(--mu)]">
                    Terminal · Fast Setup
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="status-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-emerald-400">Ready</span>
                </div>
              </div>

              <div className="px-2 pt-2 flex items-center gap-1 border-b border-[var(--bd)]">
                {TABS.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={cn(
                      "px-3 py-1.5 text-xs rounded-md transition",
                      tab === t.key
                        ? "bg-[var(--glass-top)] text-[var(--fg)]"
                        : "text-[var(--mu)] hover:text-[var(--fg)]",
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <CodeBlock
                code={active.code}
                className="!rounded-none !bg-transparent border-0 !backdrop-blur-0 [&]:before:hidden"
                showCopy={true}
              />

              <div className="grid grid-cols-3 gap-px border-t border-[var(--bd)] bg-[var(--glass-bot)]">
                <Stat label="平均延迟" value="< 80ms" />
                <Stat label="并发上限" value="∞" />
                <Stat label="每月调用" value="数十亿" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[var(--fg)]">
      <span className="w-1 h-1 rounded-full bg-blue-500" />
      {children}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-3 text-center">
      <div className="text-sm font-semibold text-[var(--fg)]">{value}</div>
      <div className="text-[10px] text-[var(--mu)] uppercase tracking-wider mt-0.5">
        {label}
      </div>
    </div>
  );
}
