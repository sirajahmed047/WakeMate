import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import Button from './Button';

const WaitlistModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Waitlist submission:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            // Reset form after closing
            setTimeout(() => setIsSubmitted(false), 500);
            setFormData({ name: '', email: '', phone: '' });
        }, 2000);
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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-background-surface border border-white/10 p-6 md:p-8 rounded-[2rem] w-full max-w-md shadow-2xl relative pointer-events-auto">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {isSubmitted ? (
                                <div className="text-center py-8 space-y-4">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Check className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
                                    <p className="text-text-muted">Thanks for joining. We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
                                        <p className="text-text-muted text-sm">Be the first to know when WakeMate launches.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background-surfaceLight border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all placeholder:text-text-muted/50"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background-surfaceLight border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all placeholder:text-text-muted/50"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">Phone Number <span className="text-xs text-text-muted font-normal">(Optional)</span></label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background-surfaceLight border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all placeholder:text-text-muted/50"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full py-3 mt-2"
                                        >
                                            Join Waitlist
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WaitlistModal;
