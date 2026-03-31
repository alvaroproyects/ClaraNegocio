import { Droplets, Moon, Wind, Leaf } from "lucide-react";
import headSpaPrices from "@/assets/head-spa-prices.png";

const benefits = [
  { icon: Wind, title: "Reduce el estrés", desc: "Libera la tensión acumulada con un masaje craneal profundo que calma tu mente y tu cuerpo." },
  { icon: Moon, title: "Mejora el sueño", desc: "La estimulación del cuero cabelludo activa puntos de relajación que favorecen un descanso más reparador." },
  { icon: Droplets, title: "Cabello más sano", desc: "Limpieza profunda del cuero cabelludo, eliminación de residuos y nutrición intensiva para un cabello revitalizado." },
  { icon: Leaf, title: "Bienestar integral", desc: "Una experiencia sensorial completa que combina aromaterapia, masaje facial y cuidado capilar en una sola sesión." },
];

const HeadSpaSection = () => (
  <section id="head-spa" className="py-24 bg-gradient-warm relative">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-body tracking-widest uppercase mb-4">
            ★ Servicio Estrella
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            Head Spa <br />
            <span className="italic text-primary">en Santomera</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Somos el <strong className="text-foreground">primer centro en ofrecer Head Spa en Santomera</strong>.
            Una experiencia de origen japonés que combina la limpieza profunda del cuero cabelludo con un
            masaje craneal, facial y de busto absolutamente envolvente.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Durante la sesión, trabajamos con productos específicos y técnicas manuales que estimulan
            la circulación, eliminan impurezas y devuelven al cabello su vitalidad natural. Todo en un
            ambiente de calma absoluta, pensado para que desconectes del mundo.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-medium text-foreground">{b.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="tel:+34650908706"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Reserva tu Head Spa
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={headSpaPrices}
            alt="Precios Head Spa en Santomera – Básico, Premium y Luxury"
            className="rounded-2xl shadow-warm-lg max-w-sm w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeadSpaSection;
