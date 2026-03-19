import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { GallerySection } from "@/components/sections/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <CTABanner />
    </>
  );
}
