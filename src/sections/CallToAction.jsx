import React from 'react';
import Button from '../components/Button';
import Section from '../components/Section';

const CallToAction = () => {
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
                        <Button variant="white" className="h-16 px-10 text-lg rounded-full shadow-2xl hover:scale-105">
                            <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.498 12.378c-.015-2.835 2.316-4.197 2.42-4.25-1.32-1.927-3.37-2.19-4.103-2.22-1.74-.176-3.395 1.025-4.28 1.025-.883 0-2.254-1.002-3.708-1.002-1.905 0-3.66 1.107-4.636 2.812-1.977 3.427-.506 8.497 1.416 11.28.943 1.365 2.067 2.898 3.543 2.845 1.417-.056 1.954-.915 3.667-.915 1.706 0 2.19.915 3.68.887 1.52-.03 2.483-1.378 3.414-2.75 1.07-1.558 1.51-3.07 1.518-3.146-.032-.015-2.924-1.123-2.932-4.466zM12.986 4.387c.783-.95 1.31-2.268 1.166-3.585-1.13.047-2.497.755-3.31 1.706-.728.84-1.363 2.19-1.192 3.473 1.258.096 2.544-.643 3.336-1.594z" />
                            </svg>
                            Download on App Store
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CallToAction;
