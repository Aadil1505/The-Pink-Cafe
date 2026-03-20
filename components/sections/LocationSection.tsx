import { MapPin, Clock } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { RESTAURANT_INFO } from "@/lib/constants";
import { RoseAccent } from "@/components/ui/rose-accent";
import { LeafAccent } from "@/components/ui/leaf-accent";
import Link from "next/link";

export function LocationSection() {
  const { address, hours } = RESTAURANT_INFO;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address.full)}`;

  const hoursRows = [
    { day: "Monday", time: hours.monday },
    { day: "Tue to Sat", time: hours.tueSat },
    { day: "Sunday", time: hours.sunday },
  ];

  return (
    <section id="location" className="relative py-24 px-6 bg-muted overflow-hidden">
      <RoseAccent className="absolute -top-10 -left-10 w-56 h-56 text-primary opacity-10 rotate-20 pointer-events-none" />
      <LeafAccent className="absolute bottom-0 -right-6 w-48 h-48 text-primary opacity-[0.09] -rotate-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <BlurFade>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Come Visit
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
              Too Easy to Find.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-base">
              Right in the heart of Rockville Centre. Stop by, we saved you a seat.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                      {address.street}
                      <br />
                      {address.city}, {address.state} {address.zip}
                    </address>
                    <Link
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-primary font-medium hover:underline"
                    >
                      Open in Google Maps →
                    </Link>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.18}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-semibold text-foreground mb-4">
                      Hours
                    </h3>
                    <ul className="space-y-2.5">
                      {hoursRows.map((row) => (
                        <li
                          key={row.day}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {row.day}
                          </span>
                          <span className="font-medium text-foreground">
                            {row.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Map embed */}
          <BlurFade delay={0.25} className="h-full">
            <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[320px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.7663133145193!2d-73.6479861206543!3d40.657081399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27ba8fc42d235%3A0x2969c9e99fed7fc3!2sThe%20Pink%20Caf%C3%A9%20%26%20Bakery!5e0!3m2!1sen!2sus!4v1773958755821!5m2!1sen!2sus"
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}