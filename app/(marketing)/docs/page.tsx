import Link from "next/link";
import { LINKS } from "@/lib/links";
import type { Metadata } from "next";
import {
  Sparkles,
  Terminal,
  Code,
  Workflow,
  ArrowRight,
  Rocket,
  BookOpen,
  Wallet,
  Wand2,
  Zap,
  ShieldCheck,
  PiggyBank,
  Layers,
  Sliders,
  GraduationCap,
  Image as ImageIcon,
  Mail,
  Send,
} from "lucide-react";
import CodeBlock from "@/components/code-block";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "文档 · Taylent AI",
  description:
    "Taylent AI 接入文档：核心概念、术语表、4 步快速接入，以及 Claude Code、Codex、Cursor、Continue、Cline 全场景配置指南。",
};

const SECTIONS = [
  { id: "intro", label: "Taylent 简介" },
  { id: "why", label: "为什么用 Taylent" },
  { id: "glossary", label: "术语名词" },
  { id: "quickstart", label: "快速接入" },
  { id: "claude-code", label: "Claude Code" },
  { id: "codex", label: "Codex" },
  { id: "cursor", label: "Cursor / IDE" },
  { id: "openai-sdk", label: "OpenAI SDK" },
  { id: "anthropic-sdk", label: "Anthropic SDK" },
  { id: "models", label: "模型清单" },
  { id: "errors", label: "错误码" },
  { id: "tutorials", label: "教程" },
  { id: "support", label: "联系我们" },
];

const TUTORIALS = [
  {
    href: "/docs/tutorials/gpt-image-2",
    icon: ImageIcon,
    tag: "图像生成",
    title: "GPT-Image-2 接入指南",
    desc: "用 Taylent 调用 gpt-image-2 生成图片，并把它无痛集成到 Codex 的 imagegen Skill — 含 API 调用、3 个常见坑、超时处理。",
    eta: "约 8 分钟",
  },
  {
    href: "/docs/tutorials/gpt-5-5-codex",
    icon: Code,
    tag: "Codex / 模型",
    title: "Codex v0.124.0 中使用 GPT-5.5",
    desc: "在 Codex 自定义模型 catalog 里加 gpt-5.5 的过渡方案，含 custom-models.json 完整模板和 config.toml 配置。",
    eta: "约 5 分钟",
  },
];

const WHY = [
  {
    icon: Wand2,
    title: "更方便",
    desc: "统一接入方式，一个 Key 通吃 Claude · GPT · Gemini · Grok，告别各平台账号、计费、汇率切换。",
  },
  {
    icon: ShieldCheck,
    title: "更稳定",
    desc: "全球边缘节点 + 智能路由 + 自动故障切换，连接失败和超时降到最低，企业级集群保 99.95% SLA。",
  },
  {
    icon: Layers,
    title: "更省心",
    desc: "在一处管理所有模型与账单，控制台一目了然。无需针对各平台写适配，环境变量切换即可。",
  },
  {
    icon: PiggyBank,
    title: "更省钱",
    desc: "全模型相对官方 8 折，按 token 实时扣费，余额永不过期。Claude Code Plan 模式同样适用。",
  },
  {
    icon: Sliders,
    title: "更灵活",
    desc: "起步包到团队包到企业定制，按月卡 / 按量 / 私有线路任选。支持子账号、按项目结算、专票。",
  },
];

const TERMS: { term: string; en?: string; desc: React.ReactNode }[] = [
  {
    term: "BaseURL",
    en: "Base URL",
    desc: (
      <>
        服务接口的基础地址。在编程工具或 SDK 中填写后，所有请求都会发到这里。Taylent 的标准地址是{" "}
        <code className="font-mono text-[var(--color-primary)]">https://api.taylent.com</code>
        ；OpenAI 兼容接口需在末尾加{" "}
        <code className="font-mono text-[var(--color-primary)]">/v1</code>。
      </>
    ),
  },
  {
    term: "API Key",
    en: "ApiKey",
    desc: (
      <>
        鉴权访问令牌，用于身份标识与权限关联。在 Taylent 控制台{" "}
        <a
          href={LINKS.keys}
          target="_top"
          rel="noopener"
          className="text-[var(--color-primary)] underline underline-offset-4"
        >
          API Keys
        </a>{" "}
        页生成，建议按项目隔离，并按额度 / IP 精细化管控。形如{" "}
        <code className="font-mono text-[var(--color-primary)]">sk-tay-...</code>。
      </>
    ),
  },
  {
    term: "Tokens",
    en: "Tokens",
    desc: (
      <>
        模型处理内容的最小计量单位。一次调用通常分为三类：
        <ul className="mt-2 space-y-1.5 list-disc pl-6">
          <li>
            <span className="text-[var(--fg)] font-medium">输入 Tokens</span> — 你发给模型的提示与历史消息。
          </li>
          <li>
            <span className="text-[var(--fg)] font-medium">输出 Tokens</span> — 模型生成回复的内容。
          </li>
          <li>
            <span className="text-[var(--fg)] font-medium">缓存 Tokens</span> — 命中提示缓存的输入部分，按更低单价计费，能显著省钱。
          </li>
        </ul>
      </>
    ),
  },
  {
    term: "刀（美刀）",
    en: "USD",
    desc: (
      <>
        平台内用于结算模型调用的额度单位。每次调用的费用按下面公式计算：
        <div className="mt-3">
          <CodeBlock
            code={`( (输入Tokens − 缓存Tokens) × 输入单价 )
+ ( 输出Tokens × 输出单价 )
+ ( 缓存Tokens × 缓存单价 )`}
          />
        </div>
      </>
    ),
  },
  {
    term: "元",
    en: "RMB",
    desc: (
      <>
        人民币，用于购买或兑换系统内的额度。本地汇率随官方大致同步，详见{" "}
        <Link
          href="/pricing"
          className="text-[var(--color-primary)] underline underline-offset-4"
        >
          价格页
        </Link>
        。
      </>
    ),
  },
];

const QUICK_STEPS = [
  {
    icon: Wallet,
    title: "充值额度",
    desc: "进入控制台 → 钱包管理 → 额度充值，购买兑换码或在线支付。新用户首次充值赠送体验额度。",
    href: LINKS.billing,
    cta: "去充值",
  },
  {
    icon: Code,
    title: "安装编程工具",
    desc: "选你顺手的工具：Claude Code · Codex · Cursor · Continue · Cline · OpenCode · Gemini CLI 全部支持。安装只要几分钟。",
  },
  {
    icon: Wand2,
    title: "配置环境变量",
    desc: "把工具的 BASE_URL 改为 Taylent 的端点，API Key 用控制台生成的 sk-tay-... 注意 OpenAI 兼容接口要加 /v1 后缀。",
    href: LINKS.keys,
    cta: "获取 API Key",
  },
  {
    icon: Rocket,
    title: "开始编码",
    desc: "原项目代码无需改动一行，直接在终端或 IDE 中唤出 AI，进入沉浸式开发。",
  },
];

export default function DocsPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="aurora" />
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs glass">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-[var(--fg)]">Docs · v1</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              <span className="text-gradient">5 分钟接入</span>
              <span className="text-[var(--mu)]">，开始极速编程</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 text-[var(--mu)] max-w-2xl">
              Taylent 完全兼容 Anthropic / OpenAI 官方接口规范，迁移只需替换 Base URL，无需修改任何代码。
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start">
            <div className="text-xs uppercase tracking-wider text-[var(--mu)] mb-3">
              On this page
            </div>
            <nav className="flex lg:flex-col gap-1 overflow-x-auto no-scrollbar">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3 py-2 text-sm text-[var(--mu)] hover:text-[var(--fg)] rounded-md hover:bg-[var(--glass-top)] whitespace-nowrap"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-16">
            <Block id="intro" icon={BookOpen} title="Taylent 简介">
              <p>
                <strong className="text-[var(--fg)]">Taylent</strong> 是企业级 AI 中转站，帮助开发者更方便地接入和使用国际主流 AI 大模型。无缝适配 20+ 编程工具，包括{" "}
                <span className="text-[var(--color-primary)]">Claude Code</span>、{" "}
                <span className="text-[var(--color-primary)]">Codex</span>、{" "}
                <span className="text-[var(--color-primary)]">Gemini CLI</span>、{" "}
                <span className="text-[var(--color-primary)]">OpenCode</span>、{" "}
                <span className="text-[var(--color-primary)]">Cursor</span>、Continue、Cline。
              </p>
              <p className="text-[var(--mu)]">
                一行环境变量替换，原代码不用改一个字，立刻拥有更稳的连接、更省的账单、更顺的工具链。
              </p>
            </Block>

            <Block id="why" icon={Zap} title="为什么用 Taylent">
              <div className="grid sm:grid-cols-2 gap-3 not-prose">
                {WHY.map((w) => (
                  <div
                    key={w.title}
                    className="rounded-xl glass p-5 flex items-start gap-3"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-sky-400/10 border border-[var(--bd)]">
                      <w.icon className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--fg)]">
                        {w.title}
                      </div>
                      <p className="mt-1 text-xs text-[var(--mu)] leading-relaxed">
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <Block id="glossary" icon={BookOpen} title="术语名词">
              <p className="text-[var(--mu)]">
                理解这几个名词，后面的配置和账单看起来都会很顺。
              </p>
              <div className="rounded-2xl glass overflow-hidden">
                {TERMS.map((t, i) => (
                  <div
                    key={t.term}
                    className={`px-6 py-5 ${i > 0 ? "border-t border-[var(--bd)]" : ""}`}
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-base font-semibold text-[var(--fg)]">
                        {t.term}
                      </span>
                      {t.en && (
                        <span className="text-xs font-mono text-[var(--mu)]">
                          {t.en}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-[var(--mu)] leading-relaxed">
                      {t.desc}
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <Block id="quickstart" icon={Rocket} title="快速接入">
              <p>四步即可启用 Taylent：</p>
              <div className="grid md:grid-cols-2 gap-4 not-prose">
                {QUICK_STEPS.map((s, i) => (
                  <div
                    key={s.title}
                    className="rounded-2xl glass p-6 flex flex-col"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 text-white text-xs font-semibold flex items-center justify-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold text-[var(--fg)]">
                        {s.title}
                      </h3>
                      <s.icon className="w-4 h-4 text-[var(--color-primary)] ml-auto" />
                    </div>
                    <p className="mt-3 text-sm text-[var(--mu)] leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    {s.href && (
                      <a
                        href={s.href}
                        target="_top"
                        rel="noopener"
                        className="mt-4 btn-ghost px-3 py-1.5 rounded-lg text-xs inline-flex items-center gap-1.5 self-start"
                      >
                        {s.cta} <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <CodeBlock
                code={`# 通用调用示例
curl https://api.taylent.com/v1/chat/completions \\
  -H "Authorization: Bearer sk-tay-..." \\
  -H "Content-Type: application/json" \\
  -d '{ "model": "claude-sonnet-4-6", "messages": [{"role":"user","content":"hi"}] }'`}
                filename="curl"
              />
            </Block>

            <Block id="claude-code" icon={Terminal} title="Claude Code">
              <p>
                通过环境变量切换 Anthropic 端点，原生 Claude Code 体验完全保留：
              </p>
              <CodeBlock
                code={`# 一次性环境变量
export ANTHROPIC_BASE_URL="https://api.taylent.com"
export ANTHROPIC_AUTH_TOKEN="sk-tay-..."

claude    # 现在所有请求走 Taylent`}
                filename="~/.zshrc · Claude Code"
              />
              <p className="text-sm text-[var(--mu)]">
                <strong className="text-[var(--fg)]">提示：</strong>
                也可以写到{" "}
                <code className="font-mono text-[var(--color-primary)]">~/.claude/settings.json</code>{" "}
                里项目级覆盖。
              </p>
            </Block>

            <Block id="codex" icon={Code} title="Codex">
              <CodeBlock
                code={`export OPENAI_BASE_URL="https://api.taylent.com/v1"
export OPENAI_API_KEY="sk-tay-..."

codex`}
                filename="~/.zshrc · Codex"
              />
              <p className="text-sm text-[var(--mu)]">
                <strong className="text-[var(--fg)]">注意：</strong>
                Codex 走 OpenAI 兼容协议，BaseURL 末尾要加{" "}
                <code className="font-mono text-[var(--color-primary)]">/v1</code>。Claude Code 是原生 Anthropic 协议，不要加。
              </p>
            </Block>

            <Block id="cursor" icon={Workflow} title="Cursor / Continue / Cline">
              <p className="text-sm text-[var(--fg)]">
                在 Cursor 设置里选择 <span className="font-medium">OpenAI Compatible</span>，填写：
              </p>
              <div className="rounded-xl glass overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-[var(--bd)]">
                  <KV k="Base URL" v="https://api.taylent.com/v1" />
                  <KV k="API Key" v="sk-tay-..." />
                </div>
              </div>
            </Block>

            <Block id="openai-sdk" icon={Code} title="OpenAI SDK">
              <CodeBlock
                code={`import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.taylent.com/v1",
  apiKey: process.env.TAYLENT_API_KEY,
});

const res = await client.chat.completions.create({
  model: "gpt-5",
  messages: [{ role: "user", content: "hello" }],
});`}
                filename="index.ts"
              />
            </Block>

            <Block id="anthropic-sdk" icon={Code} title="Anthropic SDK">
              <CodeBlock
                code={`import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  baseURL: "https://api.taylent.com",
  authToken: process.env.TAYLENT_API_KEY,
});

const msg = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  messages: [{ role: "user", content: "hello" }],
});`}
                filename="index.ts"
              />
            </Block>

            <Block id="models" icon={Sparkles} title="支持的模型">
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  "claude-sonnet-4-6",
                  "claude-opus-4-7",
                  "claude-haiku-4-5",
                  "gpt-5",
                  "gpt-5-mini",
                  "o4-mini",
                  "gemini-2.5-pro",
                  "gemini-2.5-flash",
                  "grok-4",
                  "grok-3-fast",
                ].map((m) => (
                  <li
                    key={m}
                    className="font-mono text-xs px-3 py-2 rounded-lg glass text-[var(--fg)]"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[var(--mu)]">
                完整列表与每日更新见{" "}
                <a
                  href={LINKS.dashboard}
                  target="_top"
                  rel="noopener"
                  className="text-[var(--color-primary)] underline underline-offset-4"
                >
                  控制台 / Models
                </a>
                。
              </p>
            </Block>

            <Block id="errors" icon={Terminal} title="错误码">
              <div className="rounded-xl glass overflow-hidden">
                {[
                  ["401", "Unauthorized — API Key 不正确或已禁用"],
                  ["402", "Payment Required — 余额不足，请充值"],
                  ["429", "Too Many Requests — 命中并发限制"],
                  ["502", "Upstream — 上游模型暂时不可用，已自动切换备线"],
                ].map(([code, desc]) => (
                  <div
                    key={code}
                    className="grid grid-cols-[80px_1fr] gap-3 px-5 py-3 border-b border-[var(--bd)] last:border-0 text-sm"
                  >
                    <span className="font-mono text-[var(--color-primary)]">{code}</span>
                    <span className="text-[var(--fg)]">{desc}</span>
                  </div>
                ))}
              </div>
            </Block>

            <Block id="tutorials" icon={GraduationCap} title="教程">
              <p className="text-[var(--mu)]">
                深入场景的实战指南：怎么用 gpt-image-2 生成图片、怎么在 Codex 里临时启用 GPT-5.5。后续会继续补充。
              </p>
              <div className="grid md:grid-cols-2 gap-4 not-prose">
                {TUTORIALS.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="group rounded-2xl glass p-6 flex flex-col hover:bg-[var(--glass-top)] transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-sky-400/10 border border-[var(--bd)] flex items-center justify-center">
                        <t.icon className="w-4 h-4 text-[var(--color-primary)]" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--mu)]">
                        {t.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[var(--fg)]">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--mu)] leading-relaxed flex-1">
                      {t.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="text-[var(--mu)]">{t.eta}</span>
                      <span className="inline-flex items-center gap-1 text-[var(--color-primary)] group-hover:gap-2 transition-all">
                        阅读 <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Block>

            <FadeUp
              as="section"
              id="support"
              className="scroll-mt-24 rounded-2xl glass p-7 flex flex-col md:flex-row md:items-center gap-5 justify-between"
            >
              <div>
                <div className="text-sm font-semibold">联系我们</div>
                <p className="mt-1 text-sm text-[var(--mu)]">
                  Telegram 群组实时答疑，工单 5 分钟内响应；企业合作 / 媒体对接请发邮件至{" "}
                  <a
                    href={LINKS.email}
                    className="text-[var(--color-primary)] underline underline-offset-4"
                  >
                    info@taylent.com
                  </a>
                  。
                </p>
              </div>
              <div className="grid grid-cols-2 sm:flex items-stretch gap-2 w-full sm:w-auto self-stretch sm:self-auto shrink-0">
                <a
                  href={LINKS.email}
                  className="btn-ghost h-10 px-5 rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  发邮件
                </a>
                <a
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary h-10 px-5 rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  加入 Telegram
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeUp as="section" id={id} className="scroll-mt-24 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-sky-400/10 border border-[var(--bd)] flex items-center justify-center">
          <Icon className="w-4 h-4 text-[var(--color-primary)]" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="space-y-4 text-[var(--fg)] leading-relaxed">{children}</div>
    </FadeUp>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="px-4 py-3">
      <div className="text-[10px] uppercase tracking-wider text-[var(--mu)]">{k}</div>
      <div className="mt-1 font-mono text-sm text-[var(--fg)] break-all">{v}</div>
    </div>
  );
}
