import { HeartHandshake, Sparkles, Award, Dog } from 'lucide-react';

export default function About() {
  const diferenciais = [
    {
      icone: <HeartHandshake className="w-6 h-6 text-[#00B5B8]" />,
      titulo: "Respeito ao Tempo do Pet",
      desc: "Sem pressa ou estresse. Respeitamos a adaptação de filhotes e cães idosos."
    },
    {
      icone: <Sparkles className="w-6 h-6 text-[#874E9E]" />,
      titulo: "Produtos de Linha Profissional",
      desc: "Shampoos dermatológicos, hipoalergênicos e hidratações selecionadas."
    },
    {
      icone: <Award className="w-6 h-6 text-[#00B5B8]" />,
      titulo: "Equipe Especializada",
      desc: "Profissionais apaixonados por pets, treinados em estética e bem-estar."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Topo da seção */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <span className="text-[#00B5B8] font-bold text-xs uppercase tracking-wider block mb-2">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#622E79] tracking-tight">
              Um ambiente feito para o seu pet se sentir em casa.
            </h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            No <strong>Espaço Pet</strong>, unimos carinho genuíno com técnica de ponta em estética e cuidados animais. Nosso compromisso é fazer com que o momento do banho e tosa seja relaxante, seguro e alegre para o seu companheiro.
          </p>
        </div>

        {/* 3 Cartões de Diferenciais preenchendo o espaço */}
        <div className="grid md:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FAF8FC] p-8 rounded-3xl border border-purple-100 hover:border-[#874E9E]/30 transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                {item.icone}
              </div>
              <h3 className="text-lg font-bold text-[#622E79] mb-2">{item.titulo}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
