
import React, { useState, useMemo, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import ExploreTab from './components/ExploreTab';
import LearnTab from './components/LearnTab';
import SearchTab from './components/SearchTab';
import ProfileTab from './components/ProfileTab';
import SettingsView from './components/SettingsView';
import Sidebar from './components/Sidebar';
import LessonReader from './components/LessonReader';
import AiTutor from './components/AiTutor';
import ChapterBrowser from './components/ChapterBrowser';
import LessonBrowser from './components/LessonBrowser';
import Certificate from './components/Certificate';
import Header from './components/Header';
import NotificationCenter from './components/NotificationCenter';
import { disciplines } from './constants';
import type { Discipline, Lesson, SearchResult, Level, Module } from './types';
import { useProgress } from './hooks/useProgress';
import { useDownloads } from './hooks/useDownloads';
import { useNotifications } from './hooks/useNotifications';
import { SpinnerIcon, ArrowRightIcon, XIcon, AcademicCapIcon, BookOpenIcon, BuildingIcon } from './components/Icons';
import { useMediaQuery } from './hooks/useMediaQuery';

const LoadingScreen: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center p-4">
    <div className="mb-4">
      <h1 className="text-4xl font-bold text-base-content">
        <span className="text-brand-secondary">SAHAN</span> Engineering
      </h1>
    </div>
    <SpinnerIcon className="h-8 w-8 text-brand-secondary animate-spin" />
    <p className="mt-4 text-lg text-brand-gray">Waxaan diyaarinaynaa khibradaada waxbarasho...</p>
  </div>
);

// View Modes for the Course Player context
type CourseViewMode = 'CHAPTER_BROWSE' | 'LESSON_BROWSE' | 'LEARN' | 'CERTIFICATE';
// Main Tabs
type Tab = 'explore' | 'career' | 'learn' | 'search' | 'profile';

const App: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Navigation State
  const [activeTab, setActiveTab] = useState<Tab>('explore');
  const [isCourseActive, setIsCourseActive] = useState(false);
  const [courseViewMode, setCourseViewMode] = useState<CourseViewMode>('CHAPTER_BROWSE');
  
  // Settings & Theme State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Notifications State
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  // Course Data State
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Level | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  
  // UI State
  const [isSidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [isTutorOpen, setTutorOpen] = useState(false);
  const [tutorInitialPrompt, setTutorInitialPrompt] = useState<string | null>(null);
  const [isCompletionModalOpen, setCompletionModalOpen] = useState(false);

  const {
    isLoaded,
    completedLessons,
    markModuleAsComplete,
    setLastViewed,
    getProgressForDiscipline,
    getLastViewedLessonData,
    getUnlockedLevels,
    resetProgress,
  } = useProgress();
  
  const {
    getDownloadStatus,
    addDownload,
    removeDownload,
    getDownloadedDiscipline
  } = useDownloads();

  const {
      notifications,
      unreadCount,
      markAsRead,
      markAllAsRead,
      clearNotifications
  } = useNotifications();

  // --- Theme Effect ---
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Helper: Derived state for filtering lessons if needed
  const disciplineForView = useMemo(() => {
    if (selectedDiscipline?.id === 'civil-engineering' && selectedChapter && selectedModule) {
      const filteredLevel = { ...selectedChapter, modules: [selectedModule] };
      return { ...selectedDiscipline, levels: [filteredLevel] };
    }
    return selectedDiscipline;
  }, [selectedDiscipline, selectedChapter, selectedModule]);
  
  const unlockedLevels = useMemo(() => {
    if (!selectedDiscipline) return new Set<string>();
    return getUnlockedLevels(selectedDiscipline.id);
  }, [selectedDiscipline, getUnlockedLevels]);

  // --- Handlers ---

  const handleSelectDiscipline = (discipline: Discipline) => {
    const offlineDiscipline = getDownloadedDiscipline(discipline.id) || discipline;
    setSelectedDiscipline(offlineDiscipline);
    setSelectedChapter(null);
    setSelectedModule(null);
    setIsCourseActive(true);
    
    // Always start with Chapter Browser for 'Real Course' experience
    setCourseViewMode('CHAPTER_BROWSE');
  };

  const handleSelectChapter = (chapter: Level) => {
    setSelectedChapter(chapter);
    setSelectedModule(null);
    setSelectedLesson(null);
    setCourseViewMode('LESSON_BROWSE');
  };

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module);
    const firstLesson = module.lessons[0];
    setSelectedLesson(firstLesson);
    if (selectedDiscipline) {
        setLastViewed(selectedDiscipline.id, firstLesson.id);
    }
    setCourseViewMode('LEARN');
    if (isMobile) setSidebarOpen(false); // Close sidebar on mobile to show content
  };

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
  
  const handleSearchResultSelect = (result: SearchResult) => {
      setSelectedDiscipline(result.discipline);
      if (result.discipline.id === 'civil-engineering') {
          // Setup full context for civil
          setSelectedChapter(result.level);
          setSelectedModule(result.module);
          setSelectedLesson(result.lesson);
          setCourseViewMode('LEARN');
          setIsCourseActive(true);
      } else {
           // For consistency, try to set up learn mode if possible
          setSelectedChapter(result.level);
          setSelectedModule(result.module);
          setSelectedLesson(result.lesson);
          setCourseViewMode('LEARN');
          setIsCourseActive(true);
      }
  };

  const handleExitCourse = () => {
    setIsCourseActive(false);
    setSelectedDiscipline(null);
    setSelectedChapter(null);
    setSelectedModule(null);
    setSelectedLesson(null);
  };

  const handleCompleteModule = () => {
     if (selectedModule) {
      const lessonIds = selectedModule.lessons.map(l => l.id);
      markModuleAsComplete(lessonIds);
      setCompletionModalOpen(true);
    }
  };

  const handleGoToNextModule = () => {
      setCompletionModalOpen(false);
      setCourseViewMode('LESSON_BROWSE');
      setSelectedModule(null);
      setSelectedLesson(null);
  };

  const handleGoToChapters = () => {
      setCompletionModalOpen(false);
      setCourseViewMode('CHAPTER_BROWSE');
      setSelectedChapter(null);
      setSelectedModule(null);
      setSelectedLesson(null);
  };

  const handleTermClick = (term: string) => {
    setTutorInitialPrompt(`Fadlan si faahfaahsan iigu sharax waxa loola jeedo "${term}" marka loo eego casharkan.`);
    setTutorOpen(true);
  };

  const toggleTheme = () => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleResetProgress = () => {
      if(window.confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
        resetProgress();
        setIsSettingsOpen(false);
      }
  };

  const handleViewCertificate = (discipline: Discipline) => {
      setSelectedDiscipline(discipline);
      setIsCourseActive(true);
      setCourseViewMode('CERTIFICATE');
  };

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  // --- Renders ---

  // 1. Course Player View (Full Screen, hides bottom nav)
  if (isCourseActive && selectedDiscipline) {
      return (
        <div className="flex flex-col h-screen font-sans bg-base-200 text-base-content overflow-hidden">
            <Header 
                onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
                onToggleTutor={() => setTutorOpen(!isTutorOpen)}
                disciplines={disciplines}
                onSelectDiscipline={handleSelectDiscipline}
                onGoHome={handleExitCourse}
                isCourseView={true}
                courseTitle={selectedDiscipline.name}
            />
            
            <div className="flex flex-1 overflow-hidden relative">
                 {/* Main Content Area based on sub-view mode */}
                 {courseViewMode === 'CHAPTER_BROWSE' && (
                     <ChapterBrowser discipline={selectedDiscipline} onSelectChapter={handleSelectChapter} />
                 )}

                 {courseViewMode === 'LESSON_BROWSE' && selectedChapter && (
                     <LessonBrowser chapter={selectedChapter} onSelectModule={handleSelectModule} />
                 )}

                 {courseViewMode === 'LEARN' && (
                    <>
                        <Sidebar 
                            levels={disciplineForView?.levels || []}
                            selectedLesson={selectedLesson}
                            onSelectLesson={handleSelectLesson}
                            isOpen={isSidebarOpen}
                            completedLessons={completedLessons}
                            isMobile={isMobile}
                            onClose={() => setSidebarOpen(false)}
                            unlockedLevels={unlockedLevels}
                            disciplineId={selectedDiscipline.id}
                        />
                         <main className="flex-1 overflow-y-auto bg-base-100">
                             {selectedModule ? (
                                <LessonReader 
                                    key={selectedModule.id}
                                    module={selectedModule}
                                    disciplineName={selectedDiscipline.name}
                                    completedLessons={completedLessons}
                                    onCompleteModule={handleCompleteModule}
                                    onTermClick={handleTermClick}
                                />
                             ) : (
                                 <div className="p-8 text-center text-gray-500">Select a lesson to start learning.</div>
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
                    </>
                 )}
                 
                 {courseViewMode === 'CERTIFICATE' && (
                     <Certificate disciplineName={selectedDiscipline.name} onGoHome={handleExitCourse} />
                 )}
            </div>

             {/* Completion Modal */}
             {isCompletionModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4" onClick={() => setCompletionModalOpen(false)}>
                    <div className="bg-base-100 border border-base-300 rounded-lg shadow-2xl p-8 max-w-lg w-full text-center relative" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setCompletionModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-base-content">
                            <XIcon className="h-6 w-6" />
                        </button>
                        <AcademicCapIcon className="h-16 w-16 mx-auto text-brand-secondary mb-4" />
                        <h2 className="text-2xl font-bold text-base-content mb-2">Hambalyo!</h2>
                        <p className="text-brand-gray mb-6">Waxaad si guul leh u dhammaysay qaybtan. Maxaad jeclaan lahayd inaad xigto?</p>
                        <div className="space-y-3">
                            <button
                                onClick={handleGoToNextModule}
                                className="w-full text-left flex items-center justify-between p-4 bg-base-200 hover:bg-base-300 rounded-lg transition-colors border border-base-300"
                            >
                                <span className="font-semibold text-base-content">Dooro Qayb Kale</span>
                                <BookOpenIcon className="h-6 w-6 text-brand-secondary" />
                            </button>
                            <button
                                onClick={handleGoToChapters}
                                className="w-full text-left flex items-center justify-between p-4 bg-base-200 hover:bg-base-300 rounded-lg transition-colors border border-base-300"
                            >
                                <span className="font-semibold text-base-content">Dib ugu laabo Cutubyada</span>
                                <BuildingIcon className="h-6 w-6 text-brand-secondary" />
                            </button>
                            <button
                                onClick={handleExitCourse}
                                className="w-full text-left flex items-center justify-between p-4 bg-base-200 hover:bg-base-300 rounded-lg transition-colors border border-base-300"
                            >
                                <span className="font-semibold text-base-content">Tag Bogga Hore</span>
                                <ArrowRightIcon className="h-6 w-6 text-brand-secondary" />
                            </button>
                        </div>
                    </div>
                </div>
             )}
        </div>
      );
  }

  // 2. Main Tabbed View (Explore, Learn, Search, etc.)
  return (
    <div className="flex flex-col h-screen font-sans bg-base-200 text-base-content overflow-hidden">
        
        <div className="flex-1 overflow-hidden relative">
            {activeTab === 'explore' && (
                <ExploreTab 
                    disciplines={disciplines}
                    onSelectDiscipline={handleSelectDiscipline}
                    getDownloadStatus={getDownloadStatus}
                    onAddDownload={addDownload}
                    onRemoveDownload={removeDownload}
                    onOpenNotifications={() => setNotificationsOpen(true)}
                    unreadNotifications={unreadCount}
                />
            )}
            
            {activeTab === 'learn' && (
                <LearnTab 
                    disciplines={disciplines}
                    getProgressForDiscipline={getProgressForDiscipline}
                    onSelectDiscipline={handleSelectDiscipline}
                    onOpenNotifications={() => setNotificationsOpen(true)}
                    unreadNotifications={unreadCount}
                />
            )}

            {activeTab === 'search' && (
                <SearchTab onSelectResult={handleSearchResultSelect} />
            )}

            {activeTab === 'career' && (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-base-200">
                    <AcademicCapIcon className="h-16 w-16 text-brand-gray mb-4" />
                    <h2 className="text-2xl font-bold text-base-content mb-2">Career Paths</h2>
                    <p className="text-brand-gray">Coming soon. Discover career paths tailored for you.</p>
                </div>
            )}

            {activeTab === 'profile' && (
                <ProfileTab 
                    disciplines={disciplines}
                    completedLessons={completedLessons}
                    onOpenSettings={() => setIsSettingsOpen(true)}
                    onViewCertificate={handleViewCertificate}
                />
            )}
        </div>

        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        
        {isSettingsOpen && (
            <SettingsView 
                onClose={() => setIsSettingsOpen(false)}
                isDarkMode={theme === 'dark'}
                toggleTheme={toggleTheme}
                onResetProgress={handleResetProgress}
            />
        )}

        <NotificationCenter 
            notifications={notifications}
            isOpen={isNotificationsOpen}
            onClose={() => setNotificationsOpen(false)}
            onMarkRead={markAsRead}
            onClearAll={clearNotifications}
            onMarkAllRead={markAllAsRead}
        />
    </div>
  );
};

export default App;
