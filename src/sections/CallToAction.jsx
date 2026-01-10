import React from 'react';
import Button from '../components/Button';
import Section from '../components/Section';
import WaitlistModal from '../components/WaitlistModal';
import { Mail } from 'lucide-react';
import { useState } from 'react';

const CallToAction = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    return (
        <Section id="cta" className="py-20">
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-b from-primary to-accent p-12 md:p-24 text-center">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/20 rounded-full blur-[80px]"></div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Ready to wake up different?
                    </h2>
                    <p className="text-xl text-white/90 font-medium">
                        Join thousands of early risers who have transformed their mornings with WakeMate.
                    </p>

                    <div className="pt-4">
                        <Button
                            variant="white"
                            className="h-16 px-10 text-lg rounded-full shadow-2xl hover:scale-105"
                            onClick={() => setIsWaitlistOpen(true)}
                        >
                            <Mail className="mr-3 h-6 w-6" />
                            Join the Waitlist
                        </Button>
                    </div>
                </div>
            </div>
            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </Section>
    );
};

export default CallToAction;
