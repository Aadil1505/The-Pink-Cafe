import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Instagram } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/constants";
import { LeafAccent } from "@/components/ui/leaf-accent";
import { RoseAccent } from "@/components/ui/rose-accent";

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
            24 N Park Ave, Rockville Centre. Open six days a week, serving the
            pastries and coffee of your dreams.
          </p>
        </BlurFade>

        <BlurFade delay={0.22}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              View Menu
            </Link>
            <Link
              href={RESTAURANT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border text-foreground px-7 py-3.5 text-sm font-semibold hover:bg-accent transition-colors"
            >
              <Instagram size={16} />
              Instagram
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
