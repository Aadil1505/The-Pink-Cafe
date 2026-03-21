"use client";

import { useRef, useEffect } from "react";
import { useInView } from "motion/react";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { LeafAccent } from "@/components/ui/leaf-accent";
import { RoseAccent } from "@/components/ui/rose-accent";
import { SparklesText } from "../ui/sparkles-text";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <section id="about" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background accents */}
      <LeafAccent className="absolute -top-8 -left-8 w-48 h-48 text-primary opacity-[0.06] rotate-12 pointer-events-none" />
      <RoseAccent className="absolute bottom-10 -right-16 w-72 h-72 text-primary opacity-[0.05] -rotate-12 pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center">

        {/* Text */}
        <div className="flex flex-col gap-5 items-center text-center">
          <BlurFade delay={0.05}>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Est. 2025, Rockville Centre NY
            </span>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              THE <SparklesText className="font-heading text-4xl md:text-5xl font-bold leading-[1.1] inline text-primary">PINK</SparklesText> CAFE
              {/* <br/> */}
            </h2>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm mx-auto">
              Every detail, from the blush-pink walls to the elegant desserts, is designed to make you feel good.
            </p>
          </BlurFade>

          <BlurFade delay={0.28}>
            <div className="flex flex-col gap-3">
              {[
                { label: "Baked fresh", sub: "Every morning, nothing frozen." },
                { label: "All pink", sub: "Top to bottom, wall to wall." },
                { label: "Long Island's own", sub: "Proudly rooted in RVC." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 justify-center">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                    <span className="text-sm text-muted-foreground"> {item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.36}>
            <div className="flex items-center gap-3 justify-center pt-1">
              <div className="h-px w-10 bg-primary/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <div className="h-px w-10 bg-primary/40" />
            </div>
          </BlurFade>

          <BlurFade delay={0.44}>
            <div className="flex flex-row gap-3 justify-center pt-2">
              <Button asChild variant="default" className="rounded-full p-5 font-heading font-semibold uppercase">
                <Link href="/menu">Order Now</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full p-5 font-heading font-semibold uppercase">
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </BlurFade>
        </div>

        {/* Video */}
        <BlurFade delay={0.1}>
          <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-muted border border-border shadow-xl shadow-primary/10">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/about-vid.mp4"
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
