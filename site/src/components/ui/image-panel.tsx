import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
};

export function ImagePanel({ src, alt }: ImagePanelProps) {
  return (
    <div className="group relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-[rgba(49,182,214,0.12)] bg-[rgba(255,250,244,0.88)] shadow-[0_18px_38px_rgba(53,44,39,0.08)] sm:min-h-[24rem] sm:rounded-[2rem] lg:min-h-[28rem]">
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] group-focus-within:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,244,0.02),rgba(53,44,39,0.06)),radial-gradient(circle_at_top_right,rgba(49,182,214,0.06),transparent_24%)]"
      />
    </div>
  );
}
