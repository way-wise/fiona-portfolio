"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolioItems as importedPortfolioItems } from "@/lib/portfolio-data";

type Category = "all" | "apps-design" | "web-design" | "branding" | "email-template";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return importedPortfolioItems;
    }
    return importedPortfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="portfolio"
      className="w-full bg-[#f8faff] py-14 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl text-black sm:text-3xl md:text-5xl">
              Look at My Portfolio
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[#6d6d6d] sm:text-base">
              Explore my recent web design creations and discover how I can
              transform your vision into reality.
            </p>
          </div>
          <Button asChild className="rounded-full bg-black px-6 py-6 text-base">
            <Link href="#" className="flex items-center gap-3">
              <span>See All Projects</span>
              <span className="grid size-7 place-items-center rounded-full bg-red-600 text-white">
                →
              </span>
            </Link>
          </Button>
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as Category)}
          className="mt-20"
        >
          <div className="flex justify-center">
            <TabsList className="bg-white">
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
                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden border-zinc-200"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          unoptimized
                          priority
                        />
                        {item.technologies && (
                          <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                            {item.technologies.slice(0, 2).map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="rounded-full bg-black/70 px-2 py-1 text-xs text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="space-y-2 p-4">
                        {item.demoUrl ? (
                          <Link
                            href={item.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-foreground hover:underline"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <p className="text-lg font-semibold text-foreground">
                            {item.title}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {item.category}
                        </p>
                        {item.description && (
                          <p className="line-clamp-2 text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                        {item.technologies && item.technologies.length > 2 && (
                          <div className="flex flex-wrap gap-1">
                            {item.technologies.slice(2).map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600"
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
    </section>
  );
};

export default PortfolioSection;
