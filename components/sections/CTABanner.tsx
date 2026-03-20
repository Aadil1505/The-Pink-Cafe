import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Instagram } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/constants";
import { LeafAccent } from "@/components/ui/leaf-accent";
import { RoseAccent } from "@/components/ui/rose-accent";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="relative py-24 px-6 bg-muted overflow-hidden">
      <RoseAccent className="absolute -top-12 -right-12 w-64 h-64 text-primary opacity-[0.12] rotate-[-15deg] pointer-events-none" />
      <LeafAccent className="absolute bottom-0 -left-8 w-52 h-52 text-primary opacity-[0.10] rotate-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <BlurFade>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Come In. Stay a While.
            <br />
            You Deserve It.
          </h2>
        </BlurFade>

        <BlurFade delay={0.12}>
          <p className="text-muted-foreground text-lg max-w-md">
            24 N Park Ave, Rockville Centre. Open everyday, serving the
            pastries and coffee of your dreams.
          </p>
        </BlurFade>

        <BlurFade delay={0.22}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="default" className="rounded-full p-5 font-heading font-semibold uppercase">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full p-5 font-heading font-semibold uppercase gap-2">
              <Link href={RESTAURANT_INFO.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram size={16} />
                Instagram
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
