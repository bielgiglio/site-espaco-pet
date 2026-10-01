import { 
  Sparkles, 
  Scissors, 
  PlusCircle, 
  Car, 
  ShoppingBag, 
  Check, 
  MessageCircle 
} from 'lucide-react';

export default function Services() {
  const banhos = [
    {
      nome: "Banho Essencial",
      desc: "Higienização completa com produtos neutros de alta qualidade.",
      incluso: ["Corte de unhas incluso", "Limpeza de ouvidos inclusa"],
      destaque: false
    },
    {
      nome: "Banho + Tosa Higiênica",
      desc: "Limpeza e tosa de áreas íntimas, patas e região abdominal para conforto do pet.",
      incluso: ["Corte de unhas", "Limpeza de ouvidos"],
      destaque: false
    },
    {
      nome: "Banho + Tosa na Máquina",
      desc: "Banho completo acompanhado de tosa baixa uniforme com acabamento seguro.",
      incluso: ["Corte de unhas", "Limpeza de ouvidos", "Tosa higiênica"],
      destaque: false
    },
    {
      nome: "Banho + Tosa na Tesoura",
      desc: "Acabamento artesanal, respeitando o padrão da raça e preservando o volume natural.",
      incluso: ["Corte de unhas", "Limpeza de ouvidos", "Acabamento detalhado"],
      destaque: false
    }
  ];

  const adicionais = [
    { titulo: "Escovação de Dentes", desc: "Prevenção de tártaro e hálito fresco com creme dental pet." },
    { titulo: "Desembolo Cuidadoso", desc: "Remoção de nós sem machucar a pele do animal." },
    { titulo: "Hidratação Profunda", desc: "Nutrição e brilho intenso para pelos ressecados." },
    { titulo: "Banho Clareador", desc: "Tratamento tonalizante seguro para realçar pelos brancos e claros." }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50/60 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#874E9E] font-bold text-sm uppercase tracking-wider">
            Cuidados & Bem-Estar
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#622E79] mt-2">
            Nossos Serviços
          </h2>
          <p className="mt-3 text-slate-600">
            Estrutura planejada com profissionais capacitados para oferecer o melhor atendimento ao seu pet.
          </p>
        </div>

        {/* 1. Banhos & Tosas */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Scissors className="w-5 h-5 text-[#874E9E]" />
            <h3 className="text-xl font-bold text-[#622E79]">Banhos & Tosas</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {banhos.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  item.destaque 
                    ? "border-[#00B5B8] shadow-md ring-1 ring-[#00B5B8]/40" 
                    : "border-purple-100/80 shadow-xs hover:border-[#874E9E]/40 hover:shadow-sm"
                }`}
              >
                <div>
                  {item.destaque && (
                    <span className="bg-[#E0F8F8] text-[#00999C] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      Recomendado
                    </span>
                  )}
                  <h4 className={`text-lg font-bold text-slate-900 ${item.destaque ? "mt-3" : ""}`}>
                    {item.nome}
                  </h4>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-50">
                  <p className="text-xs font-semibold text-[#874E9E] uppercase tracking-wider mb-2">Incluso:</p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {item.incluso.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B5B8] flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Destaque: Banho Terapêutico (Spa Pet) - Roxo Brand */}
        <div className="mb-14 bg-gradient-to-br from-[#874E9E] to-[#622E79] rounded-3xl p-8 md:p-12 text-white shadow-lg shadow-purple-900/10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Pílula / Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Tratamento Exclusivo
            </div>

            {/* Título e Descrição */}
            <h3 className="text-2xl md:text-3xl font-bold">
              Banho Terapêutico com Ozonioterapia
            </h3>
            <p className="mt-3 text-purple-100 text-sm md:text-base leading-relaxed max-w-2xl">
              Tratamento completo para alívio de dermatites, controle bacteriano e cicatrização, proporcionando relaxamento profundo e saúde dermatológica para o seu companheiro.
            </p>

            {/* 4 Cards de Etapas */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 text-center">
                <span className="font-semibold block text-sm">Banho Completo</span>
                <span className="text-xs text-purple-200 mt-0.5 block">Corte de unhas e ouvidos</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 text-center">
                <span className="font-semibold block text-sm">Hidratação</span>
                <span className="text-xs text-purple-200 mt-0.5 block">Revitalização dos fios</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 text-center">
                <span className="font-semibold block text-sm">Tosa Higiênica</span>
                <span className="text-xs text-purple-200 mt-0.5 block">Acabamento seguro</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 text-center">
                <span className="font-semibold block text-sm text-[#7EE7E9]">Ozonioterapia</span>
                <span className="text-xs text-purple-200 mt-0.5 block">Ação anti-inflamatória</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Cuidados Adicionais */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <PlusCircle className="w-5 h-5 text-[#874E9E]" />
            <h3 className="text-xl font-bold text-[#622E79]">Serviços Adicionais</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {adicionais.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-purple-100/80 shadow-xs hover:border-[#874E9E]/40 transition-colors">
                <h4 className="font-bold text-slate-800 text-base">{item.titulo}</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Comodidades: Táxi Dog & Boutique Pet */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-purple-100/80 shadow-xs flex items-start gap-4">
            <div className="bg-[#E0F8F8] p-3 rounded-xl text-[#00999C] flex-shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#622E79]">Táxi Dog com Segurança</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Buscamos e levamos seu animalzinho no conforto da sua casa com caixas de transporte climatizadas e higienizadas.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-purple-100/80 shadow-xs flex items-start gap-4">
            <div className="bg-[#F4EAFA] p-3 rounded-xl text-[#874E9E] flex-shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#622E79]">Boutique & Acessórios</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Espaço com coleiras, caminhas macias, roupas, brinquedos e produtos selecionados para o dia a dia do seu pet.
              </p>
            </div>
          </div>
        </div>

        {/* Botão de Agendamento */}
        <div className="mt-12 text-center">
          <a
            href="#https://api.whatsapp.com/send/?phone=5521995030313&text&type=phone_number&app_absent=0"
            className="inline-flex items-center gap-2 bg-[#00B5B8] hover:bg-[#00999C] text-white px-8 py-3.5 rounded-full font-semibold shadow-md shadow-cyan-100 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Horário para o meu Pet
          </a>
        </div>
      </div>
    </section>
  );
}
