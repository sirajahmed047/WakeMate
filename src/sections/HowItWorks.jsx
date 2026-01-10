import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { Clock, PhoneCall, BrainCircuit } from 'lucide-react';

const Step = ({ number, title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-background-surface border border-white/5 hover:border-primary/20 transition-all duration-300 group hover:bg-background-surfaceLight"
    >
        <div className="absolute -top-6 w-12 h-12 rounded-full bg-background-surfaceLight border border-border flex items-center justify-center text-xl font-bold text-primary shadow-lg group-hover:scale-110 group-hover:border-primary transition-all duration-300 z-10">
            {number}
        </div>
        <div className="mt-6 mb-6 p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>

        {/* Connector Line (Hidden on Mobile/Last Step) */}
        {number !== "3" && (
            <div className="hidden md:block absolute top-[50%] -right-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-border to-transparent -z-10 transform -translate-y-1/2 opacity-30"></div>
        )}
    </motion.div>
);

const HowItWorks = () => {
    return (
        <Section id="how-it-works" className="bg-background relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="text-center max-w-3xl mx-auto mb-24">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
                <p className="text-lg text-text-muted">
                    WakeMate uses active engagement to ensure you're actually awake. No more snoozing through buzzing notifications.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                <Step
                    number="1"
                    icon={Clock}
                    title="Set Your Alarm"
                    description="Choose your wake-up time just like a normal alarm. Customize your AI assistant's personality and topics."
                    delay={0.1}
                />
                <Step
                    number="2"
                    icon={PhoneCall}
                    title="Receive a Call"
                    description="Instead of a sound, you get a phone call. It cuts through sleep inertia better than any ringtone."
                    delay={0.2}
                />
                <Step
                    number="3"
                    icon={BrainCircuit}
                    title="Wake Up For Real"
                    description="Chat with the AI. It asks questions that require thought, ensuring your brain is fully engaged before hanging up."
                    delay={0.3}
                />
            </div>
        </Section>
    );
};

export default HowItWorks;
