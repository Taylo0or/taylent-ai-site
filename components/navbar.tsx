"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Image as ImageIcon,
  Code,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/links";
import ThemeToggle from "@/components/theme-toggle";

type NavLeaf = { href: string; label: string };
type NavTree = { label: string; href?: string; children: TutorialItem[] };
type TutorialItem = {
  href: string;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const TUTORIALS: TutorialItem[] = [
  {
    href: "/docs/tutorials/gpt-image-2",
    label: "GPT-Image-2 接入指南",
    desc: "图像生成 · API 调用、Codex imagegen 集成、3 个常见坑",
    icon: ImageIcon,
  },
  {
    href: "/docs/tutorials/gpt-5-5-codex",
    label: "Codex v0.124.0 中使用 GPT-5.5",
    desc: "在 Codex 自定义模型 catalog 里加 gpt-5.5 的过渡方案",
    icon: Code,
  },
];

const NAV: (NavLeaf | NavTree)[] = [
  { href: "/", label: "首页" },
  { href: "/pricing", label: "价格" },
  { href: "/docs", label: "文档" },
  { label: "教程", href: "/docs#tutorials", children: TUTORIALS },
  { href: "/about", label: "关于" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-[var(--bg)]/75 border-b border-[var(--bd)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Taylent AI">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/horizontal-light.svg"
            alt="Taylent AI"
            className="logo-light h-9 w-auto"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/horizontal-dark.svg"
            alt="Taylent AI"
            className="logo-dark h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => {
            if ("children" in n) {
              return <DesktopDropdown key={n.label} item={n} />;
            }
            return (
              <Link
                key={n.href}
                href={n.href}
                className="px-3 py-2 text-sm text-[var(--mu)] hover:text-[var(--fg)] transition rounded-md hover:bg-[var(--glass-top)]"
              >
                {n.label}
              </Link>
            );
          })}
          <a
            href={LINKS.dashboard}
            target="_top"
            rel="noopener"
            className="px-3 py-2 text-sm text-[var(--mu)] hover:text-[var(--fg)] transition rounded-md hover:bg-[var(--glass-top)]"
          >
            控制台
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a
            href={LINKS.dashboard}
            target="_top"
            rel="noopener"
            className="btn-ghost px-4 py-2 text-sm rounded-lg"
          >
            登录
          </a>
          <a
            href={LINKS.keys}
            target="_top"
            rel="noopener"
            className="btn-primary px-4 py-2 text-sm rounded-lg font-medium"
          >
            获取密钥
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-[var(--fg)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--bd)] bg-[var(--bg)]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => {
              if ("children" in n) {
                const expanded = mobileExpanded === n.label;
                return (
                  <div key={n.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(expanded ? null : n.label)
                      }
                      className="px-3 py-2.5 text-sm text-[var(--mu)] hover:text-[var(--fg)] rounded-md hover:bg-[var(--glass-top)] flex items-center justify-between"
                      aria-expanded={expanded}
                    >
                      <span>{n.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          expanded && "rotate-180",
                        )}
                      />
                    </button>
                    {expanded && (
                      <div className="ml-3 pl-3 border-l border-[var(--bd)] flex flex-col gap-0.5 mt-1 mb-1">
                        {n.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 text-sm text-[var(--mu)] hover:text-[var(--fg)] rounded-md hover:bg-[var(--glass-top)] flex items-center gap-2"
                          >
                            <c.icon className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                            <span className="truncate">{c.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm text-[var(--mu)] hover:text-[var(--fg)] rounded-md hover:bg-[var(--glass-top)]"
                >
                  {n.label}
                </Link>
              );
            })}
            <a
              href={LINKS.dashboard}
              target="_top"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm text-[var(--mu)] hover:text-[var(--fg)] rounded-md hover:bg-[var(--glass-top)]"
            >
              控制台
            </a>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href={LINKS.dashboard}
                target="_top"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="btn-ghost px-4 py-2 text-sm rounded-lg text-center"
              >
                登录
              </a>
              <a
                href={LINKS.keys}
                target="_top"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="btn-primary px-4 py-2 text-sm rounded-lg text-center font-medium"
              >
                获取密钥
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * Desktop hover dropdown. Pure CSS via the `group`/`group-hover` Tailwind pair —
 * no React state needed. The trigger itself is a `<Link>` so keyboard / click
 * users can still navigate to the section anchor; hover reveals the panel.
 */
function DesktopDropdown({ item }: { item: NavTree }) {
  return (
    <div className="relative group">
      {item.href ? (
        <Link
          href={item.href}
          className="px-3 py-2 text-sm text-[var(--mu)] hover:text-[var(--fg)] transition rounded-md hover:bg-[var(--glass-top)] inline-flex items-center gap-1"
        >
          {item.label}
          <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
        </Link>
      ) : (
        <button
          type="button"
          className="px-3 py-2 text-sm text-[var(--mu)] hover:text-[var(--fg)] transition rounded-md hover:bg-[var(--glass-top)] inline-flex items-center gap-1"
        >
          {item.label}
          <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
        </button>
      )}
      {/* Panel — invisible until the group is hovered. The `pt-2` / `-mt-2`
          gives a hover-bridge so the cursor can travel from trigger to panel
          without the menu disappearing. */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-10">
        <div className="w-[360px] rounded-xl bg-[var(--bg)]/95 backdrop-blur-xl border border-[var(--bd)] shadow-2xl overflow-hidden">
          <div className="p-2">
            {item.children.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--glass-top)] transition group/item"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-sky-400/10 border border-[var(--bd)] flex items-center justify-center">
                  <c.icon className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-[var(--fg)] truncate">
                    {c.label}
                  </div>
                  <div className="text-xs text-[var(--mu)] mt-0.5 leading-relaxed">
                    {c.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {item.href && (
            <Link
              href={item.href}
              className="block px-4 py-2.5 text-xs text-[var(--mu)] hover:text-[var(--fg)] border-t border-[var(--bd)] hover:bg-[var(--glass-top)] transition"
            >
              查看全部教程 →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
