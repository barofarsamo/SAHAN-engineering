
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
    XIcon,
    ArrowUpIcon
} from './Icons';
import { useTTS } from '../hooks/useTTS';

// --- VINTAGE STYLES CONSTANTS ---
const PAPER_BG = "bg-[#fdfbf7]"; // Warm paper
const PAPER_DARKER = "bg-[#f4efe6]"; // Darker paper for headers/sections
const INK_COLOR = "text-[#2b2b2b]"; // Soft black/charcoal
const INK_LIGHT = "text-[#5e5e5e]";
const ACCENT_MAROON = "text-[#8a1c1c]";
const ACCENT_NAVY = "text-[#1c3d8a]";
const BORDER_COLOR = "border-[#dcd6cc]";
const FONT_SERIF = "font-serif";

const FormulaCard: React.FC<{ formula: Formula }> = ({ formula }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Collapsed State
    if (!isVisible) {
        return (
            <button 
                onClick={() => setIsVisible(true)}
                className={`w-full ${PAPER_DARKER} hover:bg-[#eaddcf] border border-[#c4bbaa] p-5 mb-8 flex items-center justify-between transition-all duration-300 group shadow-sm border-l-4 border-l-[#8a1c1c] rounded-r-lg`}
            >
                <div className="flex items-center">
                    <div className="h-12 w-12 flex items-center justify-center mr-5 border-2 border-[#8a1c1c] rounded-full bg-white group-hover:scale-105 transition-transform">
                        <span className={`font-serif italic font-bold ${ACCENT_MAROON} text-xl`}>ƒ</span>
                    </div>
                    <div className="text-left">
                        <p className={`text-[10px] font-bold ${INK_LIGHT} uppercase tracking-widest mb-1`}>Mathematical Model</p>
                        <h3 className={`text-lg md:text-xl font-bold ${INK_COLOR} ${FONT_SERIF}`}>{formula.name}</h3>
                    </div>
                </div>
                <div className={`flex items-center text-xs font-bold ${ACCENT_MAROON} uppercase tracking-widest bg-[#8a1c1c]/5 px-3 py-1.5 rounded-full`}>
                    View Formula
                    <ChevronDownIcon className="h-4 w-4 ml-2" />
                </div>
            </button>
        );
    }

    // Expanded State
    return (
        <div className={`relative mb-10 transition-all duration-500 ease-in-out`}>
             {/* Main Card Container */}
             <div className={`${PAPER_BG} border-4 double border-[#8a1c1c] p-6 md:p-8 relative shadow-xl`}>
                 
                 {/* Decorative Corner Triangles */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#8a1c1c]"></div>
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#8a1c1c]"></div>
                 <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#8a1c1c]"></div>
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#8a1c1c]"></div>

                 {/* Header */}
                 <div className="flex justify-between items-start mb-6 border-b border-[#c4bbaa] pb-4">
                     <div>
                        <span className={`block font-serif italic ${ACCENT_MAROON} text-sm mb-1`}>Theorem / Formula</span>
                        <h3 className={`text-2xl md:text-3xl font-bold ${INK_COLOR} ${FONT_SERIF}`}>{formula.name}</h3>
                     </div>
                     <button 
                        onClick={() => setIsVisible(false)}
                        className="p-2 text-[#8a1c1c] hover:bg-[#8a1c1c]/10 rounded-full transition-colors"
                        title="Collapse"
                     >
                         <ArrowUpIcon className="h-6 w-6" />
                     </button>
                 </div>

                 {/* Equation Display */}
                 <div className={`${PAPER_DARKER} p-8 border border-[#c4bbaa] mb-8 text-center shadow-inner rounded-sm`}>
                    <p className={`text-2xl md:text-4xl font-serif font-bold ${INK_COLOR} tracking-wide break-words`}>{formula.equation}</p>
                    {formula.description && (
                        <p className={`text-sm ${INK_LIGHT} mt-4 font-serif italic border-t border-[#c4bbaa] pt-4`}>
                            {formula.description}
                        </p>
                    )}
                 </div>

                 {/* Details Grid */}
                 <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left: Variables */}
                    <div>
                        <h4 className={`font-bold text-xs uppercase tracking-widest ${INK_LIGHT} mb-4 border-b-2 border-[#c4bbaa] inline-block pb-1`}>
                            Defined Variables
                        </h4>
                        <ul className="space-y-3">
                            {formula.variables.map((v, i) => (
                                <li key={i} className="flex items-start text-sm group">
                                    <span className={`font-serif font-bold ${ACCENT_NAVY} w-10 text-right mr-4 italic text-lg bg-[#eaddcf]/50 px-1 rounded`}>
                                        {v.symbol}
                                    </span>
                                    <div className="flex-1 border-b border-dotted border-[#c4bbaa] pb-1">
                                        <span className={`${INK_COLOR} font-serif`}>{v.definition}</span>
                                        {v.unit && <span className="ml-2 text-[10px] text-[#8a1c1c] font-mono bg-[#8a1c1c]/5 px-1 rounded">[{v.unit}]</span>}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Steps */}
                    <div>
                         <h4 className={`font-bold text-xs uppercase tracking-widest ${INK_LIGHT} mb-4 border-b-2 border-[#c4bbaa] inline-block pb-1`}>
                            Methodology
                         </h4>
                         <ol className="space-y-3">
                            {formula.steps.map((step, i) => (
                                <li key={i} className={`flex items-start text-sm ${INK_COLOR} font-serif`}>
                                    <span className="font-bold text-white bg-[#8a1c1c] h-5 w-5 rounded-full flex items-center justify-center text-[10px] mr-3 mt-0.5 flex-shrink-0">
                                        {i+1}
                                    </span>
                                    <span className="leading-relaxed">{step}</span>
                                </li>
                            ))}
                         </ol>
                    </div>
                 </div>
                 
                 {/* Footer: Application */}
                 <div className="mt-8 pt-6 border-t-2 border-[#c4bbaa] bg-[#fdfbf7]">
                     <div className="flex items-start bg-[#1c3d8a]/5 p-4 rounded border border-[#1c3d8a]/20">
                        <InformationCircleIcon className={`h-6 w-6 ${ACCENT_NAVY} mr-3 flex-shrink-0 mt-1`} />
                        <div>
                            <span className={`${ACCENT_NAVY} font-serif italic font-bold block mb-1`}>Real-World Application:</span>
                            <p className={`text-sm ${INK_COLOR} font-serif leading-relaxed`}>{formula.realWorldApplication}</p>
                        </div>
                     </div>
                 </div>

                 {/* Bottom Collapse Button */}
                 <button 
                    onClick={() => setIsVisible(false)}
                    className="w-full mt-6 py-2 text-center text-xs font-bold uppercase tracking-widest text-[#8a1c1c] hover:bg-[#8a1c1c]/5 border-t border-transparent hover:border-[#8a1c1c]/20 transition-all"
                 >
                     Close Formula Details
                 </button>
            </div>
        </div>
    );
};

const KnowledgeCheck: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [revealed, setRevealed] = React.useState<Record<number, boolean>>({});

  if (!lesson.quiz || lesson.quiz.length === 0) {
    return null;
  }

  const handleAnswerSelect = (exerciseIndex: number, option: string) => {
    // Prevent changing answer after it's revealed
    if (revealed[exerciseIndex]) return;
    
    setAnswers(prev => ({ ...prev, [exerciseIndex]: option }));
    // Auto reveal on selection to give immediate feedback
    setRevealed(prev => ({ ...prev, [exerciseIndex]: true }));
  };

  return (
    <div className="mt-16 pt-10 border-t-4 border-double border-[#c4bbaa]">
      <div className="text-center mb-10">
         <h2 className={`text-3xl font-serif font-bold ${INK_COLOR} mb-3`}>Knowledge Check</h2>
         <p className={`font-serif italic ${INK_LIGHT}`}>Verify your understanding of this chapter.</p>
         <div className="w-24 h-1 bg-[#8a1c1c] mx-auto mt-4"></div>
      </div>

      <div className="space-y-8">
        {lesson.quiz.map((quizItem, index) => {
          const selectedAnswer = answers[index];
          const isRevealed = revealed[index];
          
          return (
            <div key={index} className={`${PAPER_BG} p-6 border-2 border-[#c4bbaa] shadow-sm relative overflow-hidden`}>
              {/* Question Number Badge */}
              <div className="absolute top-0 left-0 bg-[#c4bbaa] text-[#fdfbf7] px-3 py-1 font-serif font-bold text-xs">
                  PROBLEM {index + 1}
              </div>

              <div className="mt-4 mb-6">
                  <p className={`font-serif text-xl ${INK_COLOR} leading-relaxed font-bold`}>{quizItem.question}</p>
              </div>
              
              <div className="space-y-3">
                {quizItem.options.map(option => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === quizItem.correctAnswer;
                  
                  let buttonClass = 'border-[#c4bbaa] bg-white hover:bg-[#f4efe6]';
                  let icon = <div className="w-5 h-5 rounded-full border border-gray-400"></div>;

                  if (isRevealed) {
                      if (isCorrect) {
                          buttonClass = 'border-green-600 bg-green-50 text-green-900 ring-1 ring-green-600';
                          icon = <CheckCircleIcon className="h-5 w-5 text-green-600" />;
                      } else if (isSelected && !isCorrect) {
                          buttonClass = 'border-red-600 bg-red-50 text-red-900 ring-1 ring-red-600';
                          icon = <div className="w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center text-xs font-bold text-red-600">✕</div>;
                      } else {
                          buttonClass = 'border-[#c4bbaa] opacity-50 bg-gray-50';
                      }
                  } else if (isSelected) {
                      buttonClass = 'border-[#1c3d8a] bg-[#1c3d8a]/5 text-[#1c3d8a] font-bold';
                      icon = <div className="w-5 h-5 rounded-full border-4 border-[#1c3d8a]"></div>;
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(index, option)}
                      disabled={isRevealed}
                      className={`w-full text-left p-4 border rounded-lg transition-all duration-200 text-lg font-serif flex items-center justify-between group ${buttonClass} ${INK_COLOR}`}
                    >
                      <span className="flex items-center gap-3">
                          {icon}
                          <span className={isRevealed && isCorrect ? 'font-bold' : ''}>{option}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback Section */}
              {isRevealed && (
                  <div className={`mt-6 p-5 border-l-4 ${answers[index] === quizItem.correctAnswer ? 'border-green-600 bg-green-50' : 'border-[#8a1c1c] bg-[#fdfbf7] border-t border-r border-b border-gray-200'} animate-fade-in font-serif`}>
                      <div className="flex items-start gap-3">
                          {answers[index] === quizItem.correctAnswer ? (
                              <LightBulbIcon className="h-6 w-6 text-green-700 mt-1 flex-shrink-0" />
                          ) : (
                              <InformationCircleIcon className="h-6 w-6 text-[#8a1c1c] mt-1 flex-shrink-0" />
                          )}
                          <div>
                              <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${answers[index] === quizItem.correctAnswer ? 'text-green-800' : 'text-[#8a1c1c]'}`}>
                                  {answers[index] === quizItem.correctAnswer ? 'Correct Analysis' : 'Correction'}
                              </p>
                              <p className={`${INK_COLOR} leading-relaxed italic`}>
                                  {quizItem.explanation}
                              </p>
                          </div>
                      </div>
                  </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
};

// Interactive Section Component (Vintage Style)
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
                        className={`${ACCENT_MAROON} font-bold cursor-pointer hover:underline decoration-dotted underline-offset-4 transition-colors`}
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
        <section className="mb-8 group">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-2 border-b-2 border-[#8a1c1c] mb-4 text-left group-hover:border-[#1c3d8a] transition-colors"
            >
                <div className="flex items-center">
                    <span className={`mr-3 ${ACCENT_MAROON}`}>
                        {React.cloneElement(icon, { className: "h-6 w-6" })}
                    </span>
                    <h3 className={`font-serif font-bold ${INK_COLOR} text-2xl tracking-wide`}>
                        {title}
                    </h3>
                </div>
                {isOpen ? 
                    <ChevronDownIcon className={`h-6 w-6 ${INK_LIGHT}`} /> : 
                    <ChevronRightIcon className={`h-6 w-6 ${INK_LIGHT}`} />
                }
            </button>
            
            {isOpen && (
                <div className={`prose prose-lg ${INK_COLOR} max-w-none font-serif leading-loose ${fontSize} px-2 md:px-4`}>
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

type TabType = 'content' | 'summary'; // Removed 'quiz' from Tabs, it's now embedded
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

  // Safety check: Ensure module and lessons exist
  if (!module || !module.lessons || module.lessons.length === 0) {
      return (
          <div className="flex items-center justify-center h-full p-8 text-center bg-[#fdfbf7]">
              <div>
                  <h2 className="text-xl font-bold text-[#8a1c1c] mb-2">Casharkan lama heli karo</h2>
                  <p className="text-[#5e5e5e]">Fadlan dib ugu laabo oo dooro cashar kale.</p>
              </div>
          </div>
      );
  }

  const activeLesson = module.lessons[activeLessonIndex];
  
  // Safety check: Ensure active lesson exists
  if (!activeLesson) {
       return (
          <div className="flex items-center justify-center h-full p-8 text-center bg-[#fdfbf7]">
              <div>
                  <h2 className="text-xl font-bold text-[#8a1c1c] mb-2">Cilad: Casharka waa maqan yahay</h2>
                  <button onClick={() => setActiveLessonIndex(0)} className="text-blue-600 underline">Dib u bilow</button>
              </div>
          </div>
      );
  }

  // Reset state when lesson changes
  useEffect(() => {
    setActiveTab('content');
    setActiveVideo(false);
    cancel();
    setScrollProgress(0);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [activeLessonIndex, cancel]);

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
          const content = [
              activeLesson.title,
              activeLesson.structuredContent.whatIsIt?.content || '',
              activeLesson.structuredContent.whyIsItImportant?.content || '',
              activeLesson.structuredContent.howItWorks?.content || '',
              activeLesson.structuredContent.examples?.content || ''
          ].join('. ');
          speak(content);
      }
  };

  return (
    <div className={`flex flex-col h-full ${PAPER_BG} relative`}>
        {/* Top Control Bar (Classic Style) */}
        <div className={`sticky top-0 z-20 ${PAPER_DARKER} border-b border-[#c4bbaa] shadow-sm`}>
            {/* Ribbon Progress Bar */}
            <div className="w-full bg-[#dcd6cc] h-1">
                <div 
                    className="h-full bg-[#8a1c1c] transition-all duration-150 ease-out" 
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
            
            <div className="flex items-center justify-between px-4 py-2 md:py-3">
                <div className="flex items-center overflow-hidden">
                   <div className="mr-3 border-r border-[#c4bbaa] pr-4">
                       <p className={`text-[10px] ${ACCENT_NAVY} uppercase tracking-widest font-bold font-serif`}>Chapter {module.lessons.findIndex(l => l.id === activeLesson.id) + 1}</p>
                       <h2 className={`text-sm md:text-base font-bold truncate ${INK_COLOR} ${FONT_SERIF}`}>{activeLesson.title}</h2>
                   </div>
                </div>
                
                <div className="flex items-center space-x-1 sm:space-x-3">
                    {supported && (
                        <button onClick={handleSpeak} className={`p-2 rounded hover:bg-[#dcd6cc] ${INK_COLOR} transition-colors`} title="Read Aloud">
                            {isPlaying && !isPaused ? <PauseIcon className="h-5 w-5 animate-pulse text-[#8a1c1c]" /> : <SpeakerIcon className="h-5 w-5" />}
                        </button>
                    )}
                    <button onClick={cycleFontSize} className={`p-2 rounded hover:bg-[#dcd6cc] ${INK_COLOR} transition-colors`} title="Text Size">
                        <TextSizeIcon className="h-5 w-5" />
                    </button>
                    <button className={`p-2 rounded hover:bg-[#dcd6cc] ${INK_COLOR} transition-colors hidden sm:block`} title="Bookmark">
                        <BookmarkIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Vintage Tabs */}
            <div className="flex px-4 border-t border-[#c4bbaa] justify-center space-x-8">
                {['content', 'summary'].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab as TabType)}
                        className={`py-2 text-sm font-serif font-bold uppercase tracking-widest border-b-4 transition-colors ${activeTab === tab ? 'border-[#8a1c1c] text-[#8a1c1c]' : 'border-transparent text-[#5e5e5e] hover:text-[#2b2b2b]'}`}
                    >
                        {tab === 'content' ? 'Course Material' : 'Summary & Notes'}
                    </button>
                ))}
            </div>
        </div>

        {/* Main Content Area */}
        <div 
            ref={contentRef}
            className={`flex-1 overflow-y-auto pb-32 ${PAPER_BG}`}
            onScroll={handleScroll}
        >
            <div className="max-w-3xl mx-auto p-6 md:p-12">
                
                {/* CONTENT TAB */}
                {activeTab === 'content' && (
                    <div className="animate-fade-in">
                        {/* Title Page Header */}
                        <div className="text-center mb-12 border-b-2 border-double border-[#c4bbaa] pb-8">
                            <p className={`${ACCENT_NAVY} font-serif italic text-lg mb-2`}>{disciplineName}</p>
                            <h1 className={`text-4xl md:text-5xl font-serif font-bold ${INK_COLOR} mb-4 leading-tight`}>{activeLesson.title}</h1>
                            <div className="flex items-center justify-center space-x-2 text-sm font-serif text-[#5e5e5e] italic">
                                <span>Est. Reading Time:</span>
                                <span className={`${ACCENT_MAROON} font-bold`}>{activeLesson.duration || '10 mins'}</span>
                            </div>
                        </div>

                        {/* Video Frame */}
                        <div className="mb-12 p-2 bg-white shadow-lg border border-[#c4bbaa] transform rotate-1 hover:rotate-0 transition-transform duration-500">
                             <div className="bg-black aspect-video relative group border border-gray-200">
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
                                            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                                         />
                                         <div className="absolute inset-0 flex items-center justify-center">
                                             <div className="h-20 w-20 bg-[#fdfbf7]/80 rounded-full flex items-center justify-center pl-1 border-2 border-[#2b2b2b] group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                                 <PlayIcon className="h-10 w-10 text-[#2b2b2b]" />
                                             </div>
                                         </div>
                                         <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#fdfbf7] border-t border-[#c4bbaa]">
                                             <p className={`${INK_COLOR} font-serif font-bold text-center`}>Fig 1.1: Visual Lecture Material</p>
                                         </div>
                                    </div>
                                 )}
                             </div>
                        </div>

                        {/* Interactive Text Content Sections - With Safety Checks */}
                        {activeLesson.structuredContent?.whatIsIt?.content && (
                            <LessonSection 
                                title="Definition" 
                                content={activeLesson.structuredContent.whatIsIt.content} 
                                icon={<LightBulbIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}
                        
                        {(activeLesson.structuredContent?.whyIsItImportant?.content) && (
                            <LessonSection 
                                title="Significance" 
                                content={activeLesson.structuredContent.whyIsItImportant.content} 
                                icon={<InformationCircleIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {/* Formula Card */}
                        {activeLesson.formula && <FormulaCard formula={activeLesson.formula} />}

                        {(activeLesson.structuredContent?.mainParts?.content) && (
                            <LessonSection 
                                title="Structure & Components" 
                                content={activeLesson.structuredContent.mainParts.content} 
                                icon={<BeakerIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {(activeLesson.structuredContent?.howItWorks?.content) && (
                            <LessonSection 
                                title="Mechanism" 
                                content={activeLesson.structuredContent.howItWorks.content} 
                                icon={<ClipboardListIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {(activeLesson.structuredContent?.examples?.content) && (
                            <LessonSection 
                                title="Case Studies" 
                                content={activeLesson.structuredContent.examples.content} 
                                icon={<PlayIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {(activeLesson.structuredContent?.prerequisites?.content) && (
                            <LessonSection 
                                title="Prerequisites" 
                                content={activeLesson.structuredContent.prerequisites.content} 
                                icon={<BookOpenIcon />}
                                fontSize={fontSize}
                                onTermClick={onTermClick}
                            />
                        )}

                        {/* Knowledge Check - Now Integrated at the Bottom */}
                        <KnowledgeCheck lesson={activeLesson} />

                    </div>
                )}

                {/* SUMMARY TAB */}
                {activeTab === 'summary' && (
                    <div className="max-w-2xl mx-auto animate-fade-in">
                        <div className={`${PAPER_DARKER} border-2 border-[#c4bbaa] p-8 shadow-inner`}>
                            <h3 className={`text-2xl font-serif font-bold ${ACCENT_NAVY} mb-6 text-center underline decoration-wavy underline-offset-4`}>
                                Chapter Summary
                            </h3>
                            <div className={`prose prose-lg ${INK_COLOR} font-serif leading-relaxed ${fontSize}`}>
                                <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#8a1c1c]">
                                    In this lesson covering <strong>{activeLesson.title}</strong>, we have explored the following fundamental concepts:
                                </p>
                                <ul className="list-disc pl-5 space-y-3 mt-4 marker:text-[#8a1c1c]">
                                    <li><strong className={ACCENT_MAROON}>Definition:</strong> {activeLesson.structuredContent.whatIsIt?.content?.substring(0, 100) || ''}...</li>
                                    <li><strong className={ACCENT_MAROON}>Importance:</strong> {activeLesson.structuredContent.whyIsItImportant?.content?.substring(0, 80) || ''}...</li>
                                    <li><strong className={ACCENT_MAROON}>Application:</strong> Real-world usage in {activeLesson.structuredContent.examples?.content?.substring(0, 50) || 'engineering projects'}...</li>
                                </ul>
                                <div className="mt-8 pt-6 border-t border-[#c4bbaa] text-center">
                                    <p className={`font-serif italic ${INK_LIGHT} text-lg`}>
                                        "Education is the most powerful weapon which you can use to change the world."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

        {/* Footer Navigation (Classic Buttons) */}
        <div className={`border-t border-[#c4bbaa] p-4 absolute bottom-[80px] left-0 right-0 z-20 ${PAPER_DARKER} shadow-[0_-5px_15px_rgba(0,0,0,0.05)]`}>
             <div className="flex items-center justify-between max-w-3xl mx-auto">
                 <button 
                    onClick={handlePrevLesson}
                    disabled={activeLessonIndex === 0}
                    className={`flex items-center px-4 py-2 text-sm font-bold font-serif uppercase tracking-widest ${INK_COLOR} hover:bg-[#dcd6cc] disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-[#c4bbaa] bg-[#fdfbf7]`}
                 >
                     <span className="mr-2">←</span> Previous
                 </button>
                 
                 <div className="hidden sm:flex space-x-2">
                     {module.lessons.map((_, idx) => (
                         <div 
                            key={idx} 
                            className={`h-2 w-2 rounded-full transition-all border border-[#5e5e5e] ${idx === activeLessonIndex ? 'bg-[#8a1c1c] scale-125' : 'bg-transparent'}`} 
                         />
                     ))}
                 </div>

                 <button 
                    onClick={handleNextLesson}
                    className={`flex items-center px-6 py-2 text-sm font-bold font-serif uppercase tracking-widest text-[#fdfbf7] bg-[#1c3d8a] hover:bg-[#152e6b] shadow-md transition-all border border-[#0f2354]`}
                 >
                     {activeLessonIndex === module.lessons.length - 1 ? 'Finish' : 'Next'} <span className="ml-2">→</span>
                 </button>
             </div>
        </div>
    </div>
  );
};

export default LessonReader;
