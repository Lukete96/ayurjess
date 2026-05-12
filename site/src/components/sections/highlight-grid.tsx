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
        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-none lg:text-7xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] bg-[rgba(255,250,244,0.08)] p-8"
            >
              <h3 className="font-[family-name:var(--font-display)] text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[rgba(255,250,244,0.82)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
