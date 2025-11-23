
import React from 'react';
import { MenuIcon, SparklesIcon, XIcon, ChevronLeftIcon } from './Icons';
import type { Discipline } from '../types';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleTutor: () => void;
  disciplines: Discipline[];
  onSelectDiscipline: (discipline: Discipline) => void;
  onGoHome: () => void;
  isCourseView?: boolean;
  courseTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ 
    onToggleSidebar, 
    onToggleTutor, 
    onGoHome, 
    isCourseView = false, 
    courseTitle = '' 
}) => {
  
  if (isCourseView) {
      return (
        <header className="bg-base-100 text-white shadow-md flex items-center justify-between p-3 z-50 border-b border-base-300">
             <div className="flex items-center flex-1 overflow-hidden">
                <button onClick={onGoHome} className="mr-3 p-1 rounded-full hover:bg-white/10">
                    <ChevronLeftIcon className="h-6 w-6 text-white" />
                </button>
                <h1 className="text-sm font-bold truncate pr-2">
                   {courseTitle}
                </h1>
            </div>
            
            <div className="flex items-center space-x-2 flex-shrink-0">
                <button onClick={onToggleTutor} className="p-2 rounded-md hover:bg-white/10 text-brand-secondary">
                  <SparklesIcon className="h-6 w-6" />
                </button>
                <button onClick={onToggleSidebar} className="p-2 rounded-md hover:bg-white/10 md:hidden">
                  <MenuIcon className="h-6 w-6" />
                </button>
            </div>
        </header>
      );
  }

  // Header is generally not used in main tabs (Explore/Learn) in this design, 
  // but kept here just in case logic changes.
  return null;
};

export default Header;
