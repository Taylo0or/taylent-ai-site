import Link from "next/link";
import { LINKS } from "@/lib/links";
import type { Metadata } from "next";
import { ArrowRight, Mail, Globe, Shield, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "关于 · Taylent AI",
  description: "Taylent AI — 设计智能应用的未来。由开发者构建，为开发者服务。",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="aurora" />
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs glass">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-[var(--fg)]">About Taylent</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              <span className="text-gradient">设计智能应用的未来</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 text-lg text-[var(--mu)] leading-relaxed">
              由开发者构建，为开发者服务。我们相信顶尖模型的能力不该被门槛、延迟和繁琐的账单挡住。
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 border-t border-[var(--bd)]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 grid md:grid-cols-3 gap-5">
          {[
            { icon: Globe, t: "全球节点", v: "12+ 区域", d: "智能路由 / 故障自动切换" },
            { icon: Shield, t: "稳定保障", v: "99.95% SLA", d: "企业级集群 / 实时熔断" },
            { icon: Sparkles, t: "服务的开发者", v: "10,000+", d: "覆盖独立开发者到上市公司" },
          ].map((s, i) => (
            <FadeUp key={s.t} delay={i * 0.05} className="rounded-2xl glass p-6">
              <s.icon className="w-5 h-5 text-[var(--color-primary)]" />
              <div className="mt-4 text-3xl font-semibold tracking-tight">
                {s.v}
              </div>
              <div className="mt-1 text-sm text-[var(--fg)]">{s.t}</div>
              <div className="text-xs text-[var(--mu)] mt-1">{s.d}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-[var(--bd)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              <span className="text-gradient">我们的信念</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="mt-8 space-y-5 text-[var(--fg)] leading-relaxed">
              <p>
                AI 编程助手在 2025 年彻底改变了软件开发。但官方 API 的地域限制、计费门槛、和反复变更的政策，让大量开发者被挡在了最强模型之外。
              </p>
              <p>
                Taylent 用一行环境变量，把延迟、汇率、可用性、合规这些事一次性解决。我们做的就是 — 让你能像调用 localhost 一样调用 Claude、GPT、Gemini 和 Grok。
              </p>
              <p className="text-[var(--mu)]">
                如果有任何关于工程实现、计费规则、或是企业合作的问题，欢迎邮件联系 <a href="mailto:info@taylent.com" className="text-[var(--color-primary)] underline underline-offset-4">info@taylent.com</a>。
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 border-t border-[var(--bd)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 grid md:grid-cols-2 gap-5">
          <FadeUp className="rounded-2xl glass p-6">
            <Mail className="w-5 h-5 text-[var(--color-primary)]" />
            <div className="mt-4 text-sm font-semibold">邮件</div>
            <div className="text-xs text-[var(--mu)]">技术支持 · 企业合作 · 媒体对接</div>
            <a
              href="mailto:info@taylent.com"
              className="mt-4 inline-block font-mono text-xs text-[var(--color-primary)]"
            >
              info@taylent.com
            </a>
          </FadeUp>
          <FadeUp delay={0.1} className="rounded-2xl glass p-6">
            <Globe className="w-5 h-5 text-emerald-400" />
            <div className="mt-4 text-sm font-semibold">控制台</div>
            <div className="text-xs text-[var(--mu)]">创建密钥 · 查看用量</div>
            <a href={LINKS.dashboard} target="_top" rel="noopener" className="mt-4 btn-primary px-3 py-1.5 rounded-lg text-xs inline-flex items-center gap-1.5"
            >
              立即进入 <ArrowRight className="w-3 h-3" />
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
