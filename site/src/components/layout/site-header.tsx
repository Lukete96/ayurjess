import Link from "next/link";
import { navigationLinks } from "@/lib/site-content";

export function SiteHeader() {
  const navLinkClassName =
    "group inline-flex items-center rounded-full px-2 py-1 transition-colors duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] hover:text-[var(--color-forest)] focus-visible:text-[var(--color-forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)] motion-reduce:transition-none";
  const navLabelClassName =
    "transition-transform duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] group-hover:translate-x-[var(--motion-gentle-shift)] group-focus-visible:translate-x-[var(--motion-gentle-shift)] motion-reduce:translate-x-0 motion-reduce:transition-none";

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[var(--color-header)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]"
        >
          Ayurjess
        </Link>
        <nav aria-label="Principal">
          <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkClassName}
                  data-interaction="calm-link"
                  data-focus-affordance="ring"
                  data-reduced-motion="static"
                >
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
