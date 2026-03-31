import { Phone, CalendarDays } from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Centro de estética en Santomera – Head Spa Clara Ramírez" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/40" />
    </div>

    <div className="relative container mx-auto px-4 py-32 text-center">
      <p className="font-body text-sm tracking-[0.3em] uppercase text-cream mb-4 animate-fade-in">
        Primer Head Spa en Santomera
      </p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6 animate-fade-in-up">
        Tu momento de <br />
        <span className="italic font-light text-gold-light">calma y belleza</span>
      </h1>
      <p className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Experiencias de bienestar personalizadas que cuidan tu piel, tu cabello y tu mente.
        Centro de estética en Santomera con trato cercano y resultados visibles.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <a
          href="tel:+34650908706"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Reservar Cita
        </a>
        <a
          href="#servicios"
          className="inline-flex items-center gap-2 border border-cream/40 text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:bg-cream/10 transition-colors"
        >
          <CalendarDays className="w-4 h-4" />
          Ver Servicios
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
