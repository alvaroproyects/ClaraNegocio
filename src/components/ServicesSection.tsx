import { Sparkles, Hand, Zap, Paintbrush, Eye, Heart } from "lucide-react";
import spaProducts from "@/assets/spa-products.jpg";
import manicure from "@/assets/manicure.jpg";
import nailStation from "@/assets/nail-station.png";

const services = [
  {
    icon: Sparkles,
    title: "Tratamientos Faciales",
    desc: "Protocolos personalizados de limpieza profunda, hidratación, anti-edad y luminosidad. Cada sesión se adapta a las necesidades únicas de tu piel para lograr resultados visibles desde la primera cita.",
    benefits: ["Piel luminosa y uniforme", "Hidratación profunda", "Reducción de líneas finas"],
  },
  {
    icon: Hand,
    title: "Tratamientos Corporales",
    desc: "Masajes descontracturantes, reafirmantes y reductores con aparatología avanzada. Un cuidado integral del cuerpo que combina técnicas manuales con la última tecnología.",
    benefits: ["Relajación muscular profunda", "Reducción de volumen", "Piel más firme y tersa"],
  },
  {
    icon: Zap,
    title: "Depilación Láser de Diodo",
    desc: "La tecnología más eficaz y segura para una depilación definitiva. Sesiones rápidas, prácticamente indoloras, adaptadas a todo tipo de piel y vello.",
    benefits: ["Resultados permanentes", "Sesiones rápidas", "Apta para todo tipo de piel"],
  },
  {
    icon: Paintbrush,
    title: "Manicura y Pedicura",
    desc: "Cuidado completo de manos y pies con acabados impecables. Esmalte tradicional, semipermanente y diseños personalizados para lucir unas uñas perfectas.",
    benefits: ["Acabados duraderos", "Diseños personalizados", "Cuidado integral"],
  },
  {
    icon: Eye,
    title: "Pestañas y Maquillaje",
    desc: "Extensiones de pestañas pelo a pelo, lifting y tinte para una mirada cautivadora. Maquillaje profesional para bodas, eventos y ocasiones especiales.",
    benefits: ["Mirada más expresiva", "Looks naturales o intensos", "Maquillaje profesional para eventos"],
  },
  {
    icon: Heart,
    title: "Bonos Regalo y Packs",
    desc: "Regala bienestar. Nuestros bonos regalo y packs combinan los mejores tratamientos a un precio especial. El detalle perfecto para alguien que merece un momento de calma.",
    benefits: ["Combinaciones exclusivas", "Precio especial", "Presentación regalo"],
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Nuestros Servicios</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          Tratamientos faciales y corporales <br className="hidden md:block" />
          <span className="italic">en Santomera</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Cada servicio está diseñado para ofrecerte una experiencia sensorial completa.
          Desde la depilación láser de diodo hasta la manicura, pedicura, pestañas y maquillaje en Santomera.
        </p>
      </div>

      {/* Image row */}
      <div className="grid grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
        {[spaProducts, manicure, nailStation].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Servicios de estética en Santomera"
            className="rounded-xl w-full aspect-square object-cover shadow-warm"
            loading="lazy"
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-background rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-shadow group"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl font-medium text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
            <ul className="space-y-1">
              {s.benefits.map((b) => (
                <li key={b} className="font-body text-xs text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="tel:+34650908706"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          Reserva Tu Tratamiento
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
