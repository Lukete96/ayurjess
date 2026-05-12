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
    <section className="px-6 py-12 lg:px-10 lg:py-18">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-center lg:gap-14">
        <div className="max-w-3xl">
          <GsapReveal delay={0.06} y={18}>
            <p className="hero-eyebrow">
              {eyebrow}
            </p>
          </GsapReveal>
          <GsapReveal delay={0.18} y={24}>
            <h1 className="hero-title mt-5">
              {title}
            </h1>
          </GsapReveal>
          <GsapReveal delay={0.3} y={18}>
            <p className="hero-body mt-6 max-w-2xl">
              {body}
            </p>
          </GsapReveal>
        </div>
        <GsapReveal delay={0.42} y={16} className="lg:pl-4">
          <VideoPanel src={videoSrc} poster={posterSrc} />
        </GsapReveal>
      </div>
    </section>
  );
}
