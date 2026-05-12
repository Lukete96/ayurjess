import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
};

export function ImagePanel({ src, alt }: ImagePanelProps) {
  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-[rgba(31,26,23,0.08)] bg-[var(--color-sage)] shadow-[0_18px_40px_rgba(31,26,23,0.1)]">
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover object-center saturate-[0.92]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(246,240,231,0.04),rgba(31,26,23,0.14))]"
      />
    </div>
  );
}
