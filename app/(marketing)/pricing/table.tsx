"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search, Sparkles } from "lucide-react";
import {
  PRICING_MODELS,
  type PriceModel,
  type PriceProvider,
  type PriceType,
} from "@/lib/pricing-data";
import BrandIcon from "@/components/brand-icon";
import { FadeUp } from "@/components/motion";
import { cn } from "@/lib/utils";

const PROVIDERS: ("全部供应商" | PriceProvider)[] = [
  "全部供应商",
  "Anthropic",
  "OpenAI",
  "Google",
];
const TYPES: ("全部类型" | PriceType)[] = [
  "全部类型",
  "对话",
  "图像",
  "音频",
];

const PROVIDER_BRAND: Record<PriceProvider, "anthropic" | "openai" | "gemini"> = {
  Anthropic: "anthropic",
  OpenAI: "openai",
  Google: "gemini",
};

const PAGE_SIZE = 10;

function formatPrice(rmb: number, unit: "1M" | "1K"): string {
  if (rmb === 0) return "—";
  const value = unit === "1M" ? rmb : rmb / 1000;
  // Adapt precision to magnitude so we don't show ¥0.00 for tiny values
  let formatted: string;
  if (value >= 100) formatted = value.toFixed(2);
  else if (value >= 1) formatted = value.toFixed(2);
  else if (value >= 0.01) formatted = value.toFixed(3);
  else formatted = value.toFixed(5).replace(/0+$/, "").replace(/\.$/, "");
  return `¥${formatted}`;
}

export default function PricingTable() {
  const [unit, setUnit] = useState<"1M" | "1K">("1M");
  const [provider, setProvider] = useState<(typeof PROVIDERS)[number]>(
    "全部供应商",
  );
  const [type, setType] = useState<(typeof TYPES)[number]>("全部类型");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRICING_MODELS.filter((m) => {
      if (provider !== "全部供应商" && m.provider !== provider) return false;
      if (type !== "全部类型" && m.type !== type) return false;
      if (q && !m.name.toLowerCase().includes(q) && !m.provider.toLowerCase().includes(q))
        return false;
      return true;
    });
  }, [provider, type, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageData = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  // Reset to page 1 whenever filters change in a way that could break current page
  if (page !== safePage) setTimeout(() => setPage(safePage), 0);

  const onFilterChange = <T,>(setter: (v: T) => void) => (v: T) => {
    setter(v);
    setPage(1);
  };

  return (
    <>
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="aurora" />
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs glass mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-[var(--fg)]">透明定价 · 按量实时扣费</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              <span className="text-gradient">模型定价</span>
            </h1>
            <p className="mt-3 text-[var(--mu)] max-w-xl">
              覆盖 Anthropic / OpenAI / Google 全主流模型，统一比官方更省，余额永不过期。
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <UnitToggle value={unit} onChange={setUnit} />
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp className="rounded-2xl glass overflow-hidden">
            {/* Filter row */}
            <div className="px-4 sm:px-6 py-4 border-b border-[var(--bd)] flex flex-col md:flex-row md:items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--mu)] pointer-events-none" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="搜索模型或供应商…"
                  className="w-full h-10 pl-10 pr-4 text-sm rounded-lg bg-[var(--glass-top)] border border-[var(--bd)] focus:border-[var(--color-primary)] outline-none transition placeholder:text-[var(--mu)]"
                />
              </div>
              <Select
                value={provider}
                onChange={onFilterChange(setProvider)}
                options={PROVIDERS as readonly string[]}
              />
              <Select
                value={type}
                onChange={onFilterChange(setType)}
                options={TYPES as readonly string[]}
              />
            </div>

            {/* Header — desktop only */}
            <div className="hidden md:grid grid-cols-[2.5fr_1fr_1.4fr_1.4fr] px-6 h-11 items-center text-[10px] uppercase tracking-wider text-[var(--mu)] border-b border-[var(--bd)] bg-[var(--glass-top)]">
              <div>模型名称</div>
              <div>类型</div>
              <div>上下文</div>
              <div className="text-right">价格（输入 / 输出）</div>
            </div>

            {/* Rows */}
            {pageData.length === 0 && (
              <div className="px-6 py-16 text-center text-sm text-[var(--mu)]">
                没有匹配的模型，换个筛选条件试试。
              </div>
            )}
            <ul className="divide-y divide-[var(--bd)]">
              {pageData.map((m) => (
                <Row key={m.id} m={m} unit={unit} />
              ))}
            </ul>

            {/* Pagination */}
            <div className="px-4 sm:px-6 py-4 border-t border-[var(--bd)] flex items-center justify-between gap-3 text-xs">
              <div className="text-[var(--mu)]">
                显示 <span className="text-[var(--fg)]">{(safePage - 1) * PAGE_SIZE + 1}</span> 到{" "}
                <span className="text-[var(--fg)]">
                  {Math.min(safePage * PAGE_SIZE, filtered.length)}
                </span>
                ，共 <span className="text-[var(--fg)]">{filtered.length}</span> 条结果
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className="h-8 px-3 rounded-md btn-ghost text-xs inline-flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> 上一页
                </button>
                <span className="px-2 text-[var(--mu)] tabular-nums">
                  {safePage} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                  className="h-8 px-3 rounded-md btn-ghost text-xs inline-flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  下一页 <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="mt-6 grid sm:grid-cols-3 gap-3">
            {[
              "支付宝 / 微信 / USDT 全支持",
              "公司付款 + 增值税专票",
              "余额永不过期，可退款",
            ].map((t) => (
              <div
                key={t}
                className="rounded-xl glass px-4 py-3 text-xs text-[var(--fg)] flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                {t}
              </div>
            ))}
          </FadeUp>
        </div>
      </section>
    </>
  );
}

/* ─────────── sub-components ─────────── */

function UnitToggle({
  value,
  onChange,
}: {
  value: "1M" | "1K";
  onChange: (v: "1M" | "1K") => void;
}) {
  return (
    <div className="inline-flex items-center gap-2 text-xs">
      <span className="text-[var(--mu)]">单位：</span>
      <div className="inline-flex p-0.5 rounded-lg glass">
        {(["1M", "1K"] as const).map((u) => (
          <button
            key={u}
            onClick={() => onChange(u)}
            className={cn(
              "px-3 h-7 rounded-md text-xs font-medium transition",
              value === u
                ? "bg-gradient-to-br from-blue-500 to-sky-400 text-white shadow"
                : "text-[var(--mu)] hover:text-[var(--fg)]",
            )}
          >
            每 {u}
          </button>
        ))}
      </div>
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: never) => void;
  options: readonly string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as never)}
        className="appearance-none h-10 pl-3 pr-8 text-sm rounded-lg bg-[var(--glass-top)] border border-[var(--bd)] focus:border-[var(--color-primary)] outline-none transition cursor-pointer text-[var(--fg)] min-w-[8.5rem]"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[var(--bg)]">
            {o}
          </option>
        ))}
      </select>
      <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--mu)] rotate-90 pointer-events-none" />
    </div>
  );
}

function Row({ m, unit }: { m: PriceModel; unit: "1M" | "1K" }) {
  const brand = PROVIDER_BRAND[m.provider];
  return (
    <li className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1.4fr_1.4fr] px-4 sm:px-6 py-4 items-center gap-y-2 gap-x-4 hover:bg-[var(--glass-top)] transition">
      <div className="flex items-center gap-3 min-w-0">
        <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500/15 to-sky-400/5 border border-[var(--bd)] text-[var(--color-primary)]">
          <BrandIcon brand={brand} className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="font-mono text-sm text-[var(--fg)] truncate">
            {m.name}
          </div>
          <div className="text-xs text-[var(--mu)]">{m.provider}</div>
        </div>
      </div>

      <div className="text-sm text-[var(--mu)] inline-flex items-center gap-1.5 md:inline">
        <span className="md:hidden text-[10px] uppercase tracking-wider mr-1">
          类型
        </span>
        <span className="px-2 py-0.5 rounded-md text-[11px] bg-[var(--glass-top)] border border-[var(--bd)] text-[var(--fg)]">
          {m.type}
        </span>
      </div>

      <div className="text-xs text-[var(--mu)] grid grid-cols-2 md:block gap-1">
        <div>
          <span className="text-[var(--mu)]">输入：</span>
          <span className="text-[var(--fg)] font-mono">{m.ctxIn}</span>
        </div>
        <div>
          <span className="text-[var(--mu)]">输出：</span>
          <span className="text-[var(--fg)] font-mono">{m.ctxOut}</span>
        </div>
      </div>

      <div className="text-xs grid grid-cols-2 md:block md:text-right gap-1">
        <div>
          <span className="text-[var(--mu)]">输入：</span>
          <span className="text-[var(--fg)] font-mono">
            {formatPrice(m.in1M, unit)}
          </span>
        </div>
        <div>
          <span className="text-[var(--mu)]">输出：</span>
          <span className="text-[var(--fg)] font-mono">
            {formatPrice(m.out1M, unit)}
          </span>
        </div>
      </div>
    </li>
  );
}
