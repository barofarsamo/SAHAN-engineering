
import React, { useState, useMemo } from 'react';
import type { Discipline, DownloadStatus } from '../types';
import { 
  DownloadIcon, CheckCircleIcon, RocketIcon, GearIcon, ZapIcon, ChipIcon, 
  BuildingIcon, BriefcaseIcon, BellIcon, ArrowRightIcon, ChevronRightIcon,
  AcademicCapIcon, GlobeIcon, SearchIcon, FilterIcon, ArrowLeftIcon, BookOpenIcon
} from './Icons';

interface ExploreTabProps {
  disciplines: Discipline[];
  onSelectDiscipline: (discipline: Discipline) => void;
  getDownloadStatus: (disciplineId: string) => DownloadStatus;
  onAddDownload: (discipline: Discipline) => void;
  onRemoveDownload: (disciplineId: string) => void;
  onOpenNotifications: () => void;
  unreadNotifications: number;
}

// View Types
type ExploreView = 'HOME' | 'TOPICS' | 'DEGREES' | 'CERTIFICATES' | 'POPULAR';

// -- Mock Data --

// Categories
const categories = [
  { id: 'arts', name: 'Arts and Humanities', icon: BuildingIcon, count: 120 },
  { id: 'business', name: 'Business', icon: BriefcaseIcon, count: 85 },
  { id: 'cs', name: 'Computer Science', icon: ChipIcon, count: 200 },
  { id: 'eng', name: 'Engineering', icon: GearIcon, count: 150 },
  { id: 'health', name: 'Health', icon: ZapIcon, count: 90 },
  { id: 'data', name: 'Data Science', icon: GlobeIcon, count: 110 },
  { id: 'social', name: 'Social Sciences', icon: BookOpenIcon, count: 60 },
  { id: 'math', name: 'Math and Logic', icon: AcademicCapIcon, count: 75 },
];

// Degrees
const degrees = [
  { id: 1, title: 'Bachelor of Science in Computer Science', university: 'University of London', type: 'Bachelor', duration: '3-6 Years', image: 'https://picsum.photos/600/300?random=deg1', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/University_of_Oxford.svg/1200px-University_of_Oxford.svg.png' },
  { id: 2, title: 'Master of Engineering Management', university: 'University of Leeds', type: 'Master', duration: '2 Years', image: 'https://picsum.photos/600/300?random=deg2', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/University_of_Oxford.svg/1200px-University_of_Oxford.svg.png' },
  { id: 3, title: 'MSc in Data Science', university: 'Imperial College', type: 'Master', duration: '18 Months', image: 'https://picsum.photos/600/300?random=deg3', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/University_of_Oxford.svg/1200px-University_of_Oxford.svg.png' },
  { id: 4, title: 'Global MBA', university: 'Macquarie University', type: 'Master', duration: '1-2 Years', image: 'https://picsum.photos/600/300?random=deg4', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/University_of_Oxford.svg/1200px-University_of_Oxford.svg.png' },
];

// Certificates (Mixed with disciplines)
const certificates = [
  { id: 'cert-civil', name: 'Civil Engineering Professional Certificate', provider: 'SAHAN', rating: 4.8, reviews: '2.5k', image: 'https://picsum.photos/100/100?random=civil' },
  { id: 'cert-comp', name: 'Full Stack Web Development', provider: 'Meta', rating: 4.7, reviews: '15k', image: 'https://picsum.photos/100/100?random=comp' },
  { id: 'cert-data', name: 'Google Data Analytics', provider: 'Google', rating: 4.9, reviews: '120k', image: 'https://picsum.photos/100/100?random=data' },
  { id: 'cert-mech', name: 'CAD & Digital Manufacturing', provider: 'Autodesk', rating: 4.6, reviews: '8k', image: 'https://picsum.photos/100/100?random=mech' },
];

const ExploreTab: React.FC<ExploreTabProps> = ({
  disciplines,
  onSelectDiscipline,
  onOpenNotifications,
  unreadNotifications
}) => {
  const [currentView, setCurrentView] = useState<ExploreView>('HOME');
  const [searchQuery, setSearchQuery] = useState('');

  // -- Sub-Components --

  const Header = ({ title, showSearch = false }: { title: string, showSearch?: boolean }) => (
    <div className="bg-base-100 border-b border-base-300 sticky top-0 z-20">
      <div className="p-4 flex items-center">
        {currentView !== 'HOME' && (
          <button onClick={() => setCurrentView('HOME')} className="mr-3 p-1 rounded-full hover:bg-base-200">
            <ArrowLeftIcon className="h-6 w-6 text-base-content" />
          </button>
        )}
        <h1 className="text-xl font-bold text-base-content flex-1">{title}</h1>
        {currentView === 'HOME' && (
           <button 
                onClick={onOpenNotifications}
                className="relative p-2 bg-base-100 rounded-full text-base-content hover:bg-base-200 transition-colors"
            >
                <BellIcon className="h-6 w-6" />
                {unreadNotifications > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold text-white">
                        {unreadNotifications}
                    </span>
                )}
            </button>
        )}
      </div>
      {showSearch && (
         <div className="px-4 pb-4">
            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-10 pr-4 py-2 bg-base-200 rounded-lg border border-base-300 focus:outline-none focus:border-brand-secondary text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
         </div>
      )}
    </div>
  );

  const SectionHeader = ({ title, onViewAll }: { title: string, onViewAll: () => void }) => (
    <div className="flex justify-between items-end mb-4 px-4">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <button onClick={onViewAll} className="text-brand-secondary text-sm font-bold flex items-center hover:underline">
        See All <ChevronRightIcon className="h-4 w-4 ml-1" />
      </button>
    </div>
  );

  // -- Views --

  const renderHome = () => (
    <>
      <Header title="Explore" />
      <div className="py-6 space-y-8">
        
        {/* Topics Scroll */}
        <div>
          <SectionHeader title="Topics" onViewAll={() => setCurrentView('TOPICS')} />
          <div className="flex space-x-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button 
                key={cat.id} 
                className="flex items-center space-x-2 bg-base-100 border border-base-300 px-4 py-2.5 rounded-lg whitespace-nowrap min-w-max hover:bg-base-300 transition-colors"
                onClick={() => {
                   setSearchQuery(cat.name);
                   setCurrentView('TOPICS');
                }}
              >
                <cat.icon className="h-5 w-5 text-brand-gray" />
                <span className="text-white font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Courses Scroll */}
        <div>
          <SectionHeader title="Popular in Engineering" onViewAll={() => setCurrentView('POPULAR')} />
          <div className="flex space-x-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
             {disciplines.map(discipline => (
                <div key={discipline.id} className="min-w-[280px] w-[280px] bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300 flex flex-col h-full group cursor-pointer" onClick={() => onSelectDiscipline(discipline)}>
                   <div 
                      className="h-36 bg-cover bg-center relative group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(https://picsum.photos/400/200?random=${discipline.id})` }}
                   >
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute bottom-3 left-3 bg-white p-1.5 rounded-lg shadow-sm">
                        <discipline.icon className="h-5 w-5 text-black" />
                     </div>
                   </div>
                   <div className="p-4 flex flex-col flex-1 relative bg-base-100">
                      <h3 className="font-bold text-white text-lg mb-1 line-clamp-2">{discipline.name}</h3>
                      <p className="text-brand-gray text-xs mb-3">SAHAN Engineering</p>
                      <div className="mt-auto flex items-center text-xs text-brand-secondary font-semibold bg-brand-secondary/10 px-2 py-1 rounded w-fit">
                         Course • {discipline.levels.length} Levels
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Degrees Scroll */}
        <div>
           <SectionHeader title="Earn Your Degree" onViewAll={() => setCurrentView('DEGREES')} />
           <div className="flex space-x-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
             {degrees.map(deg => (
                <div key={deg.id} className="min-w-[300px] w-[300px] bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300 cursor-pointer hover:border-brand-secondary transition-colors" onClick={() => onSelectDiscipline(disciplines.find(d => d.id === 'computer-engineering') || disciplines[0])}>
                    <div className="h-40 bg-gray-700 relative">
                        <img src={deg.image} alt={deg.title} className="w-full h-full object-cover opacity-80" />
                        <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-black text-xs font-bold shadow-sm">
                            {deg.type}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                            <img src={deg.logo} className="h-8 w-auto bg-white p-1 rounded mb-2" alt="Logo"/>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-white text-lg mb-1 leading-tight">{deg.title}</h3>
                        <p className="text-brand-gray text-sm">{deg.university}</p>
                        <p className="text-xs text-gray-500 mt-2 flex items-center">
                            <GlobeIcon className="h-3 w-3 mr-1" />
                            100% Online • {deg.duration}
                        </p>
                    </div>
                </div>
             ))}
           </div>
        </div>

        {/* Certificates List */}
         <div>
           <SectionHeader title="Popular Certificates" onViewAll={() => setCurrentView('CERTIFICATES')} />
           <div className="px-4 space-y-4">
             {certificates.slice(0, 3).map(cert => (
               <div key={cert.id} className="flex bg-base-100 rounded-xl p-3 border border-base-300 items-center hover:bg-base-200 transition-colors cursor-pointer" onClick={() => onSelectDiscipline(disciplines.find(d => d.id === 'civil-engineering') || disciplines[0])}>
                  <div className="h-16 w-16 bg-gray-700 rounded-lg flex-shrink-0 mr-4 overflow-hidden shadow-sm">
                     <img src={cert.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-sm truncate">{cert.name}</h3>
                    <p className="text-xs text-brand-gray mt-1">{cert.provider}</p>
                    <div className="flex items-center mt-1 space-x-3">
                        <span className="text-brand-accent text-xs font-bold flex items-center">
                            ★ {cert.rating}
                        </span>
                        <span className="text-gray-500 text-xs">({cert.reviews} reviews)</span>
                        <span className="text-xs text-blue-400 bg-blue-400/10 px-1.5 rounded">Professional Certificate</span>
                    </div>
                  </div>
               </div>
             ))}
           </div>
         </div>
         
         <div className="h-8"></div>
      </div>
    </>
  );

  const renderTopics = () => (
    <>
        <Header title="Topics" showSearch />
        <div className="p-4 grid grid-cols-2 gap-4 pb-20">
            {categories.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).map(cat => (
                <button key={cat.id} className="bg-base-100 p-6 rounded-xl border border-base-300 flex flex-col items-center justify-center text-center hover:border-brand-secondary hover:bg-base-200 transition-all">
                    <div className="h-12 w-12 bg-base-200 rounded-full flex items-center justify-center mb-3 text-brand-secondary">
                        <cat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-base-content">{cat.name}</h3>
                    <p className="text-xs text-brand-gray mt-1">{cat.count} courses</p>
                </button>
            ))}
        </div>
    </>
  );

  const renderDegrees = () => (
    <>
        <Header title="Degrees" showSearch />
        <div className="flex items-center px-4 py-2 space-x-2 overflow-x-auto scrollbar-hide">
             <button className="flex items-center space-x-1 bg-base-100 border border-base-300 px-3 py-1.5 rounded-full text-xs font-bold text-base-content whitespace-nowrap">
                <FilterIcon className="h-3 w-3" />
                <span>Filter</span>
             </button>
             <button className="bg-brand-secondary text-white px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">All Degrees</button>
             <button className="bg-base-100 border border-base-300 text-base-content px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">Master's</button>
             <button className="bg-base-100 border border-base-300 text-base-content px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">Bachelor's</button>
        </div>
        <div className="p-4 space-y-4 pb-20">
            {degrees.filter(d => d.title.toLowerCase().includes(searchQuery.toLowerCase())).map(deg => (
                 <div key={deg.id} className="bg-base-100 rounded-xl overflow-hidden shadow-sm border border-base-300 flex flex-col md:flex-row cursor-pointer hover:border-brand-secondary transition-colors" onClick={() => onSelectDiscipline(disciplines.find(d => d.id === 'computer-engineering') || disciplines[0])}>
                    <div className="h-48 md:h-auto md:w-48 bg-gray-700 relative flex-shrink-0">
                        <img src={deg.image} alt={deg.title} className="w-full h-full object-cover opacity-90" />
                        <div className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 rounded text-black text-[10px] font-bold">
                            {deg.type}
                        </div>
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                        <div className="flex items-center mb-2">
                            <img src={deg.logo} alt="Logo" className="h-5 w-auto mr-2 bg-white rounded-sm p-0.5" />
                            <span className="text-xs text-brand-gray">{deg.university}</span>
                        </div>
                        <h3 className="font-bold text-white text-lg mb-2">{deg.title}</h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">Earn a world-class degree from the comfort of your home. 100% online learning designed for working professionals.</p>
                        <div className="flex items-center text-xs text-brand-secondary font-bold">
                            <span>Earn a Degree</span>
                            <ArrowRightIcon className="h-4 w-4 ml-1" />
                        </div>
                    </div>
                 </div>
            ))}
        </div>
    </>
  );

  const renderCertificates = () => (
      <>
        <Header title="Certificates" showSearch />
        <div className="p-4 space-y-4 pb-20">
             {certificates.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).map(cert => (
               <div key={cert.id} className="flex flex-col sm:flex-row bg-base-100 rounded-xl border border-base-300 overflow-hidden hover:bg-base-200 transition-colors cursor-pointer" onClick={() => onSelectDiscipline(disciplines.find(d => d.id === 'civil-engineering') || disciplines[0])}>
                  <div className="h-32 sm:h-auto sm:w-32 bg-gray-700 flex-shrink-0">
                     <img src={cert.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-bold text-white text-base">{cert.name}</h3>
                    <p className="text-sm text-brand-gray mt-1">{cert.provider}</p>
                    <div className="flex items-center mt-2 space-x-4 text-sm">
                        <span className="text-brand-accent font-bold">★ {cert.rating}</span>
                        <span className="text-gray-500">{cert.reviews} reviews</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2">Gain in-demand skills and earn a credential to kickstart your career.</p>
                  </div>
               </div>
             ))}
        </div>
      </>
  );

  const renderPopular = () => (
      <>
        <Header title="All Courses" showSearch />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 pb-20">
             {disciplines.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase())).map(discipline => (
                <div key={discipline.id} className="bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300 flex flex-col group cursor-pointer" onClick={() => onSelectDiscipline(discipline)}>
                   <div 
                      className="h-40 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(https://picsum.photos/400/200?random=${discipline.id})` }}
                   >
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute bottom-3 left-3 bg-white p-1.5 rounded-lg shadow-sm">
                        <discipline.icon className="h-5 w-5 text-black" />
                     </div>
                   </div>
                   <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-white text-lg mb-1">{discipline.name}</h3>
                      <p className="text-brand-gray text-xs mb-3">SAHAN Engineering</p>
                      <div className="mt-auto w-full">
                          <button className="w-full py-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white text-sm font-bold rounded-lg transition-colors">
                              View Course
                          </button>
                      </div>
                   </div>
                </div>
             ))}
        </div>
      </>
  );

  return (
    <div className="flex-1 overflow-y-auto bg-base-200 h-full animate-fade-in">
        {currentView === 'HOME' && renderHome()}
        {currentView === 'TOPICS' && renderTopics()}
        {currentView === 'DEGREES' && renderDegrees()}
        {currentView === 'CERTIFICATES' && renderCertificates()}
        {currentView === 'POPULAR' && renderPopular()}
    </div>
  );
};

export default ExploreTab;
