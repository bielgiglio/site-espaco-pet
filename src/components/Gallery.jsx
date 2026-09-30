export default function Gallery() {
  return (
    <section id="fotos" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Galeria de Fotos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-sm font-medium">
            Foto {item}
          </div>
        ))}
      </div>
    </section>
  );
}
