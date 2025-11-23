
import React, { useState, useMemo } from 'react';
import { SearchIcon, ChevronRightIcon, BookOpenIcon, BuildingIcon } from './Icons';
import { disciplines } from '../constants';
import type { SearchResult, Lesson } from '../types';

interface SearchTabProps {
    onSelectResult: (result: SearchResult) => void;
}

const SearchTab: React.FC<SearchTabProps> = ({ onSelectResult }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const jobRoles = [
    { category: 'Data Science & Analytics', roles: ['Data Manager', 'Data Analyst', 'Data Scientist', 'Data Engineer'] },
    { category: 'Software Engineering & IT', roles: ['Python Developer', 'Junior Developer', 'Cybersecurity', 'UX Designer', 'Product Manager', 'Full Stack Developer'] },
    { category: 'Business', roles: ['Project Manager', 'Supply Chain Analyst', 'Bookkeeper'] }
  ];

  const searchResults = useMemo(() => {
      if (!searchTerm.trim()) return [];
      
      const term = searchTerm.toLowerCase();
      const results: SearchResult[] = [];

      disciplines.forEach(discipline => {
          // Check discipline name
          if (discipline.name.toLowerCase().includes(term)) {
              // Add the first lesson of the discipline as a result
               results.push({
                   discipline,
                   level: discipline.levels[0],
                   module: discipline.levels[0].modules[0],
                   lesson: discipline.levels[0].modules[0].lessons[0]
               });
          }

          discipline.levels.forEach(level => {
              level.modules.forEach(module => {
                  module.lessons.forEach(lesson => {
                      if (lesson.title.toLowerCase().includes(term) || module.title.toLowerCase().includes(term)) {
                          results.push({
                              discipline,
                              level,
                              module,
                              lesson
                          });
                      }
                  });
              });
          });
      });
      
      // Remove duplicates based on lesson ID
      return results.filter((v,i,a)=>a.findIndex(t=>(t.lesson.id === v.lesson.id))===i).slice(0, 20); // Limit to 20 results
  }, [searchTerm]);

  return (
    <div className="flex-1 overflow-y-auto bg-base-200 pb-20">
      <div className="p-4">
        {/* Search Bar */}
        <div className="relative mb-6 mt-2">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
                type="text"
                placeholder="Search for courses, lessons, or skills..."
                className="w-full pl-11 pr-4 py-3 bg-base-100 border border-base-300 rounded-lg text-base-content placeholder-gray-500 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
            />
            {searchTerm && (
                <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    Clear
                </button>
            )}
        </div>

        {searchTerm ? (
            <div className="space-y-4">
                <h2 className="text-base-content font-bold mb-2">Search Results ({searchResults.length})</h2>
                {searchResults.length === 0 ? (
                    <div className="text-center py-10">
                        <p className="text-brand-gray">No results found for "{searchTerm}"</p>
                    </div>
                ) : (
                    searchResults.map((result) => (
                        <button
                            key={result.lesson.id}
                            onClick={() => onSelectResult(result)}
                            className="w-full bg-base-100 p-4 rounded-xl border border-base-300 flex items-center justify-between hover:bg-base-300 transition-colors text-left group"
                        >
                            <div className="flex items-start overflow-hidden">
                                <div className="h-10 w-10 bg-brand-secondary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                    <BookOpenIcon className="h-5 w-5 text-brand-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base-content text-sm truncate pr-2 group-hover:text-brand-secondary">{result.lesson.title}</h3>
                                    <p className="text-xs text-brand-gray truncate">
                                        {result.discipline.name} • {result.module.title}
                                    </p>
                                </div>
                            </div>
                            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                        </button>
                    ))
                )}
            </div>
        ) : (
            /* Interests Section (Default State) */
            <div className="mb-8 animate-fade-in">
                <div className="flex items-baseline justify-between mb-2">
                    <h1 className="text-xl font-bold text-base-content">Browse by Career</h1>
                </div>
                <p className="text-brand-gray text-sm mb-6">Explore skills needed for top job roles.</p>

                {jobRoles.map((group) => (
                    <div key={group.category} className="mb-6">
                        <h3 className="text-base-content font-bold text-xs uppercase tracking-wider mb-3">{group.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.roles.map(role => (
                                <button 
                                    key={role} 
                                    onClick={() => setSearchTerm(role)}
                                    className="bg-base-100 border border-base-300 hover:border-brand-secondary hover:text-brand-secondary text-base-content text-xs font-medium py-2 px-3 rounded-full transition-colors"
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default SearchTab;
