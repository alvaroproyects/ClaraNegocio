import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contacto" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Contacto</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          Reserva tu <span className="italic">momento</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Estamos deseando cuidarte. Llámanos o escríbenos para reservar tu cita
          en nuestro centro de estética en Santomera.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
        <div className="bg-card rounded-2xl p-8 text-center shadow-warm">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-xl font-medium text-foreground mb-2">Dirección</h3>
          <p className="font-body text-sm text-muted-foreground">
            Calle Los Huertanos 6<br />
            Santomera (Murcia)
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 text-center shadow-warm">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-xl font-medium text-foreground mb-2">Teléfono</h3>
          <a href="tel:+34650908706" className="font-body text-sm text-primary hover:underline">
            650 90 87 06
          </a>
          <p className="font-body text-xs text-muted-foreground mt-1">Llama o escribe por WhatsApp</p>
        </div>

        <div className="bg-card rounded-2xl p-8 text-center shadow-warm">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-xl font-medium text-foreground mb-2">Horario</h3>
          <p className="font-body text-sm text-muted-foreground">
            Lunes a Viernes: 9:30 – 20:00<br />
            Sábado: 10:00 – 14:00<br />
            Domingo: Cerrado
          </p>
        </div>
      </div>

      {/* Map embed */}
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-warm">
        <iframe
          title="Ubicación Clara Ramírez Estética en Santomera"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.5!2d-1.08!3d38.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Los+Huertanos+6%2C+Santomera%2C+Murcia!5e0!3m2!1ses!2ses!4v1"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="text-center mt-12">
        <a
          href="tel:+34650908706"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Llámanos Ahora
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
