import { useState, useEffect, useCallback } from 'react';
import type { Discipline, DownloadStatus } from '../types';

const DOWNLOADED_IDS_KEY = 'sahan_downloaded_ids';
const DISCIPLINE_DATA_PREFIX = 'sahan_discipline_data_';

export const useDownloads = () => {
  const [downloadedIds, setDownloadedIds] = useState<Set<string>>(new Set());
  const [isDownloading, setIsDownloading] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const idsJSON = localStorage.getItem(DOWNLOADED_IDS_KEY);
      if (idsJSON) {
        setDownloadedIds(new Set(JSON.parse(idsJSON)));
      }
    } catch (error) {
      console.error("Failed to load downloaded IDs from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const addDownload = useCallback((discipline: Discipline) => {
    setIsDownloading(prev => ({ ...prev, [discipline.id]: true }));

    // Simulate network delay
    setTimeout(() => {
      try {
        // Store the full discipline data
        localStorage.setItem(`${DISCIPLINE_DATA_PREFIX}${discipline.id}`, JSON.stringify(discipline));

        // Update the set of IDs
        setDownloadedIds(prev => {
          const newSet = new Set(prev);
          newSet.add(discipline.id);
          localStorage.setItem(DOWNLOADED_IDS_KEY, JSON.stringify(Array.from(newSet)));
          return newSet;
        });

      } catch (error) {
        console.error("Failed to save discipline to localStorage", error);
        alert("Way guuldareysatay soo dejinta qaybta. Kaydku wuu buuxsami karaa.");
      } finally {
        setIsDownloading(prev => ({ ...prev, [discipline.id]: false }));
      }
    }, 1500); // 1.5 second delay
  }, []);

  const removeDownload = useCallback((disciplineId: string) => {
    try {
      // Remove the discipline data
      localStorage.removeItem(`${DISCIPLINE_DATA_PREFIX}${disciplineId}`);

      // Update the set of IDs
      setDownloadedIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(disciplineId);
        localStorage.setItem(DOWNLOADED_IDS_KEY, JSON.stringify(Array.from(newSet)));
        return newSet;
      });
    } catch (error) {
      console.error("Failed to remove discipline from localStorage", error);
    }
  }, []);

  const getDownloadStatus = useCallback((disciplineId: string): DownloadStatus => {
    if (isDownloading[disciplineId]) {
      return 'downloading';
    }
    if (downloadedIds.has(disciplineId)) {
      return 'downloaded';
    }
    return 'not-downloaded';
  }, [downloadedIds, isDownloading]);
  
  const getDownloadedDiscipline = useCallback((disciplineId: string): Discipline | null => {
    if (!downloadedIds.has(disciplineId)) return null;

    try {
        const disciplineJSON = localStorage.getItem(`${DISCIPLINE_DATA_PREFIX}${disciplineId}`);
        if(disciplineJSON) {
            return JSON.parse(disciplineJSON) as Discipline;
        }
        return null;
    } catch (error) {
        console.error("Failed to retrieve downloaded discipline", error);
        return null;
    }
  }, [downloadedIds]);

  return { 
    isLoaded,
    getDownloadStatus,
    addDownload,
    removeDownload,
    getDownloadedDiscipline,
  };
};