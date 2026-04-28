#!/usr/bin/env node
// Pulls LiteLLM model_prices.json from wahoo's mirror, applies wahoo's exact
// filter (provider + type allow-list), converts USD/token → ¥/M (× 1.7), and
// rewrites lib/pricing-data.ts.
//
// Run: node scripts/scrape-pricing.mjs

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const SOURCE_URL = "https://www.wahooai.com/data/model-pricing-remote.json";
const RMB_RATE = 1.7;

// Mirrors wahoo's allowedProviders / allowedTypes Sets.
const ALLOWED_PROVIDERS = new Set(["openai", "google", "anthropic"]);
const ALLOWED_TYPES = new Set(["chat", "image", "audio"]);

const PROVIDER_LABEL = {
  openai: "OpenAI",
  anthropic: "Anthropic",
  google: "Google",
};
const TYPE_LABEL = {
  chat: "对话",
  image: "图像",
  audio: "音频",
};

// Wahoo's normalizeProvider, faithfully ported.
function normalizeProvider(litellmProvider, id) {
  const i = (litellmProvider || "").toLowerCase();
  if (i) {
    if (i === "vertexai" || i === "gemini") return "google";
    return i;
  }
  if (id.startsWith("claude")) return "anthropic";
  if (id.startsWith("gemini")) return "google";
  if (id.startsWith("grok")) return "xai";
  if (id.startsWith("deepseek")) return "deepseek";
  if (
    id.startsWith("gpt") ||
    id.startsWith("o1") ||
    id.startsWith("o3") ||
    id.startsWith("o4")
  )
    return "openai";
  return "other";
}

function detectType(entry) {
  const m = entry.mode;
  if (m === "chat" || m === "responses") return "chat";
  if (m === "image_generation") return "image";
  if (m === "audio_speech" || m === "audio_transcription") return "audio";
  return "other";
}

function fmtCtx(n) {
  if (n == null) return "—";
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return Number.isInteger(m) ? `${m}M` : `${m.toFixed(1)}M`;
  }
  if (n >= 1_000) {
    const k = n / 1000;
    return Number.isInteger(k) ? `${k}K` : `${k.toFixed(1)}K`;
  }
  return String(n);
}

function toRmbPerMillion(perToken) {
  if (typeof perToken !== "number") return 0;
  return Math.round(perToken * 1_000_000 * RMB_RATE * 100) / 100;
}

async function main() {
  process.stderr.write(`Fetching ${SOURCE_URL}…\n`);
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
  const data = await res.json();

  const rows = [];
  for (const [id, v] of Object.entries(data)) {
    if (id === "sample_spec") continue;
    const provider = normalizeProvider(v.litellm_provider, id);
    const type = detectType(v);
    if (!ALLOWED_PROVIDERS.has(provider)) continue;
    if (!ALLOWED_TYPES.has(type)) continue;
    if (v.deprecation_date) continue;

    rows.push({
      id,
      name: id,
      provider: PROVIDER_LABEL[provider],
      type: TYPE_LABEL[type],
      ctxIn: fmtCtx(v.max_input_tokens ?? null),
      ctxOut: fmtCtx(v.max_output_tokens ?? v.max_tokens ?? null),
      in1M: toRmbPerMillion(v.input_cost_per_token),
      out1M: toRmbPerMillion(v.output_cost_per_token),
    });
  }

  rows.sort(
    (a, b) =>
      a.provider.localeCompare(b.provider) || a.id.localeCompare(b.id),
  );

  const here = dirname(fileURLToPath(import.meta.url));
  const outPath = resolve(here, "../lib/pricing-data.ts");

  const body = `// AUTO-GENERATED — pricing data scraped from LiteLLM model_prices.json
// (mirrored at ${SOURCE_URL}), filtered with the same provider + type
// allow-list as wahoo. RMB price = USD/M × ${RMB_RATE}.
// Re-generate by running: node scripts/scrape-pricing.mjs

export type PriceProvider = 'Anthropic' | 'OpenAI' | 'Google';
export type PriceType = '对话' | '图像' | '音频';

export interface PriceModel {
  /** Full model id from LiteLLM. */
  id: string;
  /** Display name (currently identical to id). */
  name: string;
  provider: PriceProvider;
  type: PriceType;
  /** Display string for max input context, e.g. '200K', '1M', '—'. */
  ctxIn: string;
  /** Display string for max output context. */
  ctxOut: string;
  /** RMB per 1M input tokens. */
  in1M: number;
  /** RMB per 1M output tokens. */
  out1M: number;
}

export const PRICING_MODELS: PriceModel[] = ${JSON.stringify(rows, null, 2)};
`;

  writeFileSync(outPath, body);
  process.stderr.write(`Wrote ${rows.length} models to ${outPath}\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
