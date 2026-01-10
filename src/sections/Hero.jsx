import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import PhoneMockup from '../components/PhoneMockup';
import Section from '../components/Section';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <Section id="hero" className="min-h-screen flex items-center pt-32 pb-20 overflow-visible" pattern="grid">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-background-surface border border-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        <span className="text-sm font-medium text-text-secondary">AI-Powered Wake Up Calls</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        The Alarm You <br />
                        <span className="text-primary">Can't Ignore</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg">
                        WakeMate replaces your alarm with an AI that calls you.
                        Talk to wake up, answer questions, and start your day fully alert.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button className="w-full sm:w-auto text-lg h-14 group">
                            <svg className="mr-2 -ml-1 h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.498 12.378c-.015-2.835 2.316-4.197 2.42-4.25-1.32-1.927-3.37-2.19-4.103-2.22-1.74-.176-3.395 1.025-4.28 1.025-.883 0-2.254-1.002-3.708-1.002-1.905 0-3.66 1.107-4.636 2.812-1.977 3.427-.506 8.497 1.416 11.28.943 1.365 2.067 2.898 3.543 2.845 1.417-.056 1.954-.915 3.667-.915 1.706 0 2.19.915 3.68.887 1.52-.03 2.483-1.378 3.414-2.75 1.07-1.558 1.51-3.07 1.518-3.146-.032-.015-2.924-1.123-2.932-4.466zM12.986 4.387c.783-.95 1.31-2.268 1.166-3.585-1.13.047-2.497.755-3.31 1.706-.728.84-1.363 2.19-1.192 3.473 1.258.096 2.544-.643 3.336-1.594z" />
                            </svg>
                            Download on App Store
                        </Button>
                        <Button variant="secondary" className="w-full sm:w-auto text-lg h-14 group" onClick={() => document.getElementById('how-it-works').scrollIntoView()}>
                            How it Works <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-4 text-sm text-text-muted">
                        <div className="flex -space-x-3">
                            {/* Avatars would ideally be images, using colored circles for now as placeholders */}
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-zinc-700 flex items-center justify-center text-xs text-white">JD</div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-zinc-600 flex items-center justify-center text-xs text-white">AS</div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-zinc-500 flex items-center justify-center text-xs text-white">MK</div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-xs text-primary font-bold">+2k</div>
                        </div>
                        <p>Join thousands waking up better</p>
                    </div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative z-10 transform lg:rotate-[-5deg] lg:translate-y-8 hover:rotate-0 transition-transform duration-500">
                        <PhoneMockup screen="call" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] -z-10 translate-x-20"></div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
