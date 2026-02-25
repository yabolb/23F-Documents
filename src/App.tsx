import { useState, useMemo } from 'react';
import { eventos } from './data';
import { TimelineCard } from './components/TimelineCard';
import { PayPalDonateButton } from './components/PayPalDonateButton';
import { Filter, Archive, Info, Search, X } from 'lucide-react';

function App() {
  const [selectedProtagonist, setSelectedProtagonist] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique protagonists. Some events have multiple separated by " / "
  const protagonistas = useMemo(() => {
    const all = eventos.flatMap(e => e.protagonista.split(' / '));
    return Array.from(new Set(all)).sort();
  }, []);

  const filteredEvents = useMemo(() => {
    return eventos.filter(e => {
      const matchesProtagonist = !selectedProtagonist || e.protagonista.includes(selectedProtagonist);
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery || 
        e.titulo.toLowerCase().includes(query) ||
        e.descripcion.toLowerCase().includes(query) ||
        e.protagonista.toLowerCase().includes(query) ||
        e.categoria.toLowerCase().includes(query) ||
        e.otros_documentos?.some(d => d.titulo.toLowerCase().includes(query));

      return matchesProtagonist && matchesSearch;
    });
  }, [selectedProtagonist, searchQuery]);

  return (
    <div className="min-h-screen bg-paper selection:bg-sepia-900 selection:text-paper pb-20">
      {/* Header */}
      <header className="bg-sepia-900 text-paper py-12 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 border-2 border-paper/20 rounded-full mb-6">
            <Archive size={32} className="text-paper/90" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
            Archivo 23-F
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-2xl mx-auto font-serif italic mb-8">
            Documentos Desclasificados del Gobierno de España
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-sepia-900/40 group-focus-within:text-sepia-900/80 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-10 py-4 rounded-full border-2 border-transparent bg-paper text-sepia-900 placeholder-sepia-900/40 focus:outline-none focus:ring-0 focus:border-paper/50 shadow-lg transition-all font-sans text-lg"
              placeholder="Buscar documentos, personas o hechos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-sepia-900/40 hover:text-sepia-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-paper/60 bg-paper/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Info size={14} />
            <span>Fuente: Consejo de Ministros (lamoncloa.gob.es)</span>
          </div>

          <div className="mt-8">
            <PayPalDonateButton buttonId="donate-button-hero" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 -mt-8 relative z-20">
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-sm shadow-lg border border-sepia-200 mb-16">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sepia-900/60 uppercase tracking-widest text-xs font-bold">
              <Filter size={14} />
              Filtrar por Protagonista
            </div>
            {filteredEvents.length !== eventos.length && (
              <div className="text-xs text-sepia-900/50 font-mono">
                Mostrando {filteredEvents.length} de {eventos.length} documentos
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedProtagonist(null)}
              className={`
                px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 border
                ${!selectedProtagonist 
                  ? 'bg-sepia-900 text-paper border-sepia-900 shadow-md' 
                  : 'bg-paper text-sepia-900 border-sepia-200 hover:border-sepia-900/30'}
              `}
            >
              Todos
            </button>
            {protagonistas.map(p => (
              <button
                key={p}
                onClick={() => setSelectedProtagonist(p === selectedProtagonist ? null : p)}
                className={`
                  px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 border
                  ${selectedProtagonist === p 
                    ? 'bg-sepia-900 text-paper border-sepia-900 shadow-md' 
                    : 'bg-paper text-sepia-900 border-sepia-200 hover:border-sepia-900/30'}
                `}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((evento, index) => (
              <TimelineCard key={index} evento={evento} index={index} />
            ))
          ) : (
            <div className="text-center py-20 text-sepia-900/50">
              <Search size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-xl font-serif italic mb-2">No se encontraron documentos.</p>
              <p className="text-sm font-sans opacity-60">Prueba con otros términos de búsqueda o elimina los filtros.</p>
              {(searchQuery || selectedProtagonist) && (
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedProtagonist(null); }}
                  className="mt-6 text-sepia-900 underline hover:text-sepia-900/70 transition-colors"
                >
                  Limpiar búsqueda y filtros
                </button>
              )}
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center text-sepia-900/40 text-sm py-8 font-mono">
        <PayPalDonateButton buttonId="donate-button-footer" />
        <p>© {new Date().getFullYear()} Visualización Histórica • Archivo 23-F</p>
      </footer>
    </div>
  );
}

export default App;
