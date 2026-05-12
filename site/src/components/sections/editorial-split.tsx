import { ImagePanel } from "@/components/ui/image-panel";

type EditorialSplitProps = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export function EditorialSplit({
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  reverse = false,
}: EditorialSplitProps) {
  return (
    <section className="px-6 py-12 lg:px-10 lg:py-16">
      <div
        className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-saffron)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-none lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(31,26,23,0.78)]">
            {body}
          </p>
        </div>
        <ImagePanel src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
}
