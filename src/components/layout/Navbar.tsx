"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const routes = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Activities", path: "/activities" },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-ambient py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto max-w-[1280px] px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Kids Zone Logo"
            width={48}
            height={48}
            className="group-hover:scale-110 transition-transform object-contain"
          />
          <span className="font-quicksand font-bold text-2xl text-foreground">
            Kids <span className="text-secondary">Zone</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={cn(
                    "text-body-md font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300",
                    pathname === route.path ? "text-primary after:scale-x-100" : "text-foreground/80"
                  )}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="secondary" asChild className="font-bold">
            <Link href="/admissions">Enroll Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-2 border-none shadow-none text-foreground hover:bg-surface-dim/50 rounded-full focus-visible:outline-none">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background w-[300px] sm:w-[400px] p-8">
              <SheetTitle className="font-quicksand font-bold text-2xl mb-8 flex items-center gap-2">
                 <Image
                    src="/logo.png"
                    alt="Kids Zone Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                 Kids Zone
              </SheetTitle>
              <nav className="flex flex-col gap-6">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === route.path ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="pt-6 border-t flex flex-col gap-4">
                  <Button variant="secondary" asChild className="w-full font-bold">
                    <Link href="/admissions" onClick={() => setIsOpen(false)}>Enroll Now</Link>
                  </Button>
                  
                  <div className="space-y-4 mt-6 text-sm text-foreground/70">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>8223951666, 8223951667</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>kidszonejbp@gmail.com</span>
                    </div>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
