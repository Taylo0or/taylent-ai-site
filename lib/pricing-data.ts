// AUTO-GENERATED — pricing data scraped from LiteLLM model_prices.json
// (mirrored at https://www.wahooai.com/data/model-pricing-remote.json), filtered with the same provider + type
// allow-list as wahoo. RMB price = USD/M × 1.7.
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

export const PRICING_MODELS: PriceModel[] = [
  {
    "id": "claude-3-haiku-20240307",
    "name": "claude-3-haiku-20240307",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "4.1K",
    "in1M": 0.43,
    "out1M": 2.13
  },
  {
    "id": "claude-4-opus-20250514",
    "name": "claude-4-opus-20250514",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "32K",
    "in1M": 25.5,
    "out1M": 127.5
  },
  {
    "id": "claude-4-sonnet-20250514",
    "name": "claude-4-sonnet-20250514",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "1M",
    "ctxOut": "64K",
    "in1M": 5.1,
    "out1M": 25.5
  },
  {
    "id": "claude-haiku-4-5",
    "name": "claude-haiku-4-5",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "64K",
    "in1M": 1.7,
    "out1M": 8.5
  },
  {
    "id": "claude-haiku-4-5-20251001",
    "name": "claude-haiku-4-5-20251001",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "64K",
    "in1M": 1.7,
    "out1M": 8.5
  },
  {
    "id": "claude-opus-4-1",
    "name": "claude-opus-4-1",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "32K",
    "in1M": 25.5,
    "out1M": 127.5
  },
  {
    "id": "claude-opus-4-5",
    "name": "claude-opus-4-5",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "64K",
    "in1M": 8.5,
    "out1M": 42.5
  },
  {
    "id": "claude-opus-4-5-20251101",
    "name": "claude-opus-4-5-20251101",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "64K",
    "in1M": 8.5,
    "out1M": 42.5
  },
  {
    "id": "claude-opus-4-6",
    "name": "claude-opus-4-6",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "1M",
    "ctxOut": "128K",
    "in1M": 8.5,
    "out1M": 42.5
  },
  {
    "id": "claude-opus-4-6-20260205",
    "name": "claude-opus-4-6-20260205",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "1M",
    "ctxOut": "128K",
    "in1M": 8.5,
    "out1M": 42.5
  },
  {
    "id": "claude-opus-4-7",
    "name": "claude-opus-4-7",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "1M",
    "ctxOut": "128K",
    "in1M": 8.5,
    "out1M": 42.5
  },
  {
    "id": "claude-opus-4-7-20260416",
    "name": "claude-opus-4-7-20260416",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "1M",
    "ctxOut": "128K",
    "in1M": 8.5,
    "out1M": 42.5
  },
  {
    "id": "claude-sonnet-4-5",
    "name": "claude-sonnet-4-5",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "64K",
    "in1M": 5.1,
    "out1M": 25.5
  },
  {
    "id": "claude-sonnet-4-5-20250929",
    "name": "claude-sonnet-4-5-20250929",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "64K",
    "in1M": 5.1,
    "out1M": 25.5
  },
  {
    "id": "claude-sonnet-4-6",
    "name": "claude-sonnet-4-6",
    "provider": "Anthropic",
    "type": "对话",
    "ctxIn": "1M",
    "ctxOut": "64K",
    "in1M": 5.1,
    "out1M": 25.5
  },
  {
    "id": "gemini-2.0-flash-exp-image-generation",
    "name": "gemini-2.0-flash-exp-image-generation",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "32.8K",
    "ctxOut": "32.8K",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini-2.5-flash-native-audio-latest",
    "name": "gemini-2.5-flash-native-audio-latest",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "8.2K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini-2.5-flash-native-audio-preview-09-2025",
    "name": "gemini-2.5-flash-native-audio-preview-09-2025",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "8.2K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini-2.5-flash-native-audio-preview-12-2025",
    "name": "gemini-2.5-flash-native-audio-preview-12-2025",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "8.2K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini-2.5-flash-preview-tts",
    "name": "gemini-2.5-flash-preview-tts",
    "provider": "Google",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini-3.1-flash-live-preview",
    "name": "gemini-3.1-flash-live-preview",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "131.1K",
    "ctxOut": "65.5K",
    "in1M": 1.27,
    "out1M": 7.65
  },
  {
    "id": "gemini-exp-1206",
    "name": "gemini-exp-1206",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini-flash-latest",
    "name": "gemini-flash-latest",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini-flash-lite-latest",
    "name": "gemini-flash-lite-latest",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.17,
    "out1M": 0.68
  },
  {
    "id": "gemini-pro-latest",
    "name": "gemini-pro-latest",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gemini/deep-research-pro-preview-12-2025",
    "name": "gemini/deep-research-pro-preview-12-2025",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "65.5K",
    "ctxOut": "32.8K",
    "in1M": 3.4,
    "out1M": 20.4
  },
  {
    "id": "gemini/gemini-2.0-flash-exp-image-generation",
    "name": "gemini/gemini-2.0-flash-exp-image-generation",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "32.8K",
    "ctxOut": "32.8K",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/gemini-2.5-computer-use-preview-10-2025",
    "name": "gemini/gemini-2.5-computer-use-preview-10-2025",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "64K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gemini/gemini-2.5-flash",
    "name": "gemini/gemini-2.5-flash",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemini-2.5-flash-image",
    "name": "gemini/gemini-2.5-flash-image",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "32.8K",
    "ctxOut": "32.8K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemini-2.5-flash-lite",
    "name": "gemini/gemini-2.5-flash-lite",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.17,
    "out1M": 0.68
  },
  {
    "id": "gemini/gemini-2.5-flash-lite-preview-09-2025",
    "name": "gemini/gemini-2.5-flash-lite-preview-09-2025",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.17,
    "out1M": 0.68
  },
  {
    "id": "gemini/gemini-2.5-flash-native-audio-latest",
    "name": "gemini/gemini-2.5-flash-native-audio-latest",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "8.2K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemini-2.5-flash-native-audio-preview-09-2025",
    "name": "gemini/gemini-2.5-flash-native-audio-preview-09-2025",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "8.2K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemini-2.5-flash-native-audio-preview-12-2025",
    "name": "gemini/gemini-2.5-flash-native-audio-preview-12-2025",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "8.2K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemini-2.5-flash-preview-09-2025",
    "name": "gemini/gemini-2.5-flash-preview-09-2025",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemini-2.5-flash-preview-tts",
    "name": "gemini/gemini-2.5-flash-preview-tts",
    "provider": "Google",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemini-2.5-pro",
    "name": "gemini/gemini-2.5-pro",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gemini/gemini-2.5-pro-preview-tts",
    "name": "gemini/gemini-2.5-pro-preview-tts",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gemini/gemini-3-flash-preview",
    "name": "gemini/gemini-3-flash-preview",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.85,
    "out1M": 5.1
  },
  {
    "id": "gemini/gemini-3-pro-image-preview",
    "name": "gemini/gemini-3-pro-image-preview",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "65.5K",
    "ctxOut": "32.8K",
    "in1M": 3.4,
    "out1M": 20.4
  },
  {
    "id": "gemini/gemini-3.1-flash-image-preview",
    "name": "gemini/gemini-3.1-flash-image-preview",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "65.5K",
    "ctxOut": "32.8K",
    "in1M": 0.43,
    "out1M": 2.55
  },
  {
    "id": "gemini/gemini-3.1-flash-lite-preview",
    "name": "gemini/gemini-3.1-flash-lite-preview",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.43,
    "out1M": 2.55
  },
  {
    "id": "gemini/gemini-3.1-flash-live-preview",
    "name": "gemini/gemini-3.1-flash-live-preview",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "131.1K",
    "ctxOut": "65.5K",
    "in1M": 1.27,
    "out1M": 7.65
  },
  {
    "id": "gemini/gemini-3.1-pro-preview",
    "name": "gemini/gemini-3.1-pro-preview",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 3.4,
    "out1M": 20.4
  },
  {
    "id": "gemini/gemini-3.1-pro-preview-customtools",
    "name": "gemini/gemini-3.1-pro-preview-customtools",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 3.4,
    "out1M": 20.4
  },
  {
    "id": "gemini/gemini-exp-1114",
    "name": "gemini/gemini-exp-1114",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "8.2K",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/gemini-exp-1206",
    "name": "gemini/gemini-exp-1206",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "2.1M",
    "ctxOut": "8.2K",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/gemini-flash-latest",
    "name": "gemini/gemini-flash-latest",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemini-flash-lite-latest",
    "name": "gemini/gemini-flash-lite-latest",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.17,
    "out1M": 0.68
  },
  {
    "id": "gemini/gemini-gemma-2-27b-it",
    "name": "gemini/gemini-gemma-2-27b-it",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "—",
    "ctxOut": "8.2K",
    "in1M": 0.6,
    "out1M": 1.78
  },
  {
    "id": "gemini/gemini-gemma-2-9b-it",
    "name": "gemini/gemini-gemma-2-9b-it",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "—",
    "ctxOut": "8.2K",
    "in1M": 0.6,
    "out1M": 1.78
  },
  {
    "id": "gemini/gemini-pro-latest",
    "name": "gemini/gemini-pro-latest",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gemini/gemini-robotics-er-1.5-preview",
    "name": "gemini/gemini-robotics-er-1.5-preview",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "65.5K",
    "in1M": 0.51,
    "out1M": 4.25
  },
  {
    "id": "gemini/gemma-3-27b-it",
    "name": "gemini/gemma-3-27b-it",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "131.1K",
    "ctxOut": "8.2K",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/imagen-3.0-fast-generate-001",
    "name": "gemini/imagen-3.0-fast-generate-001",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/imagen-3.0-generate-001",
    "name": "gemini/imagen-3.0-generate-001",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/imagen-4.0-fast-generate-001",
    "name": "gemini/imagen-4.0-fast-generate-001",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/imagen-4.0-generate-001",
    "name": "gemini/imagen-4.0-generate-001",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/imagen-4.0-ultra-generate-001",
    "name": "gemini/imagen-4.0-ultra-generate-001",
    "provider": "Google",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/learnlm-1.5-pro-experimental",
    "name": "gemini/learnlm-1.5-pro-experimental",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "32.8K",
    "ctxOut": "8.2K",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/lyria-3-clip-preview",
    "name": "gemini/lyria-3-clip-preview",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "131.1K",
    "ctxOut": "8.2K",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "gemini/lyria-3-pro-preview",
    "name": "gemini/lyria-3-pro-preview",
    "provider": "Google",
    "type": "对话",
    "ctxIn": "131.1K",
    "ctxOut": "8.2K",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "1024-x-1024/dall-e-2",
    "name": "1024-x-1024/dall-e-2",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "1024-x-1024/gpt-image-1.5",
    "name": "1024-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "1024-x-1024/gpt-image-1.5-2025-12-16",
    "name": "1024-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "1024-x-1536/gpt-image-1.5",
    "name": "1024-x-1536/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "1024-x-1536/gpt-image-1.5-2025-12-16",
    "name": "1024-x-1536/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "1536-x-1024/gpt-image-1.5",
    "name": "1536-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "1536-x-1024/gpt-image-1.5-2025-12-16",
    "name": "1536-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "256-x-256/dall-e-2",
    "name": "256-x-256/dall-e-2",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "512-x-512/dall-e-2",
    "name": "512-x-512/dall-e-2",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "chatgpt-4o-latest",
    "name": "chatgpt-4o-latest",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 8.5,
    "out1M": 25.5
  },
  {
    "id": "chatgpt-image-latest",
    "name": "chatgpt-image-latest",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 8.5,
    "out1M": 0
  },
  {
    "id": "codex-mini-latest",
    "name": "codex-mini-latest",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 2.55,
    "out1M": 10.2
  },
  {
    "id": "dall-e-2",
    "name": "dall-e-2",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "dall-e-3",
    "name": "dall-e-3",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "ft:gpt-3.5-turbo",
    "name": "ft:gpt-3.5-turbo",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "16.4K",
    "ctxOut": "4.1K",
    "in1M": 5.1,
    "out1M": 10.2
  },
  {
    "id": "ft:gpt-3.5-turbo-0125",
    "name": "ft:gpt-3.5-turbo-0125",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "16.4K",
    "ctxOut": "4.1K",
    "in1M": 5.1,
    "out1M": 10.2
  },
  {
    "id": "ft:gpt-3.5-turbo-0613",
    "name": "ft:gpt-3.5-turbo-0613",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "4.1K",
    "ctxOut": "4.1K",
    "in1M": 5.1,
    "out1M": 10.2
  },
  {
    "id": "ft:gpt-3.5-turbo-1106",
    "name": "ft:gpt-3.5-turbo-1106",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "16.4K",
    "ctxOut": "4.1K",
    "in1M": 5.1,
    "out1M": 10.2
  },
  {
    "id": "ft:gpt-4-0613",
    "name": "ft:gpt-4-0613",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "8.2K",
    "ctxOut": "4.1K",
    "in1M": 51,
    "out1M": 102
  },
  {
    "id": "ft:gpt-4.1-2025-04-14",
    "name": "ft:gpt-4.1-2025-04-14",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 5.1,
    "out1M": 20.4
  },
  {
    "id": "ft:gpt-4.1-mini-2025-04-14",
    "name": "ft:gpt-4.1-mini-2025-04-14",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 1.36,
    "out1M": 5.44
  },
  {
    "id": "ft:gpt-4.1-nano-2025-04-14",
    "name": "ft:gpt-4.1-nano-2025-04-14",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 0.34,
    "out1M": 1.36
  },
  {
    "id": "ft:gpt-4o-2024-08-06",
    "name": "ft:gpt-4o-2024-08-06",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 6.38,
    "out1M": 25.5
  },
  {
    "id": "ft:gpt-4o-2024-11-20",
    "name": "ft:gpt-4o-2024-11-20",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 6.38,
    "out1M": 25.5
  },
  {
    "id": "ft:gpt-4o-mini-2024-07-18",
    "name": "ft:gpt-4o-mini-2024-07-18",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 0.51,
    "out1M": 2.04
  },
  {
    "id": "ft:o4-mini-2025-04-16",
    "name": "ft:o4-mini-2025-04-16",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 6.8,
    "out1M": 27.2
  },
  {
    "id": "gpt-3.5-turbo",
    "name": "gpt-3.5-turbo",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "16.4K",
    "ctxOut": "4.1K",
    "in1M": 0.85,
    "out1M": 2.55
  },
  {
    "id": "gpt-3.5-turbo-0125",
    "name": "gpt-3.5-turbo-0125",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "16.4K",
    "ctxOut": "4.1K",
    "in1M": 0.85,
    "out1M": 2.55
  },
  {
    "id": "gpt-3.5-turbo-16k",
    "name": "gpt-3.5-turbo-16k",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "16.4K",
    "ctxOut": "4.1K",
    "in1M": 5.1,
    "out1M": 6.8
  },
  {
    "id": "gpt-4",
    "name": "gpt-4",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "8.2K",
    "ctxOut": "4.1K",
    "in1M": 51,
    "out1M": 102
  },
  {
    "id": "gpt-4-turbo",
    "name": "gpt-4-turbo",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 17,
    "out1M": 51
  },
  {
    "id": "gpt-4-turbo-2024-04-09",
    "name": "gpt-4-turbo-2024-04-09",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 17,
    "out1M": 51
  },
  {
    "id": "gpt-4-turbo-preview",
    "name": "gpt-4-turbo-preview",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 17,
    "out1M": 51
  },
  {
    "id": "gpt-4.1",
    "name": "gpt-4.1",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 3.4,
    "out1M": 13.6
  },
  {
    "id": "gpt-4.1-2025-04-14",
    "name": "gpt-4.1-2025-04-14",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 3.4,
    "out1M": 13.6
  },
  {
    "id": "gpt-4.1-mini",
    "name": "gpt-4.1-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 0.68,
    "out1M": 2.72
  },
  {
    "id": "gpt-4.1-mini-2025-04-14",
    "name": "gpt-4.1-mini-2025-04-14",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 0.68,
    "out1M": 2.72
  },
  {
    "id": "gpt-4.1-nano",
    "name": "gpt-4.1-nano",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 0.17,
    "out1M": 0.68
  },
  {
    "id": "gpt-4.1-nano-2025-04-14",
    "name": "gpt-4.1-nano-2025-04-14",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.0M",
    "ctxOut": "32.8K",
    "in1M": 0.17,
    "out1M": 0.68
  },
  {
    "id": "gpt-4o",
    "name": "gpt-4o",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-2024-05-13",
    "name": "gpt-4o-2024-05-13",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 8.5,
    "out1M": 25.5
  },
  {
    "id": "gpt-4o-2024-08-06",
    "name": "gpt-4o-2024-08-06",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-2024-11-20",
    "name": "gpt-4o-2024-11-20",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-audio-preview",
    "name": "gpt-4o-audio-preview",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-audio-preview-2024-12-17",
    "name": "gpt-4o-audio-preview-2024-12-17",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-audio-preview-2025-06-03",
    "name": "gpt-4o-audio-preview-2025-06-03",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-mini",
    "name": "gpt-4o-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 0.26,
    "out1M": 1.02
  },
  {
    "id": "gpt-4o-mini-2024-07-18",
    "name": "gpt-4o-mini-2024-07-18",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 0.26,
    "out1M": 1.02
  },
  {
    "id": "gpt-4o-mini-audio-preview",
    "name": "gpt-4o-mini-audio-preview",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 0.26,
    "out1M": 1.02
  },
  {
    "id": "gpt-4o-mini-audio-preview-2024-12-17",
    "name": "gpt-4o-mini-audio-preview-2024-12-17",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 0.26,
    "out1M": 1.02
  },
  {
    "id": "gpt-4o-mini-realtime-preview",
    "name": "gpt-4o-mini-realtime-preview",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 1.02,
    "out1M": 4.08
  },
  {
    "id": "gpt-4o-mini-realtime-preview-2024-12-17",
    "name": "gpt-4o-mini-realtime-preview-2024-12-17",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 1.02,
    "out1M": 4.08
  },
  {
    "id": "gpt-4o-mini-search-preview",
    "name": "gpt-4o-mini-search-preview",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 0.26,
    "out1M": 1.02
  },
  {
    "id": "gpt-4o-mini-search-preview-2025-03-11",
    "name": "gpt-4o-mini-search-preview-2025-03-11",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 0.26,
    "out1M": 1.02
  },
  {
    "id": "gpt-4o-mini-transcribe",
    "name": "gpt-4o-mini-transcribe",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "16K",
    "ctxOut": "2K",
    "in1M": 2.13,
    "out1M": 8.5
  },
  {
    "id": "gpt-4o-mini-transcribe-2025-03-20",
    "name": "gpt-4o-mini-transcribe-2025-03-20",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "16K",
    "ctxOut": "2K",
    "in1M": 2.13,
    "out1M": 8.5
  },
  {
    "id": "gpt-4o-mini-transcribe-2025-12-15",
    "name": "gpt-4o-mini-transcribe-2025-12-15",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "16K",
    "ctxOut": "2K",
    "in1M": 2.13,
    "out1M": 8.5
  },
  {
    "id": "gpt-4o-mini-tts",
    "name": "gpt-4o-mini-tts",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-mini-tts-2025-03-20",
    "name": "gpt-4o-mini-tts-2025-03-20",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-mini-tts-2025-12-15",
    "name": "gpt-4o-mini-tts-2025-12-15",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-realtime-preview",
    "name": "gpt-4o-realtime-preview",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 8.5,
    "out1M": 34
  },
  {
    "id": "gpt-4o-realtime-preview-2024-12-17",
    "name": "gpt-4o-realtime-preview-2024-12-17",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 8.5,
    "out1M": 34
  },
  {
    "id": "gpt-4o-realtime-preview-2025-06-03",
    "name": "gpt-4o-realtime-preview-2025-06-03",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 8.5,
    "out1M": 34
  },
  {
    "id": "gpt-4o-search-preview",
    "name": "gpt-4o-search-preview",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-search-preview-2025-03-11",
    "name": "gpt-4o-search-preview-2025-03-11",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-transcribe",
    "name": "gpt-4o-transcribe",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "16K",
    "ctxOut": "2K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-4o-transcribe-diarize",
    "name": "gpt-4o-transcribe-diarize",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "16K",
    "ctxOut": "2K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-5",
    "name": "gpt-5",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5-2025-08-07",
    "name": "gpt-5-2025-08-07",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5-chat",
    "name": "gpt-5-chat",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5-chat-latest",
    "name": "gpt-5-chat-latest",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5-codex",
    "name": "gpt-5-codex",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5-mini",
    "name": "gpt-5-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 0.43,
    "out1M": 3.4
  },
  {
    "id": "gpt-5-mini-2025-08-07",
    "name": "gpt-5-mini-2025-08-07",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 0.43,
    "out1M": 3.4
  },
  {
    "id": "gpt-5-nano",
    "name": "gpt-5-nano",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 0.09,
    "out1M": 0.68
  },
  {
    "id": "gpt-5-nano-2025-08-07",
    "name": "gpt-5-nano-2025-08-07",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 0.09,
    "out1M": 0.68
  },
  {
    "id": "gpt-5-pro",
    "name": "gpt-5-pro",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "272K",
    "in1M": 25.5,
    "out1M": 204
  },
  {
    "id": "gpt-5-pro-2025-10-06",
    "name": "gpt-5-pro-2025-10-06",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "272K",
    "in1M": 25.5,
    "out1M": 204
  },
  {
    "id": "gpt-5-search-api",
    "name": "gpt-5-search-api",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5-search-api-2025-10-14",
    "name": "gpt-5-search-api-2025-10-14",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5.1",
    "name": "gpt-5.1",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5.1-2025-11-13",
    "name": "gpt-5.1-2025-11-13",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5.1-chat-latest",
    "name": "gpt-5.1-chat-latest",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5.1-codex",
    "name": "gpt-5.1-codex",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5.1-codex-max",
    "name": "gpt-5.1-codex-max",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.13,
    "out1M": 17
  },
  {
    "id": "gpt-5.1-codex-mini",
    "name": "gpt-5.1-codex-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 0.43,
    "out1M": 3.4
  },
  {
    "id": "gpt-5.2",
    "name": "gpt-5.2",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.98,
    "out1M": 23.8
  },
  {
    "id": "gpt-5.2-2025-12-11",
    "name": "gpt-5.2-2025-12-11",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.98,
    "out1M": 23.8
  },
  {
    "id": "gpt-5.2-chat-latest",
    "name": "gpt-5.2-chat-latest",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 2.98,
    "out1M": 23.8
  },
  {
    "id": "gpt-5.2-codex",
    "name": "gpt-5.2-codex",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.98,
    "out1M": 23.8
  },
  {
    "id": "gpt-5.2-pro",
    "name": "gpt-5.2-pro",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 35.7,
    "out1M": 285.6
  },
  {
    "id": "gpt-5.2-pro-2025-12-11",
    "name": "gpt-5.2-pro-2025-12-11",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 35.7,
    "out1M": 285.6
  },
  {
    "id": "gpt-5.3-chat-latest",
    "name": "gpt-5.3-chat-latest",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 2.98,
    "out1M": 23.8
  },
  {
    "id": "gpt-5.3-codex",
    "name": "gpt-5.3-codex",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 2.98,
    "out1M": 23.8
  },
  {
    "id": "gpt-5.4",
    "name": "gpt-5.4",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.1M",
    "ctxOut": "128K",
    "in1M": 4.25,
    "out1M": 25.5
  },
  {
    "id": "gpt-5.4-2026-03-05",
    "name": "gpt-5.4-2026-03-05",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.1M",
    "ctxOut": "128K",
    "in1M": 4.25,
    "out1M": 25.5
  },
  {
    "id": "gpt-5.4-mini",
    "name": "gpt-5.4-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 1.27,
    "out1M": 7.65
  },
  {
    "id": "gpt-5.4-nano",
    "name": "gpt-5.4-nano",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "272K",
    "ctxOut": "128K",
    "in1M": 0.34,
    "out1M": 2.13
  },
  {
    "id": "gpt-5.4-pro",
    "name": "gpt-5.4-pro",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.1M",
    "ctxOut": "128K",
    "in1M": 51,
    "out1M": 306
  },
  {
    "id": "gpt-5.4-pro-2026-03-05",
    "name": "gpt-5.4-pro-2026-03-05",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "1.1M",
    "ctxOut": "128K",
    "in1M": 51,
    "out1M": 306
  },
  {
    "id": "gpt-audio",
    "name": "gpt-audio",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-audio-1.5",
    "name": "gpt-audio-1.5",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-audio-2025-08-28",
    "name": "gpt-audio-2025-08-28",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 4.25,
    "out1M": 17
  },
  {
    "id": "gpt-audio-mini",
    "name": "gpt-audio-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 1.02,
    "out1M": 4.08
  },
  {
    "id": "gpt-audio-mini-2025-10-06",
    "name": "gpt-audio-mini-2025-10-06",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 1.02,
    "out1M": 4.08
  },
  {
    "id": "gpt-audio-mini-2025-12-15",
    "name": "gpt-audio-mini-2025-12-15",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "16.4K",
    "in1M": 1.02,
    "out1M": 4.08
  },
  {
    "id": "gpt-image-1",
    "name": "gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 8.5,
    "out1M": 0
  },
  {
    "id": "gpt-image-1-mini",
    "name": "gpt-image-1-mini",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 3.4,
    "out1M": 0
  },
  {
    "id": "gpt-image-1.5",
    "name": "gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 8.5,
    "out1M": 17
  },
  {
    "id": "gpt-image-1.5-2025-12-16",
    "name": "gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 8.5,
    "out1M": 17
  },
  {
    "id": "gpt-realtime",
    "name": "gpt-realtime",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "32K",
    "ctxOut": "4.1K",
    "in1M": 6.8,
    "out1M": 27.2
  },
  {
    "id": "gpt-realtime-1.5",
    "name": "gpt-realtime-1.5",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "32K",
    "ctxOut": "4.1K",
    "in1M": 6.8,
    "out1M": 27.2
  },
  {
    "id": "gpt-realtime-2025-08-28",
    "name": "gpt-realtime-2025-08-28",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "32K",
    "ctxOut": "4.1K",
    "in1M": 6.8,
    "out1M": 27.2
  },
  {
    "id": "gpt-realtime-mini",
    "name": "gpt-realtime-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 1.02,
    "out1M": 4.08
  },
  {
    "id": "gpt-realtime-mini-2025-10-06",
    "name": "gpt-realtime-mini-2025-10-06",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 1.02,
    "out1M": 4.08
  },
  {
    "id": "gpt-realtime-mini-2025-12-15",
    "name": "gpt-realtime-mini-2025-12-15",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "128K",
    "ctxOut": "4.1K",
    "in1M": 1.02,
    "out1M": 4.08
  },
  {
    "id": "hd/1024-x-1024/dall-e-3",
    "name": "hd/1024-x-1024/dall-e-3",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "hd/1024-x-1792/dall-e-3",
    "name": "hd/1024-x-1792/dall-e-3",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "hd/1792-x-1024/dall-e-3",
    "name": "hd/1792-x-1024/dall-e-3",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1024-x-1024/gpt-image-1",
    "name": "high/1024-x-1024/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1024-x-1024/gpt-image-1.5",
    "name": "high/1024-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1024-x-1024/gpt-image-1.5-2025-12-16",
    "name": "high/1024-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1024-x-1536/gpt-image-1",
    "name": "high/1024-x-1536/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1024-x-1536/gpt-image-1.5",
    "name": "high/1024-x-1536/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1024-x-1536/gpt-image-1.5-2025-12-16",
    "name": "high/1024-x-1536/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1536-x-1024/gpt-image-1",
    "name": "high/1536-x-1024/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1536-x-1024/gpt-image-1.5",
    "name": "high/1536-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "high/1536-x-1024/gpt-image-1.5-2025-12-16",
    "name": "high/1536-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1024-x-1024/gpt-image-1",
    "name": "low/1024-x-1024/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1024-x-1024/gpt-image-1-mini",
    "name": "low/1024-x-1024/gpt-image-1-mini",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1024-x-1024/gpt-image-1.5",
    "name": "low/1024-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1024-x-1024/gpt-image-1.5-2025-12-16",
    "name": "low/1024-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1024-x-1536/gpt-image-1",
    "name": "low/1024-x-1536/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1024-x-1536/gpt-image-1-mini",
    "name": "low/1024-x-1536/gpt-image-1-mini",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1024-x-1536/gpt-image-1.5",
    "name": "low/1024-x-1536/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1024-x-1536/gpt-image-1.5-2025-12-16",
    "name": "low/1024-x-1536/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1536-x-1024/gpt-image-1",
    "name": "low/1536-x-1024/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1536-x-1024/gpt-image-1-mini",
    "name": "low/1536-x-1024/gpt-image-1-mini",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1536-x-1024/gpt-image-1.5",
    "name": "low/1536-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "low/1536-x-1024/gpt-image-1.5-2025-12-16",
    "name": "low/1536-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1024-x-1024/gpt-image-1",
    "name": "medium/1024-x-1024/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1024-x-1024/gpt-image-1-mini",
    "name": "medium/1024-x-1024/gpt-image-1-mini",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1024-x-1024/gpt-image-1.5",
    "name": "medium/1024-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1024-x-1024/gpt-image-1.5-2025-12-16",
    "name": "medium/1024-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1024-x-1536/gpt-image-1",
    "name": "medium/1024-x-1536/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1024-x-1536/gpt-image-1-mini",
    "name": "medium/1024-x-1536/gpt-image-1-mini",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1024-x-1536/gpt-image-1.5",
    "name": "medium/1024-x-1536/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1024-x-1536/gpt-image-1.5-2025-12-16",
    "name": "medium/1024-x-1536/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1536-x-1024/gpt-image-1",
    "name": "medium/1536-x-1024/gpt-image-1",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1536-x-1024/gpt-image-1-mini",
    "name": "medium/1536-x-1024/gpt-image-1-mini",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1536-x-1024/gpt-image-1.5",
    "name": "medium/1536-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "medium/1536-x-1024/gpt-image-1.5-2025-12-16",
    "name": "medium/1536-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "o1",
    "name": "o1",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 25.5,
    "out1M": 102
  },
  {
    "id": "o1-2024-12-17",
    "name": "o1-2024-12-17",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 25.5,
    "out1M": 102
  },
  {
    "id": "o1-pro",
    "name": "o1-pro",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 255,
    "out1M": 1020
  },
  {
    "id": "o1-pro-2025-03-19",
    "name": "o1-pro-2025-03-19",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 255,
    "out1M": 1020
  },
  {
    "id": "o3",
    "name": "o3",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 3.4,
    "out1M": 13.6
  },
  {
    "id": "o3-2025-04-16",
    "name": "o3-2025-04-16",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 3.4,
    "out1M": 13.6
  },
  {
    "id": "o3-deep-research",
    "name": "o3-deep-research",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 17,
    "out1M": 68
  },
  {
    "id": "o3-deep-research-2025-06-26",
    "name": "o3-deep-research-2025-06-26",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 17,
    "out1M": 68
  },
  {
    "id": "o3-mini",
    "name": "o3-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 1.87,
    "out1M": 7.48
  },
  {
    "id": "o3-mini-2025-01-31",
    "name": "o3-mini-2025-01-31",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 1.87,
    "out1M": 7.48
  },
  {
    "id": "o3-pro",
    "name": "o3-pro",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 34,
    "out1M": 136
  },
  {
    "id": "o3-pro-2025-06-10",
    "name": "o3-pro-2025-06-10",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 34,
    "out1M": 136
  },
  {
    "id": "o4-mini",
    "name": "o4-mini",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 1.87,
    "out1M": 7.48
  },
  {
    "id": "o4-mini-2025-04-16",
    "name": "o4-mini-2025-04-16",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 1.87,
    "out1M": 7.48
  },
  {
    "id": "o4-mini-deep-research",
    "name": "o4-mini-deep-research",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 3.4,
    "out1M": 13.6
  },
  {
    "id": "o4-mini-deep-research-2025-06-26",
    "name": "o4-mini-deep-research-2025-06-26",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "200K",
    "ctxOut": "100K",
    "in1M": 3.4,
    "out1M": 13.6
  },
  {
    "id": "openai/container",
    "name": "openai/container",
    "provider": "OpenAI",
    "type": "对话",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1024-x-1024/dall-e-3",
    "name": "standard/1024-x-1024/dall-e-3",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1024-x-1024/gpt-image-1.5",
    "name": "standard/1024-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1024-x-1024/gpt-image-1.5-2025-12-16",
    "name": "standard/1024-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1024-x-1536/gpt-image-1.5",
    "name": "standard/1024-x-1536/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1024-x-1536/gpt-image-1.5-2025-12-16",
    "name": "standard/1024-x-1536/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1024-x-1792/dall-e-3",
    "name": "standard/1024-x-1792/dall-e-3",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1536-x-1024/gpt-image-1.5",
    "name": "standard/1536-x-1024/gpt-image-1.5",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1536-x-1024/gpt-image-1.5-2025-12-16",
    "name": "standard/1536-x-1024/gpt-image-1.5-2025-12-16",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "standard/1792-x-1024/dall-e-3",
    "name": "standard/1792-x-1024/dall-e-3",
    "provider": "OpenAI",
    "type": "图像",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "tts-1",
    "name": "tts-1",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "tts-1-1106",
    "name": "tts-1-1106",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "tts-1-hd",
    "name": "tts-1-hd",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "tts-1-hd-1106",
    "name": "tts-1-hd-1106",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  },
  {
    "id": "whisper-1",
    "name": "whisper-1",
    "provider": "OpenAI",
    "type": "音频",
    "ctxIn": "—",
    "ctxOut": "—",
    "in1M": 0,
    "out1M": 0
  }
];
