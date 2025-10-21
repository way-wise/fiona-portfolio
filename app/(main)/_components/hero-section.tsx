import Image from "next/image";

type SkillTagProps = {
  label: string;
  color?: "black" | "red";
};

const SkillTag = ({ label, color = "black" }: SkillTagProps) => {
  const base =
    "rounded-[60px] px-5 py-2 text-center font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white";
  const bg = color === "red" ? "bg-fiona-red" : "bg-black";
  return <span className={`${base} ${bg}`}>{label}</span>;
};

const Reviews = () => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-3 md:items-start">
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
  );
};

const CTAButtons = () => {
  return (
    <div className="mb-12 rounded-full bg-white/70 p-2 backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-3">
        <button className="group flex items-center justify-center gap-2 rounded-full border border-black bg-black px-4 py-3">
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
        <button className="group flex items-center justify-center gap-2 rounded-full bg-fiona-red px-4 py-3">
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
  );
};

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
      <div className="container mx-auto px-4 pt-10">
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
            <Reviews />
          </div>

          {/* Middle - Portrait + CTAs */}
          <div className="relative order-1 flex flex-col items-center gap-6 md:order-2">
            {/* CTA above the portrait */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <CTAButtons />
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
          <div className="order-2 flex flex-col items-start gap-3 md:order-3 md:items-end">
            {/* Desktop / tablet: 2-1-2 rows layout */}
            <div className="hidden md:flex md:flex-col md:items-end md:gap-3">
              <div className="flex gap-3">
                <SkillTag label="Prototype" color="black" />
                <SkillTag label="Dashboard" color="red" />
              </div>
              <div className="flex justify-end">
                <SkillTag label="Mobile App Design" color="black" />
              </div>
              <div className="flex gap-3">
                <SkillTag label="Design System" color="black" />
                <SkillTag label="Website Design" color="red" />
              </div>
            </div>
            {/* Mobile skills - wrap */}
            <div className="flex flex-wrap gap-2 md:hidden">
              <SkillTag label="Prototype" color="black" />
              <SkillTag label="Dashboard" color="red" />
              <SkillTag label="Mobile App" color="black" />
              <SkillTag label="Website" color="red" />
              <SkillTag label="Design System" color="black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
