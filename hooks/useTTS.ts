
import { useState, useEffect, useCallback, useRef } from 'react';

export const useTTS = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSupported(true);
    }
  }, []);

  const cancel = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!supported) return;

    cancel(); // Stop any current speech

    const utterance = new SpeechSynthesisUtterance(text);
    // Attempt to set a Somali voice if available, otherwise fallback is typically fine for tech terms
    // or system default. Most browsers don't have built-in Somali TTS, so it might read in English accent.
    // We try to set lang to 'so' but fallback is automatic.
    utterance.lang = 'so-SO'; 
    utterance.rate = 0.9; // Slightly slower for better comprehension

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [cancel, supported]);

  const pause = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return { speak, pause, resume, cancel, isPlaying, isPaused, supported };
};
