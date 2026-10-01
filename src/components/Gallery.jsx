export default function Gallery() {
  const fotos = [
    {
      url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
      legenda: "Banho relaxante e higienização completa",
      tag: "Banho"
    },
    {
      url: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
      legenda: "Tosa higiênica e corte na tesoura",
      tag: "Tosa"
    },
    {
      url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      legenda: "Pós-banho com hidratação e laço",
      tag: "Estética"
    },
    {
      url: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80",
      legenda: "Cuidado e paciência para filhotes",
      tag: "Cuidado"
    },
    {
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
      legenda: "Tratamentos especiais e desembolo",
      tag: "Tratamento"
    },
    {
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      legenda: "Secagem e escovação sem estresse",
      tag: "Finalização"
    }
  ];

  return (
    <section id="fotos" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F1E5F8] text-[#874E9E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>📷</span>
            <span>Nossos Clientes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#622E79] tracking-tight">
            Galeria do Espaço Pet
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            Veja alguns dos cãezinhos que saíram limpinhos, cheirosos e prontos para brincar.
          </p>
        </div>

        {/* Grade de 6 Fotos de Cães */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <img 
                src={item.url} 
                alt={item.legenda} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#361347]/90 via-[#361347]/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="inline-block bg-[#00B5B8] text-white text-[11px] font-extrabold uppercase px-3 py-0.5 rounded-full self-start mb-2 tracking-wider">
                  {item.tag}
                </span>
                <p className="font-bold text-sm leading-snug">{item.legenda}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para o Instagram */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/espacopet.marica?stkn=MW52emxpcWk5ZnQ0dQ==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#874E9E] hover:text-[#00B5B8] transition-colors"
          >
            Siga nosso Instagram para ver mais fotos diárias →
          </a>
        </div>

      </div>
    </section>
  );
}
