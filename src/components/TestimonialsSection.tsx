import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    text: "Desde que descubrí el Head Spa de Clara, no puedo dejar de venir. Es una experiencia que te transporta a otro mundo. Sales renovada por completo.",
    rating: 5,
  },
  {
    name: "Laura P.",
    text: "Clara es una perfeccionista y se nota en cada detalle. Mi piel nunca había estado tan bien. Los tratamientos faciales son una maravilla.",
    rating: 5,
  },
  {
    name: "Ana M.",
    text: "El ambiente es íntimo y acogedor, te sientes como en casa pero con un trato profesional increíble. La depilación láser de diodo ha sido un cambio total para mí.",
    rating: 5,
  },
  {
    name: "Carmen R.",
    text: "Probé el pack de manicura semipermanente y tratamiento facial. Fue mi regalo de cumpleaños y ha sido el mejor que me han hecho. ¡Volveré seguro!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="opiniones" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Opiniones</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          Lo que dicen <span className="italic">nuestras clientas</span>
        </h2>
        <p className="font-body text-muted-foreground">
          Con una valoración de 4,9 sobre 5 en Google, la satisfacción de nuestras clientas es nuestra mejor carta de presentación.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-8 shadow-warm relative"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body text-muted-foreground italic leading-relaxed mb-6">
              "{t.text}"
            </p>
            <p className="font-display text-lg font-semibold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
