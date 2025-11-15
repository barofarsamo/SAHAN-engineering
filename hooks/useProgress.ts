
import { useState, useEffect, useCallback } from 'react';
import type { SearchResult } from '../types';
import { disciplines } from '../constants';

const COMPLETED_LESSONS_KEY = 'sahan_completed_lessons';
const LAST_VIEWED_LESSON_KEY = 'sahan_last_viewed_lesson';

interface LastViewedInfo {
  disciplineId: string;
  lessonId: string;
}

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [lastViewedLesson, setLastViewedLesson] = useState<LastViewedInfo | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadProgress = () => {
      try {
        const completedJSON = localStorage.getItem(COMPLETED_LESSONS_KEY);
        const lastViewedJSON = localStorage.getItem(LAST_VIEWED_LESSON_KEY);
        
        if (completedJSON) {
          setCompletedLessons(new Set(JSON.parse(completedJSON)));
        }
        if (lastViewedJSON) {
          setLastViewedLesson(JSON.parse(lastViewedJSON));
        }
      } catch (error) {
        console.error("Failed to load progress from localStorage", error);
      } finally {
        setIsLoaded(true);
      }
    };

    // Set a random delay between 5 and 7 seconds
    const randomDelay = Math.random() * (7000 - 5000) + 5000;
    const timer = setTimeout(loadProgress, randomDelay);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const markLessonAsComplete = useCallback((lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      newSet.add(lessonId);
      try {
        localStorage.setItem(COMPLETED_LESSONS_KEY, JSON.stringify(Array.from(newSet)));
      } catch (error) {
        console.error("Failed to save completed lessons to localStorage", error);
      }
      return newSet;
    });
  }, []);

  const markModuleAsComplete = useCallback((lessonIds: string[]) => {
    setCompletedLessons(prev => {
        const newSet = new Set(prev);
        lessonIds.forEach(id => newSet.add(id));
        try {
            localStorage.setItem(COMPLETED_LESSONS_KEY, JSON.stringify(Array.from(newSet)));
        } catch (error) {
            console.error("Failed to save completed lessons to localStorage", error);
        }
        return newSet;
    });
  }, []);

  const setLastViewed = useCallback((disciplineId: string, lessonId: string) => {
    const info = { disciplineId, lessonId };
    setLastViewedLesson(info);
    try {
      localStorage.setItem(LAST_VIEWED_LESSON_KEY, JSON.stringify(info));
    } catch (error) {
        console.error("Failed to save last viewed lesson to localStorage", error);
    }
  }, []);
  
  const getProgressForDiscipline = useCallback((disciplineId: string): { completed: number; total: number } => {
    const discipline = disciplines.find(d => d.id === disciplineId);
    if (!discipline) return { completed: 0, total: 0 };

    let total = 0;
    let completed = 0;

    discipline.levels.forEach(level => {
      level.modules.forEach(module => {
        module.lessons.forEach(lesson => {
          total++;
          if (completedLessons.has(lesson.id)) {
            completed++;
          }
        });
      });
    });

    return { completed, total };
  }, [completedLessons]);
  
  const getLastViewedLessonData = useCallback((): SearchResult | null => {
      if (!lastViewedLesson) return null;
      
      const discipline = disciplines.find(d => d.id === lastViewedLesson.disciplineId);
      if (!discipline) return null;

      for (const level of discipline.levels) {
          for (const module of level.modules) {
              const lesson = module.lessons.find(l => l.id === lastViewedLesson.lessonId);
              if (lesson) {
                  return { discipline, level, module, lesson };
              }
          }
      }
      return null;
  }, [lastViewedLesson]);

  const getUnlockedLevels = useCallback((disciplineId: string): Set<string> => {
    const discipline = disciplines.find(d => d.id === disciplineId);
    if (!discipline) return new Set();

    const unlockedLevels = new Set<string>();

    if (discipline.levels.length > 0) {
        // The first level is always unlocked
        unlockedLevels.add(discipline.levels[0].id);
    }

    for (let i = 0; i < discipline.levels.length - 1; i++) {
        const currentLevel = discipline.levels[i];
        const nextLevel = discipline.levels[i + 1];

        // Check if all lessons in the current level are complete
        const lessonsInCurrentLevel = currentLevel.modules.flatMap(m => m.lessons);
        const allComplete = lessonsInCurrentLevel.every(l => completedLessons.has(l.id));

        if (allComplete) {
            unlockedLevels.add(nextLevel.id);
        } else {
            // If the current level isn't complete, no subsequent levels can be unlocked
            break;
        }
    }
    
    return unlockedLevels;
  }, [completedLessons]);

  return { 
    isLoaded,
    completedLessons, 
    markLessonAsComplete,
    markModuleAsComplete,
    lastViewedLessonInfo: lastViewedLesson,
    setLastViewed,
    getProgressForDiscipline,
    getLastViewedLessonData,
    getUnlockedLevels,
  };
};
