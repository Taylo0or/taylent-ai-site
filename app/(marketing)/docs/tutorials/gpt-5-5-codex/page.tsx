import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  AlertTriangle,
  Code,
  FileCode,
  Folder,
  RotateCcw,
} from "lucide-react";
import CodeBlock from "@/components/code-block";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "教程 · Codex v0.124.0 中使用 GPT-5.5 · Taylent AI",
  description:
    "在 Codex v0.124.0 用自定义 model catalog 配置 gpt-5.5 模型，过渡方案，等官方支持后及时切回。",
};

const CUSTOM_MODELS_JSON = `{
  "models": [
    {
      "slug": "gpt-5.5",
      "display_name": "gpt-5.5",
      "description": "Custom local catalog entry for GPT-5.5 based on gpt-5.4 metadata.",
      "default_reasoning_level": "medium",
      "supported_reasoning_levels": [
        { "effort": "low",    "description": "Fast responses with lighter reasoning" },
        { "effort": "medium", "description": "Balances speed and reasoning depth for everyday tasks" },
        { "effort": "high",   "description": "Greater reasoning depth for complex problems" },
        { "effort": "xhigh",  "description": "Extra high reasoning depth for complex problems" }
      ],
      "shell_type": "shell_command",
      "visibility": "list",
      "supported_in_api": true,
      "priority": 1,
      "additional_speed_tiers": ["fast"],
      "context_window": 272000,
      "effective_context_window_pct": 0.95,
      "supports_parallel_tool_calls": true,
      "image_detail_raw_supported": true
    }
  ]
}`;

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-24 space-y-10">
      <FadeUp>
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 text-xs text-[var(--mu)] hover:text-[var(--fg)] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          返回文档
        </Link>
      </FadeUp>

      <FadeUp>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs glass mb-4">
          <Code className="w-3.5 h-3.5 text-[var(--color-primary)]" />
          <span className="text-[var(--fg)]">教程 · Codex / GPT-5.5</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          <span className="text-gradient">Codex v0.124.0 中使用 GPT-5.5</span>
        </h1>
        <p className="mt-4 text-[var(--mu)] leading-relaxed">
          截至 <span className="text-[var(--fg)]">2026-04-25</span>，Codex v0.124.0 在使用自定义 API（也就是 Taylent 这种中转）时，UI 还选不到{" "}
          <code className="font-mono text-[var(--color-primary)]">gpt-5.5</code>。本文给出一个临时配置方案，等官方更新后请切回官方方案。
        </p>
      </FadeUp>

      <FadeUp className="rounded-xl glass p-5 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="text-sm text-[var(--mu)] leading-relaxed">
          <span className="text-[var(--fg)] font-semibold">过渡方案</span>{" "}
          — 本配置会覆盖 Codex 默认的 model catalog。后续 Codex 官方更新内置 GPT-5.5 后，请删除自定义文件改用官方方案。
        </div>
      </FadeUp>

      <FadeUp className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <RotateCcw className="w-5 h-5 text-[var(--color-primary)]" />
          0. 清掉旧配置（如果你之前装过）
        </h2>
        <p className="text-[var(--mu)] leading-relaxed">
          如果按更早版本的教程改过 catalog，先删掉以下两处避免冲突：
        </p>
        <ul className="space-y-2 text-sm text-[var(--fg)] pl-1">
          <li>
            • 删除文件{" "}
            <code className="font-mono text-[var(--color-primary)]">
              ~/.codex/custom-models.json
            </code>
          </li>
          <li>
            • 删除{" "}
            <code className="font-mono text-[var(--color-primary)]">
              ~/.codex/config.toml
            </code>{" "}
            中含{" "}
            <code className="font-mono text-[var(--color-primary)]">
              model_catalog_json
            </code>{" "}
            的那一行
          </li>
        </ul>
      </FadeUp>

      <FadeUp className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <FileCode className="w-5 h-5 text-[var(--color-primary)]" />
          1. 创建 custom-models.json
        </h2>
        <p className="text-[var(--mu)] leading-relaxed">
          在 Codex 配置目录下新建：
        </p>
        <CodeBlock
          code={`~/.codex/custom-models.json`}
          filename="文件路径"
        />
        <p className="text-[var(--mu)] leading-relaxed">写入以下内容：</p>
        <CodeBlock code={CUSTOM_MODELS_JSON} filename="custom-models.json" />
        <p className="text-sm text-[var(--mu)] leading-relaxed">
          说明：模型 slug =<code className="font-mono text-[var(--color-primary)]"> gpt-5.5</code>，上下文窗口 272K，4 档推理 effort（low / medium / high / xhigh），支持并行工具调用。
        </p>
      </FadeUp>

      <FadeUp className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Folder className="w-5 h-5 text-[var(--color-primary)]" />
          2. 在 config.toml 中引用
        </h2>
        <p className="text-[var(--mu)] leading-relaxed">
          编辑 Codex 主配置文件{" "}
          <code className="font-mono text-[var(--color-primary)]">~/.codex/config.toml</code>
          ，加上 <code className="font-mono text-[var(--color-primary)]">model_catalog_json</code> 一行：
        </p>
        <CodeBlock
          code={`openai_base_url = "https://api.taylent.com/v1"
model = "gpt-5.5"
model_reasoning_effort = "high"
model_catalog_json = "/Users/<你的用户名>/.codex/custom-models.json"`}
          filename="~/.codex/config.toml"
        />
        <p className="text-sm text-[var(--mu)] leading-relaxed">
          重启 Codex 之后，模型选择面板就会出现 gpt-5.5。
        </p>
      </FadeUp>

      <FadeUp className="rounded-xl glass p-5 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="text-sm text-[var(--mu)] leading-relaxed">
          <span className="text-[var(--fg)] font-semibold">路径分隔符</span>{" "}
          —{" "}
          <code className="font-mono text-[var(--color-primary)]">model_catalog_json</code>{" "}
          的路径要按操作系统写：macOS / Linux 用{" "}
          <code className="font-mono text-[var(--color-primary)]">/</code>，Windows 用{" "}
          <code className="font-mono text-[var(--color-primary)]">\\</code>（在 TOML 双引号字符串里转义成两个反斜杠）。
          <div className="mt-3">
            <CodeBlock
              code={`# macOS / Linux
model_catalog_json = "/Users/toint/.codex/custom-models.json"

# Windows
model_catalog_json = "C:\\\\Users\\\\toint\\\\.codex\\\\custom-models.json"`}
            />
          </div>
        </div>
      </FadeUp>

      <FadeUp className="rounded-xl glass p-5">
        <div className="text-sm font-semibold text-[var(--fg)]">环境参考</div>
        <div className="mt-3 grid sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg border border-[var(--bd)] px-3 py-2">
            <div className="text-[10px] uppercase tracking-wider text-[var(--mu)]">macOS</div>
            <div className="mt-0.5 font-mono text-[var(--fg)]">26.422.30944 (2080)</div>
          </div>
          <div className="rounded-lg border border-[var(--bd)] px-3 py-2">
            <div className="text-[10px] uppercase tracking-wider text-[var(--mu)]">codex-cli</div>
            <div className="mt-0.5 font-mono text-[var(--fg)]">0.125.0</div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="rounded-2xl glass p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">配置过程出问题？</div>
          <p className="mt-1 text-sm text-[var(--mu)]">
            Telegram 群组在线答疑，邮件{" "}
            <a
              href="mailto:info@taylent.com"
              className="text-[var(--color-primary)] underline underline-offset-4"
            >
              info@taylent.com
            </a>
            。
          </p>
        </div>
        <Link
          href="/docs"
          className="btn-ghost px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2 self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" /> 回到文档
        </Link>
      </FadeUp>
    </article>
  );
}
