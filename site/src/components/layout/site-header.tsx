import Link from "next/link";
import { navigationLinks } from "@/lib/site-content";

export function SiteHeader() {
  const navLinkClassName =
    "group inline-flex items-center rounded-full px-1 py-1 transition-colors duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] hover:text-[var(--color-forest)] focus-visible:text-[var(--color-forest)] focus-visible:outline-none";
  const navLabelClassName =
    "transition-transform duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5";

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
                <Link href={link.href} className={navLinkClassName}>
                  <span className={navLabelClassName}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
