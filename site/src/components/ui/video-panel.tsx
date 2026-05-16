type VideoPanelProps = {
  src: string;
  poster?: string;
};

export function VideoPanel({ src, poster }: VideoPanelProps) {
  return (
    <div className="group relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-[rgba(237,107,47,0.14)] bg-[rgba(255,250,244,0.76)] shadow-[0_20px_44px_rgba(53,44,39,0.08),inset_0_1px_0_rgba(255,250,244,0.24)] sm:min-h-[22rem] sm:rounded-[2rem] lg:min-h-[30rem]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full scale-[1.005] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-within:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
        src={src}
        poster={poster}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,244,0.02),rgba(53,44,39,0.08)),linear-gradient(135deg,rgba(249,188,61,0.06),transparent_54%)]" />
    </div>
  );
}
