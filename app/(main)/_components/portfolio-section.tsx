"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

type Category = "all" | "app" | "web" | "branding";

const portfolioItems: Array<{
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  categories: Category[];
}> = [
  {
    id: "1",
    title: "SaaS Landing Page",
    subtitle: "Website Design",
    image: "https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-199.png",
    href: "https://example.com/demo",
    categories: ["all", "web"],
  },
  {
    id: "2",
    title: "E-commerce Apps",
    subtitle: "UX/UI Design",
    image: "https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-200.png",
    categories: ["all", "app"],
  },
  {
    id: "3",
    title: "Fitness Tracking Apps",
    subtitle: "UX/UI Design",
    image: "https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-201.png",
    categories: ["all", "app"],
  },
  {
    id: "4",
    title: "Financial App",
    subtitle: "UX/UI Design",
    image: "https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-202.png",
    categories: ["all", "app"],
  },
  {
    id: "5",
    title: "FifthSip Coffee Shop Warm & Inviting",
    subtitle: "Branding",
    image: "https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-203.png",
    categories: ["all", "branding"],
  },
  {
    id: "6",
    title: "Fitness Tracking Apps",
    subtitle: "Web Design",
    image: "https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-205.png",
    categories: ["all", "web"],
  },
  {
    id: "7",
    title: "Mental Health Apps",
    subtitle: "UX/UI Design",
    image: "https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-206.png",
    categories: ["all", "app"],
  },
  {
    id: "8",
    title: "Air Ticket Solutions Booking Platform",
    subtitle: "Branding",
    image: "https://c.animaapp.com/mh0l998lUYJvdB/img/rectangle-207.png",
    categories: ["all", "branding"],
  },
];

export const PortfolioSection = () => {
  const renderGrid = (category: Category) => {
    const items = portfolioItems.filter((item) =>
      item.categories.includes(category),
    );
    return (
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6">
        {items.map((item, idx) => (
          <Card
            key={item.id}
            className={
              "overflow-hidden border-zinc-200 " +
              (idx < 2 ? "md:col-span-3" : "md:col-span-2")
            }
          >
            <CardContent className="p-0">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 p-4">
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
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-[#f8faff] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              <span className="grid size-7 place-items-center rounded-full bg-[#db0009] text-white">
                →
              </span>
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <div className="flex justify-center">
            <TabsList className="bg-white">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="app" className="ml-1">
                App Design
              </TabsTrigger>
              <TabsTrigger value="web" className="ml-1">
                Web Design
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">{renderGrid("all")}</TabsContent>
          <TabsContent value="app">{renderGrid("app")}</TabsContent>
          <TabsContent value="web">{renderGrid("web")}</TabsContent>
          <TabsContent value="branding">{renderGrid("branding")}</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
