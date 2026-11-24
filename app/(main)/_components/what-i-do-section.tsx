import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "App Design",
    description:
      "Crafting intuitive, human-centered mobile interfaces that simplify complex user flows, increase daily engagement, and deliver polished journeys across iOS and Android.",
    image: "/portfolio/what-i-do-app.png",
    link: "/?tab=apps-design#portfolio",
    badgeBg:
      "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Designing responsive, conversion-driven websites and landing pages built around visitor intent, crisp aesthetic hierarchy, and accessible cross-browser interactions.",
    image: "/portfolio/what-i-do-web.png",
    link: "/?tab=web-design#portfolio",
    badgeBg:
      "bg-violet-50 text-violet-700 border-violet-200/60 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800/40",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Developing distinctive visual systems, custom typography, and cohesive packaging assets that communicate your brand values and set you apart in competitive markets.",
    image: "/portfolio/what-i-do-branding.png",
    link: "/?tab=branding#portfolio",
    badgeBg:
      "bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40",
  },
];

const WhatIDoSection = () => {
  return (
    <section
      id="what-i-do"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          {/* Pill Badge */}
          <span className="inline-flex items-center rounded-full border border-rose-200/70 bg-rose-50/80 px-6 py-2.5 font-['Raleway',Helvetica] text-xs font-bold tracking-widest text-fiona-red uppercase shadow-2xs dark:border-rose-900/40 dark:bg-rose-950/40 dark:text-rose-400">
            WHAT I DO
          </span>

          {/* Headline */}
          <h2 className="mt-5 max-w-4xl font-['Raleway',Helvetica] text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.18]">
            Turning Ideas Into Meaningful{" "}
            <span className="relative inline-block">
              <span className="text-black">Digital Experiences.</span>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl font-['Inter',Helvetica] text-base leading-relaxed text-[#6d6d6d] sm:text-lg">
            I help businesses bring their ideas to life through thoughtful
            design that looks good and works even better.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-xl sm:p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Mockup preview */}
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800/60">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Card Footer / Details */}
              <div className="mt-5 flex items-start gap-4 p-1">
                {/* Number Badge */}
                <div
                  className={`text-md flex size-14 shrink-0 items-center justify-center rounded-xl border font-['Inter',Helvetica] font-bold shadow-2xs ${card.badgeBg}`}
                >
                  {card.number}
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-1.5">
                  <h3 className="font-['Raleway',Helvetica] text-xl font-bold tracking-tight text-black sm:text-2xl dark:text-white">
                    {card.title}
                  </h3>
                  <p className="font-['Inter',Helvetica] text-sm leading-relaxed text-[#6d6d6d] dark:text-zinc-400">
                    {card.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={card.link}
                      className="group/link inline-flex items-center gap-1.5 font-['Inter',Helvetica] text-sm font-semibold text-black transition-colors hover:text-fiona-red dark:text-zinc-200 dark:hover:text-fiona-red"
                    >
                      <span>Explore Projects</span>
                      <ArrowRight
                        size={15}
                        className="text-fiona-red transition-transform duration-200 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
