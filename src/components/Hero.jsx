import { Sparkles, MessageCircle, ShieldCheck, Heart, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#F7F2FA] via-white to-[#F8FAFC] py-16 md:py-24 px-4">
      {/* Detalhe de fundo sutil */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#874E9E]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#00B5B8]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Coluna da Esquerda: Textos e CTAs */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#F1E5F8] text-[#622E79] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00B5B8]" />
            Pet Shop • Banho e Tosa
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#622E79] tracking-tight leading-[1.15]">
            Cuidado, carinho e <span className="text-[#00B5B8]">dedicação</span> para o seu melhor amigo.
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
            Estrutura acolhedora pensada no conforto e segurança do seu pet. Profissionais pacientes, produtos de primeira linha e ambiente climatizado.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5521995030313&text&type=phone_number&app_absent=0" 
              className="bg-[#00B5B8] hover:bg-[#009FA3] text-white px-7 py-3.5 rounded-2xl font-bold text-sm md:text-base shadow-lg shadow-cyan-200/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar no WhatsApp
            </a>
            <a 
              href="#servicos" 
              className="bg-white hover:bg-slate-50 text-[#622E79] border-2 border-purple-100 px-6 py-3.5 rounded-2xl font-bold text-sm md:text-base shadow-sm transition-all"
            >
              Ver Serviços
            </a>
          </div>

          {/* Mini-badges de confiança no rodapé do Hero */}
          <div className="mt-10 pt-8 border-t border-purple-100/80 grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#00B5B8] flex-shrink-0" />
              <span className="text-xs font-semibold text-slate-700">Segurança Total</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#874E9E] flex-shrink-0" />
              <span className="text-xs font-semibold text-slate-700">Manejo Gentil</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#00B5B8] flex-shrink-0" />
              <span className="text-xs font-semibold text-slate-700">Com Horário</span>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Composição Visual com Imagem e Card Flutuante */}
        <div className="relative">
          <div className="relative mx-auto max-w-md">
            {/* Moldura da Foto */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80" 
                alt="Cachorrinhos felizes no petshop" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Flutuante 1: Banho com Ozonioterapia */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-purple-50 flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F1E5F8] text-[#874E9E] flex items-center justify-center font-bold flex-shrink-0">
                ✨
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Ozonioterapia Pet</p>
                <p className="text-[11px] text-slate-500">Saúde e alívio da pele</p>
              </div>
            </div>

            {/* Card Flutuante 2: Táxi Dog */}
            <div className="absolute -top-4 -right-4 bg-white py-2 px-4 rounded-2xl shadow-lg border border-purple-50 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B5B8] animate-pulse"></span>
              <span className="text-xs font-extrabold text-[#622E79]">Táxi Dog Disponível</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
