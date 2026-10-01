import logoImg from '../assets/logo.png';
import { MessageCircle, MapPin, Phone, Heart } from 'lucide-react';


export default function Footer() {
  return (
    <footer id="contato" className="bg-[#2D123D] text-purple-100 py-16 px-4 border-t border-purple-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-purple-900/60">
        
        {/* Coluna 1: Marca e Slogan */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#874E9E] to-[#A467BC] flex items-center justify-center text-white font-bold text-lg shadow-sm">
              <img src={logoImg} alt="Espaço Pet" className="h-12 w-auto object-contain" />
            </div>
            <span className="font-extrabold text-2xl text-white tracking-tight">
              Espaço <span className="text-[#00B5B8]">Pet</span>
            </span>
          </div>
          <p className="text-sm text-purple-200/80 leading-relaxed max-w-sm">
            Cuidando com carinho, paciência e produtos de qualidade para que o seu pet se sinta em casa a cada visita.
          </p>
        </div>

        {/* Coluna 2: Navegação Rápida */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 tracking-wide">
            Links Rápidos
          </h4>
          <ul className="space-y-2.5 text-sm text-purple-200/80">
            <li>
              <a href="#inicio" className="hover:text-[#00B5B8] transition-colors">Início</a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-[#00B5B8] transition-colors">Quem Somos</a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-[#00B5B8] transition-colors">Nossos Serviços</a>
            </li>
            <li>
              <a href="#fotos" className="hover:text-[#00B5B8] transition-colors">Galeria de Fotos</a>
            </li>
            <li>
              <a href="#onde-estamos" className="hover:text-[#00B5B8] transition-colors">Onde Estamos</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato & Atendimento */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 tracking-wide">
            Atendimento & Agendamentos
          </h4>
          <ul className="space-y-3 text-sm text-purple-200/80">
            <li className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-[#00B5B8] flex-shrink-0" />
              <span>WhatsApp: (21) 99503-0313</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#00B5B8] flex-shrink-0" />
              <span>Rua Fernando Henrique Assumpção, 247 - Eldorado</span>
            </li>
          </ul>

          <div className="mt-5 flex gap-3">
            {/* Botão WhatsApp */}
            <a 
              href="https://api.whatsapp.com/send/?phone=5521995030313&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#00B5B8] hover:bg-[#009FA3] text-white p-2.5 rounded-xl transition-transform hover:scale-105"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Ícone Nativo SVG do Instagram */}
            <a 
              href="https://www.instagram.com/espacopet.marica?stkn=MW52emxpcWk5ZnQ0dQ==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#874E9E] hover:bg-[#68357D] text-white p-2.5 rounded-xl transition-transform hover:scale-105 flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg 
                className="w-4 h-4 fill-none stroke-current stroke-2" 
                viewBox="0 0 24 24" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Linha de Copyright */}
      <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/60 gap-4">
        <p>© {new Date().getFullYear()} Espaço Pet. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1.5">
          Feito com <Heart className="w-3.5 h-3.5 text-[#00B5B8] fill-[#00B5B8]" /> para cuidar de quem você ama
        </p>
      </div>
    </footer>
  );
}
