
import React from 'react';
import type { Level, Module } from '../types';
import { ChevronRightIcon } from './Icons';

interface LessonBrowserProps {
  chapter: Level;
  onSelectModule: (module: Module) => void;
}

const LessonBrowser: React.FC<LessonBrowserProps> = ({ chapter, onSelectModule }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-base-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-primary mb-2">{chapter.name}</h1>
          <p className="text-lg text-gray-600">{chapter.description}</p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-primary mb-3 text-center">Dooro Qaybta Hoose ee Cutubka</h2>
          {chapter.modules.map((module) => (
            <button
              key={module.id}
              onClick={() => onSelectModule(module)}
              className="group w-full bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left flex items-center justify-between hover:border-brand-secondary border-2 border-transparent hover:-translate-y-1"
            >
              <div>
                  <h3 className="text-xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">{module.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{module.lessons.length} cashar</p>
              </div>
              <ChevronRightIcon className="h-6 w-6 text-gray-400 transform group-hover:text-brand-secondary group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonBrowser;
