import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Bot, X, Sparkles } from 'lucide-react';
import { generateCareerAdvice } from '../services/geminiService';
import { Message } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hallo! Ich bin dein KI-Karriere-Coach. Suchst du Tipps für deine Bewerbung oder Infos zu einem Berufsbild?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateCareerAdvice(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-all z-50 flex items-center gap-2 animate-bounce-subtle"
        aria-label="Öffne KI-Assistent"
      >
        <Sparkles className="h-6 w-6" />
        <span className="font-semibold hidden sm:inline">KI-Coach fragen</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden h-[500px]">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-1 rounded-full">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Gastro-Karriere Coach</h3>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Powered by Gemini
            </span>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-amber-600 text-white rounded-br-none'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
           <div className="flex justify-start">
             <div className="bg-white text-slate-500 px-4 py-2 rounded-2xl rounded-bl-none text-sm border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="animate-pulse">●</span>
                <span className="animate-pulse delay-75">●</span>
                <span className="animate-pulse delay-150">●</span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white border-t border-slate-100">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Frage z.B. 'Was macht ein Sous-Chef?'"
            className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiAssistant;
