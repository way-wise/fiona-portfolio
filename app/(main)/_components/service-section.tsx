import Image from "next/image";
const servicesCards = [
  {
    title: "App Design",
    image: "/portfolio/service1.png",
    link: "/portfolio/service1",
  },
  {
    title: "Web Design",
    image: "/portfolio/service2.png",
    link: "/portfolio/service2",
  },
  {
    title: "Branding",
    image: "/portfolio/service3.png",
    link: "/portfolio/service3",
  },
];
const ServiceSection = () => {
  return (
    <section id="services" className="w-full bg-[#E5FBF3]">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <h2 className="text-[42px] font-semibold text-nowrap md:text-[50px]">
            Services I Provide
          </h2>
          <p className="text-base text-[#6d6d6d]">
            We provide comprehensive digital solutions to help your business
            <br className="hidden sm:block" />
            grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {servicesCards.map((service) => (
            <div key={service.title} className="relative">
              <h3 className="absolute top-2 left-[10%] text-[40px] font-bold text-white">
                {service.title}
              </h3>
              <div className="w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  priority
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
