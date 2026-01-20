import React from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneOff, Mic } from 'lucide-react';
import logo from '../assets/logo.png';

const PhoneMockup = ({ screen = 'call' }) => {
    return (
        <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 select-none">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 w-full flex justify-center z-20 pt-2">
                <div className="h-[24px] w-[90px] bg-black rounded-full flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/30"></div>
                </div>
            </div>

            {/* Screen Content */}
            <div className="flex-1 bg-black relative w-full h-full overflow-hidden flex flex-col">

                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-3 text-[10px] text-white font-medium z-10">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                        <div className="w-4 h-2.5 border border-white/30 rounded-[1px] relative">
                            <div className="absolute inset-y-0 left-0 bg-white w-3"></div>
                        </div>
                    </div>
                </div>

                {/* Incoming Call Screen */}
                {screen === 'call' && (
                    <div className="flex-1 flex flex-col items-center justify-between pt-12 pb-12 px-6">
                        <div className="flex flex-col items-center space-y-2 mt-8">
                            <div className="w-24 h-24 rounded-full mb-4 ring-4 ring-white/10 shadow-[0_0_30px_rgba(255,107,53,0.3)] overflow-hidden">
                                <img src={logo} alt="WakeMate Logo" className="w-full h-full object-cover drop-shadow-lg" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white">WakeMate AI</h3>
                            <p className="text-gray-400 text-sm">Wake Mate Audio...</p>
                        </div>

                        <div className="w-full space-y-6">
                            <div className="flex justify-between w-full px-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5">
                                        <div className="flex flex-col items-center">
                                            <span className="text-[10px] text-white/90 font-medium">Remind Me</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5">
                                        <div className="flex flex-col items-center">
                                            <span className="text-[10px] text-white/90 font-medium">Message</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center w-full px-4 mt-8">
                                <div className="flex flex-col items-center gap-2 text-white/80">
                                    <button className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors">
                                        <PhoneOff className="w-8 h-8 text-white fill-current" />
                                    </button>
                                    <span className="text-xs font-medium">Decline</span>
                                </div>

                                <div className="flex flex-col items-center gap-2 text-white/80">
                                    <button
                                        onClick={() => {
                                            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                                            window.dispatchEvent(new CustomEvent('play-demo-audio'));
                                        }}
                                        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-pulse cursor-pointer"
                                    >
                                        <Phone className="w-8 h-8 text-white fill-current" />
                                    </button>
                                    <span className="text-xs font-medium">Accept</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Active Conversation Screen */}
                {screen === 'active' && (
                    <div className="flex-1 flex flex-col items-center justify-center relative">
                        {/* Visualizer */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        </div>

                        <div className="z-10 flex flex-col items-center text-center space-y-6">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                                <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
                                    <Mic className="w-10 h-10 text-white relative z-10" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white">WakeMate AI</h3>
                                <p className="text-primary-light text-sm font-medium mt-1">00:42</p>
                            </div>
                            <div className="px-8">
                                <p className="text-white/80 text-lg font-light leading-relaxed">
                                    "Good morning! What's the first thing you want to achieve today?"
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-12 w-full flex justify-center">
                            <button className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                                <PhoneOff className="w-8 h-8 text-white fill-current" />
                            </button>
                        </div>
                    </div>
                )}

            </div>

            {/* Home Line */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full z-20"></div>
        </div>
    );
};

export default PhoneMockup;
