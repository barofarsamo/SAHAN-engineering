
import React from 'react';
import { CompassIcon, BriefcaseIcon, BookOpenIcon, SearchIcon, UserCircleIcon } from './Icons';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'explore', label: 'Explore', icon: CompassIcon },
    { id: 'career', label: 'Career', icon: BriefcaseIcon },
    { id: 'learn', label: 'Learn', icon: BookOpenIcon },
    { id: 'search', label: 'Search', icon: SearchIcon },
    { id: 'profile', label: 'Profile', icon: UserCircleIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base-100 border-t border-base-300 z-50 pb-safe">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center py-2 px-1 w-full"
            >
              <div className={`mb-1 transition-colors ${isActive ? 'text-brand-secondary' : 'text-gray-400'}`}>
                <tab.icon className="h-6 w-6" />
              </div>
              <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-brand-secondary' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
