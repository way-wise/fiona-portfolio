"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import {
  PortfolioItem,
  portfolioItems as importedPortfolioItems,
} from "@/lib/portfolio-data";
import ProjectDetailModal from "./project-detail-modal";

const categories = [
  "all",
  "apps-design",
  "web-design",
  "branding",
  "email-template",
] as const;

type Category = (typeof categories)[number];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useQueryState(
    "tab",
    parseAsStringLiteral(categories).withDefault("all"),
  );

  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );

  const portfolioRef = useRef<HTMLElement>(null);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    if (
      !hasScrolledRef.current &&
      selectedCategory &&
      selectedCategory !== "all"
    ) {
      hasScrolledRef.current = true;
      portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCategory]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return importedPortfolioItems;
    }
    return importedPortfolioItems.filter(
      (item) => item.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <section
      ref={portfolioRef}
      id="portfolio"
      className="w-full bg-[#f8faff] py-14 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-end">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-black sm:text-3xl md:text-5xl">
              Look at My Portfolio
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[#6d6d6d] sm:text-base">
              Explore my recent web design creations and discover how I can
              transform your vision into reality.
            </p>
          </div>
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as Category)}
          className="mt-20"
        >
          <div className="flex justify-center">
            <TabsList className="flex-wrap bg-white">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="apps-design" className="ml-1">
                App Design
              </TabsTrigger>
              <TabsTrigger value="web-design" className="ml-1">
                Web Design
              </TabsTrigger>
              <TabsTrigger value="branding" className="ml-1">
                Branding
              </TabsTrigger>
              <TabsTrigger value="email-template" className="ml-1">
                Email Templates
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value={selectedCategory}>
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => {
                const itemImageUrl =
                  item.image.startsWith("http") || item.image.startsWith("/")
                    ? item.image
                    : `/${item.image}`;

                return (
                  <Card
                    key={item.id}
                    onClick={() => setSelectedProject(item)}
                    className="group cursor-pointer overflow-hidden border-zinc-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                        <Image
                          src={itemImageUrl}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          unoptimized
                          priority
                        />
                        {item.technologies && (
                          <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                            {item.technologies
                              .slice(0, 2)
                              .map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="rounded-full bg-black/70 px-2 py-1 font-(family-name:--font-outfit) text-xs text-white"
                                >
                                  {tech}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>
                      <div className="space-y-2 p-4">
                        {item.demoUrl ? (
                          <span className="font-(family-name:--font-outfit) text-lg font-semibold text-foreground">
                            {item.title}
                          </span>
                        ) : (
                          <p className="font-(family-name:--font-outfit) text-lg font-semibold text-foreground">
                            {item.title}
                          </p>
                        )}
                        <p className="font-(family-name:--font-outfit) text-[14px] font-medium text-muted-foreground">
                          {item.category}
                        </p>
                        {item.description && (
                          <p className="line-clamp-2 font-(family-name:--font-outfit) font-normal text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                        {item.technologies && item.technologies.length > 2 && (
                          <div className="flex flex-wrap gap-1">
                            {item.technologies.slice(2).map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="rounded bg-zinc-100 px-3 py-2 font-(family-name:--font-outfit) text-[12px] font-normal text-zinc-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </section>
  );
};

export default PortfolioSection;
