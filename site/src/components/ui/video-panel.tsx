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
        className="absolute inset-0 h-full w-full scale-[1.01] object-cover saturate-[0.72] contrast-[0.88] brightness-[0.98] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.02] group-hover:saturate-[0.78] group-hover:contrast-[0.92] group-hover:brightness-[1] group-focus-within:scale-[1.02] group-focus-within:saturate-[0.78] group-focus-within:contrast-[0.92] group-focus-within:brightness-[1] motion-reduce:transform-none motion-reduce:transition-none"
        src={src}
        poster={poster}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,244,0.1),rgba(53,44,39,0.16)),linear-gradient(135deg,rgba(249,188,61,0.1),transparent_54%)]" />
    </div>
  );
}
