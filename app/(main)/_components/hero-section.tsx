import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="h-[950px] w-full overflow-hidden bg-fiona-pink bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://c.animaapp.com/mh0l998lUYJvdB/img/group-143.png')",
      }}
    >
      {/* Container for all content */}
      <div className="relative container mx-auto h-full max-w-[1920px] px-4">
        {/* Main Portrait */}
        <Image
          className="absolute top-[134px] left-1/2 h-[816px] w-[600px] -translate-x-[300px]"
          alt="Fiona Bari - UX/UI Designer portrait"
          src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group.png"
          width={600}
          height={816}
          priority
        />

        {/* Hero Text Container */}
        <div className="z-10 text-center">
          <h1 className="mb-2 text-center font-['Raleway',Helvetica] text-[25px] font-medium text-black">
            Hello There!
          </h1>
          <h2 className="mb-4 text-center font-['Raleway',Helvetica] text-[90px] font-normal tracking-[0] sm:text-[40px] md:text-[60px] lg:text-[90px]">
            <span className="font-bold text-black">I&apos;m </span>
            <span className="font-bold text-fiona-red italic">Fiona Bari</span>
          </h2>
          <p className="font-['Raleway',Helvetica] text-[25px] font-medium tracking-[0] text-[#6c6c6c] sm:text-[18px] md:text-[20px] lg:text-[25px]">
            UX, UI and Graphic Designer based in California
          </p>
        </div>

        {/* Skills Section */}
        <div className="absolute top-[616px] left-[1325px] h-10 w-[114px] rounded-[60px] bg-black md:hidden lg:block" />
        <div className="absolute top-[616px] left-[1455px] h-10 w-[120px] rounded-[60px] bg-fiona-red md:hidden lg:block" />
        <div className="absolute top-[671px] left-[1389px] h-10 w-[186px] rounded-[60px] bg-black md:hidden lg:block" />
        <div className="absolute top-[726px] left-[1415px] h-10 w-40 rounded-[60px] bg-fiona-red md:hidden lg:block" />
        <div className="absolute top-[726px] left-[1241px] h-10 w-40 rounded-[60px] bg-black md:hidden lg:block" />

        {/* Skills Text */}
        <div className="absolute top-[627px] left-[1344px] text-center font-['Inter',Helvetica] text-base font-medium tracking-[0] whitespace-nowrap text-white md:hidden lg:block">
          Prototype
        </div>
        <div className="absolute top-[627px] left-[1473px] text-center font-['Inter',Helvetica] text-base font-medium tracking-[0] whitespace-nowrap text-white md:hidden lg:block">
          Dashboard
        </div>
        <div className="absolute top-[682px] left-[1410px] text-center font-['Inter',Helvetica] text-base font-medium tracking-[0] whitespace-nowrap text-white md:hidden lg:block">
          Mobile App Design
        </div>
        <div className="absolute top-[737px] left-[1435px] text-center font-['Inter',Helvetica] text-base font-medium tracking-[0] whitespace-nowrap text-white md:hidden lg:block">
          Website Design
        </div>
        <div className="absolute top-[737px] left-[1263px] text-center font-['Inter',Helvetica] text-base font-medium tracking-[0] whitespace-nowrap text-white md:hidden lg:block">
          Design System
        </div>

        {/* Mobile Skills Section */}
        <div className="absolute top-[400px] right-4 left-4 md:block lg:hidden">
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-[80px] rounded-[40px] bg-black" />
              <span className="font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Prototype
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-[90px] rounded-[40px] bg-fiona-red" />
              <span className="font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-[120px] rounded-[40px] bg-black" />
              <span className="font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Mobile App
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-[100px] rounded-[40px] bg-fiona-red" />
              <span className="font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Website
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-[110px] rounded-[40px] bg-black" />
              <span className="font-['Inter',Helvetica] text-sm font-medium tracking-[0] text-white">
                Design System
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="absolute top-[639px] left-[468px] h-[54px] w-[54px] rounded-[27px] border border-white bg-[#d9d9d9] md:hidden lg:block" />

        <div className="absolute top-[712px] left-[345px] font-['Inter',Helvetica] text-[25px] font-medium tracking-[0] whitespace-nowrap md:hidden lg:block">
          <span className="text-fiona-red">150+ Reviews</span>
          <span className="text-[#6c6c6c]">&nbsp;</span>
          <span className="text-black">(4.9 of 5)</span>
        </div>

        <p className="absolute top-[750px] left-[345px] font-['Inter',Helvetica] text-base font-normal tracking-[0] whitespace-nowrap text-black md:hidden lg:block">
          Reviews from Valued Clients
        </p>

        {/* Client Avatars */}
        <Image
          className="absolute top-[637px] left-[343px] h-[58px] w-[58px] md:hidden lg:block"
          alt="Client avatar"
          src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-2.png"
          width={58}
          height={58}
        />
        <Image
          className="absolute top-[637px] left-96 h-[58px] w-[58px] md:hidden lg:block"
          alt="Client avatar"
          src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-3.png"
          width={58}
          height={58}
        />
        <Image
          className="absolute top-[637px] left-[425px] h-[58px] w-[58px] md:hidden lg:block"
          alt="Client avatar"
          src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-4.png"
          width={58}
          height={58}
        />
        <Image
          className="absolute top-[636px] left-[465px] h-[60px] w-[60px] md:hidden lg:block"
          alt="Client avatar"
          src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-5.png"
          width={60}
          height={60}
        />

        {/* Mobile Reviews Section */}
        <div className="absolute top-[500px] right-4 left-4 md:block lg:hidden">
          <div className="mb-2 flex items-center gap-2">
            <Image
              className="h-[40px] w-[40px]"
              alt="Client avatar"
              src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-2.png"
              width={40}
              height={40}
            />
            <Image
              className="h-[40px] w-[40px]"
              alt="Client avatar"
              src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-3.png"
              width={40}
              height={40}
            />
            <Image
              className="h-[40px] w-[40px]"
              alt="Client avatar"
              src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-4.png"
              width={40}
              height={40}
            />
            <Image
              className="h-[40px] w-[40px]"
              alt="Client avatar"
              src="https://c.animaapp.com/mh0l998lUYJvdB/img/mask-group-5.png"
              width={40}
              height={40}
            />
            <div className="h-[40px] w-[40px] rounded-[20px] border border-white bg-[#d9d9d9]" />
          </div>
          <div className="font-['Inter',Helvetica] text-lg font-medium tracking-[0]">
            <span className="text-fiona-red">150+ Reviews</span>
            <span className="text-[#6c6c6c]">&nbsp;</span>
            <span className="text-black">(4.9 of 5)</span>
          </div>
          <p className="font-['Inter',Helvetica] text-sm font-normal tracking-[0] text-black">
            Reviews from Valued Clients
          </p>
        </div>

        {/* CTA Buttons Container */}
        <div className="absolute top-[850px] left-[727px] h-[76px] w-[466px] rounded-[60px] bg-white md:hidden lg:block" />
        <div className="absolute top-[858px] left-[737px] h-[60px] w-[218px] rounded-[60px] border border-black bg-black md:hidden lg:block" />
        <div className="absolute top-[858px] left-[965px] h-[60px] w-[218px] rounded-[60px] bg-fiona-red md:hidden lg:block" />

        {/* Portfolio Button */}
        <button className="group absolute top-[869px] left-[768px] h-[38px] w-[157px] md:hidden lg:block">
          <span className="absolute top-1 left-0 text-center font-['Inter',Helvetica] text-[25px] font-medium tracking-[0] whitespace-nowrap text-white">
            Portfolio
          </span>
          <div className="absolute top-0 left-[117px] h-[38px] w-[38px] rounded-[19px] bg-fiona-red transition-colors group-hover:bg-fiona-red/90" />
          <Image
            className="absolute top-2 left-[125px] h-[22px] w-[22px]"
            alt="Arrow pointing right"
            src="https://c.animaapp.com/mh0l998lUYJvdB/img/guidance-left-arrow.svg"
            width={22}
            height={22}
          />
        </button>

        {/* Hire Me Button */}
        <button className="group absolute top-[873px] left-[1009px] flex h-[30px] w-[131px] gap-3.5 md:hidden lg:block">
          <span className="h-[30px] w-[93px] text-center font-['Inter',Helvetica] text-[25px] font-medium tracking-[0] whitespace-nowrap text-white">
            Hire Me
          </span>
          <Image
            className="mt-1 h-[22px] w-[22px] transition-transform group-hover:translate-x-1"
            alt="Arrow pointing right"
            src="https://c.animaapp.com/mh0l998lUYJvdB/img/guidance-left-arrow.svg"
            width={22}
            height={22}
          />
        </button>

        {/* Mobile CTA Buttons */}
        <div className="absolute right-4 bottom-4 left-4 md:block lg:hidden">
          <div className="flex gap-3">
            <button className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-[30px] bg-black">
              <span className="font-['Inter',Helvetica] text-lg font-medium tracking-[0] text-white">
                Portfolio
              </span>
              <Image
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                alt="Arrow pointing right"
                src="https://c.animaapp.com/mh0l998lUYJvdB/img/guidance-left-arrow.svg"
                width={20}
                height={20}
              />
            </button>
            <button className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-[30px] bg-fiona-red">
              <span className="font-['Inter',Helvetica] text-lg font-medium tracking-[0] text-white">
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
    </section>
  );
};

export default HeroSection;
