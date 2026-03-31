const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <p className="font-display text-2xl text-background mb-2">Clara Ramírez Estética</p>
        <p className="font-body text-sm text-background/60 mb-6">
          Head Spa · Tratamientos Faciales · Corporales · Depilación Láser · Manicura · Pedicura · Pestañas · Maquillaje
        </p>
        <p className="font-body text-xs text-background/40">
          © {new Date().getFullYear()} Clara Ramírez Estética – Head Spa. Centro de estética en Santomera (Murcia).
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
