import Link from "next/link";
import { Mail } from "lucide-react";
import { LINKS } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--bd)] mt-24">
      <div className="absolute inset-x-0 -top-px shimmer-line" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center" aria-label="Taylent AI">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/horizontal-light.svg"
                alt="Taylent AI"
                className="logo-light h-10 w-auto"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/horizontal-dark.svg"
                alt="Taylent AI"
                className="logo-dark h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-[var(--mu)] leading-relaxed max-w-xs">
              设计智能应用的未来。由开发者构建，为开发者服务。
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={LINKS.email}
                className="h-9 px-3 rounded-lg btn-ghost inline-flex items-center gap-2 text-xs"
                aria-label="邮件联系"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono">info@taylent.com</span>
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--mu)] mb-4">
              导航
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-[var(--mu)] hover:text-[var(--fg)]">首页</Link></li>
              <li><Link href="/pricing" className="text-[var(--mu)] hover:text-[var(--fg)]">定价</Link></li>
              <li><Link href="/docs" className="text-[var(--mu)] hover:text-[var(--fg)]">文档</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--mu)] mb-4">
              更多
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-[var(--mu)] hover:text-[var(--fg)]">关于</Link></li>
              <li><a href={LINKS.dashboard} target="_top" rel="noopener" className="text-[var(--mu)] hover:text-[var(--fg)]">控制台</a></li>
              <li><a href={LINKS.billing} target="_top" rel="noopener" className="text-[var(--mu)] hover:text-[var(--fg)]">充值</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--bd)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--mu)]">
          <div>© 2026 Taylent AI. 保留所有权利。</div>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="hover:text-[var(--fg)]">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-[var(--fg)]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
