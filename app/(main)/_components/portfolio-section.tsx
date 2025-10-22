"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Category = "all" | "app" | "web" | "branding";

interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  categories: Category[];
  description?: string;
  tags?: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "SaaS Landing Page",
    subtitle: "Website Design",
    image: "/portfolio/portfolio1.png",
    href: "#",
    categories: ["all", "web"],
    description:
      "Modern SaaS landing page with clean design and conversion optimization",
    tags: ["React", "Tailwind", "Figma"],
  },
  {
    id: "2",
    title: "E-commerce Apps",
    subtitle: "UX/UI Design",
    image: "/portfolio/portfolio2.png",
    href: "#",
    categories: ["all", "app"],
    description:
      "Complete e-commerce mobile app with intuitive shopping experience",
    tags: ["Mobile", "UX/UI", "E-commerce"],
  },
  {
    id: "3",
    title: "Fitness Tracking Apps",
    subtitle: "UX/UI Design",
    image: "/portfolio/portfolio3.png",
    href: "#",
    categories: ["all", "app"],
    description:
      "Comprehensive fitness tracking app with workout plans and progress monitoring",
    tags: ["Health", "Mobile", "Tracking"],
  },
  {
    id: "4",
    title: "Financial App",
    subtitle: "UX/UI Design",
    image: "/portfolio/portfolio4.png",
    href: "#",
    categories: ["all", "app"],
    description:
      "Secure financial management app with budgeting and investment tracking",
    tags: ["Finance", "Security", "Mobile"],
  },
  {
    id: "5",
    title: "FifthSip Coffee Shop Warm & Inviting",
    subtitle: "Branding",
    image: "/portfolio/portfolio5.png",
    href: "#",
    categories: ["all", "branding"],
    description:
      "Complete brand identity for a cozy coffee shop with warm, inviting aesthetics",
    tags: ["Branding", "Logo", "Identity"],
  },
  {
    id: "6",
    title: "Fitness Tracking Apps",
    subtitle: "Web Design",
    image: "/portfolio/portfolio6.png",
    href: "#",
    categories: ["all", "web"],
    description:
      "Responsive web platform for fitness tracking and community features",
    tags: ["Web", "Responsive", "Community"],
  },
  {
    id: "7",
    title: "Mental Health Apps",
    subtitle: "UX/UI Design",
    image: "/portfolio/portfolio7.png",
    href: "#",
    categories: ["all", "app"],
    description:
      "Sensitive and user-friendly mental health support application",
    tags: ["Health", "Mental", "Support"],
  },
  {
    id: "8",
    title: "Air Ticket Solutions Booking Platform",
    subtitle: "Branding",
    image: "/portfolio/portfolio8.png",
    href: "#",
    categories: ["all", "branding"],
    description:
      "Complete branding solution for airline ticket booking platform",
    tags: ["Travel", "Booking", "Platform"],
  },
];

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) =>
      item.categories.includes(selectedCategory),
    );
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
              <TabsTrigger value="app" className="ml-1">
                App Design
              </TabsTrigger>
              <TabsTrigger value="web" className="ml-1">
                Web Design
              </TabsTrigger>
              <TabsTrigger value="branding" className="ml-1">
                Branding
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value={selectedCategory}>
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6">
              {filteredItems.map((item, idx) => {
                const baseClasses =
                  "overflow-hidden border-zinc-200 " +
                  (idx < 2 ? "md:col-span-3" : "md:col-span-2");

                return (
                  <Card key={item.id} className={baseClasses}>
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
                        {item.tags && (
                          <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                            {item.tags.slice(0, 2).map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="rounded-full bg-black/70 px-2 py-1 text-xs text-white"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="space-y-2 p-4">
                        {item.href ? (
                          <Link
                            href={item.href}
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
                          {item.subtitle}
                        </p>
                        {item.description && (
                          <p className="line-clamp-2 text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                        {item.tags && item.tags.length > 2 && (
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(2).map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600"
                              >
                                {tag}
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
