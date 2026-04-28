import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Image as ImageIcon,
  AlertTriangle,
  Sparkles,
  KeyRound,
  Clock,
  Cpu,
} from "lucide-react";
import CodeBlock from "@/components/code-block";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "教程 · GPT-Image-2 接入指南 · Taylent AI",
  description:
    "在 Taylent 上使用 gpt-image-2 模型生成图片：API 调用、Codex imagegen Skill 集成、常见问题排查。",
};

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
          <ImageIcon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
          <span className="text-[var(--fg)]">教程 · 图像生成</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          <span className="text-gradient">GPT-Image-2 接入指南</span>
        </h1>
        <p className="mt-4 text-[var(--mu)] leading-relaxed">
          用 Taylent 调用 <code className="font-mono text-[var(--color-primary)]">gpt-image-2</code> 生成图像，并把它无痛集成到 Codex 的 imagegen Skill。
        </p>
      </FadeUp>

      <FadeUp className="rounded-xl glass p-5 flex gap-3">
        <KeyRound className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
        <div>
          <div className="text-sm font-semibold">先看清楚：API Key 分组不同</div>
          <p className="mt-1.5 text-sm text-[var(--mu)] leading-relaxed">
            聊天对话和文生图走的是不同接口、用的是不同分组的 API Key。在 Taylent 控制台创建 Key 时记得选对：
          </p>
          <div className="mt-4 rounded-lg overflow-hidden border border-[var(--bd)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--glass-top)] text-[10px] uppercase tracking-wider text-[var(--mu)]">
                <tr>
                  <th className="text-left px-4 py-2 font-normal">用途</th>
                  <th className="text-left px-4 py-2 font-normal">令牌分组</th>
                  <th className="text-left px-4 py-2 font-normal">端点</th>
                </tr>
              </thead>
              <tbody className="text-[var(--fg)]">
                <tr className="border-t border-[var(--bd)]">
                  <td className="px-4 py-2.5">文生图</td>
                  <td className="px-4 py-2.5">
                    <code className="font-mono text-xs">default</code>
                  </td>
                  <td className="px-4 py-2.5 font-mono text-xs">/v1/images/generations</td>
                </tr>
                <tr className="border-t border-[var(--bd)]">
                  <td className="px-4 py-2.5">聊天对话</td>
                  <td className="px-4 py-2.5">
                    <code className="font-mono text-xs">gpt</code> / <code className="font-mono text-xs">gpt-pro</code>
                  </td>
                  <td className="px-4 py-2.5 font-mono text-xs">
                    /v1/responses 或 /v1/chat/completions
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[var(--color-primary)]" />
          1. 直接 API 调用
        </h2>
        <p className="text-[var(--mu)] leading-relaxed">
          图片生成可能要等几十秒到几分钟，调用方耐心等待即可。
        </p>
        <CodeBlock
          code={`curl https://api.taylent.com/v1/images/generations \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer \${apikey}" \\
  -d '{
    "model": "gpt-image-2",
    "prompt": "一只戴着护目镜的橘猫工程师，坐在机械键盘前写代码，漫画插画风格",
    "size": "1024x1024"
  }'`}
          filename="curl · 文生图调用"
        />
        <p className="text-sm text-[var(--mu)]">响应示例：</p>
        <CodeBlock
          code={`{
  "created": 1776889447,
  "data": [
    {
      "b64_json": "<图片 Base64>",
      "revised_prompt": "漫画插画风格，一只戴着护目镜的橘猫工程师……"
    }
  ],
  "background": "opaque",
  "output_format": "png",
  "quality": "medium",
  "size": "1024x1024",
  "usage": {
    "input_tokens": 81,
    "input_tokens_details": { "image_tokens": 0, "text_tokens": 81 },
    "output_tokens": 1756,
    "output_tokens_details": { "image_tokens": 1756, "text_tokens": 0 },
    "total_tokens": 1837
  }
}`}
          filename="response.json"
        />
      </FadeUp>

      <FadeUp className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
          2. 在 Codex 里调用
        </h2>
        <p className="text-[var(--mu)] leading-relaxed">
          Codex 直接对话走的是{" "}
          <code className="font-mono text-[var(--color-primary)]">/v1/chat/completions</code>{" "}
          /{" "}
          <code className="font-mono text-[var(--color-primary)]">/v1/responses</code>，不会自动调用图片生成接口。Codex 自带的 imagegen Skill 才会做这件事：
        </p>
        <CodeBlock
          code={`~/.codex/skills/.system/imagegen/SKILL.md`}
          filename="imagegen Skill 路径"
        />
        <p className="text-sm text-[var(--mu)]">触发方式：</p>
        <CodeBlock
          code={`$imagegen 漫画插画风格，一只戴着护目镜的橘猫工程师，坐在机械键盘前认真写代码……`}
          filename="Codex 提示词"
        />
        <p className="text-[var(--mu)] leading-relaxed">
          imagegen 会用 Python 脚本去调上面那条 curl 接口。但实际跑起来你大概率会撞上下面三个坑。
        </p>
      </FadeUp>

      <FadeUp className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          坑一：缺少 OPENAI_API_KEY
        </h2>
        <p className="text-[var(--mu)] leading-relaxed">
          Codex 默认会跟你说：
        </p>
        <CodeBlock
          code={`当前环境缺少 OPENAI_API_KEY, 现在还不能实际生成图片.`}
        />
        <p className="text-[var(--mu)] leading-relaxed">
          因为聊天和文生图分开走，Codex 默认不知道你的图片 Key 在哪。
          MacOS 用户在 <code className="font-mono text-[var(--color-primary)]">~/.zshrc</code> 末尾加两行：
        </p>
        <CodeBlock
          code={`# 文生图专属环境变量（Key 用 default 分组的那个）
export OPENAI_BASE_URL="https://api.taylent.com/v1"
export OPENAI_API_KEY="sk-tay-..."`}
          filename="~/.zshrc"
        />
        <p className="text-sm text-[var(--mu)]">
          已有的{" "}
          <code className="font-mono text-[var(--color-primary)]">~/.codex/config.toml</code>{" "}
          和{" "}
          <code className="font-mono text-[var(--color-primary)]">~/.codex/auth.json</code>{" "}
          管的是普通对话，跟图片生成是两件事，不冲突也别误删。
        </p>
      </FadeUp>

      <FadeUp className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          坑二：模型自动降级到 gpt-image-1
        </h2>
        <p className="text-[var(--mu)] leading-relaxed">
          不指定模型时，Codex 会逐级降级尝试：
          <code className="font-mono text-[var(--color-primary)]"> gpt-image-1.5</code> →{" "}
          <code className="font-mono text-[var(--color-primary)]">gpt-image-1</code> →{" "}
          <code className="font-mono text-[var(--color-primary)]">gpt-image-1-mini</code>。
          想用 gpt-image-2 必须在提示词里说清楚：
        </p>
        <CodeBlock
          code={`$imagegen 使用 gpt-image-2 模型, 生成漫画插画风格，一只戴着护目镜的橘猫工程师……`}
          filename="带模型限定的提示词"
        />
      </FadeUp>

      <FadeUp className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-500" />
          坑三：Codex 等不及，提前 abort
        </h2>
        <p className="text-[var(--mu)] leading-relaxed">
          图片生成可能耗时几分钟。Codex 有时候摆烂直接结束任务 — 但接口大多按次扣费，提前结束也算钱。在提示词里强制要求等待：
        </p>
        <CodeBlock
          code={`$imagegen 生成漫画插画风格，一只戴着护目镜的橘猫工程师……

要求 1. 使用 gpt-image-2 模型
要求 2. 必须等待接口请求返回后才能结束任务，不允许私自提前结束。`}
          filename="完整提示词模板"
        />
        <p className="text-sm text-[var(--mu)]">
          完成后图片会落到工作目录的{" "}
          <code className="font-mono text-[var(--color-primary)]">./output/imagegen/</code>{" "}
          下。
        </p>
      </FadeUp>

      <FadeUp className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">常见问题</h2>
        <div className="rounded-2xl glass overflow-hidden">
          <div className="px-6 py-5">
            <div className="text-sm font-semibold text-[var(--fg)]">
              请求超过 120s 后仍然超时
            </div>
            <p className="mt-2 text-sm text-[var(--mu)] leading-relaxed">
              Taylent 边缘节点由 Cloudflare 提供，Cloudflare 默认超时是 120s。如果你确认是上游慢导致的 524，请发邮件到{" "}
              <a
                href="mailto:info@taylent.com"
                className="text-[var(--color-primary)] underline underline-offset-4"
              >
                info@taylent.com
              </a>
              ，我们安排专属高时长通道。
            </p>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="rounded-2xl glass p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">需要帮助？</div>
          <p className="mt-1 text-sm text-[var(--mu)]">
            Telegram 群组实时答疑，邮件{" "}
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
