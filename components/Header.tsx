
import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, SparklesIcon, UserCircleIcon, SearchIcon, XIcon } from './Icons';
import type { Discipline } from '../types';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleTutor: () => void;
  disciplines: Discipline[];
  onSelectDiscipline: (discipline: Discipline) => void;
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onToggleTutor, disciplines, onSelectDiscipline, onGoHome }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [disciplineResults, setDisciplineResults] = useState<Discipline[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setDisciplineResults([]);
      return;
    }
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Search for disciplines
    const matchingDisciplines = disciplines.filter(d =>
      d.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setDisciplineResults(matchingDisciplines);

  }, [searchTerm, disciplines]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectDiscipline = (discipline: Discipline) => {
    onSelectDiscipline(discipline);
    setSearchTerm('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (disciplineResults.length > 0) {
        handleSelectDiscipline(disciplineResults[0]);
      }
    }
  };
  
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const showResults = searchTerm.length > 1 && disciplineResults.length > 0;

  return (
    <header className="bg-brand-primary text-white shadow-md flex items-center justify-between p-3 z-50 relative">
      <div className="flex items-center">
        <button onClick={onToggleSidebar} className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-accent md:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
        <button onClick={onGoHome} className="text-left" aria-label="Tag bogga hore">
          <h1 className="text-xl md:text-2xl font-bold ml-2 md:ml-0">
            <span className="text-brand-accent">SAHAN</span> Engineering
          </h1>
        </button>
      </div>
      
      <div ref={searchContainerRef} className="hidden md:block flex-1 mx-8 max-w-xl relative">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Ka raadi qaybaha injineernimada..."
            className="w-full pl-11 pr-11 py-2.5 border-none rounded-full bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-brand-accent focus:outline-none focus:bg-white/20 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {searchTerm && (
            <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-300 hover:text-white transition-colors"
                aria-label="Nadiifi raadinta"
            >
                <XIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {showResults && (
          <div className="absolute top-full mt-2 w-full bg-base-100 rounded-lg shadow-lg overflow-hidden max-h-96 overflow-y-auto text-base-content">
            {disciplineResults.length > 0 && (
              <ul>
                {disciplineResults.map(discipline => (
                  <li key={discipline.id}>
                    <button 
                      onClick={() => handleSelectDiscipline(discipline)}
                      className="w-full text-left flex items-center px-4 py-3 hover:bg-base-200 transition-colors"
                    >
                      <discipline.icon className="h-5 w-5 mr-3 text-brand-secondary" />
                      <span>{discipline.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-accent">
          <UserCircleIcon className="h-7 w-7" />
        </button>
         <button onClick={onToggleTutor} className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-accent md:hidden">
          <SparklesIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
