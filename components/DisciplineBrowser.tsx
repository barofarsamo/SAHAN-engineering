import React from 'react';
import type { Discipline, SearchResult, DownloadStatus } from '../types';
import { ArrowRightIcon, DownloadIcon, TrashIcon, CheckCircleIcon } from './Icons';

interface DisciplineBrowserProps {
  disciplines: Discipline[];
  onSelectDiscipline: (discipline: Discipline) => void;
  getProgressForDiscipline: (disciplineId: string) => { completed: number; total: number };
  lastViewedLessonData: SearchResult | null;
  onSelectLastViewed: (result: SearchResult) => void;
  getDownloadStatus: (disciplineId: string) => DownloadStatus;
  onAddDownload: (discipline: Discipline) => void;
  onRemoveDownload: (disciplineId: string) => void;
}

const DownloadButton: React.FC<{
    status: DownloadStatus;
    onDownload: () => void;
    onDelete: () => void;
}> = ({ status, onDownload, onDelete }) => {
    
    if (status === 'downloading') {
        return (
            <button
                disabled
                className="w-full mt-4 px-4 py-2 text-sm font-semibold text-gray-500 bg-base-200 rounded-md flex items-center justify-center cursor-wait"
            >
                Waa la degayaa...
            </button>
        );
    }

    if (status === 'downloaded') {
        return (
            <div className="w-full mt-4 space-y-2">
                <div className="flex items-center justify-center text-sm font-semibold text-green-600">
                    <CheckCircleIcon className="h-5 w-5 mr-1.5" />
                    Diyaar u ah Offline
                </div>
                <button
                    onClick={onDelete}
                    className="w-full px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-md flex items-center justify-center hover:bg-red-200 transition-colors"
                >
                    <TrashIcon className="h-4 w-4 mr-2" />
                    Tirtir
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={onDownload}
            className="w-full mt-4 px-4 py-2 text-sm font-semibold text-brand-secondary bg-brand-secondary/10 rounded-md flex items-center justify-center hover:bg-brand-secondary/20 transition-colors"
        >
            <DownloadIcon className="h-4 w-4 mr-2" />
            La Deg si Aad Offline u Isticmaasho
        </button>
    );
};


const DisciplineBrowser: React.FC<DisciplineBrowserProps> = ({ 
    disciplines, 
    onSelectDiscipline, 
    getProgressForDiscipline, 
    lastViewedLessonData, 
    onSelectLastViewed,
    getDownloadStatus,
    onAddDownload,
    onRemoveDownload,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-base-200">
      <div className="max-w-7xl mx-auto">
        {lastViewedLessonData && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-3">Sii Wad Waxbarashada</h2>
            <button
              onClick={() => onSelectLastViewed(lastViewedLessonData)}
              className="group w-full bg-brand-primary text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-left flex items-center justify-between hover:-translate-y-1"
            >
              <div>
                <p className="text-sm font-semibold text-brand-accent">{lastViewedLessonData.discipline.name} &gt; {lastViewedLessonData.level.name}</p>
                <h3 className="text-xl font-bold mt-1">{lastViewedLessonData.lesson.title}</h3>
              </div>
              <div className="flex items-center text-lg font-semibold">
                Sii Wad
                <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        )}

        <div className="text-center md:text-left mb-8">
          <h1 className="text-4xl font-bold text-brand-primary mb-2">Baadh Qaybaha Injineernimada</h1>
          <p className="text-lg text-gray-600">Dooro qayb si aad u bilowdo safarkaaga min bilow ilaa khabiir.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {disciplines.map(discipline => {
            const progress = getProgressForDiscipline(discipline.id);
            const percentage = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;
            const downloadStatus = getDownloadStatus(discipline.id);
            
            const handleRemove = () => {
                if (window.confirm(`Ma hubtaa inaad rabto inaad tirtirto xogta offline-ka ee ${discipline.name}?`)) {
                    onRemoveDownload(discipline.id);
                }
            }

            return (
              <div
                key={discipline.id}
                className="bg-base-100 rounded-lg shadow-md flex flex-col p-6"
              >
                <button
                    onClick={() => onSelectDiscipline(discipline)}
                    className="group text-left flex flex-col flex-1"
                    aria-label={`Bilow barashada ${discipline.name}`}
                >
                    <div className="flex-shrink-0">
                    <discipline.icon className="h-10 w-10 text-brand-secondary mb-4" />
                    </div>
                    <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors">{discipline.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">{discipline.description}</p>
                    </div>
                    
                    <div className="w-full mt-auto">
                    <div className="flex justify-between items-center mb-1 text-xs text-gray-500">
                        <span>Horumar</span>
                        <span>{percentage}%</span>
                    </div>
                    <div className="w-full bg-base-200 rounded-full h-2">
                        <div className="bg-brand-secondary h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    </div>
                </button>
                <div className="border-t border-base-300 mt-4 pt-4">
                   <DownloadButton 
                        status={downloadStatus}
                        onDownload={() => onAddDownload(discipline)}
                        onDelete={handleRemove}
                   />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default DisciplineBrowser;