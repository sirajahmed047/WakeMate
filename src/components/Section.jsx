import React from 'react';
import { twMerge } from 'tailwind-merge';

const Section = ({
    children,
    id,
    className,
    pattern = 'none',
    containerClassName,
    ...props
}) => {
    return (
        <section
            id={id}
            className={twMerge("relative py-20 md:py-32 px-4 md:px-6 overflow-hidden", className)}
            {...props}
        >
            {/* Optional Background Pattern */}
            {pattern === 'dots' && (
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            )}
            {pattern === 'grid' && (
                <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            )}

            <div className={twMerge("relative z-10 container mx-auto", containerClassName)}>
                {children}
            </div>
        </section>
    );
};

export default Section;
