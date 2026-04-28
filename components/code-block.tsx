"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type Token = { t: "text" | "comment" | "key" | "str" | "cmd" | "flag"; v: string };

export function highlightShell(line: string): Token[] {
  // very small bash-ish tokenizer for marketing display
  const out: Token[] = [];
  if (line.trim().startsWith("#")) return [{ t: "comment", v: line }];
  // export KEY="value"  | export KEY=$VAR | claude | $ claude
  let i = 0;
  while (i < line.length) {
    const rest = line.slice(i);
    let m: RegExpMatchArray | null;
    if ((m = rest.match(/^export\b/))) {
      out.push({ t: "cmd", v: m[0] });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(/^(claude|codex|cursor|npm|npx|curl|bash|node|pnpm|python)\b/))) {
      out.push({ t: "cmd", v: m[0] });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(/^"([^"]*)"/))) {
      out.push({ t: "str", v: m[0] });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(/^[A-Z_][A-Z0-9_]*=/))) {
      out.push({ t: "key", v: m[0] });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(/^\$[A-Z_][A-Z0-9_]*/))) {
      out.push({ t: "flag", v: m[0] });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(/^--?[a-zA-Z][\w-]*/))) {
      out.push({ t: "flag", v: m[0] });
      i += m[0].length;
      continue;
    }
    out.push({ t: "text", v: line[i] });
    i += 1;
  }
  return out;
}

// All colour tokens resolve to CSS variables defined in globals.css for both
// light and dark themes. `text-[var(--fg)]` keeps unhighlighted characters
// (commas, braces, plain text) readable against the glass background.
const TOKEN_CLASS: Record<Token["t"], string> = {
  text: "text-[var(--fg)]",
  comment: "tk-comment italic",
  key: "tk-key",
  str: "tk-str",
  cmd: "tk-cmd font-medium",
  flag: "tk-flag",
};

export default function CodeBlock({
  code,
  filename,
  className,
  showCopy = true,
}: {
  code: string;
  filename?: string;
  className?: string;
  showCopy?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n+$/, "").split("\n");

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div
      className={cn(
        "relative rounded-xl glass overflow-hidden gradient-border",
        className,
      )}
    >
      {filename && (
        <div className="flex items-center justify-between px-4 h-9 border-b border-[var(--bd)] bg-[var(--glass-top)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 text-[11px] text-[var(--mu)] font-mono">{filename}</span>
          </div>
          {showCopy && (
            <button
              onClick={onCopy}
              className="text-[var(--mu)] hover:text-[var(--fg)] transition p-1 rounded"
              aria-label="copy"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      )}
      <pre className="code-block px-5 py-4 overflow-x-auto no-scrollbar">
        <code>
          {lines.map((line, idx) => (
            <div key={idx} className="whitespace-pre">
              {line.length === 0 ? (
                " "
              ) : (
                highlightShell(line).map((tok, j) => (
                  <span key={j} className={TOKEN_CLASS[tok.t]}>
                    {tok.v}
                  </span>
                ))
              )}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
