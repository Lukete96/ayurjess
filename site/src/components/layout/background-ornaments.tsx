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
        className="absolute left-[-6rem] top-[8rem] hidden w-[18rem] max-w-none opacity-[0.12] blur-[0.2px] md:block lg:left-[-7rem] lg:w-[22rem] lg:opacity-[0.16]"
        style={{
          transform: `translate3d(${scrollY * -0.018}px, ${scrollY * 0.18}px, 0)`,
        }}
      />
      <Image
        alt=""
        src="/ornaments/fluid-lines-right.svg"
        width={384}
        height={714}
        className="absolute right-[-6rem] top-[28rem] hidden w-[20rem] max-w-none opacity-[0.12] blur-[0.2px] lg:block lg:right-[-8rem] lg:w-[24rem] lg:opacity-[0.14]"
        style={{
          transform: `translate3d(${scrollY * 0.014}px, ${scrollY * 0.14}px, 0)`,
        }}
      />
      <Image
        alt=""
        src="/ornaments/fluid-lines-center.svg"
        width={448}
        height={247}
        className="absolute left-1/2 top-[24rem] w-[11rem] max-w-none -translate-x-1/2 opacity-[0.09] sm:top-[30rem] sm:w-[14rem] md:top-[54rem] md:w-[20rem] lg:top-[64rem] lg:w-[28rem] lg:opacity-[0.1]"
        style={{
          transform: `translate3d(-50%, ${scrollY * 0.1}px, 0)`,
        }}
      />
    </div>
  );
}
