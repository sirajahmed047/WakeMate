import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    className,
    icon: Icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variants = {
        primary: "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5",
        secondary: "bg-background-surface border border-border hover:border-primary/50 text-text-primary hover:bg-background-surfaceLight",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
        ghost: "text-text-secondary hover:text-white hover:bg-white/5",
        white: "bg-white text-primary hover:bg-gray-100 shadow-lg",
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5 mr-2" />}
            {children}
        </button>
    );
};

export default Button;
