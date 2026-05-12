import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
};

export function ImagePanel({ src, alt }: ImagePanelProps) {
  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-[color:var(--surface-stroke)] bg-[var(--color-sage)] shadow-[var(--panel-shadow-soft)]">
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover object-center saturate-[0.92]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,240,231,0.04),rgba(31,26,23,0.14))]" />
    </div>
  );
}
