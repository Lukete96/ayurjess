"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function BackgroundOrnaments() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Image
        alt=""
        src="/ornaments/fluid-lines-left.svg"
        width={352}
        height={704}
        className="absolute left-[-7rem] top-[8rem] w-[22rem] max-w-none opacity-[0.16] blur-[0.2px]"
        style={{
          transform: `translate3d(${scrollY * -0.018}px, ${scrollY * 0.18}px, 0)`,
        }}
      />
      <Image
        alt=""
        src="/ornaments/fluid-lines-right.svg"
        width={384}
        height={714}
        className="absolute right-[-8rem] top-[28rem] w-[24rem] max-w-none opacity-[0.14] blur-[0.2px]"
        style={{
          transform: `translate3d(${scrollY * 0.014}px, ${scrollY * 0.14}px, 0)`,
        }}
      />
      <Image
        alt=""
        src="/ornaments/fluid-lines-center.svg"
        width={448}
        height={247}
        className="absolute left-1/2 top-[64rem] w-[28rem] max-w-none -translate-x-1/2 opacity-[0.1]"
        style={{
          transform: `translate3d(-50%, ${scrollY * 0.1}px, 0)`,
        }}
      />
    </div>
  );
}
