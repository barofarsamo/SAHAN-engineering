
import React, { useEffect, useRef, useMemo } from 'react';
import type { Lesson, Level } from '../types';
import { CheckIcon, XIcon, LockClosedIcon } from './Icons';

interface SidebarProps {
  levels: Level[];
  selectedLesson: Lesson | null;
  onSelectLesson: (lesson: Lesson) => void;
  isOpen: boolean;
  completedLessons: Set<string>;
  isMobile: boolean;
  onClose: () => void;
  unlockedLevels: Set<string>;
  disciplineId: string;
}

const SidebarContent: React.FC<Omit<SidebarProps, 'isMobile' | 'onClose'>> = ({
  levels,
  selectedLesson,
  onSelectLesson,
  isOpen,
  completedLessons,
  unlockedLevels,
  disciplineId,
}) => {
  const activeLessonRef = useRef<HTMLLIElement>(null);
  
  const { flatLessons } = useMemo(() => {
    const lessons: Lesson[] = [];
    levels.forEach(l => l.modules.forEach(m => lessons.push(...m.lessons)));
    return { flatLessons: lessons };
  }, [levels]);


  useEffect(() => {
    setTimeout(() => {
       if (isOpen && activeLessonRef.current) {
        activeLessonRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 300);
  }, [selectedLesson, isOpen]);

  if (!levels || levels.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        Fadlan dooro qayb si aad u bilowdo.
      </div>
    );
  }

  return (
    <>
      <div className="overflow-y-auto flex-1 p-4">
        {levels.map(level => {
          const isLevelLocked = disciplineId === 'civil-engineering' && !unlockedLevels.has(level.id);
          return (
            <div key={level.id} className="mb-6">
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 pl-8 flex items-center ${isLevelLocked ? 'text-gray-400/70' : 'text-gray-400'}`}>
                {level.name}
                {isLevelLocked && <LockClosedIcon className="h-3 w-3 ml-2" />}
              </h3>
              {level.modules.map((module, moduleIndex) => (
                <div key={module.id} className={`relative ml-4 ${moduleIndex === level.modules.length - 1 ? '' : 'border-l-2 border-base-300'}`}>
                  <div className="mb-4">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-base-300 border-2 border-base-100"></div>
                    <h4 className={`font-semibold pl-8 ${isLevelLocked ? 'text-gray-500' : 'text-base-content'}`}>{module.title}</h4>
                  </div>
                  <ul className="pl-8 pb-4 space-y-3">
                    {module.lessons.map(lesson => {
                      const isLocked = isLevelLocked;
                      const isCompleted = completedLessons.has(lesson.id);
                      const isSelected = selectedLesson?.id === lesson.id;
                      const lessonRef = isSelected ? activeLessonRef : null;

                      return (
                        <li key={lesson.id} ref={lessonRef} className="relative flex items-center">
                          {isLocked ? (
                            <div className="absolute -left-[40px] top-1/2 -translate-y-1/2 z-10 text-gray-400" title="Casharkani waa xiran yahay">
                              <LockClosedIcon className="h-4 w-4" />
                            </div>
                          ) : (
                            <div className={`absolute -left-[38px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10 transition-all duration-200 
                              ${isSelected ? 'bg-brand-secondary ring-4 ring-brand-secondary/30 scale-125' : isCompleted ? 'bg-green-500' : 'bg-base-300'}`}>
                              {isCompleted && !isSelected && <CheckIcon className="h-full w-full p-0.5 text-white" />}
                            </div>
                          )}
                          <button 
                            onClick={() => onSelectLesson(lesson)} 
                            disabled={isLocked}
                            className={`w-full text-left text-sm transition-colors 
                              ${isLocked ? 'text-gray-400 cursor-not-allowed' : 
                              isSelected ? 'text-brand-secondary font-bold' : 
                              isCompleted ? 'text-gray-800 font-medium' : 
                              'text-gray-500 hover:text-brand-primary'}`}
                          >
                            {lesson.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </>
  );
};


const Sidebar: React.FC<SidebarProps> = (props) => {
  const { levels, isOpen, isMobile, onClose } = props;

  if (isMobile) {
    return (
      <>
        <div 
          className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={onClose}
          aria-hidden="true"
        />
        <aside 
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-base-100 flex flex-col transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          aria-label="Manhajka casharka"
        >
          <div className="p-4 border-b border-base-300 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-base-content truncate">
              Manhajka
            </h2>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-800 -mr-2">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <SidebarContent {...props} />
        </aside>
      </>
    );
  }

  return (
    <aside className={`flex-shrink-0 bg-base-100 border-r border-base-300 flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-full md:w-80' : 'w-0'} overflow-hidden`}>
       <div className="p-4 border-b border-base-300">
        <h2 className="text-lg font-semibold text-base-content truncate">
          Manhajka Casharka
        </h2>
      </div>
       <SidebarContent {...props} />
    </aside>
  );
};

export default Sidebar;