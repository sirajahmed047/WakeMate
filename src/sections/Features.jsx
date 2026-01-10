import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { MessageSquare, ShieldCheck, Zap, Sliders } from 'lucide-react';

const Feature = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="p-8 rounded-3xl bg-background-surface border border-white/5 hover:border-primary/20 hover:bg-background-surfaceLight transition-all group"
    >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform ring-1 ring-white/5 group-hover:ring-primary/20">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: MessageSquare,
            title: "Conversational AI",
            description: "Natural, context-aware conversations that actually wake up your brain."
        },
        {
            icon: ShieldCheck,
            title: "Alertness Verification",
            description: "The AI won't hang up until it verifies you're awake through intelligent questioning."
        },
        {
            icon: Sliders,
            title: "Custom Personalities",
            description: "Choose from a gentle friend, a stern drill sergeant, or a motivational coach to start your day."
        },
        {
            icon: Zap,
            title: "Instant Wake-Up",
            description: "The psychology of a phone call triggers immediate attention, unlike passive alarms you can easily snooze."
        }
    ];

    return (
        <Section id="features" pattern="dots" className="bg-background-surface/30">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built to Wake You Up</h2>
                <p className="text-lg text-text-muted">
                    Advanced AI app designed to help you fight chronic oversleeping permanently.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {features.map((f, i) => (
                    <Feature key={i} {...f} delay={i * 0.1} />
                ))}
            </div>
        </Section>
    );
};

export default Features;
