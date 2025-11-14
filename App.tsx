
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AiTutor from './components/AiTutor';
import DisciplineBrowser from './components/DisciplineBrowser';
import Certificate from './components/Certificate';
import ChapterBrowser from './components/ChapterBrowser';
import LessonBrowser from './components/LessonBrowser';
import { disciplines } from './constants';
import type { Discipline, Lesson, SearchResult, Level, Module } from './types';
import { useProgress } from './hooks/useProgress';
import { useDownloads } from './hooks/useDownloads';
import { SpinnerIcon } from './components/Icons';
import { useMediaQuery } from './hooks/useMediaQuery';

const LoadingScreen: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center p-4">
    <div className="mb-4">
      <h1 className="text-4xl font-bold text-brand-primary">
        <span className="text-brand-accent">SAHAN</span> Engineering
      </h1>
    </div>
    <SpinnerIcon className="h-8 w-8 text-brand-secondary animate-spin" />
    <p className="mt-4 text-lg text-gray-600">Waxaan diyaarinaynaa khibradaada waxbarasho...</p>
  </div>
);

type ViewMode = 'BROWSE' | 'LEARN' | 'CERTIFICATE' | 'CHAPTER_BROWSE' | 'LESSON_BROWSE';

const App: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [viewMode, setViewMode] = useState<ViewMode>('BROWSE');
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Level | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [isTutorOpen, setTutorOpen] = useState(!isMobile);
  const [tutorInitialPrompt, setTutorInitialPrompt] = useState<string | null>(null);

  const {
    isLoaded,
    completedLessons,
    markLessonAsComplete,
    setLastViewed,
    getProgressForDiscipline,
    getLastViewedLessonData,
    getUnlockedLevels,
  } = useProgress();
  
  const {
    getDownloadStatus,
    addDownload,
    removeDownload,
    getDownloadedDiscipline
  } = useDownloads();

  const disciplineForView = useMemo(() => {
    if (selectedDiscipline?.id === 'civil-engineering' && selectedChapter && selectedModule) {
      const filteredLevel = { ...selectedChapter, modules: [selectedModule] };
      return { ...selectedDiscipline, levels: [filteredLevel] };
    }
    return selectedDiscipline;
  }, [selectedDiscipline, selectedChapter, selectedModule]);

  const { flatLessons, currentLessonIndex } = useMemo(() => {
    if (!disciplineForView) {
      return { flatLessons: [], currentLessonIndex: -1 };
    }
    const lessons: Lesson[] = [];
    disciplineForView.levels.forEach(l => l.modules.forEach(m => lessons.push(...m.lessons)));
    const idx = selectedLesson ? lessons.findIndex(l => l.id === selectedLesson.id) : -1;
    return { flatLessons: lessons, currentLessonIndex: idx };
  }, [disciplineForView, selectedLesson]);
  
  const unlockedLevels = useMemo(() => {
    if (!selectedDiscipline) return new Set<string>();
    return getUnlockedLevels(selectedDiscipline.id);
  }, [selectedDiscipline, getUnlockedLevels]);

  const handleSelectLesson = (lesson: Lesson) => {
    const lessonLevel = selectedDiscipline?.levels.find(level => 
        level.modules.some(module => 
            module.lessons.some(l => l.id === lesson.id)
        )
    );
    
    if (lessonLevel && !unlockedLevels.has(lessonLevel.id)) {
        return;
    }
    
    setSelectedLesson(lesson);
    if (selectedDiscipline) {
      setLastViewed(selectedDiscipline.id, lesson.id);
    }
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleStartLearning = (discipline: Discipline) => {
    const offlineDiscipline = getDownloadedDiscipline(discipline.id) || discipline;
    setSelectedDiscipline(offlineDiscipline);
    setSelectedChapter(null);
    setSelectedModule(null);

    if (discipline.id === 'civil-engineering') {
        setViewMode('CHAPTER_BROWSE');
    } else {
        const firstLesson = offlineDiscipline.levels[0].modules[0].lessons[0];
        setSelectedLesson(firstLesson);
        setLastViewed(offlineDiscipline.id, firstLesson.id);
        setViewMode('LEARN');
    }
  };
  
  const handleSelectChapter = (chapter: Level) => {
    setSelectedChapter(chapter);
    setSelectedModule(null);
    setSelectedLesson(null);
    setViewMode('LESSON_BROWSE');
  };

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module);
    const firstLesson = module.lessons[0];
    setSelectedLesson(firstLesson);
    if (selectedDiscipline) {
        setLastViewed(selectedDiscipline.id, firstLesson.id);
    }
    setViewMode('LEARN');
  };

  const handleSelectSearchResult = (result: SearchResult) => {
    const offlineDiscipline = getDownloadedDiscipline(result.discipline.id) || result.discipline;
    setSelectedDiscipline(offlineDiscipline);
    
    if (offlineDiscipline.id === 'civil-engineering') {
        setSelectedChapter(result.level);
        setSelectedModule(result.module);
    } else {
        setSelectedChapter(null);
        setSelectedModule(null);
    }
    
    setSelectedLesson(result.lesson);
    setLastViewed(offlineDiscipline.id, result.lesson.id);
    setViewMode('LEARN');
  };

  const handleGoHome = () => {
    setViewMode('BROWSE');
    setSelectedDiscipline(null);
    setSelectedLesson(null);
    setSelectedChapter(null);
    setSelectedModule(null);
  };

  const [nextLessonAfterCompletion, setNextLessonAfterCompletion] = useState<Lesson | null>(null);

  useEffect(() => {
    if (nextLessonAfterCompletion) {
      handleSelectLesson(nextLessonAfterCompletion);
      setNextLessonAfterCompletion(null);
    }
  }, [completedLessons, nextLessonAfterCompletion]);
  
  const handleCompleteAndNext = () => {
    if (selectedLesson) {
      markLessonAsComplete(selectedLesson.id);
      if (currentLessonIndex < flatLessons.length - 1) {
        const nextLesson = flatLessons[currentLessonIndex + 1];
        setNextLessonAfterCompletion(nextLesson);
      }
    }
  };
  
  const handleCompleteAndFinish = () => {
    if (selectedLesson) {
      markLessonAsComplete(selectedLesson.id);
      setViewMode('CERTIFICATE');
    }
  };
  
  const handleTermClick = (term: string) => {
    setTutorInitialPrompt(`Fadlan si faahfaahsan iigu sharax waxa loola jeedo "${term}" marka loo eego casharkan.`);
    if(!isTutorOpen) {
      setTutorOpen(true);
    }
  };

  const isLastLessonOfLevel = useMemo(() => {
      if (!selectedDiscipline || !selectedLesson || !selectedChapter) return false;
      
      const lessonsInLevel = selectedChapter.modules.flatMap(m => m.lessons);
      return lessonsInLevel[lessonsInLevel.length - 1].id === selectedLesson.id;
  }, [selectedDiscipline, selectedChapter, selectedLesson]);
  
  const renderContent = () => {
    switch(viewMode) {
      case 'BROWSE':
        return (
          <DisciplineBrowser 
            disciplines={disciplines} 
            onSelectDiscipline={handleStartLearning}
            getProgressForDiscipline={getProgressForDiscipline}
            lastViewedLessonData={getLastViewedLessonData()}
            onSelectLastViewed={handleSelectSearchResult}
            getDownloadStatus={getDownloadStatus}
            onAddDownload={addDownload}
            onRemoveDownload={removeDownload}
          />
        );
      case 'CHAPTER_BROWSE':
        return selectedDiscipline ? (
            <ChapterBrowser 
                discipline={selectedDiscipline}
                onSelectChapter={handleSelectChapter}
            />
        ) : null;
      case 'LESSON_BROWSE':
        return selectedChapter ? (
            <LessonBrowser
                chapter={selectedChapter}
                onSelectModule={handleSelectModule}
            />
        ) : null;
      case 'CERTIFICATE':
        return selectedDiscipline ? (
          <Certificate disciplineName={selectedDiscipline.name} onGoHome={handleGoHome} />
        ) : null;
      case 'LEARN':
        return (
          <div className="flex flex-1 overflow-hidden">
            <Sidebar 
              levels={disciplineForView?.levels || []}
              selectedLesson={selectedLesson}
              onSelectLesson={handleSelectLesson}
              isOpen={isSidebarOpen}
              completedLessons={completedLessons}
              isMobile={isMobile}
              onClose={() => setSidebarOpen(false)}
              unlockedLevels={unlockedLevels}
              disciplineId={selectedDiscipline?.id || ''}
            />
            <main className="flex-1 overflow-y-auto transition-all duration-300 ease-in-out bg-base-200">
              {disciplineForView && selectedLesson ? (
                <MainContent 
                  key={selectedLesson.id} 
                  lesson={selectedLesson} 
                  disciplineName={selectedDiscipline?.name || ''}
                  isCompleted={completedLessons.has(selectedLesson.id)}
                  onCompleteAndNext={handleCompleteAndNext}
                  onCompleteAndFinish={handleCompleteAndFinish}
                  isLastLessonOfDiscipline={currentLessonIndex === flatLessons.length - 1 && disciplineForView.levels.length === selectedDiscipline?.levels.length}
                  isLastLessonOfLevel={isLastLessonOfLevel}
                  onTermClick={handleTermClick}
                />
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <h2 className="text-2xl font-bold mb-4">Ku Soo Dhawow SAHAN Engineering</h2>
                  <p>Fadlan dooro qayb injineernimo si aad u bilowdo safarkaaga waxbarasho.</p>
                </div>
              )}
            </main>
            <AiTutor 
                isOpen={isTutorOpen} 
                selectedLesson={selectedLesson} 
                isMobile={isMobile}
                onClose={() => setTutorOpen(false)}
                initialPrompt={tutorInitialPrompt}
                onPromptHandled={() => setTutorInitialPrompt(null)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col h-screen font-sans bg-base-200 text-base-content overflow-hidden">
      <Header 
        onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
        onToggleTutor={() => setTutorOpen(!isTutorOpen)}
        disciplines={disciplines}
        onSelectDiscipline={handleStartLearning}
        onGoHome={handleGoHome}
      />
      {renderContent()}
    </div>
  );
};

export default App;