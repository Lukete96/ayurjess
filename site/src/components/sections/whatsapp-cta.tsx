import { contactConfig } from "@/lib/site-content";

type WhatsAppCtaProps = {
  title: string;
  body: string;
};

export function WhatsAppCta({ title, body }: WhatsAppCtaProps) {
  return (
    <section className="bg-[var(--color-terracotta)] text-[var(--color-surface)]">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-5xl leading-none">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[rgba(255,250,244,0.88)]">
          {body}
        </p>
        <a
          className="mt-10 inline-flex min-h-14 items-center justify-center bg-[var(--color-forest)] px-8 text-sm font-semibold uppercase tracking-[0.16em]"
          href={contactConfig.whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          {contactConfig.whatsappLabel}
        </a>
      </div>
    </section>
  );
}
