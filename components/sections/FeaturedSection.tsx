import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { RoseAccent } from "@/components/ui/rose-accent";
import { LeafAccent } from "@/components/ui/leaf-accent";
import { Button } from "@/components/ui/button";

const DESSERTS = [
  {
    name: "Mixed Berry Tart",
    description: "Buttery pastry shell, vanilla cream, fresh seasonal berries",
    image: "/pictures/two.jpeg",
    large: true,
  },
  {
    name: "Matcha Cookie",
    description: "Chunky cookie drizzled in house matcha glaze",
    image: "/pictures/one.jpeg",
    large: false,
  },
  {
    name: "Biscoff Cookie",
    description: "Stuffed with caramel cream and a Biscoff crunch",
    image: "/pictures/three.jpeg",
    large: false,
  },
  {
    name: "Smores Cookie",
    description: "Toasted marshmallow, Hershey's chocolate, chocolate chips",
    image: "/pictures/four.jpeg",
    large: false,
  },
  {
    name: "Strawberry White Choc Cookie",
    description: "Pink cookie with a white chocolate drizzle",
    image: "/pictures/five.jpeg",
    large: false,
  },
];

export function FeaturedSection() {
  const [hero, ...rest] = DESSERTS;

  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      <RoseAccent className="absolute -top-20 -left-20 w-80 h-80 text-primary opacity-[0.05] rotate-45 pointer-events-none" />
      <LeafAccent className="absolute bottom-16 -right-10 w-56 h-56 text-primary opacity-[0.06] -rotate-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <BlurFade>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Fresh Daily
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
              Featured Desserts
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-base">
              Baked in-house every morning. Each one a little work of art.
            </p>
          </div>
        </BlurFade>

        {/* Grid: 1 large hero left + 2×2 right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Hero card */}
          <BlurFade delay={0.1}>
            <div className="group relative rounded-2xl overflow-hidden aspect-3/4 lg:aspect-auto lg:h-full min-h-100 bg-muted">
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/70 mb-1">
                  House Favourite
                </p>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  {hero.name}
                </h3>
                <p className="text-sm text-primary-foreground/75 mt-1.5">
                  {hero.description}
                </p>
              </div>
            </div>
          </BlurFade>

          {/* 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {rest.map((item, i) => (
              <BlurFade key={item.name} delay={0.15 + i * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden aspect-square bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-sm font-semibold text-primary-foreground leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-primary-foreground/70 mt-0.5 leading-snug hidden sm:block">
                      {item.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* CTA */}
        <BlurFade delay={0.5}>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full p-5 font-heading font-semibold uppercase">
              <Link href="/menu">See Full Menu</Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
