import { GsapReveal } from "@/components/ui/gsap-reveal";
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
    <section className="section-shell section-shell--editorial px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
      <div
        className={`mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <GsapReveal delay={0.08} y={28}>
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-saffron)]">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-none sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[rgba(36,29,26,0.7)] sm:mt-6 sm:text-base sm:leading-8">
              {body}
            </p>
          </div>
        </GsapReveal>
        <GsapReveal delay={0.42} y={24}>
          <ImagePanel src={imageSrc} alt={imageAlt} />
        </GsapReveal>
      </div>
    </section>
  );
}
