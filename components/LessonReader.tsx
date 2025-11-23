
import React, { useState } from 'react';
import type { Lesson, Module } from '../types';
import { 
    CheckCircleIcon,
    AcademicCapIcon,
    BookOpenIcon, 
    InformationCircleIcon, 
    LightBulbIcon, 
    PlayIcon, 
    ClipboardListIcon, 
    BeakerIcon 
} from './Icons';

const KnowledgeCheck: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [revealed, setRevealed] = React.useState<Record<number, boolean>>({});

  if (!lesson.quiz || lesson.quiz.length === 0) {
    return null;
  }

  const handleAnswerSelect = (exerciseIndex: number, option: string) => {
    setAnswers(prev => ({ ...prev, [exerciseIndex]: option }));
    setRevealed(prev => ({ ...prev, [exerciseIndex]: true }));
  };

  return (
    <div className="bg-base-200 p-6 rounded-lg space-y-8 border border-base-300">
      {lesson.quiz.map((quizItem, index) => {
        const selectedAnswer = answers[index];
        const isRevealed = revealed[index];
        
        return (
          <div key={index}>
            <p className="font-semibold mb-3 text-white">{index + 1}. {quizItem.question}</p>
            <div className="space-y-2">
              {quizItem.options.map(option => {
                const isSelected = selectedAnswer === option;
                let buttonClass = 'border-base-300 bg-base-100 hover:bg-base-300 text-gray-300';
                
                if (isRevealed) {
                    if (option === quizItem.correctAnswer) {
                        buttonClass = 'border-green-600 bg-green-900/30 text-green-300 ring-1 ring-green-600';
                    } else if (isSelected && option !== quizItem.correctAnswer) {
                        buttonClass = 'border-red-600 bg-red-900/30 text-red-300';
                    }
                } else if (isSelected) {
                    buttonClass = 'border-brand-secondary bg-brand-secondary/20 text-brand-secondary';
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(index, option)}
                    disabled={isRevealed}
                    className={`w-full text-left p-3 border rounded-lg transition-colors text-sm ${buttonClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {isRevealed && (
                <div className="mt-3 p-3 bg-yellow-900/20 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-sm font-semibold text-yellow-500">Explanation:</p>
                    <p className="text-sm text-gray-300">{quizItem.explanation}</p>
                </div>
            )}
          </div>
        )
      })}
    </div>
  );
};

interface LessonReaderProps {
  module: Module;
  disciplineName: string;
  completedLessons: Set<string>;
  onCompleteModule: () => void;
  onTermClick: (term: string) => void;
}

const LessonReader: React.FC<LessonReaderProps> = ({ 
    module,
    disciplineName,
    completedLessons,
    onCompleteModule,
    onTermClick
}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
    
  const parseTextWithTerms = (text?: string) => {
      if (!text) return null;
      const parts = text.split(/(\[\[.*?\]\])/g);
      return <p>{parts.map((part, index) => {
          if (part.startsWith('[[') && part.endsWith(']]')) {
              const term = part.substring(2, part.length - 2);
              return (
                  <span
                      key={index}
                      className="text-brand-secondary font-bold cursor-pointer hover:text-white transition-colors border-b border-dotted border-brand-secondary"
                      onClick={() => onTermClick(term)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onTermClick(term)}
                      title={`Ask AI Tutor: What is ${term}?`}
                  >
                      {term}
                  </span>
              );
          }
          return part;
      })}</p>;
  };

  const renderSection = (title: string, content: string | undefined, icon: React.ReactElement) => {
    if (!content) return null;
    return (
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center mb-4">
                {React.cloneElement(icon, { className: "h-7 w-7 mr-3 text-brand-secondary" })}
                {title}
            </h3>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                {parseTextWithTerms(content)}
            </div>
        </div>
    );
  };
  
  const completedInModule = module.lessons.filter(l => completedLessons.has(l.id)).length;
  const totalInModule = module.lessons.length;
  const isModuleCompleted = completedInModule === totalInModule;
  const progressPercentage = totalInModule > 0 ? (completedInModule / totalInModule) * 100 : 0;

  return (
    <div className="bg-base-100 min-h-full pb-20">
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <div className="mb-8 pb-8 border-b border-base-300">
                <p className="text-brand-secondary font-semibold mb-2 text-sm uppercase tracking-wider">{disciplineName}</p>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{module.title}</h1>
                <div className="w-full bg-base-300 rounded-full h-2.5 mt-6">
                    <div className={`h-2.5 rounded-full transition-all duration-500 ${isModuleCompleted ? 'bg-green-500' : 'bg-brand-secondary'}`} style={{width: `${progressPercentage}%`}}></div>
                </div>
            </div>

            {module.lessons.map((lesson, index) => (
                <div key={lesson.id} className="py-8 mb-8 border-b-4 border-double border-base-300 last:border-b-0">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                             <span className="bg-brand-secondary/20 text-brand-secondary font-bold py-1 px-3 rounded text-xs uppercase mr-2">Lesson {index + 1}</span>
                             <span className="text-gray-400 text-xs font-mono">{lesson.duration}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">{lesson.title}</h2>
                    </div>

                    {/* Video Player */}
                    <div 
                        className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-base-300 mb-8 group cursor-pointer"
                        onClick={() => {
                            if (lesson.videoUrl) setActiveVideo(lesson.id);
                        }}
                    >
                        {activeVideo === lesson.id && lesson.videoUrl ? (
                            <iframe 
                                src={lesson.videoUrl} 
                                title={lesson.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        ) : (
                            <>
                                <img src={lesson.imageUrl} alt={lesson.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="h-16 w-16 bg-brand-secondary rounded-full flex items-center justify-center pl-1 shadow-2xl transform group-hover:scale-110 transition-transform">
                                        <PlayIcon className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-white font-bold text-sm bg-black/50 px-2 py-1 rounded">
                                        {lesson.videoUrl ? 'Watch Video Lecture' : 'Start Reading'}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="bg-brand-secondary/10 border-l-4 border-brand-secondary rounded-r-lg p-6 mb-10">
                         {renderSection('Importance', lesson.structuredContent.whyIsItImportant.content, <InformationCircleIcon />)}
                    </div>

                    {renderSection('Definition', lesson.structuredContent.whatIsIt.content, <LightBulbIcon />)}
                    {renderSection('How it Works', lesson.structuredContent.howItWorks.content, <BeakerIcon />)}
                    {renderSection('Real World Examples', lesson.structuredContent.examples.content, <PlayIcon />)}
                    {renderSection('Prerequisites', lesson.structuredContent.prerequisites.content, <BookOpenIcon />)}
                    
                    <div className="my-12 py-8 border-t border-b border-base-300">
                         <h3 className="text-2xl font-bold text-white flex items-center mb-6 justify-center">
                            <CheckCircleIcon className="h-7 w-7 mr-3 text-brand-secondary" />
                            Knowledge Check
                        </h3>
                        <KnowledgeCheck lesson={lesson} />
                    </div>

                    {renderSection('Summary', `**Soo koobid:** Casharkan waxaan si qoto dheer u eegnay **${lesson.title}**. Waxaan barannay ${lesson.structuredContent.whatIsIt.content.toLowerCase().substring(0, 100)}...`, <ClipboardListIcon />)}
                </div>
            ))}

            <div className="p-6 bg-base-200 rounded-lg shadow-inner mt-12 border border-base-300">
                {isModuleCompleted && (
                    <div className="flex items-center justify-center px-6 py-2 bg-green-900/30 text-green-400 font-bold rounded-full mb-4 border border-green-800">
                        <CheckCircleIcon className="h-6 w-6 mr-2" />
                        Module Completed!
                    </div>
                )}
                <button 
                    onClick={onCompleteModule}
                    className="w-full flex items-center justify-center px-6 py-4 bg-brand-secondary text-white font-bold rounded-lg hover:bg-brand-secondary/90 transition-colors text-lg"
                >
                    Mark Module as Complete
                    <AcademicCapIcon className="h-6 w-6 ml-3" />
                </button>
            </div>
        </div>
    </div>
  );
};

export default LessonReader;
