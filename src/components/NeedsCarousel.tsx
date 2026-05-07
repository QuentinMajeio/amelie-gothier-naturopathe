import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cremeImg from "@/assets/creme.png";
import ventreImg from "@/assets/ventre.png";
import marcheImg from "@/assets/marche.png";
import sommeilImg from "@/assets/sommeil.png";
import peauImg from "@/assets/4075b0ae-142c-4b9f-8388-2a93f2ebd92a.png";

const slides = [
  { src: cremeImg, alt: "Soin naturel — Stress & anxiété", label: "Stress & anxiété" },
  { src: ventreImg, alt: "Bien-être digestif — Inconfort digestif", label: "Inconfort digestif" },
  { src: marcheImg, alt: "Alimentation saine — Fatigue persistante", label: "Fatigue persistante" },
  { src: sommeilImg, alt: "Atmosphère apaisante — Troubles du sommeil", label: "Troubles du sommeil" },
  { src: peauImg, alt: "Soin de la peau — Problème de peau", label: "Problème de peau" },
];

const NeedsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between mb-8">
        <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary">
          En images
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 md:px-16 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide) => (
          <div
            key={slide.label}
            className="relative flex-shrink-0 w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-sm overflow-hidden snap-start group"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 text-center py-0 shadow"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/60 to-transparent p-6">
              <span className="text-sm font-body font-medium text-primary-foreground tracking-wide">
                {slide.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeedsCarousel;
