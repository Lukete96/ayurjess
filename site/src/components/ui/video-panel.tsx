type VideoPanelProps = {
  src: string;
  poster?: string;
};

export function VideoPanel({ src, poster }: VideoPanelProps) {
  return (
    <div className="video-panel relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-[var(--color-forest)] lg:min-h-[30rem]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-panel__media absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
      />
      <div className="video-panel__wash absolute inset-0" />
    </div>
  );
}
