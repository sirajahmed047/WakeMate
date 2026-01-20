import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import Section from '../components/Section';

const AudioExperience = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);

    // Toggle Play/Pause
    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Listen for custom event from Hero section
    useEffect(() => {
        const handlePlayEvent = () => {
            if (audioRef.current) {
                audioRef.current.play();
                setIsPlaying(true);
            }
        };

        window.addEventListener('play-demo-audio', handlePlayEvent);
        return () => window.removeEventListener('play-demo-audio', handlePlayEvent);
    }, []);

    // Handle audio ending
    const handleEnded = () => {
        setIsPlaying(false);
    };

    return (
        <Section id="experience" className="py-20" containerClassName="max-w-5xl">
            {/* Audio Element */}
            {/* Audio Element */}
            <audio
                ref={audioRef}
                src="/audio/Demo.mp3"
                onEnded={handleEnded}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[2.5rem] p-1 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />

                <div className="relative rounded-[2.3rem] bg-background-surface overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-8 md:p-14 gap-10 md:gap-16">

                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Don't just read about it. <br />
                                <span className="text-primary">Listen to the magic.</span>
                            </h2>
                            <p className="text-text-muted text-lg leading-relaxed">
                                Hear how WakeMate uses natural, encouraging conversation to wake you up feeling refreshed and motivated.
                            </p>

                            {/* Voice Selection & Play Button */}
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">


                                <button
                                    onClick={togglePlay}
                                    className="group inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                                >
                                    {isPlaying ? (
                                        <>
                                            <Pause className="w-5 h-5 fill-current" />
                                            <span>Pause</span>
                                        </>
                                    ) : (
                                        <>
                                            <Play className="w-4 h-5 fill-current ml-1" />
                                            <span>Play</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Visualizer */}
                        <div
                            className="flex items-center justify-center gap-2 h-40 w-full md:w-auto md:min-w-[320px] bg-black/20 rounded-3xl p-6 border border-white/5 cursor-pointer backdrop-blur-sm hover:border-white/10 transition-colors"
                            onClick={togglePlay}
                        >
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-4 rounded-full bg-gradient-to-t from-primary via-primary-light to-accent shadow-[0_0_15px_rgba(255,107,53,0.5)]"
                                    animate={{
                                        height: isPlaying ? [
                                            `${20 + Math.random() * 20}%`,
                                            `${50 + Math.random() * 50}%`,
                                            `${20 + Math.random() * 20}%`
                                        ] : '20%',
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut",
                                        delay: isPlaying ? i * 0.1 : 0,
                                    }}
                                    style={{ height: '20%', minHeight: '10px' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

export default AudioExperience;
