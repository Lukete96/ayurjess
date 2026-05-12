import Link from "next/link";
import { navigationLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(246,240,231,0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-forest)]"
        >
          Ayurjess
        </Link>
        <nav aria-label="Principal">
          <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
