"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RESTAURANT_INFO } from "@/lib/constants";

const NAV_LINKS = [
  { label: "MENU", href: "/menu" },
  { label: "ABOUT", href: "/#about" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "VISIT US", href: "/#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Logo = () => (
    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-border">
      <Image
        src="/web-app-manifest-192x192.png"
        alt={RESTAURANT_INFO.name}
        fill
        className="object-cover"
        sizes="48px"
        priority
      />
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label={RESTAURANT_INFO.name}>
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* <Link
          href="/menu"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase text-primary-foreground transition-opacity hover:opacity-90"
        >
          Order Now
        </Link> */}
        <Button asChild variant={"default"} className="hidden md:inline-flex rounded-full p-5 font-heading font-semibold">
          <Link href={"/menu"}>
            ORDER NOW
          </Link>
        </Button>

        {/* Mobile sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader className="border-b pb-4">
              <SheetTitle className="flex justify-center">
                <Link href="/" onClick={() => setOpen(false)} aria-label={RESTAURANT_INFO.name}>
                  <Logo />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-6">
              <ul className="flex flex-col items-center gap-1 w-full px-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="w-full">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-xl font-semibold uppercase text-foreground hover:text-primary transition-colors duration-150 block py-3 text-center rounded-lg hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button asChild variant="default" className="rounded-full p-5 font-heading font-semibold uppercase" onClick={() => setOpen(false)}>
                <Link href="/menu">Order Now</Link>
              </Button>

              <div className="text-xs text-muted-foreground text-center space-y-0.5">
                <p className="font-semibold">Monday: 12pm to 8pm</p>
                <p>Tuesday to Saturday: 10am to 8pm</p>
                <p>Sunday: 10am to 8pm</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
