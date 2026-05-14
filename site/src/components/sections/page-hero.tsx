import { GsapReveal } from "@/components/ui/gsap-reveal";
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
    <section className="section-shell section-shell--hero px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-center lg:gap-14">
        <div className="max-w-3xl">
          <GsapReveal delay={0.04} y={28}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
              {eyebrow}
            </p>
          </GsapReveal>
          <GsapReveal delay={0.18} y={34}>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.9rem,11vw,6.9rem)] leading-[0.95] tracking-[-0.045em] text-[var(--color-ink)] text-balance sm:mt-5 sm:text-[clamp(3.4rem,8vw,6.9rem)] sm:leading-[0.92]">
              {title}
            </h1>
          </GsapReveal>
          <GsapReveal delay={0.34} y={26}>
            <p className="mt-6 max-w-2xl text-[0.98rem] leading-[1.8] text-[rgba(36,29,26,0.72)] sm:mt-8 sm:text-[clamp(1rem,1.1vw+0.82rem,1.2rem)] sm:leading-[1.95]">
              {body}
            </p>
          </GsapReveal>
        </div>
        <GsapReveal delay={0.58} y={32} className="lg:pl-4">
          <VideoPanel src={videoSrc} poster={posterSrc} />
        </GsapReveal>
      </div>
    </section>
  );
}
