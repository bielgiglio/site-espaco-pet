export default function Location() {
  return (
    <section id="onde-estamos" className="py-20 bg-slate-50 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Onde Estamos</h2>
        <p className="text-slate-600 mb-8">Venha nos visitar ou traga seu pet para nos conhecer.</p>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm max-w-md mx-auto">
          <p className="font-semibold text-slate-800">Endereço:</p>
          <p className="text-slate-600 text-sm mt-1">Rua do Petshop, 123 - Centro</p>
          <p className="font-semibold text-slate-800 mt-4">Horário de Funcionamento:</p>
          <p className="text-slate-600 text-sm mt-1">Segunda a Sábado: 08:00 às 18:00</p>
        </div>
      </div>
    </section>
  );
}
