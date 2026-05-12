import Link from "next/link";
import {
  contactConfig,
  footerContent,
  navigationLinks,
} from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-forest)] text-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-[family-name:var(--font-display)] text-4xl">
            Ayurjess
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[rgba(255,250,244,0.8)]">
            {footerContent.brandLine}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            Navegacao
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            Contato
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={contactConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              {contactConfig.whatsappLabel}
            </a>
            <a
              href={contactConfig.instagramHref}
              target="_blank"
              rel="noreferrer"
            >
              {contactConfig.instagramLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
