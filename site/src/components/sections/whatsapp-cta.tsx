import { GsapReveal } from "@/components/ui/gsap-reveal";
import { contactConfig } from "@/lib/site-content";

type WhatsAppCtaProps = {
  title: string;
  body: string;
};

export function WhatsAppCta({ title, body }: WhatsAppCtaProps) {
  return (
    <section className="section-shell section-shell--cta text-[var(--color-ink)]">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10 lg:py-24">
        <GsapReveal delay={0.08} y={26}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[0.98] text-balance sm:text-5xl">
            {title}
          </h2>
        </GsapReveal>
        <GsapReveal delay={0.24} y={22}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[rgba(36,29,26,0.7)] lg:text-lg">
            {body}
          </p>
        </GsapReveal>
        <GsapReveal delay={0.42} y={18}>
          <a
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-primary-dark),var(--color-primary),var(--color-gold))] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-surface)] shadow-[0_10px_24px_rgba(53,44,39,0.14),inset_0_1px_0_rgba(255,250,244,0.16)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-[2px] hover:brightness-[1.02] hover:shadow-[0_14px_26px_rgba(53,44,39,0.16)] focus-visible:-translate-y-[2px] focus-visible:shadow-[0_14px_26px_rgba(53,44,39,0.16)] motion-reduce:transform-none motion-reduce:transition-none"
            href={contactConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            {contactConfig.whatsappLabel}
          </a>
        </GsapReveal>
      </div>
    </section>
  );
}
