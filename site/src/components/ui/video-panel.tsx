type VideoPanelProps = {
  src: string;
  poster?: string;
};

export function VideoPanel({ src, poster }: VideoPanelProps) {
  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-[var(--color-forest)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.08),rgba(31,26,23,0.45))]" />
    </div>
  );
}
