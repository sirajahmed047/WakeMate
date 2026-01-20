import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import WaitlistModal from './WaitlistModal';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-2' : 'bg-transparent py-4'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2 group">
                            {/*<img src={logo} alt="WakeMate Logo" className="w-8 h-8 object-contain group-hover:scale-105 transition-transform" />*/}
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:text-white transition-colors">
                                WakeMate
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#how-it-works" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">How it Works</a>
                            <a href="#features" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">Features</a>
                            <Button variant="primary" className="py-2 px-5 text-sm" onClick={() => setIsWaitlistOpen(true)}>Join Waitlist</Button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-background-surface/95 backdrop-blur-xl border-b border-border p-4 absolute w-full animate-in slide-in-from-top-10 fade-in duration-200">
                        <nav className="flex flex-col space-y-4">
                            <a href="#how-it-works" className="text-lg font-medium text-text-secondary hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
                            <a href="#features" className="text-lg font-medium text-text-secondary hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                            <Button variant="primary" className="w-full justify-center" onClick={() => { setIsMobileMenuOpen(false); setIsWaitlistOpen(true); }}>Join Waitlist</Button>
                        </nav>
                    </div>
                )}
            </header>
            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </>
    );
};

export default Header;
