import { GsapReveal } from "@/components/ui/gsap-reveal";

type HighlightItem = {
  title: string;
  body: string;
};

type HighlightGridProps = {
  title: string;
  items: readonly HighlightItem[];
};

export function HighlightGrid({ title, items }: HighlightGridProps) {
  return (
    <section className="section-shell section-shell--highlight px-6 py-16 text-[var(--color-ink)] lg:px-10 lg:py-22">
      <div className="mx-auto max-w-7xl">
        <GsapReveal delay={0.08} y={24}>
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-none lg:text-7xl">
            {title}
          </h2>
        </GsapReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <GsapReveal key={item.title} delay={0.26 + index * 0.12} y={20}>
              <article className="h-full rounded-[1.75rem] border border-[rgba(88,117,101,0.14)] bg-[rgba(255,253,248,0.72)] p-8 shadow-[0_16px_36px_rgba(36,29,26,0.08)] transition-[transform,background-color,box-shadow] duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] hover:-translate-y-[3px] hover:bg-[rgba(255,253,248,0.86)] hover:shadow-[0_22px_40px_rgba(36,29,26,0.1)] motion-reduce:transform-none motion-reduce:transition-none">
                <h3 className="font-[family-name:var(--font-display)] text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[rgba(36,29,26,0.72)]">
                  {item.body}
                </p>
              </article>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
