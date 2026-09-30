export default function Hero() {
  return (
    <section id="inicio" className="py-20 bg-gradient-to-b from-amber-50 to-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Cuidado, carinho e dedicação para o seu pet
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Especialistas em banho, tosa e bem-estar animal com estrutura acolhedora para o seu melhor amigo.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a 
            href="#contato" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-medium shadow-sm transition-all"
          >
            Fale Conosco
          </a>
          <a 
            href="#servicos" 
            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-medium transition-all"
          >
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
