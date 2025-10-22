import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-fiona-pink bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://c.animaapp.com/mh0l998lUYJvdB/img/group-143.png')",
      }}
    >
      {/* Container */}
      <div className="container mx-auto px-4 pt-10 pb-10 md:pb-0">
        {/* Line 1 - Heading */}
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-2 font-['Raleway',Helvetica] text-[22px] font-medium text-black md:text-[24px]">
            Hello There!
          </h1>
          <h2 className="mb-3 font-['Raleway',Helvetica] text-[44px] font-normal tracking-[0] sm:text-[40px] md:text-[60px]">
            <span className="font-bold text-black">I&apos;m </span>
            <span className="font-bold text-fiona-red italic">Fiona Bari</span>
          </h2>
          <p className="font-['Raleway',Helvetica] text-[18px] font-medium tracking-[0] text-[#6c6c6c] sm:text-[18px] md:text-[20px] lg:text-[25px]">
            UX, UI and Graphic Designer based in California
          </p>
        </div>

        {/* Line 2 - Three columns */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          {/* Left - Reviews */}
          <div className="order-3 md:order-1">
            <div className="flex w-full flex-col items-center justify-center gap-3 md:items-start">
              <div className="flex items-center -space-x-2">
                <Image
                  className="h-[60px] w-[60px] rounded-full"
                  alt="Client avatar"
                  src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-2.png"
                  width={60}
                  height={60}
                />
                <Image
                  className="h-[60px] w-[60px] rounded-full"
                  alt="Client avatar"
                  src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-3.png"
                  width={60}
                  height={60}
                />
                <Image
                  className="h-[60px] w-[60px] rounded-full"
                  alt="Client avatar"
                  src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-4.png"
                  width={60}
                  height={60}
                />
                <Image
                  className="h-[60px] w-[60px] rounded-full"
                  alt="Client avatar"
                  src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-5.png"
                  width={60}
                  height={60}
                />
                <div className="h-[60px] w-[60px] rounded-full border border-white bg-[#d9d9d9]" />
              </div>
              <div className="font-['Inter',Helvetica] text-xl font-medium tracking-[0]">
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
          <div className="relative order-1 flex flex-col items-center gap-6 md:order-2">
            {/* CTA above the portrait */}
            <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 justify-center">
              <div className="mb-4 rounded-full bg-white/70 p-2 backdrop-blur-sm md:mb-12">
                <div className="grid grid-cols-2 gap-3">
                  <button className="group flex w-[150px] cursor-pointer items-center justify-center gap-2 rounded-full border border-black bg-black px-4 py-2 sm:px-2 md:py-3 lg:w-[170px] lg:px-4">
                    <span className="font-['Inter',Helvetica] text-base font-medium tracking-[0] text-white">
                      Portfolio
                    </span>
                    <Image
                      className="h-7 w-7 rounded-full bg-fiona-red p-1 transition-transform group-hover:translate-x-1"
                      alt="Arrow pointing right"
                      src="https://c.animaapp.com/mh0l998lUYJvdB/img/guidance-left-arrow.svg"
                      width={20}
                      height={20}
                    />
                  </button>
                  <button className="group flex w-[150px] cursor-pointer items-center justify-center gap-2 rounded-full bg-fiona-red px-4 py-2 sm:px-2 md:py-3 lg:w-[170px] lg:px-4">
                    <span className="font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                      Hire Me
                    </span>
                    <Image
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      alt="Arrow pointing right"
                      src="https://c.animaapp.com/mh0l998lUYJvdB/img/guidance-left-arrow.svg"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                className="h-auto w-[300px] sm:w-[360px] md:w-[480px] lg:w-[600px]"
                alt="Fiona Bari - UX/UI Designer portrait"
                src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group.png"
                width={600}
                height={816}
                priority
              />
            </div>
          </div>

          {/* Right - Skills */}
          <div className="order-2 flex flex-col items-center gap-3 md:order-3 md:items-end">
            {/* Desktop / tablet: 2-1-2 rows layout */}
            <div className="hidden md:flex md:flex-col md:items-end md:gap-3">
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
            {/* Mobile skills - wrap */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:hidden">
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
