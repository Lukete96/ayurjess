import { VideoPanel } from "@/components/ui/video-panel";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  videoSrc: string;
  posterSrc?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  videoSrc,
  posterSrc,
}: PageHeroProps) {
  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl leading-[0.92] text-[var(--color-ink)] lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(31,26,23,0.82)] lg:text-lg">
            {body}
          </p>
        </div>
        <VideoPanel src={videoSrc} poster={posterSrc} />
      </div>
    </section>
  );
}
