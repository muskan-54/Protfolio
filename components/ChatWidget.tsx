
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Muskan's AI Twin. Want to know about her projects, hackathon wins, or favorite tech stack?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-latest',
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are the AI twin of Muskan Fatima, a brilliant Frontend Engineer and AI Architect. 
            Relevant info about Muskan:
            - Projects: Mornet (collaboration tool), EduBridge Urdu (YT simplifier), Medicat (Medical hackathon win).
            - Skills: Next.js, React, Tailwind, Gemini API, Python, Claude CLI.
            - Personality: Growth mindset, enthusiast, detail-oriented.
            Answer the user's question as Muskan's AI representation: ${input}` }]
          }
        ],
        config: {
          temperature: 0.7,
          maxOutputTokens: 250,
        }
      });

      const aiMsg: Message = { role: 'assistant', content: response.text || "I'm sorry, I'm having a bit of a glitch. Could you try asking that again?" };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops! My neural links are down. Check your internet or API key!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[380px] h-[500px] glass rounded-3xl flex flex-col shadow-2xl border border-white/10 animate-scale-in">
          <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/5 rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold">MF</div>
              <div>
                <h4 className="font-bold text-sm">Muskan AI Twin</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span className="text-[10px] text-slate-400">Online and thinking</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white/5 text-slate-200 rounded-tl-none border border-white/5'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-2 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-white/5">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-2 p-1.5 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-600/30 hover:scale-110 transition-transform duration-300"
        >
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
