import logoImg from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo / Nome da Marca */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-15 h-15 rounded-2xl bg-gradient-to-tr from-[#874E9E] to-[#A467BC] flex items-center justify-center text-white font-black text-xl shadow-md shadow-purple-200">
            <img src={logoImg} alt="Espaço Pet" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-[#622E79] leading-none">
              Espaço <span className="text-[#00B5B8]">Pet</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
              Pet Shop • Banho e Tosa
            </span>
          </div>
        </a>

        {/* Links de navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#sobre" className="hover:text-[#874E9E] transition-colors">Quem Somos</a>
          <a href="#servicos" className="hover:text-[#874E9E] transition-colors">Serviços</a>
          <a href="#fotos" className="hover:text-[#874E9E] transition-colors">Fotos</a>
          <a href="#onde-estamos" className="hover:text-[#874E9E] transition-colors">Onde Estamos</a>
        </nav>

        {/* Botão de Contato */}
        <a 
          href="#contato" 
          className="bg-[#00B5B8] hover:bg-[#00999C] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-cyan-100 transition-all hover:scale-105"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
