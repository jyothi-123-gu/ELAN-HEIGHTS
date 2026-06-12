import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-gray-950/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-4xl bg-white border border-brand-border shadow-[0_20px_50px_rgba(183,110,121,0.18)] flex flex-col md:flex-row pointer-events-auto max-h-[90vh] overflow-hidden"
            >
              {/* Left Side: Contact Info */}
              <div className="w-full md:w-5/12 bg-gray-950 p-8 text-white flex flex-col relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rose/10 -mr-20 -mt-20 blur-3xl rounded-full mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-bronze/10 -ml-20 -mb-20 blur-3xl rounded-full mix-blend-screen pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div>
                    <h2 className="font-serif italic text-3xl font-light mb-2">Contact the Atelier</h2>
                    <p className="text-gray-400 font-sans text-[11px] uppercase tracking-widest leading-relaxed mb-10">
                      Reach our elite concierge team for bespoke inquiries, styling advice, and order assistance.
                    </p>
                  </div>

                  <div className="space-y-6 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-2 border border-white/10">
                        <MapPin className="w-4 h-4 text-brand-rose" />
                      </div>
                      <div>
                        <h4 className="font-sans font-medium text-xs uppercase tracking-widest text-brand-offwhite mb-1">Flagship Boutique</h4>
                        <p className="font-serif italic text-gray-400 text-sm leading-relaxed">
                          14 Via Monte Napoleone<br />
                          Moda District, Milan 20121<br />
                          Italy
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-2 border border-white/10">
                        <Mail className="w-4 h-4 text-brand-rose" />
                      </div>
                      <div>
                        <h4 className="font-sans font-medium text-xs uppercase tracking-widest text-brand-offwhite mb-1">Direct Inquiries</h4>
                        <p className="font-serif italic text-gray-400 text-sm">
                          concierge@elanheights.com<br />
                          press@elanheights.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-2 border border-white/10">
                        <Phone className="w-4 h-4 text-brand-rose" />
                      </div>
                      <div>
                        <h4 className="font-sans font-medium text-xs uppercase tracking-widest text-brand-offwhite mb-1">VIP Line</h4>
                        <p className="font-serif italic text-gray-400 text-sm">
                          +39 02 1234 5678<br />
                          <span className="text-[10px] uppercase font-sans tracking-widest text-[#7a665a] mt-1 block">Mon-Sat, 9AM-8PM CET</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                     <span className="font-mono text-[9px] uppercase tracking-widest text-[#7a665a] font-semibold">Élan Heights Global</span>
                     <Clock className="w-4 h-4 text-[#7a665a]" />
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-7/12 bg-white flex flex-col relative">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-brand-border">
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-gray-950">Send a Message</h3>
                  <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                    >
                      <div className="w-16 h-16 bg-brand-clay rounded-full flex items-center justify-center mt-4">
                         <CheckCircle className="w-8 h-8 text-brand-rose" />
                      </div>
                      <h4 className="font-serif italic text-2xl text-gray-900">Message Received</h4>
                      <p className="font-sans text-xs text-gray-500 uppercase tracking-widest max-w-sm leading-relaxed">
                        Our concierge team will review your inquiry and respond with personalized guidance shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5 border-b border-brand-border focus-within:border-brand-rose transition-colors py-2">
                          <label className="text-[9px] font-sans uppercase tracking-widest text-gray-400 font-semibold block">Full Name</label>
                          <input
                            type="text"
                            required
                            className="w-full bg-transparent text-sm text-gray-950 placeholder:font-serif placeholder:italic placeholder:text-gray-300 focus:outline-none"
                            placeholder="e.g. Eleanor Vance"
                          />
                        </div>
                        <div className="space-y-1.5 border-b border-brand-border focus-within:border-brand-rose transition-colors py-2">
                          <label className="text-[9px] font-sans uppercase tracking-widest text-gray-400 font-semibold block">Email Address</label>
                          <input
                            type="email"
                            required
                            className="w-full bg-transparent text-sm text-gray-950 placeholder:font-serif placeholder:italic placeholder:text-gray-300 focus:outline-none"
                            placeholder="e.g. eleanor@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5 border-b border-brand-border focus-within:border-brand-rose transition-colors py-2">
                        <label className="text-[9px] font-sans uppercase tracking-widest text-gray-400 font-semibold block">Inquiry Type</label>
                        <select
                          required
                          className="w-full bg-transparent text-sm text-gray-950 focus:outline-none pb-1 appearance-none cursor-pointer font-serif italic"
                        >
                          <option value="bespoke">Bespoke Ordering & Sizing</option>
                          <option value="support">Existing Order Support</option>
                          <option value="press">Press & Media</option>
                          <option value="other">Other Inquiries</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 border-b border-brand-border focus-within:border-brand-rose transition-colors py-2">
                        <label className="text-[9px] font-sans uppercase tracking-widest text-gray-400 font-semibold block">Your Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full bg-transparent text-sm text-gray-950 placeholder:font-serif placeholder:italic placeholder:text-gray-300 focus:outline-none resize-none pt-1"
                          placeholder="How may our concierge assist you?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-950 hover:bg-gray-800 text-white font-sans text-[10px] uppercase tracking-[0.2em] border border-transparent hover:border-brand-rose py-4 flex items-center justify-center gap-2 transition-all mt-8 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-3.5 h-3.5 border-t-2 border-white rounded-full" />
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send to Concierge <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
