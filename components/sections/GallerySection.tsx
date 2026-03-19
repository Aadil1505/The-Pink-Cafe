import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { LeafAccent } from "@/components/ui/leaf-accent";
import { RoseAccent } from "@/components/ui/rose-accent";

const GALLERY_IMAGES = [
  {
    src: "/pictures/gallery/one.jpeg",
    alt: "The Pink Cafe interior with pink velvet seating and cherry blossom decor",
    span: "row-span-2",
  },
  {
    src: "/pictures/gallery/two.jpeg",
    alt: "The Pink Cafe and Bakery sign in gold frame against exposed brick",
    span: "",
  },
  {
    src: "/pictures/gallery/three.jpeg",
    alt: "Fresh roses and tulips in a vase on a marble table",
    span: "",
  },
  {
    src: "/pictures/gallery/six.jpeg",
    alt: "Pink velvet dining chairs and round table with flower arrangement",
    span: "row-span-2",
  },
  {
    src: "/pictures/gallery/four.jpg",
    alt: "Crystal chandelier sconces on pink wall with gold mirrors",
    span: "",
  },
  {
    src: "/pictures/gallery/five.jpeg",
    alt: "Pink glass beverage dispensers on decorative wallpapered shelf",
    span: "",
  },
  {
    src: "/pictures/gallery/seven.jpg",
    alt: "The Pink Cafe seating area with pastry display in background",
    span: "",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 px-6 bg-background overflow-hidden">
      <RoseAccent className="absolute -top-14 -right-14 w-60 h-60 text-primary opacity-[0.06] rotate-[25deg] pointer-events-none" />
      <LeafAccent className="absolute top-1/2 -left-10 w-44 h-44 text-primary opacity-[0.05] -rotate-[35deg] pointer-events-none" />
      <RoseAccent className="absolute -bottom-16 left-1/3 w-52 h-52 text-primary opacity-[0.05] rotate-[10deg] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <BlurFade>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Gallery
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
              Pretty in Pink, Top to Bottom.
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, i) => {
            const isLastOdd =
              i === GALLERY_IMAGES.length - 1 && GALLERY_IMAGES.length % 2 !== 0;
            return (
              <BlurFade
                key={img.src}
                delay={0.05 + i * 0.08}
                className={`relative overflow-hidden rounded-xl ${img.span} ${
                  isLastOdd
                    ? "col-span-2 md:col-span-1 w-[calc(50%-6px)] md:w-full mx-auto"
                    : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={0.5}>
          <p className="text-center mt-10 text-sm text-muted-foreground">
            Follow us on Instagram{" "}
            <a
              href="https://www.instagram.com/thepinkcafe_rvc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              @thepinkcafe_rvc
            </a>{" "}
            for daily eye candy.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
