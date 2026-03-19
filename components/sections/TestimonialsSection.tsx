import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";
import { LeafAccent } from "@/components/ui/leaf-accent";
import { RoseAccent } from "@/components/ui/rose-accent";
import { GoogleIcon } from "@/components/ui/google-icon";


export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <LeafAccent className="absolute top-8 right-8 w-40 h-40 text-primary opacity-[0.07] rotate-[-20deg] pointer-events-none" />
      <RoseAccent className="absolute -bottom-16 -left-16 w-64 h-64 text-primary opacity-[0.05] rotate-12 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <BlurFade>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What People Say
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
              A Little Love from Our Guests.
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <BlurFade key={t.name} delay={0.1 + i * 0.12}>
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 h-full">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-base text-foreground leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {t.name}
                    </span>
                  </div>
                  <Link
                    href={t.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on Google"
                    className="hover:opacity-75 transition-opacity shrink-0"
                  >
                    <GoogleIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
