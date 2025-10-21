"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProfileDropdown } from "./profile-dropdown";

interface PortfolioNavbarProps {
  session: any;
}

const PortfolioNavbar = ({ session }: PortfolioNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", isActive: true },
    { href: "/about", label: "About Me" },
    { href: "/services", label: "What I do" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="relative z-50">
      {/* Background with pink gradient */}
      <div className="absolute inset-0 bg-fiona-pink dark:bg-fiona-pink-light"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 239, 242, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 239, 242, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '138px 137px'
        }}></div>
      </div>

      {/* Navbar container */}
      <div className="relative">
        <div className="container mx-auto px-4 py-4">
          <div className="bg-white dark:bg-card rounded-full px-8 py-3 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-fiona-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FB</span>
                </div>
                <span className="text-xl font-bold text-black dark:text-white">
                  Fiona Bari
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors hover:text-fiona-red ${
                      link.isActive 
                        ? "text-fiona-red underline" 
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
                  className="hidden sm:flex bg-fiona-red hover:bg-fiona-red/90 text-white rounded-full px-6 py-2"
                  asChild
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>

                {/* Theme Switcher */}
                <ThemeSwitcher />

                {/* Profile Dropdown or Sign In */}
                {session ? (
                  <ProfileDropdown session={session} />
                ) : (
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="/auth/sign-in">Sign In</Link>
                  </Button>
                )}

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-semibold transition-colors hover:text-fiona-red ${
                        link.isActive 
                          ? "text-fiona-red underline" 
                          : "text-black dark:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button 
                    className="bg-fiona-red hover:bg-fiona-red/90 text-white rounded-full px-6 py-2 w-fit"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
