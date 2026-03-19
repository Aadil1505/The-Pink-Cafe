import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span className="font-heading text-2xl font-semibold text-foreground">
            {RESTAURANT_INFO.name}
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            {RESTAURANT_INFO.tagline}
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              href={RESTAURANT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href={RESTAURANT_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </Link>
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
            Hours
          </span>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li className="flex justify-between gap-6">
              <span>Monday</span>
              <span>{RESTAURANT_INFO.hours.monday}</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Tue to Sat</span>
              <span>{RESTAURANT_INFO.hours.tueSat}</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Sunday</span>
              <span>{RESTAURANT_INFO.hours.sunday}</span>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
            Find Us
          </span>
          <address className="not-italic text-sm text-muted-foreground leading-relaxed">
            {RESTAURANT_INFO.address.street}
            <br />
            {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state}{" "}
            {RESTAURANT_INFO.address.zip}
          </address>
          <Link
            href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium"
          >
            Get Directions →
          </Link>
        </div>
      </div>

      <div className="border-t border-border py-5 px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights
        reserved.
      </div>
    </footer>
  );
}
