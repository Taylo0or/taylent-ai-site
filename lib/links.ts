/**
 * Centralised link map.
 *
 * Architecture: this Next.js marketing site is meant to be embedded inside the
 * sub2api admin via its `home_content` iframe setting. Buttons that lead to
 * sub2api-owned routes (login, console, top-up, etc.) therefore need:
 *   • absolute URL — so they work both inside the iframe AND when this Next
 *     site is opened directly during development;
 *   • target="_top" — so clicking inside the iframe navigates the *parent*
 *     window instead of swapping the iframe content (which would nest a sub2api
 *     instance inside another sub2api).
 *
 * Marketing-only routes ( /, /pricing, /docs, /about ) stay as relative
 * Next.js routes and use <Link>.
 */
export const SUB2API_URL =
  process.env.NEXT_PUBLIC_SUB2API_URL || "https://ai.taylent.com";

export const SUB2API_LOGIN_PATH =
  process.env.NEXT_PUBLIC_SUB2API_LOGIN_PATH || "/login";

const sub = (p: string) => `${SUB2API_URL}${p}`;

export const LINKS = {
  // sub2api-owned (open in parent window via target="_top")
  login: sub(SUB2API_LOGIN_PATH),
  console: sub("/dashboard"),
  dashboard: sub("/dashboard"), // legacy alias
  keys: sub("/keys"),
  billing: sub("/purchase"),

  // External links
  email: "mailto:info@taylent.com",
} as const;

/** Buttons that navigate to a sub2api route should pass these props. */
export const TOP_NAV_PROPS = {
  target: "_top" as const,
  rel: "noopener",
};
