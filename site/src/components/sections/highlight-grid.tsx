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
    <section className="bg-[var(--color-forest)] px-6 py-16 text-[var(--color-surface)] lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <GsapReveal delay={0.04} y={18}>
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-none lg:text-7xl">
            {title}
          </h2>
        </GsapReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <GsapReveal key={item.title} delay={0.1 + index * 0.06} y={14}>
              <article className="h-full rounded-[1.75rem] border border-[color:var(--surface-stroke-light)] bg-[rgba(255,250,244,0.06)] p-8 shadow-[var(--panel-shadow-soft)] transition-colors duration-[var(--motion-gentle-duration)] ease-[var(--motion-gentle-ease)] hover:bg-[rgba(255,250,244,0.08)] focus-within:bg-[rgba(255,250,244,0.08)] motion-reduce:transition-none">
                <h3 className="font-[family-name:var(--font-display)] text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[rgba(255,250,244,0.82)]">
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
