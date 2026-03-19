import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurFade } from "@/components/ui/blur-fade";
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
      <div className="bg-primary py-24 px-6 text-center">
        <BlurFade>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            24 Park Ave, Rockville Centre
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mt-4">
            Our Menu
          </h1>
          <p className="text-primary-foreground/80 mt-4 text-lg max-w-lg mx-auto">
            Everything made fresh, every morning. Come Hungry.
          </p>
        </BlurFade>
      </div>

      {/* Menu content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Tabs defaultValue="pastries">
          <BlurFade>
            <TabsList className="w-full flex flex-wrap gap-2 h-auto bg-muted p-1.5 rounded-xl mb-10">
              {MENU_CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex-1 min-w-[120px] rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </BlurFade>

          {MENU_CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <BlurFade key={item.name} delay={0.05 + i * 0.06}>
                    <div className="bg-card border border-border rounded-xl p-5 flex justify-between items-start gap-4 hover:border-primary/40 transition-colors">
                      <div className="flex flex-col gap-1 flex-1">
                        <h3 className="font-heading text-base font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-primary shrink-0 mt-0.5">
                        {item.price}
                      </span>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <BlurFade delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-12">
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
  );
}
