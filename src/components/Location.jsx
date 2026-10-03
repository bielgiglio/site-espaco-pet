import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  // Cole aqui a latitude e a longitude obtidas no Google Maps
  const latitude = "-22.91964677636412";   
  const longitude = "-42.82331641640052";

  // Link para rota direta na aplicação de navegação
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  // URL do mapa incorporado centrado exatamente nas coordenadas
  const embedMapsUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=pt-BR&z=18&output=embed`;

  return (
    <section id="onde-estamos" className="py-24 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F1E5F8] text-[#874E9E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-[#874E9E]" />
            <span>Localização</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#622E79] tracking-tight">
            Onde Estamos
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            Venha nos visitar ou traga seu pet para nos conhecer.
          </p>
        </div>

        {/* Bloco de Informações + Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-purple-50">
          
          {/* Informações e Horários */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F7EFFF] text-[#874E9E] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#622E79] text-base mb-1">Endereço</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Rua Fernando Henrique Assumpção, 247
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Eldorado, Maricá - RJ</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E0F7F7] text-[#00B5B8] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#622E79] text-base mb-1">Horário de Funcionamento</h3>
                  <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-800">Terça a Sexta:</span> 09:00 às 17:00
                  </p>
                  <p className="text-sm text-slate-600">
                  <span className="font-medium text-slate-800">Sábado:</span> 09:00 às 14:00
                  </p>
                  <p className="text-xs text-rose-500 font-medium mt-1">
                    Domingos e Segundas: Fechado
                  </p>
                </div>
              </div>

            </div>

            {/* Ação para traçar rota */}
            <div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#874E9E] hover:bg-[#622E79] text-white py-3.5 px-6 rounded-2xl font-bold text-sm shadow-md shadow-purple-100 transition-all hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4" />
                Abrir Rota no Google Maps
              </a>
            </div>

          </div>

          {/* Iframe com as Coordenadas */}
          <div className="lg:col-span-7 min-h-[340px] rounded-2xl overflow-hidden border border-slate-100 relative shadow-inner">
            <iframe
              title="Localização exata do Espaço Pet"
              src={embedMapsUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[350px] border-0"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
