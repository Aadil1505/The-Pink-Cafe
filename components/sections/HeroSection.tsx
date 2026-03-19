"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

export function HeroSection() {
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
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full min-h-dvh object-cover object-center"
          src="/videos/hero-vid.mp4"
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Warm pink overlay */}
        {/* <div className="absolute inset-0 bg-primary/40" /> */}
        {/* <div className="absolute inset-0 bg-background/30" /> */}
      </div>

      {/* Bottom-left buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-10 left-8 z-10 flex flex-row gap-3"
      >
        <Link
          href="/menu"
          className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary px-7 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
        >
          View Menu
        </Link>
        <Link
          href="/#order"
          className="inline-flex items-center justify-center rounded-full border border-primary-foreground/60 text-primary-foreground px-7 py-3.5 text-sm font-semibold backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
        >
          Order Now
        </Link>
      </motion.div>
    </section>
  );
}
