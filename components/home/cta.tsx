"use client";

import Link from "next/link";
import { LINKS } from "@/lib/links";
import { ArrowRight, MessageSquare } from "lucide-react";
import { FadeUp } from "@/components/motion";

export default function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="relative overflow-hidden rounded-3xl glass p-10 md:p-16">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
          <div className="conic-ring rounded-3xl" />
          <div className="relative max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]">
              Ready to Build
            </div>
            <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-gradient">解放生产力，</span>
              <br />
              <span className="text-gradient-violet">用最棒的模型写出最酷的代码。</span>
            </h2>
            <p className="mt-6 text-[var(--fg)] text-base md:text-lg max-w-2xl leading-relaxed">
              去控制台创建密钥，立即点燃你的 Claude Code 和 Codex。专注创新，将繁琐的调用抛之脑后。
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={LINKS.keys} target="_top" rel="noopener" className="btn-primary px-5 py-3 rounded-xl font-medium inline-flex items-center gap-2"
              >
                获取密钥 <ArrowRight className="w-4 h-4" />
              </a>
              <a href={LINKS.chat} target="_top" rel="noopener" className="btn-ghost px-5 py-3 rounded-xl inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> 网页聊天
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
