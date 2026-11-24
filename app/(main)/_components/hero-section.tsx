"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { useContactModal } from "@/providers/contact-modal-provider";

const HeroSection = () => {
  const { openContactModal } = useContactModal();
  return (
    <section
      id="home"
      className="flex w-full flex-col justify-between bg-white pt-24 sm:pt-28 lg:min-h-screen lg:bg-[url('/hero-bg.png')] lg:bg-cover lg:bg-bottom lg:bg-no-repeat lg:pt-32"
    >
      {/* Container */}
      <div className="container mx-auto flex flex-1 flex-col justify-between px-4 pt-4 sm:pt-6 lg:pt-0">
        {/* Line 1 - Heading */}
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-1 font-['Raleway',Helvetica] text-[20px] font-medium text-black md:text-[22px] lg:mb-2 lg:text-[24px]">
            Hello There!
          </h1>
          <h2 className="mb-2 font-['Raleway',Helvetica] text-[38px] font-normal tracking-[0] sm:text-[40px] md:text-[48px] lg:mb-3 lg:text-[56px] xl:text-[60px]">
            <span className="font-bold text-black">I&apos;m </span>
            <span className="font-bold text-fiona-red italic">Fiona Bari</span>
          </h2>
          <p className="font-['Raleway',Helvetica] text-[16px] font-medium tracking-[0] text-[#6c6c6c] sm:text-[18px] md:text-[19px] lg:text-[22px]">
            UX, UI and Graphic Designer based in California
          </p>
        </div>

        {/* Line 2 - Three columns */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-end lg:gap-8">
          {/* Left - Reviews */}
          <div className="order-3 lg:order-1 lg:self-center lg:pb-14">
            <div className="flex w-full flex-col items-center justify-center gap-3 lg:items-start">
              <div className="flex items-center -space-x-2">
                <Image
                  className="h-[50px] w-[50px] rounded-full lg:h-[60px] lg:w-[60px]"
                  alt="Client avatar"
                  src="/portfolio/review1.png"
                  width={60}
                  height={60}
                />
                <Image
                  className="h-[50px] w-[50px] rounded-full lg:h-[60px] lg:w-[60px]"
                  alt="Client avatar"
                  src="/portfolio/review2.png"
                  width={60}
                  height={60}
                />
                <Image
                  className="h-[50px] w-[50px] rounded-full lg:h-[60px] lg:w-[60px]"
                  alt="Client avatar"
                  src="/portfolio/review3.png"
                  width={60}
                  height={60}
                />
                <Image
                  className="h-[50px] w-[50px] rounded-full lg:h-[60px] lg:w-[60px]"
                  alt="Client avatar"
                  src="/portfolio/review4.png"
                  width={60}
                  height={60}
                />
              </div>
              <div className="font-['Inter',Helvetica] text-lg font-medium tracking-[0] lg:text-xl">
                <span className="text-fiona-red">150+ Reviews</span>
                <span className="text-[#6c6c6c]">&nbsp;</span>
                <span className="text-black">(4.9 of 5)</span>
              </div>
              <p className="font-['Inter',Helvetica] text-sm font-normal tracking-[0] text-black">
                Reviews from Valued Clients
              </p>
            </div>
          </div>

          {/* Middle - Portrait + CTAs */}
          <div className="relative order-1 flex flex-col items-center gap-4 lg:order-2 lg:gap-0">
            <div className="overflow-hidden rounded-t-[180px] bg-fiona-pink lg:rounded-none lg:bg-transparent">
              <Image
                className="block h-auto w-[320px] object-contain object-bottom sm:w-[380px] md:w-[420px] lg:max-h-[55vh] lg:w-[480px] xl:w-[560px] 2xl:w-[620px]"
                alt="Fiona Bari - UX/UI Designer portrait"
                src="/portfolio/fiona.png"
                width={600}
                height={577}
                priority
              />
            </div>

            {/* CTA buttons: positioned below portrait on mobile/tablet, overlayed at bottom on desktop */}
            <div className="relative z-10 flex w-full justify-center lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2">
              <div className="mb-2 rounded-full bg-white p-2 shadow-xs lg:mb-0 lg:bg-white/70 lg:backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="#portfolio"
                    className="group flex w-[140px] cursor-pointer items-center justify-center gap-2 rounded-full border border-black bg-black px-4 py-2 sm:px-2 md:py-2.5 lg:w-40 lg:px-4 lg:py-3"
                  >
                    <span className="font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white lg:text-base">
                      Portfolio
                    </span>
                    <div className="rounded-full bg-fiona-red p-1 transition-transform group-hover:translate-x-1">
                      <IoMdArrowForward className="text-white" size={18} />
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={openContactModal}
                    className="group flex w-[140px] cursor-pointer items-center justify-center gap-2 rounded-full bg-fiona-red px-4 py-2 sm:px-2 md:py-2.5 lg:w-40 lg:px-4 lg:py-3"
                  >
                    <span className="font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                      Hire Me
                    </span>
                    <IoMdArrowForward
                      className="text-white transition-transform group-hover:translate-x-1"
                      size={18}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="order-2 flex flex-col items-center gap-3 lg:order-3 lg:items-end lg:self-center lg:pb-14">
            {/* Desktop / tablet: 2-1-2 rows layout */}
            <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-3">
              <div className="flex gap-3">
                <span className="rounded-[60px] bg-black px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                  Prototype
                </span>
                <span className="rounded-[60px] bg-fiona-red px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                  Dashboard
                </span>
              </div>
              <div className="flex justify-end">
                <span className="rounded-[60px] bg-black px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                  Mobile App Design
                </span>
              </div>
              <div className="flex gap-3">
                <span className="rounded-[60px] bg-black px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                  Design System
                </span>
                <span className="rounded-[60px] bg-fiona-red px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                  Website Design
                </span>
              </div>
            </div>
            {/* Mobile / Tablet skills - wrap */}
            <div className="flex flex-wrap items-center justify-center gap-2 lg:hidden">
              <span className="rounded-[60px] bg-black px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Prototype
              </span>
              <span className="rounded-[60px] bg-fiona-red px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Dashboard
              </span>
              <span className="rounded-[60px] bg-black px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Mobile App
              </span>
              <span className="rounded-[60px] bg-fiona-red px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Website
              </span>
              <span className="rounded-[60px] bg-black px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Design System
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
