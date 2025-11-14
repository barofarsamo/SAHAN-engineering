
import React from 'react';
import type { Discipline, Level } from '../types';
import { ArrowRightIcon } from './Icons';

interface ChapterBrowserProps {
  discipline: Discipline;
  onSelectChapter: (chapter: Level) => void;
}

const ChapterBrowser: React.FC<ChapterBrowserProps> = ({ discipline, onSelectChapter }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-base-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <discipline.icon className="h-16 w-16 text-brand-secondary mb-4 mx-auto" />
          <h1 className="text-4xl font-bold text-brand-primary mb-2">{discipline.name}</h1>
          <p className="text-lg text-gray-600">{discipline.description}</p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-primary mb-3 text-center">Dooro Cutub si aad u bilowdo</h2>
          {discipline.levels.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter(chapter)}
              className="group w-full bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left flex items-center justify-between hover:border-brand-secondary border-2 border-transparent hover:-translate-y-1"
            >
              <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-secondary text-white font-bold flex items-center justify-center mr-5 text-lg">
                      {index + 1}
                  </div>
                  <div>
                      <h3 className="text-xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">{chapter.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{chapter.description}</p>
                  </div>
              </div>
              <ArrowRightIcon className="h-6 w-6 text-gray-400 transform group-hover:text-brand-secondary group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterBrowser;
