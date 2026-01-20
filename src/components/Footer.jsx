import React from 'react';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="bg-background-surface border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-2 mb-6 group">
                            {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg group-hover:rotate-12 transition-transform">W</div> */}
                            <span className="text-2xl font-bold text-white">WakeMate</span>
                        </a>
                        <p className="text-text-muted max-w-sm leading-relaxed">
                            The only alarm clock that calls you to ensure you're awake. Experience the future of waking up.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#how-it-works" onClick={() => onNavigate('home')} className="text-text-secondary hover:text-primary transition-colors">How it Works</a></li>
                            <li><a href="#features" onClick={() => onNavigate('home')} className="text-text-secondary hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><button onClick={() => onNavigate('privacy')} className="text-text-secondary hover:text-primary transition-colors text-left">Privacy Policy</button></li>
                            <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
                    <p>&copy; {new Date().getFullYear()} WakeMate Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
