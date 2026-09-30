export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-bold text-xl text-amber-600 tracking-tight">
          Espaço Pet
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#sobre" className="hover:text-amber-600 transition-colors">Quem Somos</a>
          <a href="#servicos" className="hover:text-amber-600 transition-colors">Serviços</a>
          <a href="#fotos" className="hover:text-amber-600 transition-colors">Fotos</a>
          <a href="#onde-estamos" className="hover:text-amber-600 transition-colors">Onde Estamos</a>
        </nav>
        <a 
          href="#contato" 
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          Contato
        </a>
      </div>
    </header>
  );
}
