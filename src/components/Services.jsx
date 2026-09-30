export default function Services() {
  const servicos = [
    { titulo: "Banho & Higiene", desc: "Produtos específicos para o tipo de pelagem, hidratação e corte de unhas." },
    { titulo: "Tosa Geral & Higiênica", desc: "Tosa de acordo com o padrão da raça ou preferência do tutor." },
    { titulo: "Hidratação Profunda", desc: "Tratamentos especiais para revitalização de pelos secos e ressecados." }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
