import React from 'react';
// FIX: Import ContentSection to use as a type annotation.
import type { Lesson, StructuredContent, AdditionalContent, ContentSection } from '../types';
import { 
    CheckCircleIcon, ChevronRightIcon, AcademicCapIcon, ArrowUpIcon 
} from './Icons';

interface MainContentProps {
  lesson: Lesson;
  disciplineName: string;
  isCompleted: boolean;
  onCompleteAndNext: () => void;
  onCompleteAndFinish: () => void;
  isLastLessonOfDiscipline: boolean;
  isLastLessonOfLevel: boolean;
  onTermClick: (term: string) => void;
}

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
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
        <CheckCircleIcon className="h-6 w-6 mr-3 text-brand-secondary" />
        Hubinta Aqoonta
      </h3>
      <div className="bg-base-100 p-6 rounded-lg shadow-sm space-y-8">
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
                      <p className="text-sm font-semibold">Fasiraad:</p>
                      <p className="text-sm text-gray-700">{quizItem.explanation}</p>
                  </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
            {title}
        </h3>
        <div className="bg-base-100 p-6 rounded-lg shadow-sm text-gray-700 leading-relaxed prose max-w-none">
            {children}
        </div>
    </div>
);


const MainContent: React.FC<MainContentProps> = ({ 
    lesson, 
    disciplineName, 
    isCompleted, 
    onCompleteAndNext,
    onCompleteAndFinish,
    isLastLessonOfDiscipline,
    isLastLessonOfLevel,
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

  const renderNavigationButton = () => {
    if (isLastLessonOfDiscipline) {
        return (
            <button 
                onClick={onCompleteAndFinish}
                className="w-full flex items-center justify-center px-6 py-3 bg-brand-accent text-brand-primary font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
                Dhammee Koorsada oo Qaado Shahaadada
                <AcademicCapIcon className="h-5 w-5 ml-2" />
            </button>
        );
    }
    
    if (isLastLessonOfLevel) {
        return (
             <button 
                onClick={onCompleteAndNext}
                className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
            >
                Dhammee & Fur Heerka Xiga
                <ArrowUpIcon className="h-5 w-5 ml-2" />
            </button>
        );
    }

    return (
        <button 
            onClick={onCompleteAndNext}
            className="w-full flex items-center justify-center px-6 py-3 bg-brand-secondary text-white font-bold rounded-lg hover:bg-brand-secondary/90 transition-colors"
        >
            Dhammee & Sii Wad
            <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
    );
  };
  
  const structuredSections = Object.values(lesson.structuredContent);
  const additionalSections = Object.values(lesson.additionalContent).filter(Boolean);


  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <p className="text-brand-secondary font-semibold mb-1">{disciplineName}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary">{lesson.title}</h1>
        <div className="w-full bg-base-300 rounded-full h-2 mt-4">
            <div className={`h-2 rounded-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-yellow-500'}`} style={{width: isCompleted ? '100%' : '10%'}}></div>
        </div>
      </div>

      <figure className="my-8 bg-base-100 p-2 rounded-lg shadow-sm">
        <img src={lesson.imageUrl} alt={lesson.title} className="w-full h-auto max-h-96 rounded-lg shadow-lg object-cover" />
      </figure>
      
      {/* FIX: Add explicit type annotation for 'section' to resolve TypeScript error. */}
      {structuredSections.map((section: ContentSection) => (
          <Section key={section.title} title={section.title}>
              {parseTextWithTerms(section.content)}
          </Section>
      ))}

      {additionalSections.length > 0 && (
          <div className="mt-12 pt-8 border-t-2 border-brand-accent/30">
              <h2 className="text-3xl font-bold text-brand-primary text-center mb-8">Macluumaad Dheeraad ah</h2>
              {/* FIX: Add explicit type annotation for 'section' to resolve TypeScript error. */}
              {additionalSections.map((section: ContentSection) => (
                  section && (
                      <Section key={section.title} title={section.title}>
                          {parseTextWithTerms(section.content)}
                      </Section>
                  )
              ))}
          </div>
      )}

      <KnowledgeCheck lesson={lesson} />
      
      <div className="p-4 bg-base-100 rounded-lg shadow-inner mt-12">
          {isCompleted && (
             <div className="flex items-center justify-center px-6 py-2 bg-green-100 text-green-800 font-bold rounded-full mb-4">
                <CheckCircleIcon className="h-6 w-6 mr-2" />
                Casharka Waa La Dhammaystiray! Waad Sii Wadan Kartaa.
            </div>
          )}
          {renderNavigationButton()}
      </div>
    </div>
  );
};

export default MainContent;