import spaRoom from "@/assets/spa-room.png";
import nailStation from "@/assets/nail-station.png";
import heroSpa from "@/assets/hero-spa.jpg";
import spaProducts from "@/assets/spa-products.jpg";
import manicure from "@/assets/manicure.jpg";

const images = [
  { src: spaRoom, alt: "Sala de tratamientos del centro de estética en Santomera" },
  { src: heroSpa, alt: "Ambiente relajante Head Spa Santomera" },
  { src: nailStation, alt: "Estación de manicura y pedicura en Santomera" },
  { src: spaProducts, alt: "Productos profesionales de estética" },
  { src: manicure, alt: "Zona de manicura y belleza" },
];

const GallerySection = () => (
  <section id="galeria" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Galería</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          Un espacio pensado <span className="italic">para ti</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Cada rincón de nuestro centro está diseñado para envolverte en una atmósfera de calma,
          limpieza y cuidado. Un refugio de bienestar en el corazón de Santomera.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
