type VideoPanelProps = {
  src: string;
  poster?: string;
};

export function VideoPanel({ src, poster }: VideoPanelProps) {
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-[color:var(--surface-stroke)] bg-[var(--color-forest)] shadow-[var(--panel-shadow-soft)] lg:min-h-[30rem]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover saturate-[0.78] contrast-[0.9] brightness-[0.92]"
        src={src}
        poster={poster}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.08),rgba(31,26,23,0.34)),linear-gradient(135deg,rgba(246,240,231,0.08),transparent_58%)]" />
    </div>
  );
}
