
import React, { useState, useEffect, useRef } from 'react';
import type { Lesson, Module, Formula } from '../types';
import { 
    CheckCircleIcon,
    AcademicCapIcon,
    BookOpenIcon, 
    InformationCircleIcon, 
    LightBulbIcon, 
    PlayIcon, 
    ClipboardListIcon, 
    BeakerIcon,
    SpeakerIcon,
    PauseIcon,
    TextSizeIcon,
    BookmarkIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    XIcon
} from './Icons';
import { useTTS } from '../hooks/useTTS';

const FormulaCard: React.FC<{ formula: Formula }> = ({ formula }) => {
    const [isVisible, setIsVisible] = useState(false);

    if (!isVisible) {
        return (
            <button 
                onClick={() => setIsVisible(true)}
                className="w-full bg-base-200 hover:bg-base-300 border border-base-300 rounded-xl p-4 mb-6 flex items-center justify-between transition-all group animate-fade-in shadow-sm"
            >
                <div className="flex items-center">
                    <div className="h-12 w-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mr-4 border border-brand-accent/20">
                        <span className="font-serif italic font-bold text-brand-accent text-xl">f(x)</span>
                    </div>
                    <div className="text-left">
                        <p className="text-[10px] font-bold text-brand-gray uppercase tracking-wider mb-0.5">Mathematical Model</p>
                        <h3 className="text-base font-bold text-base-content group-hover:text-brand-secondary transition-colors">{formula.name}</h3>
                    </div>
                </div>
                <div className="flex items-center text-xs font-bold text-brand-secondary bg-brand-secondary/5 px-4 py-2 rounded-lg border border-brand-secondary/10 group-hover:bg-brand-secondary group-hover:text-white transition-all">
                    Fiiri Qaacidada
                    <ChevronDownIcon className="h-4 w-4 ml-2" />
                </div>
            </button>
        );
    }

    return (
        <div className="bg-base-200 rounded-xl border-l-4 border-brand-accent p-6 mb-8 shadow-md animate-fade-in-up relative overflow-hidden group">
             {/* Close Button */}
             <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 p-2 text-gray-400 hover:text-base-content hover:bg-base-300 rounded-full transition-colors z-20"
                title="Qari"
             >
                 <XIcon className="h-5 w-5" />
             </button>

             {/* Background Pattern */}
             <div className="absolute -right-10 -top-10 opacity-5 transform rotate-12 pointer-events-none">
                <span className="text-9xl font-serif">∫</span>
             </div>

             <h3 className="flex items-center text-lg font-bold text-base-content mb-4 relative z-10 pr-8">
                <span className="p-2 bg-brand-accent/10 rounded-lg mr-3 text-brand-accent font-mono border border-brand-accent/20 text-sm">f(x)</span>
                {formula.name}
             </h3>

             <div className="bg-base-100 p-6 rounded-lg mb-6 text-center border border-base-300 shadow-inner relative z-10">
                <p className="text-xl md:text-3xl font-mono font-bold text-brand-primary tracking-wider break-words">{formula.equation}</p>
                <p className="text-sm text-brand-gray mt-3 font-medium border-t border-base-200 pt-3">{formula.description}</p>
             </div>

             <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-brand-gray mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-secondary mr-2"></span>
                        Doorsoomayaasha (Variables)
                    </h4>
                    <ul className="space-y-2">
                        {formula.variables.map((v, i) => (
                            <li key={i} className="flex items-center justify-between text-sm bg-base-100 p-2.5 rounded border border-base-300 hover:border-brand-secondary/50 transition-colors">
                                <div className="flex items-center">
                                    <span className="font-mono font-bold text-brand-secondary w-8 text-center bg-brand-secondary/5 rounded py-0.5 mr-3">{v.symbol}</span>
                                    <span className="text-base-content/90 font-medium">{v.definition}</span>
                                </div>
                                {v.unit && <span className="text-[10px] bg-base-200 px-2 py-1 rounded text-gray-500 font-mono border border-base-300">{v.unit}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                     <h4 className="font-bold text-xs uppercase tracking-wider text-brand-gray mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Tallaabooyinka Xalinta
                     </h4>
                     <ol className="space-y-2">
                        {formula.steps.map((step, i) => (
                            <li key={i} className="flex text-sm text-base-content/80">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-base-300 flex items-center justify-center text-[10px] font-bold text-gray-600 mr-3 mt-0.5">{i+1}</span>
                                <span>{step}</span>
                            </li>
                        ))}
                     </ol>
                </div>
             </div>
             
             <div className="mt-6 pt-4 border-t border-base-300 relative z-10">
                 <h4 className="font-bold text-xs uppercase tracking-wider text-brand-secondary mb-2">Codsiga Nolosha Dhabta ah</h4>
                 <div className="flex items-start bg-brand-secondary/5 p-3 rounded-lg border border-brand-secondary/10">
                    <LightBulbIcon className="h-5 w-5 text-brand-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-base-content italic font-medium leading-relaxed">"{formula.realWorldApplication}"</p>
                 </div>
             </div>
        </div>
    );
};

const KnowledgeCheck: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [revealed, setRevealed] = React.useState<Record<number, boolean>>({});

  if (!lesson.quiz || lesson.quiz.length === 0) {
    return <div className="text-center p-8 text-gray-500">No quiz available for this lesson.</div>;
  }

  const handleAnswerSelect = (exerciseIndex: number, option: string) => {
    setAnswers(prev => ({ ...prev, [exerciseIndex]: option }));
    setRevealed(prev => ({ ...prev, [exerciseIndex]: true }));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {lesson.quiz.map((quizItem, index) => {
        const selectedAnswer = answers[index];
        const isRevealed = revealed[index];
        
        return (
          <div key={index} className="bg-base-200 p-6 rounded-xl border border-base-300 shadow-sm">
            <div className="flex items-start mb-4">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-secondary text-white text-xs font-bold flex items-center justify-center mr-3 mt-0.5">{index + 1}</span>
                <p className="font-semibold text-lg text-base-content leading-relaxed">{quizItem.question}</p>
            </div>
            <div className="space-y-3 pl-9">
              {quizItem.options.map(option => {
                const isSelected = selectedAnswer === option;
                let buttonClass = 'border-base-300 bg-base-100 hover:bg-base-300 text-base-content';
                
                if (isRevealed) {
                    if (option === quizItem.correctAnswer) {
                        buttonClass = 'border-green-500 bg-green-500/10 text-green-600 ring-1 ring-green-500 font-medium';
                    } else if (isSelected && option !== quizItem.correctAnswer) {
                        buttonClass = 'border-red-500 bg-red-500/10 text-red-600 font-medium';
                    } else {
                        buttonClass = 'border-base-300 opacity-50';
                    }
                } else if (isSelected) {
                    buttonClass = 'border-brand-secondary bg-brand-secondary/10 text-brand-secondary font-medium';
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(index, option)}
                    disabled={isRevealed}
                    className={`w-full text-left p-4 border rounded-xl transition-all duration-200 text-base flex items-center justify-between group ${buttonClass}`}
                  >
                    <span>{option}</span>
                    {isRevealed && option === quizItem.correctAnswer && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                  </button>
                );
              })}
            </div>
            {isRevealed && (
                <div className="mt-4 ml-9 p-4 bg-base-100 rounded-lg border-l-4 border-brand-accent">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray mb-1">FAAHFAAHIN</p>
                    <p className="text-sm text-base-content">{quizItem.explanation}</p>
                </div>
            )}
          </div>
        )
      })}
    </div>
  );
};

// Interactive Section Component
const LessonSection: React.FC<{
    title: string;
    content: string;
    icon: React.ReactElement;
    fontSize: string;
    onTermClick: (term: string) => void;
}> = ({ title, content, icon, fontSize, onTermClick }) => {
    const [isOpen, setIsOpen] = useState(true);

    const parseTextWithTerms = (text?: string) => {
        if (!text) return null;
        const parts = text.split(/(\[\[.*?\]\])/g);
        return <span>{parts.map((part, index) => {
            if (part.startsWith('[[') && part.endsWith(']]')) {
                const term = part.substring(2, part.length - 2);
                return (
                    <span
                        key={index}
                        className="text-brand-secondary font-bold cursor-pointer hover:underline decoration-dotted underline-offset-4 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            onTermClick(term);
                        }}
                    >
                        {term}
                    </span>
                );
            }
            return part;
        })}</span>;
    };

    return (
        <section className="mb-6 animate-fade-in-up bg-base-100 border border-base-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-base-200/50 hover:bg-base-200 transition-colors text-left"
            >
                <div className="flex items-center">
                    <span className="p-2 bg-brand-secondary/10 rounded-lg mr-3">
                        {React.cloneElement(icon, { className: "h-5 w-5 text-brand-secondary" })}
                    </span>
                    <h3 className={`font-bold text-brand-primary ${fontSize === 'text-xl' ? 'text-xl' : 'text-lg'}`}>
                        {title}
                    </h3>
                </div>
                {isOpen ? 
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" /> : 
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                }
            </button>
            
            {isOpen && (
                <div className={`p-4 prose prose-base dark:prose-invert max-w-none text-base-content/80 leading-relaxed border-t border-base-300 ${fontSize}`}>
                    {parseTextWithTerms(content)}
                </div>
            )}
        </section>
    );
};

interface LessonReaderProps {
  module: Module;
  disciplineName: string;
  completedLessons: Set<string>;
  onCompleteModule: () => void;
  onTermClick: (term: string) => void;
}

type TabType = 'content' | 'quiz' | 'summary';
type FontSize = 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';

const LessonReader: React.FC<LessonReaderProps> = ({ 
    module,
    disciplineName,
    completedLessons,
    onCompleteModule,
    onTermClick
}) => {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('content');
  const [activeVideo, setActiveVideo] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<FontSize>('text-base');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const { speak, pause, resume, cancel, isPlaying, isPaused, supported } = useTTS();

  const activeLesson = module.lessons[activeLessonIndex];
  
  // Reset state when lesson changes
  useEffect(() => {
    setActiveTab('content');
    setActiveVideo(false);
    cancel();
    setScrollProgress(0);
    // Scroll to top
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [activeLessonIndex, cancel]);

  // Handle Scroll Progress
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
  };

  const handleNextLesson = () => {
      if (activeLessonIndex < module.lessons.length - 1) {
          setActiveLessonIndex(prev => prev + 1);
      } else {
          onCompleteModule();
      }
  };

  const handlePrevLesson = () => {
      if (activeLessonIndex > 0) {
          setActiveLessonIndex(prev => prev - 1);
      }
  };

  const cycleFontSize = () => {
      const sizes: FontSize[] = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
      const currentIdx = sizes.indexOf(fontSize);
      setFontSize(sizes[(currentIdx + 1) % sizes.length]);
  };

  const handleSpeak = () => {
      if (isPlaying) {
          pause();
      } else if (isPaused) {
          resume();
      } else {
          // Construct full text to read
          const content = [
              activeLesson.title,
              activeLesson.structuredContent.whatIsIt.content,
              activeLesson.structuredContent.whyIsItImportant.content,
              activeLesson.structuredContent.howItWorks.content,
              activeLesson.structuredContent.examples.content
          ].join('. ');
          speak(content);
      }
  };

  return (
    <div className="flex flex-col h-full bg-base-100 relative">
        {/* Top Control Bar (Sticky) */}
        <div className="sticky top-0 z-20 bg-base-100/95 backdrop-blur-sm border-b border-base-300 shadow-sm">
            {/* Enhanced Progress Bar */}
            <div className="h-1.5 w-full bg-base-200">
                <div 
                    className="h-full bg-gradient-to-r from-brand-secondary to-brand-accent transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,86,210,0.5)]" 
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
            
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center overflow-hidden">
                   <div className="mr-3">
                       <p className="text-[10px] text-brand-gray uppercase tracking-widest font-bold">MODULE {module.lessons.findIndex(l => l.id === activeLesson.id) + 1} OF {module.lessons.length}</p>
                       <h2 className="text-sm font-bold truncate text-base-content max-w-[150px] sm:max-w-xs">{activeLesson.title}</h2>
                   </div>
                </div>
                
                <div className="flex items-center space-x-1 sm:space-x-2">
                    {supported && (
                        <button onClick={handleSpeak} className="p-2 rounded-full hover:bg-base-200 text-base-content transition-colors" title="Listen to lesson">
                            {isPlaying && !isPaused ? <PauseIcon className="h-5 w-5 text-brand-secondary animate-pulse" /> : <SpeakerIcon className="h-5 w-5" />}
                        </button>
                    )}
                    <button onClick={cycleFontSize} className="p-2 rounded-full hover:bg-base-200 text-base-content transition-colors" title="Change text size">
                        <TextSizeIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-base-200 text-base-content transition-colors hidden sm:block" title="Bookmark">
                        <BookmarkIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex px-4 border-t border-base-300">
                <button 
                    onClick={() => setActiveTab('content')}
                    className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'content' ? 'border-brand-secondary text-brand-secondary' : 'border-transparent text-gray-500 hover:text-base-content'}`}
                >
                    Casharka
                </button>
                <button 
                    onClick={() => setActiveTab('quiz')}
                    className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'quiz' ? 'border-brand-secondary text-brand-secondary' : 'border-transparent text-gray-500 hover:text-base-content'}`}
                >
                    Imtixaanka
                </button>
                <button 
                    onClick={() => setActiveTab('summary')}
                    className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'summary' ? 'border-brand-secondary text-brand-secondary' : 'border-transparent text-gray-500 hover:text-base-content'}`}
                >
                    Soo Koobid
                </button>
            </div>
        </div>

        {/* Main Content Area */}
        <div 
            ref={contentRef}
            className="flex-1 overflow-y-auto pb-32" // Added pb-32 to allow space for nav and footer
            onScroll={handleScroll}
        >
            <div className="max-w-3xl mx-auto p-4 md:p-8">
                
                {/* CONTENT TAB */}
                {activeTab === 'content' && (
                    <div className="animate-fade-in space-y-6">
                        {/* Video Header */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-base-300 bg-black aspect-video relative group">
                             {activeVideo && activeLesson.videoUrl ? (
                                <iframe 
                                    src={activeLesson.videoUrl + "?autoplay=1"} 
                                    title={activeLesson.title}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                />
                             ) : (
                                <div onClick={() => activeLesson.videoUrl && setActiveVideo(true)} className="w-full h-full cursor-pointer relative">
                                     <img 
                                        src={activeLesson.imageUrl} 
                                        alt={activeLesson.title} 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" 
                                     />
                                     <div className="absolute inset-0 flex items-center justify-center">
                                         <div className="h-16 w-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 border border-white/50 group-hover:scale-110 transition-transform duration-300">
                                             <PlayIcon className="h-8 w-8 text-white drop-shadow-md" />
                                         </div>
                                     </div>
                                     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                         <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">Video Lesson</p>
                                         <p className="text-white font-bold truncate">{activeLesson.title}</p>
                                         <p className="text-gray-300 text-xs mt-1">{activeLesson.duration}</p>
                                     </div>
                                </div>
                             )}
                        </div>

                        {/* Interactive Text Content Sections */}
                        {activeLesson.structuredContent.whatIsIt.content && (
                            <LessonSection 
                                title="Qeexitaan & Faahfaahin" 
                                content={activeLesson.structuredContent.whatIsIt.content} 
                                icon={<LightBulbIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}
                        
                        {(activeLesson.structuredContent.whyIsItImportant.content) && (
                            <LessonSection 
                                title="Muhiimadda" 
                                content={activeLesson.structuredContent.whyIsItImportant.content} 
                                icon={<InformationCircleIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {/* Formula Card - Display after basics */}
                        {activeLesson.formula && <FormulaCard formula={activeLesson.formula} />}

                        {(activeLesson.structuredContent.mainParts.content) && (
                            <LessonSection 
                                title="Qaab Dhismeedka" 
                                content={activeLesson.structuredContent.mainParts.content} 
                                icon={<BeakerIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {(activeLesson.structuredContent.howItWorks.content) && (
                            <LessonSection 
                                title="Habka Shaqada" 
                                content={activeLesson.structuredContent.howItWorks.content} 
                                icon={<ClipboardListIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {(activeLesson.structuredContent.examples.content) && (
                            <LessonSection 
                                title="Tusaalooyinka Nolosha" 
                                content={activeLesson.structuredContent.examples.content} 
                                icon={<PlayIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {(activeLesson.structuredContent.prerequisites.content) && (
                            <LessonSection 
                                title="Shuruudaha" 
                                content={activeLesson.structuredContent.prerequisites.content} 
                                icon={<BookOpenIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}
                    </div>
                )}

                {/* QUIZ TAB */}
                {activeTab === 'quiz' && (
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <div className="h-16 w-16 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AcademicCapIcon className="h-8 w-8 text-brand-secondary" />
                            </div>
                            <h2 className="text-2xl font-bold text-base-content">Hubi Fahamkaaga</h2>
                            <p className="text-gray-500 mt-2">Ka jawaab su'aalahan si aad u hubiso inaad fahantay casharka.</p>
                        </div>
                        <KnowledgeCheck lesson={activeLesson} />
                    </div>
                )}

                {/* SUMMARY TAB */}
                {activeTab === 'summary' && (
                    <div className="max-w-2xl mx-auto animate-fade-in">
                        <div className="bg-brand-secondary/5 border border-brand-secondary/20 rounded-xl p-6 md:p-8">
                            <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center">
                                <ClipboardListIcon className="h-6 w-6 mr-2 text-brand-secondary" />
                                Soo Koobidda Casharka
                            </h3>
                            <div className={`prose prose-base dark:prose-invert leading-relaxed ${fontSize}`}>
                                <p>
                                    Casharkan <strong>{activeLesson.title}</strong>, waxaan ku barannay qodobadan muhiimka ah:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-brand-secondary">
                                    <li><strong>Qeexitaanka:</strong> {activeLesson.structuredContent.whatIsIt.content.substring(0, 100)}...</li>
                                    <li><strong>Muhiimadda:</strong> {activeLesson.structuredContent.whyIsItImportant.content.substring(0, 80)}...</li>
                                    <li><strong>Codsiga:</strong> Waxaa loo isticmaalaa xaaladaha dhabta ah sida {activeLesson.structuredContent.examples.content.substring(0, 50)}...</li>
                                </ul>
                                <p className="mt-6 font-medium italic text-brand-gray">
                                    "Waxbarashadu waa hubka ugu awoodda badan ee aad u isticmaali karto inaad dunida ku beddesho."
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

        {/* Footer Navigation (Next/Prev) */}
        <div className="bg-base-100 border-t border-base-300 p-4 absolute bottom-[80px] left-0 right-0 z-20 shadow-[0_-5px_10px_rgba(0,0,0,0.1)]">
             <div className="flex items-center justify-between max-w-3xl mx-auto">
                 <button 
                    onClick={handlePrevLesson}
                    disabled={activeLessonIndex === 0}
                    className="flex items-center px-4 py-2 rounded-lg text-sm font-bold text-base-content hover:bg-base-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                 >
                     <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                     Previous
                 </button>
                 
                 <div className="hidden sm:flex space-x-1">
                     {module.lessons.map((_, idx) => (
                         <div 
                            key={idx} 
                            className={`h-1.5 w-1.5 rounded-full transition-colors ${idx === activeLessonIndex ? 'bg-brand-secondary scale-125' : 'bg-base-300'}`} 
                         />
                     ))}
                 </div>

                 <button 
                    onClick={handleNextLesson}
                    className="flex items-center px-6 py-2 rounded-lg text-sm font-bold bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-lg shadow-brand-secondary/20 transition-all hover:translate-x-1"
                 >
                     {activeLessonIndex === module.lessons.length - 1 ? 'Finish Module' : 'Next Lesson'}
                     <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                 </button>
             </div>
        </div>
    </div>
  );
};

export default LessonReader;
