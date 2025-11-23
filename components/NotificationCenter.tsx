
import React from 'react';
import { XIcon, CheckCircleIcon, InformationCircleIcon, TrashIcon, BellIcon } from './Icons';
import type { Notification } from '../hooks/useNotifications';

interface NotificationCenterProps {
  notifications: Notification[];
  isOpen: boolean;
  onClose: () => void;
  onMarkRead: (id: string) => void;
  onClearAll: () => void;
  onMarkAllRead: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  isOpen,
  onClose,
  onMarkRead,
  onClearAll,
  onMarkAllRead
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
       {/* Backdrop */}
       <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
       
       {/* Drawer */}
       <div className="relative w-full max-w-md bg-base-100 h-full shadow-2xl flex flex-col animate-slide-in-right">
          <div className="p-4 border-b border-base-300 flex items-center justify-between">
              <h2 className="text-xl font-bold text-base-content flex items-center">
                  <BellIcon className="h-6 w-6 mr-2 text-brand-secondary" />
                  Notifications
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-base-200 rounded-full text-gray-400">
                  <XIcon className="h-6 w-6" />
              </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {notifications.length === 0 ? (
                  <div className="text-center py-10 text-gray-500">
                      <p>No new notifications</p>
                  </div>
              ) : (
                  notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`p-4 rounded-xl border border-base-300 relative transition-colors ${notification.isRead ? 'bg-base-100' : 'bg-base-200'}`}
                        onClick={() => onMarkRead(notification.id)}
                      >
                          <div className="flex items-start gap-3">
                              <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${notification.isRead ? 'bg-transparent' : 'bg-brand-secondary'}`}></div>
                              <div className="flex-1">
                                  <h3 className={`text-sm font-bold ${notification.isRead ? 'text-gray-500' : 'text-base-content'}`}>{notification.title}</h3>
                                  <p className="text-xs text-brand-gray mt-1 line-clamp-3">{notification.message}</p>
                                  <p className="text-[10px] text-gray-600 mt-2">
                                      {notification.timestamp.toLocaleDateString()} • {notification.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                  </p>
                              </div>
                              {notification.type === 'success' ? (
                                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                              ) : (
                                  <InformationCircleIcon className="h-5 w-5 text-brand-secondary" />
                              )}
                          </div>
                      </div>
                  ))
              )}
          </div>

          <div className="p-4 border-t border-base-300 flex justify-between">
              <button 
                onClick={onMarkAllRead}
                className="text-xs font-semibold text-brand-secondary hover:underline"
              >
                  Mark all read
              </button>
              <button 
                onClick={onClearAll}
                className="text-xs font-semibold text-red-500 hover:underline flex items-center"
              >
                  <TrashIcon className="h-3 w-3 mr-1" />
                  Clear all
              </button>
          </div>
       </div>
    </div>
  );
};

export default NotificationCenter;
