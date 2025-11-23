
import { useState, useEffect, useCallback } from 'react';

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  type: 'info' | 'success' | 'reminder';
}

const NOTIFICATIONS_KEY = 'sahan_notifications';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Load notifications from local storage
    try {
        const stored = localStorage.getItem(NOTIFICATIONS_KEY);
        if (stored) {
            const parsed = JSON.parse(stored).map((n: any) => ({
                ...n,
                timestamp: new Date(n.timestamp)
            }));
            setNotifications(parsed);
        } else {
            // Add welcome notification if empty
            const welcome: Notification = {
                id: 'welcome-1',
                title: 'Ku soo dhawaada SAHAN',
                message: 'Ku bilow safarkaaga injineernimada maanta. Dooro koorso si aad u bilowdo.',
                timestamp: new Date(),
                isRead: false,
                type: 'info'
            };
            setNotifications([welcome]);
            localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify([welcome]));
        }
    } catch (e) {
        console.error("Error loading notifications", e);
    }
  }, []);

  useEffect(() => {
      setUnreadCount(notifications.filter(n => !n.isRead).length);
  }, [notifications]);

  const addNotification = useCallback((title: string, message: string, type: 'info' | 'success' | 'reminder' = 'info') => {
      const newNotification: Notification = {
          id: Date.now().toString(),
          title,
          message,
          timestamp: new Date(),
          isRead: false,
          type
      };

      setNotifications(prev => {
          const updated = [newNotification, ...prev];
          localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated));
          return updated;
      });
  }, []);

  const markAsRead = useCallback((id: string) => {
      setNotifications(prev => {
          const updated = prev.map(n => n.id === id ? { ...n, isRead: true } : n);
          localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated));
          return updated;
      });
  }, []);
  
  const markAllAsRead = useCallback(() => {
      setNotifications(prev => {
          const updated = prev.map(n => ({ ...n, isRead: true }));
          localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated));
          return updated;
      });
  }, []);

  const clearNotifications = useCallback(() => {
      setNotifications([]);
      localStorage.removeItem(NOTIFICATIONS_KEY);
  }, []);

  // Simulate a study reminder
  useEffect(() => {
    const checkTime = () => {
        // Simple mock: if it's 10am or 6pm, send reminder (just logic demo)
        // In reality, checking against last study time is better.
        // For this demo, we'll just check if they haven't studied in a "day" (mocked by random check)
    };
    // Implement interval check if needed
  }, []);

  return {
      notifications,
      unreadCount,
      addNotification,
      markAsRead,
      markAllAsRead,
      clearNotifications
  };
};
