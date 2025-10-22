import Image from "next/image";

const tools = [
  {
    name: "Figma",
    icon: "https://c.animaapp.com/mh0l998lUYJvdB/img/devicon-figma.svg",
    alt: "Figma logo",
  },
  {
    name: "Miro",
    icon: "https://c.animaapp.com/mh0l998lUYJvdB/img/logos-miro-icon.svg",
    alt: "Miro logo",
  },
  {
    name: "Photoshop",
    icon: "https://c.animaapp.com/mh0l998lUYJvdB/img/devicon-photoshop.svg",
    alt: "Photoshop logo",
  },
  {
    name: "Illustrator",
    icon: "https://c.animaapp.com/mh0l998lUYJvdB/img/devicon-illustrator.svg",
    alt: "Illustrator logo",
  },
  {
    name: "After Effects",
    icon: "https://c.animaapp.com/mh0l998lUYJvdB/img/skill-icons-aftereffects.svg",
    alt: "After Effects logo",
  },
  {
    name: "Sketch",
    icon: "https://c.animaapp.com/mh0l998lUYJvdB/img/devicon-sketch.svg",
    alt: "Sketch logo",
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="w-full bg-[#f6f6f6] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-black sm:text-3xl md:text-5xl">
          My Favorite Tools
        </h2>

        <div className="mt-10 grid grid-cols-2 place-items-center gap-5 md:grid-cols-4 md:gap-8 xl:grid-cols-6">
          {tools.map((tool, index) => {
            const mirrored = index % 2 === 1;
            const shapeClass = mirrored
              ? "rounded-[0px_80px_80px_80px]"
              : "rounded-[80px_0px_80px_80px]";
            return (
              <div
                key={tool.name}
                className={`h-56 w-36 sm:w-40 lg:h-[221px] lg:w-44 ${shapeClass} flex flex-col items-center justify-center border border-[#e0e0e0] bg-[#f6f6f6]`}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-[56px] bg-white">
                  <Image
                    src={tool.icon}
                    alt={tool.alt}
                    width={56}
                    height={56}
                    className="h-14 w-14"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-medium text-black sm:text-base">
                  {tool.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
