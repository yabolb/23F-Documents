import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export const PDFModal: React.FC<PDFModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sepia-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-6xl h-[90vh] rounded-lg shadow-2xl flex flex-col relative">
        <div className="flex items-center justify-between p-4 border-b border-sepia-100 bg-paper rounded-t-lg">
          <h3 className="font-serif font-bold text-lg text-sepia-900 truncate pr-8">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-sepia-900/60 hover:text-sepia-900 transition-colors"
              title="Abrir en nueva pestaña"
            >
              <ExternalLink size={20} />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-sepia-900/60 hover:text-sepia-900 transition-colors rounded-full hover:bg-sepia-900/5"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 bg-gray-100 relative overflow-hidden">
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
            className="w-full h-full border-0"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};
