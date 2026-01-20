import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import PhoneMockup from '../components/PhoneMockup';
import Section from '../components/Section';
import WaitlistModal from '../components/WaitlistModal';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

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

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        The Alarm You <br />
                        <span className="text-primary">won't Ignore</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg">
                        Traditional alarms are too easy to ignore. WakeMate replaces them with an interactive
                        AI phone call that cuts through sleep inertia instantly. Chat, solve, and wake up
                        fully conscious- <b><i>The ultimate cure for heavy sleepers.</i></b>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button
                            className="w-full sm:w-auto text-lg h-14 group"
                            onClick={() => setIsWaitlistOpen(true)}
                        >
                            <Mail className="mr-2 -ml-1 h-5 w-5 group-hover:scale-110 transition-transform" />
                            Join the waitlist
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

            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </Section>
    );
};

export default Hero;
