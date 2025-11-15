
import React from 'react';
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
    <div className="bg-base-200/50 p-6 rounded-lg space-y-8">
      {lesson.quiz.map((quizItem, index) => {
        const selectedAnswer = answers[index];
        const isRevealed = revealed[index];
        
        return (
          <div key={index}>
            <p className="font-semibold mb-3">{index + 1}. {quizItem.question}</p>
            <div className="space-y-2">
              {quizItem.options.map(option => {
                const isSelected = selectedAnswer === option;
                let buttonClass = 'border-base-300 bg-base-100 hover:bg-base-200';
                
                if (isRevealed) {
                    if (option === quizItem.correctAnswer) {
                        buttonClass = 'border-green-500 bg-green-500/10 text-green-800 ring-2 ring-green-500';
                    } else if (isSelected && option !== quizItem.correctAnswer) {
                        buttonClass = 'border-red-500 bg-red-500/10 text-red-800';
                    }
                } else if (isSelected) {
                    buttonClass = 'border-brand-secondary bg-brand-secondary/10';
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
                <div className="mt-3 p-3 bg-yellow-500/10 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-sm font-semibold">Fasiraad (Sixidda Khaladka):</p>
                    <p className="text-sm text-gray-700">{quizItem.explanation}</p>
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
    
  const parseTextWithTerms = (text?: string) => {
      if (!text) return null;
      const parts = text.split(/(\[\[.*?\]\])/g);
      return <p>{parts.map((part, index) => {
          if (part.startsWith('[[') && part.endsWith(']]')) {
              const term = part.substring(2, part.length - 2);
              return (
                  <span
                      key={index}
                      className="underline text-brand-secondary font-semibold cursor-pointer hover:text-brand-accent transition-colors decoration-dotted"
                      onClick={() => onTermClick(term)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onTermClick(term)}
                      title={`Weydii AI-ga: Waa maxay ${term}?`}
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
            <h3 className="text-2xl font-bold text-brand-primary flex items-center mb-4">
                {React.cloneElement(icon, { className: "h-7 w-7 mr-3 text-brand-secondary" })}
                {title}
            </h3>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
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
    <div className="bg-base-100 min-h-full">
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <div className="mb-8 pb-8 border-b border-base-300">
                <p className="text-brand-secondary font-semibold mb-2">{disciplineName}</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">{module.title}</h1>
                <div className="w-full bg-base-200 rounded-full h-2.5 mt-6">
                    <div className={`h-2.5 rounded-full transition-all duration-500 ${isModuleCompleted ? 'bg-green-500' : 'bg-brand-accent'}`} style={{width: `${progressPercentage}%`}}></div>
                </div>
            </div>

            {module.lessons.map((lesson, index) => (
                <div key={lesson.id} className="py-8 mb-8 border-b-4 border-double border-base-300 last:border-b-0">
                    <div className="mb-8">
                        <span className="bg-brand-secondary text-white font-bold py-2 px-4 rounded-md">CASHARKA {index + 1}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mt-4">{lesson.title}</h2>
                    </div>

                    <figure className="my-10">
                        <img src={lesson.imageUrl} alt={lesson.title} className="w-full h-auto rounded-lg shadow-xl" />
                        <figcaption className="text-center text-sm text-gray-500 mt-3">Muuqaal sawireed la xiriira {lesson.title}.</figcaption>
                    </figure>

                    <div className="bg-brand-primary/5 border-l-4 border-brand-secondary rounded-r-lg p-6 mb-10">
                         {renderSection('Maxay Muhiim u Tahay Injineernimada Madaniga?', lesson.structuredContent.whyIsItImportant.content, <InformationCircleIcon />)}
                    </div>

                    {renderSection('Hordhac & Qeexitaan', lesson.structuredContent.whatIsIt.content, <LightBulbIcon />)}
                    {renderSection('Sidee Buu u Shaqeeyaa?', lesson.structuredContent.howItWorks.content, <BeakerIcon />)}
                    {renderSection('Tusaalooyin Dhab ah', lesson.structuredContent.examples.content, <PlayIcon />)}
                    {renderSection('Aqoonta Lagaa Rabo', lesson.structuredContent.prerequisites.content, <BookOpenIcon />)}
                    
                    <div className="my-12 py-8 border-t border-b border-base-300">
                         <h3 className="text-2xl font-bold text-brand-primary flex items-center mb-6 justify-center">
                            <CheckCircleIcon className="h-7 w-7 mr-3 text-brand-secondary" />
                            Hubi Fahamkaaga: {lesson.title}
                        </h3>
                        <KnowledgeCheck lesson={lesson} />
                    </div>

                    {renderSection('Soo Koobid', `**Soo koobid:** Casharkan waxaan si qoto dheer u eegnay **${lesson.title}**. Waxaan barannay ${lesson.structuredContent.whatIsIt.content.toLowerCase().substring(0, 100)}...`, <ClipboardListIcon />)}
                </div>
            ))}

            <div className="p-6 bg-base-200 rounded-lg shadow-inner mt-12">
                {isModuleCompleted && (
                    <div className="flex items-center justify-center px-6 py-2 bg-green-100 text-green-800 font-bold rounded-full mb-4">
                        <CheckCircleIcon className="h-6 w-6 mr-2" />
                        Qaybtan Waa La Dhammaystiray!
                    </div>
                )}
                <button 
                    onClick={onCompleteModule}
                    className="w-full flex items-center justify-center px-6 py-4 bg-brand-secondary text-white font-bold rounded-lg hover:bg-brand-secondary/90 transition-colors text-lg"
                >
                    Dhammee Qaybtan oo Dhan
                    <AcademicCapIcon className="h-6 w-6 ml-3" />
                </button>
            </div>
        </div>
    </div>
  );
};

export default LessonReader;
