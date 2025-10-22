"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { auth } from "@/lib/auth";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface PortfolioNavbarProps {
  session: typeof auth.$Infer.Session | null;
}

const PortfolioNavbar = ({ session: _session }: PortfolioNavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  void _session;

  const navLinks = useMemo(
    () => [
      { href: "/#home", label: "Home", id: "home" },
      { href: "/#services", label: "Services", id: "services" },
      { href: "/#about", label: "About Me", id: "about" },
      { href: "/#portfolio", label: "Portfolio", id: "portfolio" },
      { href: "/#contact", label: "Contact", id: "contact" },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let activeId = "home";

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });

        // If no sections are intersecting, find the closest one
        if (maxRatio === 0) {
          const sections = navLinks
            .map((link) => ({
              id: link.id,
              element: document.getElementById(link.id),
              rect: document.getElementById(link.id)?.getBoundingClientRect(),
            }))
            .filter((section) => section.element && section.rect);

          // Find the section closest to the top of the viewport
          const closestSection = sections.reduce((closest, current) => {
            if (!closest) return current;
            const closestDistance = Math.abs(closest.rect!.top);
            const currentDistance = Math.abs(current.rect!.top);
            return currentDistance < closestDistance ? current : closest;
          });

          if (closestSection) {
            activeId = closestSection.id;
          }
        }

        setActiveSection(activeId);
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-96px 0px -20% 0px", // Account for navbar height, reduced bottom margin
      },
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navLinks]);

  return (
    <nav className="sticky top-0 right-0 left-0 z-50">
      {/* Background with pink gradient */}
      <div className="absolute inset-0 bg-fiona-pink dark:bg-fiona-pink-light"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255, 239, 242, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 239, 242, 0.6) 1px, transparent 1px)
          `,
            backgroundSize: "138px 137px",
          }}
        ></div>
      </div>

      {/* Navbar container */}
      <div className="relative">
        <div className="container mx-auto px-2 py-4 md:px-4">
          <div className="rounded-full bg-white px-2 py-3 shadow-lg md:px-8 dark:bg-card">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fiona-red">
                  <span className="text-lg font-bold text-white">FB</span>
                </div>
                <span className="text-xl font-bold text-black dark:text-white">
                  Fiona Bari
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-8 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors hover:text-fiona-red ${
                      activeSection === link.id
                        ? "text-fiona-red"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Right side - Contact button, theme switcher, profile */}
              <div className="flex items-center gap-4">
                {/* Contact Me Button */}
                <Button
                  className="hidden rounded-full bg-fiona-red px-6 py-2 text-white hover:bg-fiona-red/90 sm:flex"
                  asChild
                >
                  <Link href="/#contact">Contact Me</Link>
                </Button>

                {/* Profile Dropdown or Sign In */}
                {/* {session ? (
                  <ProfileDropdown session={session} />
                ) : (
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="/auth/sign-in">Sign In</Link>
                  </Button>
                )} */}

                {/* Mobile Sidebar (Drawer) */}
                <Drawer
                  open={isDrawerOpen}
                  onOpenChange={setIsDrawerOpen}
                  direction="left"
                >
                  <DrawerTrigger asChild>
                    <Button variant="ghost" size="sm" className="md:hidden">
                      {isDrawerOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent side="left" className="px-4">
                    <DrawerHeader className="px-2">
                      <Link
                        href="/"
                        className="flex items-center gap-3"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fiona-red">
                          <span className="text-base font-bold text-white">
                            FB
                          </span>
                        </div>
                        <span className="text-lg font-bold text-black dark:text-white">
                          Fiona Bari
                        </span>
                      </Link>
                      <div className="ml-auto flex items-center gap-2">
                        <DrawerClose asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Close"
                          >
                            <X size={18} />
                          </Button>
                        </DrawerClose>
                      </div>
                    </DrawerHeader>
                    <div className="flex flex-col gap-4 p-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`text-base font-semibold transition-colors hover:text-fiona-red ${
                            activeSection === link.id
                              ? "text-fiona-red"
                              : "text-black dark:text-white"
                          }`}
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <Button
                        className="w-fit rounded-full bg-fiona-red px-6 py-2 text-white hover:bg-fiona-red/90"
                        asChild
                      >
                        <Link
                          href="/#contact"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          Contact Me
                        </Link>
                      </Button>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            {/* Mobile Menu removed in favor of Drawer */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
