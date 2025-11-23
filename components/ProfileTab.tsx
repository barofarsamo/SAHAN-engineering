
import React, { useMemo } from 'react';
import { UserCircleIcon, GearIcon, AcademicCapIcon, ChevronRightIcon, CheckCircleIcon } from './Icons';
import type { Discipline } from '../types';

interface ProfileTabProps {
  disciplines: Discipline[];
  completedLessons: Set<string>;
  onOpenSettings: () => void;
  onViewCertificate: (discipline: Discipline) => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ 
    disciplines, 
    completedLessons, 
    onOpenSettings,
    onViewCertificate 
}) => {

  const completedDisciplines = useMemo(() => {
    return disciplines.filter(d => {
       // Check if at least the first module is fully complete to simulate "some" certificate progress
       // In a real app, you'd check everything. For demo, if > 5 lessons are done in a discipline
       let count = 0;
       d.levels.forEach(l => l.modules.forEach(m => m.lessons.forEach(lesson => {
           if (completedLessons.has(lesson.id)) count++;
       })));
       return count >= 1; // Show if they started it effectively for demo, or change logic to count === total
    });
  }, [disciplines, completedLessons]);

  return (
    <div className="flex-1 overflow-y-auto bg-base-200 pb-20">
      <div className="p-4 md:p-6">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
            <h1 className="text-3xl font-bold text-base-content">Profile</h1>
            <button 
                onClick={onOpenSettings}
                className="p-2 bg-base-100 rounded-full border border-base-300 text-base-content hover:bg-base-300 transition-colors"
                aria-label="Settings"
            >
                <GearIcon className="h-6 w-6" />
            </button>
        </div>

        {/* User Card */}
        <div className="flex items-center p-4 bg-base-100 rounded-xl border border-base-300 shadow-sm mb-8">
            <div className="h-20 w-20 bg-brand-secondary rounded-full flex items-center justify-center text-3xl font-bold text-white mr-4 shadow-lg border-4 border-base-200">
                ST
            </div>
            <div>
                <h2 className="text-xl font-bold text-base-content">Student</h2>
                <p className="text-brand-gray text-sm">Engineering Enthusiast</p>
                <div className="mt-2 flex items-center text-xs text-green-500 font-semibold bg-green-900/10 px-2 py-1 rounded w-fit">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                    Active Learner
                </div>
            </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-8">
            <h3 className="text-lg font-bold text-base-content mb-4 flex items-center">
                <AcademicCapIcon className="h-5 w-5 mr-2 text-brand-secondary" />
                Achievements & Certificates
            </h3>
            
            {completedDisciplines.length > 0 ? (
                <div className="space-y-4">
                    {completedDisciplines.map(discipline => (
                        <div key={discipline.id} className="bg-base-100 p-4 rounded-xl border border-base-300 flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="h-12 w-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mr-4 text-brand-secondary">
                                    <discipline.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base-content text-sm">{discipline.name}</h4>
                                    <p className="text-xs text-brand-gray">In Progress / Completed</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => onViewCertificate(discipline)}
                                className="px-3 py-1.5 bg-base-200 hover:bg-base-300 text-base-content text-xs font-semibold rounded-lg border border-base-300 transition-colors"
                            >
                                View
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-base-100 p-8 rounded-xl border border-base-300 text-center">
                    <div className="h-16 w-16 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <AcademicCapIcon className="h-8 w-8" />
                    </div>
                    <p className="text-base-content font-medium">No certificates yet</p>
                    <p className="text-sm text-brand-gray mt-1">Complete courses to earn certificates.</p>
                </div>
            )}
        </div>

        {/* Stats Section (Mock) */}
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-base-100 p-4 rounded-xl border border-base-300">
                <p className="text-brand-gray text-xs uppercase font-bold tracking-wider">Lessons</p>
                <p className="text-2xl font-bold text-base-content mt-1">{completedLessons.size}</p>
            </div>
             <div className="bg-base-100 p-4 rounded-xl border border-base-300">
                <p className="text-brand-gray text-xs uppercase font-bold tracking-wider">Hours</p>
                <p className="text-2xl font-bold text-base-content mt-1">{(completedLessons.size * 0.5).toFixed(1)}</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileTab;
