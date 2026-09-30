export default function Footer() {
  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-white text-lg font-bold">Espaço Pet</h3>
          <p className="text-sm text-slate-400 mt-1">Cuidando do seu pet com amor e profissionalismo.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors text-sm">WhatsApp</a>
          <a href="#" className="hover:text-white transition-colors text-sm">Instagram</a>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-8 pt-8 border-t border-slate-800">
        © {new Date().getFullYear()} Espaço Pet. Todos os direitos reservados.
      </div>
    </footer>
  );
}
