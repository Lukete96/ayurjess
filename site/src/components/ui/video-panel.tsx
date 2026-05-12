type VideoPanelProps = {
  src: string;
  poster?: string;
};

export function VideoPanel({ src, poster }: VideoPanelProps) {
  return (
    <div className="group relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-[rgba(255,250,244,0.5)] bg-[var(--color-forest)] shadow-[0_22px_48px_rgba(31,26,23,0.12),inset_0_1px_0_rgba(255,250,244,0.24)] lg:min-h-[30rem]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full scale-[1.01] object-cover saturate-[0.82] contrast-[0.92] brightness-[0.94] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.025] group-hover:saturate-[0.86] group-hover:contrast-[0.95] group-hover:brightness-[0.96] group-focus-within:scale-[1.025] group-focus-within:saturate-[0.86] group-focus-within:contrast-[0.95] group-focus-within:brightness-[0.96] motion-reduce:transform-none motion-reduce:transition-none"
        src={src}
        poster={poster}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.05),rgba(31,26,23,0.32)),linear-gradient(135deg,rgba(246,240,231,0.08),transparent_56%)]" />
    </div>
  );
}
