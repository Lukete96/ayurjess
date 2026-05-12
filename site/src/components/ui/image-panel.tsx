import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
};

export function ImagePanel({ src, alt }: ImagePanelProps) {
  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-[var(--color-sage)]">
      <Image fill src={src} alt={alt} className="object-cover" />
    </div>
  );
}
