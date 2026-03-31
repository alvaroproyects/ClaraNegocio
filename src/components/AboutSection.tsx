import spaRoom from "@/assets/spa-room.png";
import botanical from "@/assets/botanical-decoration.png";

const AboutSection = () => (
  <section id="sobre-mi" className="py-24 bg-background relative overflow-hidden">
    <img
      src={botanical}
      alt=""
      className="absolute -right-20 top-10 w-64 opacity-20 pointer-events-none"
      loading="lazy"
      width={512}
      height={800}
    />
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={spaRoom}
            alt="Interior del centro de estética Clara Ramírez en Santomera"
            className="rounded-2xl shadow-warm-lg w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-warm">
            <p className="font-display text-3xl font-semibold">4,9</p>
            <p className="text-xs tracking-wider uppercase font-body">★★★★★ Google</p>
          </div>
        </div>

        <div>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Sobre Mí</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Clara Ramírez, <br />
            <span className="italic">tu esteticista de confianza</span>
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Con años de dedicación al mundo de la estética y el bienestar, decidí abrir mi propio
              centro en Santomera con una idea clara: ofrecer un espacio donde cada clienta se
              sienta cuidada, escuchada y mimada.
            </p>
            <p>
              Mi filosofía se basa en la <strong className="text-foreground">atención personalizada</strong> y
              el perfeccionismo en cada detalle. No creo en los tratamientos genéricos: cada piel,
              cada persona, merece un protocolo diseñado a su medida.
            </p>
            <p>
              Aquí no vienes solo a un tratamiento. Vienes a desconectar, a respirar y a regalarte
              un momento que solo es tuyo. Porque cuidarte no es un lujo, es una necesidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
