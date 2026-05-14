"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "@/lib/site-content";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkClassName =
    "group inline-flex items-center rounded-full px-2 py-1.5 transition-colors duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] hover:text-[var(--color-forest)] focus-visible:text-[var(--color-forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)] motion-reduce:transition-none";
  const navLabelClassName =
    "transition-transform duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] group-hover:translate-x-[var(--motion-gentle-shift)] group-focus-visible:translate-x-[var(--motion-gentle-shift)] motion-reduce:translate-x-0 motion-reduce:transition-none";

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[var(--color-header)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full px-2 py-1 text-[var(--color-ink)] transition-colors duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] hover:text-[var(--color-forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/media/hero-ayurjess-logo-pb.png"
            alt="Logo AyurJess em preto e branco"
            width={52}
            height={52}
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            AyurJess
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(36,29,26,0.12)] text-[var(--color-ink)] transition-colors duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] hover:border-[rgba(88,117,101,0.3)] hover:text-[var(--color-forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)] md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="sr-only">Abrir menu principal</span>
          <span className="flex w-[1.1rem] flex-col gap-1">
            <span className="block h-px w-full bg-current" />
            <span className="block h-px w-full bg-current" />
            <span className="block h-px w-full bg-current" />
          </span>
        </button>
        <nav
          aria-label="Principal"
          className="basis-full md:basis-auto"
          id="primary-navigation"
        >
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:block ${isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 md:opacity-100"}`}
          >
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-2 border-t border-[rgba(36,29,26,0.08)] pt-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] md:flex-row md:items-center md:gap-6 md:border-0 md:pt-0 md:text-sm">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={navLinkClassName}
                      data-interaction="calm-link"
                      data-focus-affordance="ring"
                      data-reduced-motion="static"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className={navLabelClassName}>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
