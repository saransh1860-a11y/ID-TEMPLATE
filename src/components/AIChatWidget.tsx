import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Bot, MessageCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Welcome to Aurum Studio's digital concierge. How can I assist with your design journey today?" }
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

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are an elite interior design AI concierge for Aurum Studio. Your tone is sophisticated, professional, helpful, and luxury-focused. You should answer questions about interior design styles, space planning, and the process of working with an high-end agency. Keep responses concise and elegant. Refer to Aurum Studio's expertise in sensory luxury.",
        }
      });

      const aiResponse = response.text || "I apologize, I'm experiencing a temporary disconnect from our design database. How else can I help?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-40 w-14 h-14 bg-luxury-dark border border-luxury-gold text-luxury-gold rounded-full shadow-2xl flex items-center justify-center overflow-hidden group"
      >
        <div className="absolute inset-0 bg-luxury-gold scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
        <Sparkles className="relative z-10 group-hover:text-luxury-dark transition-colors duration-500" size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-28 right-8 z-[100] w-[350px] md:w-[400px] h-[550px] glass overflow-hidden flex flex-col shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border-white/10"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-luxury-gold/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center text-luxury-dark">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm">Aurum Concierge</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">AI Expert Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    m.role === 'user' 
                      ? "bg-luxury-gold text-luxury-dark rounded-tr-none font-medium" 
                      : "bg-white/5 border border-white/10 rounded-tl-none text-white/80"
                  )}>
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                  <span className="text-[10px] text-white/20 uppercase mt-2">{m.role === 'user' ? 'You' : 'Assistant'}</span>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/5 bg-black/40">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our design philosophy..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-6 pr-14 outline-none focus:border-luxury-gold transition-colors text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-luxury-gold text-luxury-dark rounded-full hover:bg-white transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-center text-white/20 mt-4 uppercase tracking-widest font-medium">Powered by Gemini AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
