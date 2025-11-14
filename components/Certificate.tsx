import React, { useRef, useCallback } from 'react';
import * as htmlToImage from 'html-to-image';
import { AcademicCapIcon, ArrowRightIcon, DownloadIcon } from './Icons';

interface CertificateProps {
  disciplineName: string;
  onGoHome: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ disciplineName, onGoHome }) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const currentDate = new Date().toLocaleDateString('so-SO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleDownload = useCallback(() => {
    if (certificateRef.current === null) {
      return;
    }

    htmlToImage.toPng(certificateRef.current, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `Shahaadada_${disciplineName.replace(/\s/g, '_')}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Waxbaa khaldamay, fadlan isku day mar kale.', err);
      });
  }, [disciplineName]);

  return (
    <div className="flex-1 flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-4xl">
        <div ref={certificateRef} className="max-w-4xl w-full bg-base-100 rounded-2xl shadow-2xl flex flex-col items-center text-center p-8 md:p-12 border-4 border-brand-accent/50 relative overflow-hidden">
          
          {/* Decorative background elements */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-brand-secondary/10 rounded-full opacity-50"></div>
          <div className="absolute -bottom-20 -right-12 w-56 h-56 bg-brand-accent/10 rounded-full opacity-50"></div>

          <div className="z-10">
              <div className="mb-4">
                  <AcademicCapIcon className="h-20 w-20 mx-auto text-brand-accent" />
              </div>
              <h1 className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
              Shahaadada Dhammaystirka
              </h1>
              <p className="mt-4 text-lg text-gray-600">Shahaadadan waxaa si sharaf leh loo guddoonsiinayaa</p>
              <p className="text-3xl md:text-4xl font-bold text-brand-primary my-3">
              Ardayga Dadaalka Badan
              </p>
              <p className="text-lg text-gray-600">dhammaystirka guusha leh ee koorsada</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-primary mt-2 mb-6">
              {disciplineName}
              </h2>

              <div className="w-48 h-px bg-base-300 mx-auto my-6"></div>

              <p className="text-sm text-gray-500">La Bixiyay {currentDate}</p>
              <p className="text-2xl font-bold text-brand-primary mt-4">
                  <span className="text-brand-accent">SAHAN</span> Engineering
              </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
                onClick={handleDownload}
                className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-brand-secondary text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
                <DownloadIcon className="h-5 w-5 mr-2" />
                Degso Shahaadada
            </button>
            <button
                onClick={onGoHome}
                className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-brand-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
                Baadh Qaybo Dheeraad ah
                <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;