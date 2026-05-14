import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
};

export function ImagePanel({ src, alt }: ImagePanelProps) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-[rgba(88,117,101,0.12)] bg-[rgba(255,253,248,0.88)] shadow-[0_18px_38px_rgba(36,29,26,0.08)] sm:min-h-[24rem] sm:rounded-[2rem] lg:min-h-[28rem]">
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover object-center saturate-[0.84] brightness-[0.98]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,248,0.08),rgba(36,29,26,0.12)),radial-gradient(circle_at_top_right,rgba(191,208,194,0.16),transparent_26%)]"
      />
    </div>
  );
}
