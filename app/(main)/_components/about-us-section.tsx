import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#e7edff] py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Left main div */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
            {/* Accent shape (no positioning on right side, only structure) */}
            <div className="w-full rounded-t-[234px] rounded-b-[16px] bg-fiona-red pt-20">
              {/* Main image (no absolute) */}
              <div className="">
                <Image
                  className="mx-auto h-auto w-[88%] object-contain"
                  alt="Fiona Bari portrait"
                  src="/portfolio/fiona.png"
                  width={480}
                  height={560}
                  priority
                />
              </div>
            </div>
            {/* Only positioned element: 450+ Total Customer card */}
            <div className="absolute top-20 left-[-10%] z-20 rounded-t-full rounded-b-md! bg-white p-4 shadow-[0_0_8px_#0000001a] sm:left-[-2%] xl:left-[-10%]">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fiona-red">
                  <LuUsers size={20} className="text-white" />
                </div>
                <div className="text-black">
                  <div className="text-2xl leading-none font-bold">450+</div>
                </div>
                <div className="text-xs font-medium text-[#6d6d6d]">
                  Total Customer
                </div>
              </div>
            </div>
          </div>

          {/* Right main div (no absolute positioning) */}
          <div>
            <h2 className="mb-4 text-center font-['Raleway',Helvetica] text-3xl font-semibold text-black sm:text-4xl md:text-left lg:text-5xl">
              Who is Fiona Bari?
            </h2>
            <p className="mb-8 text-center font-['Inter',Helvetica] text-base leading-7 text-[#6d6d6d] md:text-left">
              We provide comprehensive digital solutions to help your business
              grow and succeed in the digital landscape.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <div className="text-center text-3xl font-bold text-black sm:text-[32px] md:text-left">
                  750+
                </div>
                <div className="text-center text-sm font-medium text-[#6d6d6d] md:text-left">
                  Project Completed
                </div>
              </div>
              <div>
                <div className="text-center text-3xl font-bold text-black sm:text-[32px] md:text-left">
                  25+
                </div>
                <div className="text-center text-sm font-medium text-[#6d6d6d] md:text-left">
                  Industry Covered
                </div>
              </div>
              <div>
                <div className="text-center text-3xl font-bold text-black sm:text-[32px] md:text-left">
                  5+
                </div>
                <div className="text-center text-sm font-medium text-[#6d6d6d] md:text-left">
                  Years of Experience
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 xl:flex-row">
              <a
                className="group flex items-center gap-3 rounded-full bg-white px-5 py-4 text-black shadow-[0_0_3px_#00000026]"
                href="tel:+13105286170"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-fiona-red">
                  <IoCallOutline size={20} className="text-white" />
                </span>
                <span className="font-['Inter',Helvetica] text-lg">
                  +1 (310) 528-6170
                </span>
              </a>

              <div className="flex items-center gap-3 rounded-full bg-white px-5 py-4 text-black shadow-[0_0_3px_#00000026]">
                <span className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-fiona-red">
                  <HiOutlineMail size={20} className="text-white" />
                </span>
                <span className="font-['Inter',Helvetica] text-lg">
                  learnfiona@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
