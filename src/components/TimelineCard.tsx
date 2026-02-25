import React, { useState } from 'react';
import { FileText, ChevronDown, Clock, User, Paperclip } from 'lucide-react';
import { categoriasColores, categoriasBordes, Evento23F } from '../data';

interface TimelineCardProps {
  evento: Evento23F;
  index: number;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ evento, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorClass = categoriasColores[evento.categoria];
  const borderClass = categoriasBordes[evento.categoria];

  return (
    <article
      className={`relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-8 mb-12 group animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Timeline Line (Mobile) */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-sepia-900/20 md:hidden"></div>
      
      {/* Timeline Dot (Mobile) */}
      <div className={`absolute left-[-5px] top-6 w-3 h-3 rounded-full border-2 border-paper ${colorClass.split(' ')[0]} md:hidden`}></div>

      {/* Date/Time Column (Desktop Left) */}
      <div className="hidden md:block md:col-span-5 md:text-right pt-6 pr-8 relative">
        <h3 className="font-serif text-2xl font-bold text-sepia-900">{evento.fecha}</h3>
        <div className="flex items-center justify-end gap-2 text-sepia-900/70 mt-1 font-mono text-sm">
          <span>{evento.hora}</span>
          <Clock size={14} />
        </div>
        
        {/* Connection Line (Desktop) */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-sepia-900/20"></div>
        <div className={`absolute right-[-6px] top-8 w-3 h-3 rounded-full border-2 border-paper ${colorClass.split(' ')[0]} z-10`}></div>
      </div>

      {/* Content Column (Desktop Right / Mobile Main) */}
      <div className="md:col-span-7 relative">
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            relative overflow-hidden rounded-sm border-l-4 ${borderClass} 
            bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer
            p-6
          `}
        >
          {/* Mobile Date Header */}
          <div className="md:hidden mb-4 border-b border-sepia-100 pb-2">
            <span className="font-serif text-lg font-bold block text-sepia-900">{evento.fecha}</span>
            <span className="font-mono text-xs text-sepia-900/60 flex items-center gap-1">
              <Clock size={12} /> {evento.hora}
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <div>
              <span className={`inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wider mb-2 rounded-sm ${colorClass}`}>
                {evento.categoria}
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-sepia-900 leading-tight mb-2">
                {evento.titulo}
              </h2>
              <div className="flex items-center gap-2 text-sepia-900/70 text-sm font-medium mb-4">
                <User size={16} />
                <span>{evento.protagonista}</span>
              </div>
            </div>
            <div 
              className={`text-sepia-900/40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <ChevronDown />
            </div>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-sepia-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden">
              <p className="text-sepia-900/80 leading-relaxed mb-6 font-sans">
                {evento.descripcion}
              </p>
              
              <div className="flex flex-col gap-2">
                <a 
                  href={evento.documento_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sepia-900 text-paper text-sm font-medium rounded-sm hover:bg-sepia-900/90 transition-colors group/btn w-fit"
                >
                  <FileText size={16} />
                  Ver Documento Principal
                  <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                </a>

                {evento.otros_documentos && evento.otros_documentos.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-bold text-sepia-900/70 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Paperclip size={14} />
                      Documentos Relacionados
                    </h4>
                    <div className="grid gap-2">
                      {evento.otros_documentos.map((doc, i) => (
                        <a
                          key={i}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="block text-sm text-sepia-900 hover:text-blue-800 hover:underline truncate"
                          title={doc.titulo}
                        >
                          • {doc.titulo}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
