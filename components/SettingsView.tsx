
import React from 'react';
import { XIcon, TrashIcon, CheckCircleIcon, InformationCircleIcon } from './Icons';

interface SettingsViewProps {
  onClose: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onResetProgress: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ onClose, isDarkMode, toggleTheme, onResetProgress }) => {
  return (
    <div className="fixed inset-0 z-50 bg-base-200 flex flex-col animate-slide-up">
      <div className="bg-base-100 border-b border-base-300 p-4 flex items-center justify-between shadow-sm">
        <h2 className="text-lg font-bold text-base-content">Settings</h2>
        <button onClick={onClose} className="p-2 bg-base-200 rounded-full hover:bg-base-300 text-base-content">
          <XIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        
        {/* Appearance Section */}
        <section className="bg-base-100 rounded-xl border border-base-300 overflow-hidden">
          <div className="p-4 border-b border-base-300">
            <h3 className="font-bold text-base-content">Appearance</h3>
          </div>
          <div className="p-4">
             <div className="flex items-center justify-between">
                <div>
                   <p className="text-sm font-medium text-base-content">Dark Mode</p>
                   <p className="text-xs text-brand-gray">Use dark theme for low light</p>
                </div>
                <button 
                  onClick={toggleTheme}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isDarkMode ? 'bg-brand-secondary' : 'bg-gray-400'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : ''}`}></div>
                </button>
             </div>
          </div>
        </section>

        {/* Data Section */}
        <section className="bg-base-100 rounded-xl border border-base-300 overflow-hidden">
           <div className="p-4 border-b border-base-300">
            <h3 className="font-bold text-base-content">Data & Storage</h3>
          </div>
           <div className="p-4">
              <button 
                onClick={onResetProgress}
                className="w-full flex items-center justify-center p-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors font-semibold text-sm"
              >
                 <TrashIcon className="h-4 w-4 mr-2" />
                 Reset Learning Progress
              </button>
              <p className="text-xs text-brand-gray mt-2 text-center">This will delete all your course history and certificates.</p>
           </div>
        </section>

        {/* About Section */}
        <section className="bg-base-100 rounded-xl border border-base-300 overflow-hidden">
             <div className="p-4 border-b border-base-300">
                <h3 className="font-bold text-base-content">About SAHAN</h3>
             </div>
             <div className="p-4 space-y-3">
                 <div className="flex justify-between text-sm">
                    <span className="text-brand-gray">Version</span>
                    <span className="text-base-content font-mono">2.0.1</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-brand-gray">Developer</span>
                    <span className="text-base-content">SAHAN Tech</span>
                 </div>
             </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsView;
