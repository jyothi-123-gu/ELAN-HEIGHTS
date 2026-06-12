import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Sparkles, User, HelpCircle, Loader } from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

const PRESET_QUESTIONS = [
  { text: "Suggest a stiletto for a wedding 👠", q: "I am looking for a beautiful designer stiletto or pump for a prestigious wedding event. What do you suggest?" },
  { text: "Comfortable kids school shoes? 🏫", q: "Do you have durable and comfortable leather shoes for young junior school days?" },
  { text: "What runs are in the luxury range? ✨", q: "Which of your masterpieces are in the Premium-Couture and Luxury range?" },
  { text: "Tell me about VIP coffer wrapping 🎁", q: "I'd love to know more about your VIP Velvet Coffer packaging preference upgrade." },
];

export default function AtelierChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Bienvenue, darling! I am Aurelia, your personal Élan Heights digital concierge. May I assist you in exploring our sublime footwear universe today? 👠✨"
    }
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Alert highlight for unopened messages
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setHasNewMessages(true);
    }
  }, [messages, isOpen]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setHasNewMessages(false);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Append user message
    const updatedMessages = [...messages, { role: "user" as const, text: textToSend }];
    setMessages(updatedMessages);
    setInputMsg("");
    setIsLoading(true);

    try {
      // Map simple message roles to standard Gemini api specifications
      const apiHistory = messages.map(msg => ({
        role: msg.role,
        text: msg.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          history: apiHistory
        })
      });

      if (!res.ok) {
        throw new Error("Chat service request failed.");
      }

      const data = await res.json();
      setMessages(prev => [...prev, { role: "model" as const, text: data.text || "I apologize, but my high-fashion data streams are experiencing a momentary lag. How else can I elevate your journey today?" }]);
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages(prev => [...prev, { role: "model" as const, text: "My apologies, my darling, but I had trouble reaching the Atelier servers. Let's try again in a brief second!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans text-left">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[360px] h-[520px] bg-white border border-brand-border shadow-[0_20px_50px_rgba(183,110,121,0.18)] flex flex-col overflow-hidden rounded-none mb-4"
          >
            {/* Header portion */}
            <div className="bg-neutral-950 p-4 border-b border-brand-border flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-none border border-brand-rose bg-brand-clay flex items-center justify-center text-brand-rose font-serif italic text-base font-bold shadow-sm">
                  A
                </div>
                <div>
                  <h4 className="font-serif italic text-xs tracking-wide font-medium flex items-center gap-1.5">
                    Aurelia Consolidated AI
                    <Sparkles className="w-3.5 h-3.5 text-brand-rose animate-pulse" />
                  </h4>
                  <p className="text-[9px] uppercase tracking-widest text-[#7a665a] font-semibold">Atelier Salon Concierge</p>
                </div>
              </div>
              <button
                onClick={handleOpenToggle}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 transition-all rounded-none cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body messages list */}
            <div className="flex-1 overflow-y-auto p-4 bg-brand-champagne/40 space-y-4">
              {messages.map((msg, i) => {
                const isModel = msg.role === "model";
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 ${isModel ? "justify-start" : "justify-end"}`}
                  >
                    {isModel && (
                      <div className="w-6.5 h-6.5 flex-shrink-0 bg-neutral-950 text-brand-rose border border-brand-border flex items-center justify-center text-xs font-serif font-bold italic">
                        A
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] p-3 text-xs leading-relaxed font-light ${
                        isModel
                          ? "bg-white border border-brand-border text-gray-950"
                          : "bg-neutral-900 text-white font-medium"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                    {!isModel && (
                      <div className="w-6.5 h-6.5 flex-shrink-0 bg-brand-rose text-white flex items-center justify-center text-xs font-semibold">
                        <User className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="w-6.5 h-6.5 flex-shrink-0 bg-neutral-950 text-brand-rose border border-brand-border flex items-center justify-center text-xs font-serif font-bold italic">
                    A
                  </div>
                  <div className="p-3 bg-white border border-brand-border text-xs text-gray-400 flex items-center gap-1.5">
                    <Loader className="w-3 h-3 animate-spin text-brand-rose" />
                    <span>Aurelia is consulting her journals...</span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Preset Option prompts */}
            {messages.length === 1 && (
              <div className="p-3 bg-white border-t border-brand-border text-left">
                <span className="block text-[8px] uppercase tracking-[0.14em] text-gray-400 font-bold mb-2 flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-brand-rose" />
                  Suggested Concierge Enquiries:
                </span>
                <div className="grid grid-cols-1 gap-1">
                  {PRESET_QUESTIONS.map((opt, idx) => (
                    <button
                      key={idx}
                      id={`preset-prompt-${idx}`}
                      onClick={() => handleSendMessage(opt.q)}
                      className="text-left text-[10px] text-gray-700 bg-brand-clay/30 hover:bg-brand-clay/70 hover:text-brand-rose border border-brand-border/40 hover:border-brand-rose p-2 transition-colors cursor-pointer"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input fields */}
            <div className="p-3 border-t border-brand-border bg-white flex items-center gap-2">
              <input
                id="chatbot-input-field"
                type="text"
                placeholder="Ask our elite styling concierge..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(inputMsg);
                  }
                }}
                disabled={isLoading}
                className="flex-1 bg-brand-blush/40 text-xs px-3 py-2.5 rounded-none border border-brand-border focus:border-brand-rose focus:outline-none placeholder:text-gray-400 disabled:opacity-50"
              />
              <button
                id="chatbot-send-trigger"
                onClick={() => handleSendMessage(inputMsg)}
                disabled={isLoading || !inputMsg.trim()}
                className="bg-neutral-950 text-white p-2.5 hover:bg-neutral-800 disabled:opacity-30 transition-all cursor-pointer flex-shrink-0"
                title="Send Enquiry"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher action trigger */}
      <motion.button
        id="chatbot-launcher-toggle"
        onClick={handleOpenToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="w-13 h-13 bg-neutral-950 text-[#FDFBF7] flex items-center justify-center border border-brand-border relative cursor-pointer shadow-2xl transition-all hover:bg-neutral-900 group"
        title="Consult Aurelia Concierge"
      >
        <MessageSquare className="w-5.5 h-5.5 group-hover:rotate-6 transition-transform text-brand-rose" />
        
        {/* Dynamic sparkling pulse background */}
        <span className="absolute inset-0 border border-brand-rose/40 animate-ping opacity-30 pointer-events-none" />

        {/* New message notify indicator */}
        {hasNewMessages && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-rose border border-white text-[9px] text-white flex items-center justify-center font-bold animate-pulse">
            !
          </span>
        )}
      </motion.button>
    </div>
  );
}
