
import React from 'react';
import type { Discipline, SearchResult, DownloadStatus } from '../types';
import { DownloadIcon, CheckCircleIcon, RocketIcon, GearIcon, ZapIcon, ChipIcon, BuildingIcon, BriefcaseIcon, BellIcon } from './Icons';

interface ExploreTabProps {
  disciplines: Discipline[];
  onSelectDiscipline: (discipline: Discipline) => void;
  getDownloadStatus: (disciplineId: string) => DownloadStatus;
  onAddDownload: (discipline: Discipline) => void;
  onRemoveDownload: (disciplineId: string) => void;
  onOpenNotifications: () => void;
  unreadNotifications: number;
}

// Helper for category chips
const topics = [
  { id: 'arts', name: 'Arts and Humanities', icon: BuildingIcon },
  { id: 'business', name: 'Business', icon: BriefcaseIcon },
  { id: 'cs', name: 'Computer Science', icon: ChipIcon },
  { id: 'eng', name: 'Engineering', icon: GearIcon },
  { id: 'health', name: 'Health', icon: ZapIcon },
];

const ExploreTab: React.FC<ExploreTabProps> = ({
  disciplines,
  onSelectDiscipline,
  getDownloadStatus,
  onAddDownload,
  onRemoveDownload,
  onOpenNotifications,
  unreadNotifications
}) => {
  return (
    <div className="flex-1 overflow-y-auto bg-base-200 pb-20">
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white">Explore</h1>
            <button 
                onClick={onOpenNotifications}
                className="relative p-2 bg-base-100 rounded-full text-white hover:bg-base-300 transition-colors"
            >
                <BellIcon className="h-6 w-6" />
                {unreadNotifications > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold">
                        {unreadNotifications}
                    </span>
                )}
            </button>
        </div>

        {/* Topics Section */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold text-white">Topics</h2>
            <button className="text-brand-secondary text-sm font-semibold">See All</button>
          </div>
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {topics.map(topic => (
              <button key={topic.id} className="flex items-center space-x-2 bg-base-100 border border-base-300 px-4 py-2.5 rounded-lg whitespace-nowrap min-w-max">
                <topic.icon className="h-5 w-5 text-brand-gray" />
                <span className="text-white font-medium">{topic.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Section */}
        <div className="mb-8">
           <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold text-white">Popular in Engineering</h2>
            <button className="text-brand-secondary text-sm font-semibold">See All</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
             {disciplines.map(discipline => (
                <div key={discipline.id} className="min-w-[280px] w-[280px] bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300 flex flex-col h-full">
                   <div 
                      className="h-32 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(https://picsum.photos/400/200?random=${discipline.id})` }}
                   >
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute bottom-3 left-3 bg-white p-1 rounded-sm">
                        <discipline.icon className="h-6 w-6 text-black" />
                     </div>
                   </div>
                   <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-white text-lg mb-1 line-clamp-2">{discipline.name}</h3>
                      <p className="text-brand-gray text-xs mb-3">SAHAN Engineering</p>
                      <div className="mt-auto flex items-center text-xs text-brand-secondary font-semibold">
                         Course • {discipline.levels.length} Levels
                      </div>
                      <button 
                         onClick={() => onSelectDiscipline(discipline)}
                         className="mt-3 w-full py-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white text-sm font-bold rounded-lg transition-colors"
                      >
                        Enroll Now
                      </button>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Degrees Section */}
        <div className="mb-8">
           <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold text-white">Earn Your Degree</h2>
            <button className="text-brand-secondary text-sm font-semibold">See All</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
             {/* Mock Degree Cards */}
             {[1, 2].map(i => (
                <div key={i} className="min-w-[300px] w-[300px] bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300">
                    <div className="h-40 bg-gray-700 relative">
                        <img src={`https://picsum.photos/600/300?random=degree${i}`} alt="Degree" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/University_of_Oxford.svg/1200px-University_of_Oxford.svg.png" className="h-8 w-auto bg-white p-1 rounded mb-2" alt="Logo"/>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-white text-lg mb-1">Bachelor of Science in Engineering</h3>
                        <p className="text-brand-gray text-sm">University of London</p>
                        <p className="text-xs text-gray-500 mt-2">100% Online</p>
                    </div>
                </div>
             ))}
          </div>
        </div>

        {/* Featured Certificates */}
         <div className="mb-8">
           <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold text-white">Most Popular Certificates</h2>
            <button className="text-brand-secondary text-sm font-semibold">See All</button>
          </div>
           <div className="space-y-4">
             {disciplines.slice(0, 3).map(discipline => (
               <div key={`cert-${discipline.id}`} className="flex bg-base-100 rounded-lg p-3 border border-base-300 items-center">
                  <div className="h-16 w-16 bg-gray-700 rounded-md flex-shrink-0 mr-4 overflow-hidden">
                     <img src={`https://picsum.photos/100/100?random=${discipline.id}`} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{discipline.name} Professional Certificate</h3>
                    <p className="text-xs text-brand-gray mt-1">SAHAN Engineering</p>
                    <div className="flex items-center mt-1">
                        <span className="text-brand-accent text-xs">★ 4.8</span>
                        <span className="text-gray-500 text-xs ml-1">(2.5k reviews)</span>
                    </div>
                  </div>
               </div>
             ))}
           </div>
         </div>

      </div>
    </div>
  );
};

export default ExploreTab;
