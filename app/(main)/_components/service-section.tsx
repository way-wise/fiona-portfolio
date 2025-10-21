"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const contentWidth = 1920;
  const contentHeight = 848;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState(contentHeight);

  useEffect(() => {
    const updateScale = () => {
      if (!wrapperRef.current) return;
      const availableWidth = wrapperRef.current.clientWidth;
      const nextScale = Math.min(1, availableWidth / contentWidth);
      setScale(nextScale);
      setScaledHeight(contentHeight * nextScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);
  // This section wraps the original absolute layout inside a fixed-size, centered container
  // so all pixel offsets map 1:1 to the original design while using modern Next.js/Image.
  return (
    <section className="w-full bg-[#e5fbf3]">
      <div
        ref={wrapperRef}
        className="relative mx-auto w-full max-w-[1920px]"
        style={{ height: `${scaledHeight}px` }}
      >
        <div
          className="relative"
          style={{
            width: `${contentWidth}px`,
            height: `${contentHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* Title (1039 - 950 = 89) */}
          <div className="absolute top-[89px] left-[345px] text-[50px] leading-[normal] font-semibold tracking-[0] whitespace-nowrap text-black">
            Services I Provide
          </div>

          {/* Subtitle (1050 - 950 = 100) */}
          <div className="absolute top-[100px] left-[1081px] text-base leading-[normal] font-normal tracking-[0] text-[#6d6d6d]">
            We provide comprehensive digital solutions to help your business
            <br />
            grow and succeed in the digital landscape.
          </div>

          {/* Dark background blocks (1202 - 950 = 252) */}
          <div className="absolute top-[252px] left-[315px] h-[440px] w-[410px] rounded-[34px] bg-[#3c3c3c]" />
          <div className="absolute top-[252px] left-[755px] h-[440px] w-[410px] rounded-[34px] bg-[#db0009]" />
          <div className="absolute top-[252px] left-[1195px] h-[440px] w-[410px] rounded-[34px] bg-[#3c3c3c]" />

          {/* Mid blocks (1320 - 950 = 370) */}
          <div className="absolute top-[370px] left-[348px] h-[332px] w-[340px] rounded-[34px] bg-[#767676]" />
          <div className="absolute top-[370px] left-[788px] h-[332px] w-[340px] rounded-[34px] bg-[#ff797f]" />
          <div className="absolute top-[370px] left-[1228px] h-[332px] w-[340px] rounded-[34px] bg-[#767676]" />

          {/* Light blocks (1342 - 950 = 392) */}
          <div className="absolute top-[392px] left-[333px] h-[331px] w-[370px] rounded-[34px] bg-[#9d9d9d]" />
          <div className="absolute top-[392px] left-[773px] h-[332px] w-[370px] rounded-[34px] bg-[#ff5e64]" />
          <div className="absolute top-[392px] left-[1213px] h-[332px] w-[370px] rounded-[34px] bg-[#9d9d9d]" />

          {/* White base behind image (1366 - 950 = 416) */}
          <div className="absolute top-[416px] left-[315px] h-[332px] w-[410px] rounded-[34px] bg-white" />

          {/* Images (exact sizes) */}
          <Image
            className="absolute top-[416px] left-[315px] rounded-[34px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-202.png"
            width={410}
            height={332}
            priority
            sizes="(max-width: 1920px) 100vw, 1920px"
          />
          <Image
            className="absolute top-[416px] left-[755px] rounded-[34px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-199.png"
            width={410}
            height={332}
            sizes="(max-width: 1920px) 100vw, 1920px"
          />
          <Image
            className="absolute top-[416px] left-[1195px] rounded-[34px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-203.png"
            width={410}
            height={332}
            sizes="(max-width: 1920px) 100vw, 1920px"
          />

          {/* Round buttons (1578 - 950 = 628) */}
          <div className="absolute top-[628px] left-[605px] h-[100px] w-[100px] rounded-[100px] bg-white shadow-[0px_0px_8px_#00000033]" />
          <div className="absolute top-[628px] left-[1045px] h-[100px] w-[100px] rounded-[100px] bg-[#db0009] shadow-[0px_0px_8px_#00000033]" />
          <div className="absolute top-[628px] left-[1485px] h-[100px] w-[100px] rounded-[100px] bg-white shadow-[0px_0px_8px_#00000033]" />

          {/* Service titles over dark blocks (1232 - 950 = 282) */}
          <div className="absolute top-[282px] left-[347px] text-[35px] leading-[normal] font-semibold tracking-[0] whitespace-nowrap text-white">
            App Design
          </div>
          <div className="absolute top-[282px] left-[787px] text-[35px] leading-[normal] font-semibold tracking-[0] whitespace-nowrap text-white">
            Web Design
          </div>
          <div className="absolute top-[282px] left-[1227px] text-[35px] leading-[normal] font-semibold tracking-[0] whitespace-nowrap text-white">
            Branding
          </div>

          {/* Small arrow icons (1610 - 950 = 660) */}
          <Image
            className="absolute top-[660px] left-[637px]"
            alt="Guidance up left"
            src="https://c.animaapp.com/mh0l998lUYJvdB/img/guidance-up-left-arrow.svg"
            width={36}
            height={36}
          />
          <Image
            className="absolute top-[660px] left-[1077px]"
            alt="Guidance up left"
            src="https://c.animaapp.com/mh0l998lUYJvdB/img/guidance-up-left-arrow.svg"
            width={36}
            height={36}
          />
          <Image
            className="absolute top-[660px] left-[1517px]"
            alt="Guidance up left"
            src="https://c.animaapp.com/mh0l998lUYJvdB/img/guidance-up-left-arrow.svg"
            width={36}
            height={36}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
