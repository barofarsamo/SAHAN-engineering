import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { SendIcon, SparklesIcon, UserCircleIcon, XIcon } from './Icons';
// FIX: Import ContentSection to use as a type annotation.
import type { ChatMessage, Lesson, ContentSection } from '../types';

interface AiTutorProps {
  isOpen: boolean;
  selectedLesson: Lesson | null;
  isMobile: boolean;
  onClose: () => void;
  initialPrompt: string | null;
  onPromptHandled: () => void;
}

const TutorContent: React.FC<Omit<AiTutorProps, 'isOpen' | 'isMobile' | 'onClose'>> = ({ selectedLesson, initialPrompt, onPromptHandled }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      if (process.env.API_KEY) {
        const baseInstruction = 'Waxaad tahay SAHAN, macallin AI ah oo khabiir ku ah barmaamijka waxbarashada ee SAHAN Engineering. Doorkaaga ugu weyn waa inaad ardayda ka caawiso manhajka gaarka ah ee ku jira barnaamijka. Marka uu arday su\'aal ku weydiiyo, jawaabtaada la xiriiri fikradaha lagu barayo qaybaha SAHAN Engineering. U sharax mowduucyada si cad, kooban, oo sax ah. Codkaagu ha noqdo mid dhiirigelin, aqoon, iyo xirfad leh. Si adag ugu ekaaw mowduucyada sayniska, tignoolajiyada, injineernimada, iyo xisaabta. Waa inaad ku hadashaa Soomaali.';
        
        let systemInstruction = baseInstruction;

        if (selectedLesson) {
            const lessonContext = `
---
MACNAHA CASHARKA HADDA:
Isticmaaluhu wuu hadda baranayaa casharka: "${selectedLesson.title}".

Ahmiyadaada koowaad WAA INAY ahaato casharkan. Dhammaan sharraxaadahaaga iyo jawaabahaaga ku salee faahfaahintan soo socota. Marka su'aal lagu weydiiyo, si toos ah u tixraac maaddadan si aad u bixiso caawimada ugu habboon.

NUXURKA CASHARKA:
${/* FIX: Add explicit type for 's' to resolve property access error. */ Object.values(selectedLesson.structuredContent).map((s: ContentSection) => `\n### ${s.title}\n${s.content}`).join('')}
${/* FIX: Add explicit type for 's' to resolve property access error. */ Object.values(selectedLesson.additionalContent).filter(Boolean).map((s: ContentSection) => `\n### ${s.title}\n${s.content}`).join('')}
---`;
            systemInstruction += lessonContext;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction,
          },
        });
        setChat(newChat);
      } else {
        setChat(null);
      }
    } catch (error) {
      console.error("Failed to initialize Gemini AI:", error);
      setChat(null);
    } finally {
        setMessages([]); // Always reset chat history when lesson or API key status changes
    }
  }, [selectedLesson]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (messageToSend?: string) => {
    const textToSend = messageToSend || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    
    if (!messageToSend) {
        setInput('');
    }

    if (!chat) {
      setMessages(prev => [...prev, { role: 'model', text: 'Cilad: Lama bilaabi karin Macallinka AI. Fadlan hubi in furahaaga API-ga si sax ah loo habeeyay.' }]);
      return;
    }

    setIsLoading(true);

    try {
      const result = await chat.sendMessageStream({ message: textToSend });
      let modelResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of result) {
        modelResponse += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: modelResponse };
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Gemini API error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Waan ka xumahay, cilad ayaa dhacday. Fadlan isku day mar kale.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialPrompt && !isLoading) {
        sendMessage(initialPrompt);
        onPromptHandled();
    }
  }, [initialPrompt, isLoading, onPromptHandled]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-sm text-gray-500 p-4">
            {selectedLesson 
              ? `I weydii wax kasta oo ku saabsan "${selectedLesson.title}"!`
              : `I weydii wax kasta oo ku saabsan injineernimada!`
            }
          </div>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role === 'model' && <SparklesIcon className="h-6 w-6 text-brand-secondary flex-shrink-0 mt-1" />}
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${msg.role === 'user' ? 'bg-brand-secondary text-white rounded-br-none' : 'bg-base-200 text-base-content rounded-bl-none'}`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
            {msg.role === 'user' && <UserCircleIcon className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />}
          </div>
        ))}
        {isLoading && messages[messages.length - 1]?.role !== 'model' && (
          <div className="flex items-start gap-3">
             <SparklesIcon className="h-6 w-6 text-brand-secondary flex-shrink-0 mt-1" />
             <div className="bg-base-200 rounded-2xl rounded-bl-none px-4 py-3">
                <div className="flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-1.5 w-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-1.5 w-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-base-300 bg-base-100">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Weydii su'aal..."
            className="w-full pr-12 pl-4 py-3 border border-base-300 rounded-full bg-base-200 focus:ring-2 focus:ring-brand-secondary focus:outline-none"
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-brand-secondary text-white disabled:bg-gray-300 hover:bg-brand-secondary/90 transition-colors"
          >
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
};

const AiTutor: React.FC<AiTutorProps> = ({ isOpen, selectedLesson, isMobile, onClose, initialPrompt, onPromptHandled }) => {
  const commonHeader = (
    <div className="p-4 border-b border-base-300 flex items-center justify-between">
      <h3 className="text-lg font-semibold flex items-center">
        <SparklesIcon className="h-5 w-5 mr-2 text-brand-secondary" />
        Weydii SAHAN (Macallin AI)
      </h3>
      {isMobile && (
        <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-800 -mr-2">
          <XIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div 
          className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={onClose}
          aria-hidden="true"
        />
        <aside 
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-base-100 flex flex-col transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          aria-label="Macallinka AI"
        >
          {commonHeader}
          <TutorContent selectedLesson={selectedLesson} initialPrompt={initialPrompt} onPromptHandled={onPromptHandled} />
        </aside>
      </>
    );
  }

  return (
    <aside className={`flex-shrink-0 bg-base-100 border-l border-base-300 flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-full md:w-96' : 'w-0'} overflow-hidden`}>
      {commonHeader}
      <TutorContent selectedLesson={selectedLesson} initialPrompt={initialPrompt} onPromptHandled={onPromptHandled} />
    </aside>
  );
};

export default AiTutor;