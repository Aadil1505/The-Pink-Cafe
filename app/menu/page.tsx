import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurFade } from "@/components/ui/blur-fade";
import { RoseAccent } from "@/components/ui/rose-accent";
import { LeafAccent } from "@/components/ui/leaf-accent";
import { MENU_CATEGORIES, RESTAURANT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Menu | ${RESTAURANT_INFO.name}`,
  description:
    "Browse our full menu of fresh pastries, specialty drinks, brunch items, and afternoon tea at The Pink Cafe in Rockville Centre, NY.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-24 px-6 text-center border-b border-border overflow-hidden">
        <RoseAccent className="absolute -top-16 -left-16 w-72 h-72 text-primary opacity-[0.05] rotate-12 pointer-events-none" />
        <LeafAccent className="absolute -bottom-8 -right-12 w-56 h-56 text-primary opacity-[0.06] -rotate-20 pointer-events-none" />
        <BlurFade>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mt-4">
            Menu
          </h1>
          <p className="text-muted-foreground mt-4 text-base max-w-md mx-auto">
            Everything made fresh, every morning. Baked in-house, served with love.
          </p>
        </BlurFade>
      </section>

      {/* Menu content */}
      <div className="relative overflow-hidden">
        <LeafAccent className="absolute top-10 -left-20 w-80 h-80 text-primary opacity-[0.04] rotate-45 pointer-events-none" />
        <RoseAccent className="absolute bottom-20 -right-20 w-96 h-96 text-primary opacity-[0.04] -rotate-12 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Tabs defaultValue="pastries">
          <BlurFade>
            <TabsList variant="line" className="w-full h-auto mb-12">
              {MENU_CATEGORIES.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="flex-1 py-2.5">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </BlurFade>

          {MENU_CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              {cat.items.map((item, i) => (
                <BlurFade key={item.name} delay={0.04 + i * 0.05}>
                  <div className="py-5 flex justify-between items-start gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-heading text-base font-semibold text-foreground">
                        {item.name}
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-primary shrink-0 mt-0.5">
                      {item.price}
                    </span>
                  </div>
                  {i < cat.items.length - 1 && (
                    <div className="border-b border-border" />
                  )}
                </BlurFade>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <BlurFade delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-16">
            Menu items and availability may vary. Follow us{" "}
            <a
              href={RESTAURANT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              @thepinkcafe_rvc
            </a>{" "}
            for daily specials.
          </p>
        </BlurFade>
      </div>
      </div>
    </div>
  );
}
