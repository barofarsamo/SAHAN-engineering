
import React from 'react';
import type { Discipline } from '../types';
import { CheckCircleIcon, GearIcon } from './Icons';

interface LearnTabProps {
  disciplines: Discipline[];
  getProgressForDiscipline: (disciplineId: string) => { completed: number; total: number };
  onSelectDiscipline: (discipline: Discipline) => void;
}

const LearnTab: React.FC<LearnTabProps> = ({ disciplines, getProgressForDiscipline, onSelectDiscipline }) => {
  // Filter for disciplines with progress > 0
  const activeDisciplines = disciplines.filter(d => {
    const p = getProgressForDiscipline(d.id);
    return p.completed > 0 || d.id === 'civil-engineering'; // Always show civil as active for demo
  });

  return (
    <div className="flex-1 overflow-y-auto bg-base-200 pb-20">
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-white">My Learning</h1>
            <GearIcon className="h-6 w-6 text-white" />
        </div>

        {/* Goals Card */}
        <div className="bg-base-100 rounded-xl p-4 mb-6 border border-base-300">
            <h2 className="text-white font-bold mb-4">Today's goals</h2>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                    <div className="bg-base-300 p-2 rounded-full">
                        <div className="h-4 w-4 bg-brand-gray rounded-full"></div>
                    </div>
                    <span className="text-white font-medium">Complete any 3 lessons</span>
                </div>
                <span className="text-brand-gray text-sm">2 / 3</span>
            </div>
            <div className="w-full bg-base-300 h-1.5 rounded-full mt-2">
                <div className="bg-brand-secondary h-1.5 rounded-full w-2/3"></div>
            </div>
        </div>

         {/* Weekly Activity */}
        <div className="bg-base-100 rounded-xl p-4 mb-8 border border-base-300">
            <h2 className="text-white font-bold mb-1">Weekly activity</h2>
            <p className="text-brand-gray text-xs mb-4">Great effort this week. Start a new streak next week by learning 3 days!</p>
            
            <div className="flex justify-between items-center">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, idx) => (
                    <div key={day} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1 text-xs font-bold
                            ${idx === 6 ? 'bg-brand-secondary text-white' : 'bg-transparent text-gray-500 border border-base-300'}`}>
                            {idx === 6 ? <CheckCircleIcon className="h-5 w-5"/> : day}
                        </div>
                    </div>
                ))}
                <span className="text-white font-bold text-sm ml-2">1 / 3</span>
            </div>
        </div>

        {/* Active Courses */}
        <h2 className="text-lg font-bold text-white mb-4">All Courses</h2>
        <div className="space-y-4">
            {activeDisciplines.map(discipline => {
                const progress = getProgressForDiscipline(discipline.id);
                const percentage = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;
                
                return (
                    <div 
                        key={discipline.id} 
                        className="bg-base-100 rounded-xl p-4 border border-base-300 cursor-pointer hover:bg-base-300/50 transition-colors"
                        onClick={() => onSelectDiscipline(discipline)}
                    >
                        <div className="flex items-start mb-3">
                            <div className="h-10 w-10 bg-brand-secondary/20 rounded-md flex items-center justify-center mr-3">
                                <discipline.icon className="h-6 w-6 text-brand-secondary" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">{discipline.name}</h3>
                                <p className="text-brand-gray text-xs mt-1">SAHAN Engineering</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-brand-gray mb-1">
                            <span>Course</span>
                            <span>{percentage}% Completed</span>
                        </div>
                        <div className="w-full bg-base-300 h-1 rounded-full">
                            <div className="bg-brand-secondary h-1 rounded-full" style={{ width: `${percentage}%` }}></div>
                        </div>
                    </div>
                );
            })}
             {activeDisciplines.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                    <p>No active courses. Go to Explore to enroll.</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default LearnTab;
