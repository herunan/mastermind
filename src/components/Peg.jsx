import React from 'react';

const Peg = ({ color, size = 'md', empty = false }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    };

    const baseClasses = `rounded-full border-2 border-white/10 shadow-inner transition-all duration-300 ${sizeClasses[size]}`;

    if (empty) {
        return <div className={`${baseClasses} bg-white/5 border-dashed border-white/20`} />;
    }

    return (
        <div
            className={baseClasses}
            style={{
                backgroundColor: color,
                boxShadow: `inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.3)`
            }}
        />
    );
};

export default Peg;
